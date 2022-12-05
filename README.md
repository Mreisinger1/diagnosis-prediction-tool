# Diagnosis Prediction Tool

### Produced by:
* Akhil Bandi
* Scott Neubauer
* Kim Price
* Marti Reisinger

# Overview
This code base includes the files for an website for a user to indicate symptoms and give a prediction of which of the 41 conditions contained in our dataset they have along with a definition of the condition and recommended treatments.

## Data Sets:

* Disease Symptom Prediction: Dataset of symptoms and severity with accompanying diagnosis for 41 conditions.
    * Link: https://www.kaggle.com/datasets/itachi9604/disease-symptom-description-dataset
    * There are 4 files:
        * Dataset.csv:  File that will be used for the model and contains around 5k rows with the disease and up to 17 symptoms per row.  Total number of possible symptoms is 131.
        * symptom_Description.csv: File containing the diseases and their definition/description
        * symptom_precaution.csv:  File containing precautions to be taken for each disease
        * Symptom-severity.csv: File containing the weight/severity value of each symptom

## Data Files
The 4 data files were cleaned up and combined to output 2 csv files.


### Schema for database:

![alt text](/Resources/DB_files/DB_schema.png)


## Instructions to recreate the PostgreSQL database housing the disease and diagnosis sample data

 1. Clone the Repo git@github.com:Mreisinger1/diagnosis-prediction-tool.git
 1. Create a `config.py` file in the **Resources** directory to contain your PostgreSQL/PGAdmin information. You can use the template : `Resources/config_template.py` as a guide.
 1. Add the information below to your `config.py`:
	1. myusername = `<your username goes here>`
	1. mypassword = `<your password goes here>`
	1. myport_number = `<your port number goes here>`
 1. Confirm you have pgAdmin PostgreSQL installed on your computer
 1. Run ``jupyter notebook`` and open ``ETL/Diagnosis_ETL.ipynb`` - run this in an environment that has `pandas`, `sqlalchemy`, `sqlalchemy_utils`, and `python 3.8`
 1. Run the notebook.
 1. Use the test queries in ``Resources/test_files/diagnosis_db_test.sql`` to validate you successfully loaded the data.

## Data Access Layer
A Flask server is used to access the data and serve it to the website.  There are X routes used to gather data for the various sites/visualizations on the site.

## Model for predicting diagnosis

## Interface Layer
The interface was created in html, and javascript is used to dynamically draw the visualizations and provide the interactive components of our predictor.  A style sheet was used to apply custom styles to the dashboard features.


