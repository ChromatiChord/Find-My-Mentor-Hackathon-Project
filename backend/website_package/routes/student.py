from flask_restx import Resource, abort, fields, marshal_with
from website_package import db
from website_package.models import StudModel, stud_post_args, student_database_parse
import random
class stu_sign_up(Resource):

    #Post request to add new student to datbase
    @marshal_with(student_database_parse)
    def post(self):
        args = stud_post_args.parse_args()
        email = args['email']
        result = StudModel.query.get(email)
        if result:
            abort(409, message="Student is already a member")
        else:
            user_id = random.randint(10000000,99999990)
            student = StudModel(user_id = user_id, first_name = args['first_name'], last_name = args['last_name'],
            email = args['email'], phone = args['phone'], password = args['password'], subject = args['subject'], level = args['level'])
            db.session.add(student)
            db.session.commit()
            return {}, 200


class stu_info(Resource):

    #Get request to return the students information for a dashboard
    @marshal_with(student_database_parse)
    def get(self, student_id):
        result = StudModel.query.get(student_id)
        if not result:
            abort(404, message='Invalid User token')
        return {'fname' : str(result.first_name), 'edu_category' : str(result.subject), 
        'teach_level' : str(result.level), 'mentor' : str(result.mentor)},200

            