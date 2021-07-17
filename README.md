# REQUEST STRUCTURE

## STUDENT SIGN UP (/stu_signup) POST
#### Request
```
{
	fname
	lname
	phone
	email
	password
	edu_category (Could select ANY)
	teach_level [PS, HS, UND, POST]
}
```

#### Response
```
{
	auth_token (String)
  student_id
}
```


## MENTOR SIGN UP (/mentor_signup) POST
#### Request
```
{
	fname
	lname
	phone
	email
	password
	edu_category (Could select ANY)
	teach_level [PS, HS, UND, POST]
	contacts (List of available means to contact them: Discord, Slack, etc)
}
```
#### Response
```
{
  auth_token
  mentor_id
}
```

## SIGN IN (/signin) GET
#### Request
```
{
	email
	password	
}
```
#### Response
```
{
  auth_token
  mentor_id
  user_type: ('Student' or 'Mentor')
}
```

## GET STUDENT DASHBOARD INFO (/get_student_info/[student_id]) GET
#### Request
```
{
  auth_token
}
```
#### Response
```
{
	fname
	edu_category
	teach_level: [PS, HS, UND, POST]
	mentor_connections (will return null if no mentor has been connected)
}
```

## GET MENTOR DASHBOARD INFO (/get_mentor_info/[mentor_id]) GET
#### Request
```
{
  auth_token
}
```
#### Response
```
{
	fname
	edu_category
	teach_level: [PS, HS, UND, POST]
	student_connections (will return null if no students are connected)
}
```