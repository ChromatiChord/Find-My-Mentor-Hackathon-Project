# REQUEST STRUCTURE

## STUDENT SIGN UP (/stu_signup)
#### Request
```
{
	First name
	Last name
	Mobile Number
	Email
	Password
	Vetting Method?
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


## STUDENT SIGN IN (/stu_signin)
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
  student_id
}
```


## GET STUDENT DASHBOARD INFO (/get_student_info/[student_id])
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


## MENTOR SIGN UP (/mentor_signup)
#### Request
```
{
	First name
	Last name
	Mobile Number
	Email
	Password
	Vetting Method
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


## MENTOR SIGN IN (/mentor_signin)
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
}
```


## GET MENTOR DASHBOARD INFO (/get_mentor_info/[mentor_id])
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