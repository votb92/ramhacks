import pyrebase
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

firebaseConfig = {'apiKey': "AIzaSyByvfhbKg2soP06lWoAQNUkicTF6Yfw2rc",
                  'authDomain': "ramhacks-196ad.firebaseapp.com",
                  'databaseURL': "https://ramhacks-196ad.firebaseio.com",
                  'projectId': "ramhacks-196ad",
                  'storageBucket': "ramhacks-196ad.appspot.com",
                  'messagingSenderId': "311742632429",
                  'appId': "1:311742632429:web:96ce7bd052c5f8d8d7d7e4",
                  'measurementId': "G-452SGS4GQ9"}

fb = pyrebase.initialize_app(firebaseConfig)

cred = credentials.Certificate('./ramhacks-196ad-89c6b1e9fb48.json')

# initialize database
firebase = firebase_admin.initialize_app(cred)
db = firestore.client()

# Database reference to stores
stores_ref = db.collection(u'stores')
docs = stores_ref.stream()

stores = []
stores_locations = []
stores_cars = []
stores_address = []

for doc in docs:
    # grab all data from stores collection
    # print(f'{doc.id} => {doc.to_dict()}')
    stores.append({doc.id: doc.to_dict()})

    single_store = doc.to_dict()
    stores_locations.append({doc.id: [single_store['location'].longitude, single_store['location'].latitude]})
    stores_cars.append({doc.id: single_store['cars']})
    stores_address.append({doc.id: single_store['address']})


for location in stores_locations:
    print(location)


for cars in stores_cars:
    print(cars)


for address in stores_address:
    print(address)

# print(stores)


############Error#############
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
############################
