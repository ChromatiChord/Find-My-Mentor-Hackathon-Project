from logging import makeLogRecord
from flask_restx import Resource, abort, marshal_with
from website_package.models import StudModel, MentModel, signin_post_args, mentor_database_parse, student_database_parse


class MentSignIn(Resource):

    #Get request to log a student or mentor into the site
    @marshal_with(mentor_database_parse)
    def post(self):
        args = signin_post_args.parse_args()
        try: 
            result = MentModel.query.get(args['email'])
            if result:
                if (result.password == args['password']):
                    #return auth token with user_id and user_type
                    return { "mentor_id" : result.user_id, "user_type" : 'Mentor'}, 200 
                else:
                    abort(404, message='Incorrect password') 
            else:
                abort(409, message= "Invalid Email address")
        except:
            abort(409, message = "Invalid Email address")

class StudSignIn(Resource):

    @marshal_with(student_database_parse)
    def post(self):
        args = signin_post_args.parse_args()
        result = StudModel.query.get(args['email'])
        if result:
            if (result.password == args['password']):
                #return auth token with user_id and user_type
                return { "user_type" : 'Student'}, 200 
            else:
                abort(404, message='Incorrect password')
        else:
            abort(409, message="Invalid Email address")        