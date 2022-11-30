# import dependencies
import pandas as pd
from flask import Flask, render_template

# instantiate the flask app and disable page caching
app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

# read in the symptom categories csv
symptom_categories_df = pd.read_csv("Resources/symptom_categories.csv")
categories = ["general_symptoms", "behavioral", "aches_pains", "diagnosed", "visual", "growth", "excretion", "degeneration"]
fancy_categories = ["General Symptoms", "Behavioral", "Aches & Pains", "Diagnosed", "Visual", "Growth", "Excretion", "Degeneration"]

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