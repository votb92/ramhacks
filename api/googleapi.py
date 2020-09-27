import requests,json
import smtplib

#API KEY
#api_file= ("api-key.txt", "r")
api_key= "AIzaSyB2zq4lAoXmUL-vRSmJH7uRhvOsIsBRLgk"

userLocation= input("Enter user address\n")
storeLocation=input("enter store address\n")

url="https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&"
r=requests.get(url + "origins=" + userLocation + "&destinations=" +storeLocation +"&key=" +api_key)

if r.status_code==200:
    data = json.loads(r.text)
    miles= data(['rows'][0]['elements']['distance']['text']
    seconds= data(["rows"][0]["elements"][0]["duration"]["value"])
#Print total time
print("\nThe total travel distance from user to car store is ", miles)
#print(data)





