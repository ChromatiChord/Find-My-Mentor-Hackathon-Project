# REQUEST STRUCTURE

## STUDENT SIGN UP (/stu_signup) POST
#### Request
```
{
	First name
	Last name
	Mobile Number
	Email
	Password
	Education Category (Could select ANY)
	Preferred Teaching level: [PS, HS, UND, POST]
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
	First name
	Last name
	Mobile Number
	Email
	Password
	Education Category
	Preferred Teaching level (String: HS or Uni or postgrad)
	Contact List (List of available means to contact them: Discord, Slack, etc)
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
	Email
	Password	
}
```
#### Response
```
{
  auth_token
  mentor_id
  type: ('Student' or 'Mentor')
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
	First name
	Education Category (Could select ANY)
	Preferred Teaching level: [PS, HS, UND, POST]
	Mentor available connections (will return null if no mentor has been connected)
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
	First name
	Education Category (Could select ANY)
	Preferred Teaching level (String: HS, Uni, or postgrad)
	Student available connections (will return null if no students are connected)
}
```