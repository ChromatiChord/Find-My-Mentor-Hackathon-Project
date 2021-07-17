import requests

BASE_URL = "http://127.0.0.1:5000/"

data1 = {
    "email" : "hell this is my email",
    "password" : "this is my password"
}

data2 = { 
    "first_name" : "Luke",
    "last_name" : "Tomic", 
    "phone" : 405331678,
    "email" : "bigluke@hotmail.com",
    "password" : "password", 
    "subject" : "Science",
    "level" : "High School"
}

data3 = { 
    "email" : "bigluke@hotmail.com",
    "password" : "password"
}

data4 = {
    "first_name" : "Luke",
    "last_name" : "Tomic", 
    "phone" : 405331678,
    "email" : "bigluke@hotmail.com",
    "password" : "password", 
    "subject" : "Science",
    "level" : "High School",
    "contacts" : "slack and your mums phone"
}
output = requests.post(f"{BASE_URL}/MentSignIn", data=data1)
print(output.text)
output = requests.post(f"{BASE_URL}/stu_sign_up", data=data2)
print(output.text)
output = requests.post(f"{BASE_URL}/StudSignIn", data=data3)
print(output.text)
output = requests.post(f"{BASE_URL}/mentor_sign_up", data=data4)
print(output.text)
output = requests.post(f"{BASE_URL}/MentSignIn", data=data3)
print(output.text)