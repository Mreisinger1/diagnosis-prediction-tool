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
@app.route("/")
def IndexRoute():
    ''' Runs when the browser loads the index route (i.e., the "home page"). 
        Note that the html file must be located in a folder called templates. '''

    webpage = render_template("index.html")
    return webpage








if __name__ == "__main__":
    app.run(debug=True)