#Import Dependencies
import numpy as np

import pandas as pd
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from flask import render_template
from sqlalchemy import create_engine

from flask import Flask, jsonify

# Import any remaining functions
import json

#Database Setup

protocol = 'postgresql'
username = 'postgres'
password = 'bootcamp'
host = 'localhost'
port = 5432
database_name = 'diagnosis_db'
rds_connection_string = f'{protocol}://{username}:{password}@{host}:{port}/{database_name}'
engine = create_engine(rds_connection_string)

Base = automap_base()

Base.prepare(engine, reflect=True)

# database tables
symptoms = Base.classes.symptoms
diseases = Base.classes.diseases

app = Flask(__name__)
# This statement is required for Flask to do its job. 
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0 # Effectively disables page caching


#  Flask Routes-define the various application routes.

# go to landing page
@app.route("/")
def Landing_Page():
    return render_template("landing_page.html")

# go to diagnosis of diseases from symptoms
@app.route("/diagnose_diseases_from_symptoms/")
def Diagnose_Diseases_From_Symptoms():
    return render_template("diagnose_diseases_from_symptoms.html")

# go to diagnosis of condition risk
@app.route("/diagnose_condition_risk/")
def Diagnose_Condition_Risk():
    return render_template("diagnose_condition_risk.html")

# go to model development for disease predictor
@app.route("/model_disease_predictor/")
def Model_Disease_Predictor():
    return render_template("model_disease_predictor.html")

# go to model development for stroke
@app.route("/model_stroke/")
def Model_Stroke():
    return render_template("model_stroke.html")

# go to model development for hepatitis-c
@app.route("/model_hepatitis_c/")
def Model_Hepatitis_C():
    return render_template("model_hepatitis_c.html")

# go to model development for cirrhosis
@app.route("/model_cirrhosis/")
def Model_Cirrhosis():
    return render_template("model_cirrhosis.html")

# go to model development for heart failure
@app.route("/model_heart_failure/")
def Model_Heart_Failure():
    return render_template("model_heart_failure.html")

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

@app.route("/disease/")
def disease():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all diseases"""
    # Query all diseases
    results = session.query(disease.disease).all()

    session.close()

    # Convert list of tuples into normal list
    all_disease= list(np.ravel(results))

    return jsonify(all_disease)

# diagnosis samples
@app.route("/diagnosis_samples/")
def diagnosis_samples():
    return render_template("diagnosis_samples.html")

if __name__ == "__main__":
    app.run(debug=True)