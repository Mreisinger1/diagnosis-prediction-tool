# import dependencies
import pandas as pd
from flask import Flask, request, render_template
from pickle import load
import numpy as np

# instantiate the flask app and disable page caching
app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

# read in the symptom categories csv
symptom_categories_df = pd.read_csv("Resources/symptom_categories.csv")
categories = ["general_symptoms", "behavioral", "aches_pains", "diagnosed", "visual", "growth", "excretion", "degeneration"]
fancy_categories = ["General Symptoms", "Behavioral", "Aches & Pains", "Diagnosed", "Visual", "Growth", "Excretion", "Degeneration"]

# load the scaler
scaler = load(open("Classification Models/scaler.pkl", "rb"))

# load the model
model = load(open("Classification Models/randomforest.pkl", "rb"))

# parse and store the symptoms into their categories
category_data = []
for i in range(len(categories)):
    my_list = symptom_categories_df.loc[symptom_categories_df.category == categories[i], "symptom"].values.tolist()
    pretty_list = symptom_categories_df.loc[symptom_categories_df.category == categories[i], "pretty_symptom"].values.tolist()
    category_data.append({
        "id": categories[i],
        "category": fancy_categories[i],
        "symptoms": my_list,
        "pretty_symptoms": pretty_list,
        "symptom_indices": [i for i in range(len(pretty_list))]
    })

# run the prediction
@app.route("/predict", methods=["POST"])
def predict():
    
    # retrieve list of checked symptoms
    checked_features = request.form.getlist("symptom_input")
    
    # assemble list of all symptoms with checked values as their integer severity
    features = []
    for i, row in symptom_categories_df.iterrows():
        if row["symptom"] in checked_features:
            features.append(int(row["weight"]))
        else:
            features.append(0)
    
    # convert integer list into scikit-learn friendly list
    final_features = [np.array(features)]
    
    # scale the final features
    scaled_data = scaler.transform(final_features)
    
    # get the list of predictions
    predictions = model.predict_proba(scaled_data)
    prediction = model.predict(scaled_data)
    
    output_df = pd.DataFrame({
        "condition": model.classes_.tolist(),
        "probability": predictions[0].tolist()
    })
    
    output_df = output_df.sort_values('probability', ascending = False)
    print(f"Prediction: {prediction}")
    print(output_df)
    
    return render_template("diagnose_diseases_from_symptoms.html", categorical_data = category_data)

# go to landing page
@app.route("/")
def Landing_Page():
    return render_template("landing_page.html")

# go to diagnosis of diseases from symptoms
@app.route("/diagnose_diseases_from_symptoms/")
def Diagnose_Diseases_From_Symptoms():
    return render_template("diagnose_diseases_from_symptoms.html", categorical_data = category_data)

# go to model development for disease predictor
@app.route("/model_disease_predictor/")
def Model_Disease_Predictor():
    return render_template("model_disease_predictor.html")

# go to about the developers
@app.route("/about_developers/")
def About_Developers():
    return render_template("about_developers.html")

# go to about the data
@app.route("/about_data/")
def About_Data():
    return render_template("about_data.html")

# go to about the accreditations
@app.route("/about_accreditations/")
def About_Accreditations():
    return render_template("about_accreditations.html")

# run the flask app
if __name__ == "__main__":
    app.run(debug=True)