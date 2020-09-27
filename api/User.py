import pyrebase
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
firebaseConfig = {'apiKey' : "AIzaSyByvfhbKg2soP06lWoAQNUkicTF6Yfw2rc",
                          'authDomain' : "ramhacks-196ad.firebaseapp.com",
                          'databaseURL' : "https://ramhacks-196ad.firebaseio.com",
                          'projectId' : "ramhacks-196ad",
                          'storageBucket' : "ramhacks-196ad.appspot.com",
                          'messagingSenderId' : "311742632429",
                          'appId' : "1:311742632429:web:96ce7bd052c5f8d8d7d7e4",
                          'measurementId' : "G-452SGS4GQ9"}
firebaseConfig = firebaseConfig
fb = pyrebase.initialize_app(firebaseConfig)
auth = fb.auth()

def CreateUser(email, password) :
    global user
    user = auth.create_user_with_email_and_password(email, password)

    #LogIn()
def LogIn(email, password) :
    login = auth.sign_in_with_email_and_password(email, password)

    #ResetPassword()
def ResetPassword(email) :
    auth.send_password_reset_email(email)

