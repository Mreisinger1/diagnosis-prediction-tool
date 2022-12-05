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

## Data Access Layer
A Flask server is used to access the data and serve it to the website.  There are X routes used to gather data for the various sites/visualizations on the site.

## Model for predicting diagnosis
There were 4 different supervised learning models created in an effort to identify the best option for our predictive classification.

### 1.  KNN

### 2.  Naive Bayes

### 3.  SVM

### 4.  Random Forest
Random Forest ended up being the chosen model for our prediction.

![alt text](/Classification%20Models/RF/RandomForest_Visualization2.png)

## Interface Layer
The interface was created in html, and javascript is used to provide the interactive components of our predictor.  A style sheet was used to apply custom styles to the dashboard features.


