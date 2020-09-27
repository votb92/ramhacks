import pyrebase
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import requests,json
import smtplib

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

# for location in stores_locations:
#     print(location)
#
#
# for cars in stores_cars:
#     print(cars)
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

def partition(arr, low, high) :
    i = (low - 1)  # index of smaller element
    pivot = arr[high]  # pivot

    for j in range(low, high) :

        # If current element is smaller than or
        # equal to pivot
        if arr[j] <= pivot :
            # increment index of smaller element
            i = i + 1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return (i + 1)

def quickSort(arr, low, high) :
    if len(arr) == 1 :
        return arr
    if low < high :
        # pi is partitioning index, arr[p] is now
        # at right place
        pi = partition(arr, low, high)

        # Separately sort elements before
        # partition and after partition
        quickSort(arr, low, pi - 1)
        quickSort(arr, pi + 1, high)

def getDistance(zip) :
    url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&"
    userLocation = str(zip)
    metersList = []
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
             meters = data['rows'][0]['elements'][0]['distance']['value']
             metersList.append(meters)
        stores_distance_from_user.append({alist[0][0] : meters})
    n = len(metersList)
    quickSort(metersList, 0, n - 1)
    print(metersList)


getDistance(23224)