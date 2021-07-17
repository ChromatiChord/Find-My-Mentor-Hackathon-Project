# REQUEST STRUCTURE

## STUDENT SIGN UP
#### Request
```{
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
```{
	auth_token (String)
}
```


## STUDENT SIGN IN
#### Request
```{
	Email
	Password	
}
```
#### Response
```{
	auth_token
}
```


## GET STUDENT DASHBOARD INFO
#### Request
```{
  auth_token
}
```
#### Response
```{
	First name
	Education Category (Could select ANY)
	Preferred Teaching level: [PS, HS, UND, POST]
	Mentor available connections (will return null if no mentor has been connected)
}
```


## MENTOR SIGN UP
#### Request
```{
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
```{
  auth_token
}
```


## MENTOR SIGN IN
#### Request
```{
	Email
	Password	
}
```
#### Response
```{
  auth_token
}
```


## GET MENTOR DASHBOARD INFO
#### Request
```{
  auth_token
}
```
#### Response
```{
	First name
	Education Category (Could select ANY)
	Preferred Teaching level (String: HS, Uni, or postgrad)
	Student available connections (will return null if no students are connected)
}
```