from flask_restx import Resource, abort, fields, marshal_with
from website_package.models import MentModel, ment_post_args,mentor_database_parse
from website_package import db
import random

class mentor_sign_up(Resource):
  #put request to add a new mentor the database
  @marshal_with(mentor_database_parse)
  def post(self):
      args = ment_post_args.parse_args()
      email = args['email']
      result = MentModel.query.get(email)
      if result:
          abort(409, message="Mentor is already a member")
      else:
          user_id = random.randint(10000000,99999990)
          mentor = MentModel(user_id = user_id, first_name =args['first_name'], last_name = args['last_name'],
          email = args['email'], phone = args['phone'], password = args['password'], subject = args['subject'], level = args['level'], contacts = args['contacts'])
          db.session.add(mentor)
          db.session.commit()

class mentor_info(Resource): 
  #Get request to retrieve the students information for a dashboard
  @marshal_with(mentor_database_parse)
  def get(self, mentor_id):
      result = MentModel.query.get(mentor_id)
      if not result:
          abort(404, message ='Invalid User Token')
      return {'fnanme' : str(result.first_name), 'edu_category' : str(result.subject), 'teach_level' : str(result.level), 'student_connections' : str(result.students)},200


