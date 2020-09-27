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
stores_distance_from_user = []

for doc in docs:
    # grab all data from stores collection
    # print(f'{doc.id} => {doc.to_dict()}')
    stores.append({doc.id: doc.to_dict()})

    single_store = doc.to_dict()
    stores_locations.append({doc.id: [single_store['location'].latitude, single_store['location'].longitude]})
    stores_cars.append({doc.id: single_store['cars']})
    stores_address.append({doc.id: single_store['address']})

    # stores_distance_from_user.append({doc.id: ''})


#
#
# for cars in stores:
#      print(cars)
#
#
# for address in stores_address:
#     print(address)
#
# for distance in stores_distance_from_user:
#     print(distance)
# print(stores)


############Error#############

#API KEY
#api_file= ("api-key.txt", "r")


#################################################
api_key = "AIzaSyB2zq4lAoXmUL-vRSmJH7uRhvOsIsBRLgk"

storeLocation = ''
#

#r=requests.get(url + "origins=" + userLocation + "&destinations=" +storeLocation +"&key=" +api_key)
#
# if r.status_code == 200:
#     data = json.loads(r.text)
#     #miles = data['rows'][0]['elements'][0]['distance']['text']
#     #seconds = data["rows"][0]["elements"][0]["duration"]["value"]
#     print(data)
#################################################
#Print total time
#print(data)

### Calculations for Transfer Fee
## Notes: Algorithm- Distance of User to Dealership in Miles Divided by Distnace of US-20
## US Route 20 is the longest road in America going from Boston MA to Newport Oregon
##US Route_20 Distance- 3365 miles
## No parameters were provided by CarMax, so this equation is written to be a direct calculation and takes into account no factors ie. interstate shipping regulations, inflation, etc.

# Assume we take the variable directly from miles variable
def CalculateTransferCost(miles):
    distance = re.sub(r'[^\d]', '', miles)


    def roundtens(x):
        return int(round(x / 10.0)) * 10


    # Algorithm
    route_20_distance = 3365
    transfer_cost = int(distance) / route_20_distance * 999
    transfer_cost = roundtens(transfer_cost) - .01

    if transfer_cost < 150:
        transfer_cost = 0
        return transfer_cost
    else:
        return transfer_cost

def getDistance(zip) :
    url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&"
    userLocation = str(zip)
    final_list=[]
    for locus in stores_locations:
        alist = list(locus.items())
        #alist[0][0] = store ID
        #alist[0][1][0] = lat
        #alist[0][1][1] = long
        storeLocation = str(alist[0][1][0])+","+str(alist[0][1][1])

        r = requests.get(url + "origins=" + userLocation + "&destinations=" + storeLocation + "&key=" + api_key)
        if r.status_code == 200:
             data = json.loads(r.text)
             miles = data['rows'][0]['elements'][0]['distance']['text']
             cost = CalculateTransferCost(miles)
        stores_distance_from_user.append({cost : alist[0][0]})
    temp =list(map(dict, sorted(list(i.items()) for i in stores_distance_from_user)))
    for item in temp:
        switchTemp = dict((y, x) for x, y in item.items())
        final_list.append(switchTemp)
    return final_list


def getStoreInfo(id) :
    id = str(id)
    temp={}
    for store in stores:
        alist = list(store.items())
        if(id == alist[0][0]):
            temp['cars']=alist[0][1]['cars']
            temp['address']=alist[0][1]['address']
            # print(temp)
            return temp

# getStoreInfo('4kPLEQ3ypkBamB2lBSvz')