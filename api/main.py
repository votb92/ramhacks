import pyrebase
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from getpass import getpass
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

# authentication
auth = fb.auth()
email = 'kurogane.deviruchi@gmail.com'
password = 'ijetrnhd43!!3FGER!'

#createUser()
def CreateUser() :
    global user
    user = auth.create_user_with_email_and_password(email, password)

#LogIn()
def LogIn() :
    login = auth.sign_in_with_email_and_password(email, password)

#ResetPassword()
def ResetPassword() :
    auth.send_password_reset_email(email)

stores = {}
for doc in docs:
    # grab all data from stores collection
    print(f'{doc.id} => {doc.to_dict()}')

    # single_store = doc.to_dict()
    # print(single_store)


# print(stores)
geolocations = []
