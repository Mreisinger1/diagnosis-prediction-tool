# Diagnosis Prediction Tool

## Link to Heroku app where the project is hosted.

http://not-web-md.herokuapp.com/

### Produced by
* Akhil Bandi
* Scott Neubauer
* Kim Price
* Marti Reisinger

# Overview
This code base includes the files for an website for a user to indicate symptoms and give a prediction of which of the 41 conditions contained in our dataset they have along with a definition of the condition and recommended treatments.

## Data Sets

* Disease Symptom Prediction: Dataset of symptoms and severity with accompanying diagnosis for 41 conditions.
    * Link: https://www.kaggle.com/datasets/itachi9604/disease-symptom-description-dataset
    * There are 4 files:
        * Dataset.csv:  File that will be used for the model and contains around 5k rows with the disease and up to 17 symptoms per row.  Total number of possible symptoms is 131.
        * symptom_Description.csv: File containing the diseases and their definition/description
        * symptom_precaution.csv:  File containing precautions to be taken for each disease
        * Symptom-severity.csv: File containing the weight/severity value of each symptom

## Data Files
The 4 data files were cleaned up and combined to output 2 csv files.

## Steps to Diagnose the Symptom(s)

* Click the not-web-md link on the top to go to the website.
* Click the Diagnosis dropdown ans select "Disease From Symptoms" or select "Diagnosis Engine" on the Home Page to nagivate to Diagnosis Page.
* Select the Symptom(s) from the "Symptom Selection" section and click Diagnose button on the top to see the "Diasese" associated with the symptom(s).
* Expand the "Precautions and Possible Treatments" Section under Results to see tratetments for the Disease.
* Expand the "Other Possiblilities" Section under Results to see what are the other possible Diseases related to Symptom(s).
* Click "Reset" and Repeat the above Steps to Diagnose other Symptoms(s)

## Model for predicting diagnosis - Random Forest

The random forest classification model is a collection of decision trees that are created using a randomly selected subset of the features and then averaged together to create the model.  Because it workes with a subset of the features at a time it is faster to train that the decision tree model.

In our random forest classification, the first round of testing after scaling the dataset and training the model resulted in 100% accuracy with both the training and testing data. After noting that all of the other models we tried (KNN, Decision Tree, Naive Bayes, SVM) were giving the same results, we modified the values for the max depth (maximum number of levels/branches we would allow the model to go to) and the number of estimators (trees). This analysis allowed us to evaluate if our model was being overfit; if our data was not lending itself to classification; or give us confidence that our model was really 100% accurate.

<table>
    <tr> 
        <th>Max Depth</th>
        <th>Estimators</th>
        <th>Training Accuracy</th>
        <th>Testing Accuracy</th>
    </tr>
    <tr> 
        <td>5</td>
        <td>500</td>
        <td>100%</td>
        <td>100%</td>
    </tr>
    <tr> 
        <td>5</td>
        <td>400</td>
        <td>100%</td>
        <td>100%</td>
    </tr>
    <tr> 
        <td>5</th>
        <td>300</td>
        <td>100%</td>
        <td>100%</td>
    </tr>
    <tr> 
        <td>5</th>
        <td>200</td>
        <td>99.73%</td>
        <td>99.84%</td>
    </tr>
    <tr> 
        <td>4</td>
        <td>300</td>
        <td>99.76%</td>
        <td>99.76%</td>
    </tr>
    <tr> 
        <td>3</td>
        <td>100</td>
        <td>95.99%</td>
        <td>96.42%</td>
    </tr>
    <tr> 
        <td>2</td>
        <td>200</td>
        <td>96.18%</td>
        <td>96.34%</td>
    </tr>
</table>
As shown in the table, we were able to see that with a lower number of branches and trees in the forest; we saw a lower accuracy rate.  Additionally, the testing and training accuracy remained close in all cases.  We interpret this as proving that our data was highly suited to training a classification model for the 41 specific diseases and 131 symptoms it contained.
<br><br>
This gave us the confidence in our data and the Random Forest Classification model to move foward and select the Random Forest Classsifier (Max Depth = 5, Estimators = 300) for our predictions.
<br><br>

#### Our Random Forest Classification Model - One Tree
![alt text](/Classification%20Models/RF/RandomForest_Visualization2.png)



