import pyrebase
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import requests, json
import re

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


# API KEY
# api_file= ("api-key.txt", "r")
api_key = "AIzaSyB2zq4lAoXmUL-vRSmJH7uRhvOsIsBRLgk"

userLocation = input("Enter user address\n")
storeLocation = input("enter store address\n")

url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&"
r = requests.get(url + "origins=" + userLocation + "&destinations=" + storeLocation + "&key=" + api_key)

miles = ''
second = ''

if r.status_code == 200:
    data = json.loads(r.text)
    miles = data['rows'][0]['elements'][0]['distance']['text']
    seconds = data["rows"][0]["elements"][0]["duration"]["value"]
    print("\nThe total travel distance from user to car store is ", miles)

### Calculations for Transfer Fee
## Notes: Algorithm- Distance of User to Dealership in Miles Divided by Distnace of US-20
## US Route 20 is the longest road in America going from Boston MA to Newport Oregon
##US Route_20 Distance- 3365 miles
## No parameters were provided by CarMax, so this equation is written to be a direct calculation and takes into account no factors ie. interstate shipping regulations, inflation, etc.

# Assume we take the variable directly from miles variable
distance = re.sub(r'[^\d]', '', miles)


def roundtens(x):
    return int(round(x / 10.0)) * 10


# Algorithm
route_20_distance = 3365
transfer_cost = int(distance) / route_20_distance * 999
transfer_cost = roundtens(transfer_cost) - .01

if transfer_cost < 150:
    transfer_cost = 0
    print(transfer_cost)
else:
    print(transfer_cost)
