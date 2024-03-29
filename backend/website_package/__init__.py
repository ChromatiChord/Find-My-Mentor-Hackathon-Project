from flask import Flask
from flask_restx import Api
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_ngrok import run_with_ngrok

######## FLASK SET-UP STUFF, IF YOU'RE INTERESTED IN WHAT IT ALL DOES GIMME A SHOUT ##########
app = Flask(__name__)
run_with_ngrok(app)
api = Api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database/database.db'
db = SQLAlchemy(app)

BACKEND_URL = "http://127.0.0.1:5000"
FRONTEND_URL = "http://127.0.0.1:5500"

CORS(app, origins=FRONTEND_URL, allow_headers=[
    "Content-Type", "Authorization", "Access-Control-Allow-Credentials"],
    supports_credentials=True)
###########################################################################################


from website_package import models
from website_package.routes import sms_route, student, auth, mentor

# This is where Routes are instantiated
api.add_resource(sms_route.Sms, '/sms')
api.add_resource(student.stu_sign_up, '/stu_sign_up')
api.add_resource(mentor.mentor_sign_up, '/mentor_sign_up')
api.add_resource(auth.MentSignIn, '/men_sign_in')
api.add_resource(auth.StudSignIn, '/stu_sign_in')

# This generates a database if one doesn't currently exist
db.create_all()