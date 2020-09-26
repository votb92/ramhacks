import pyrebase

firebaseConfig = {'apiKey': "AIzaSyByvfhbKg2soP06lWoAQNUkicTF6Yfw2rc",
                  'authDomain': "ramhacks-196ad.firebaseapp.com",
                  'databaseURL': "https://ramhacks-196ad.firebaseio.com",
                  'projectId': "ramhacks-196ad",
                  'storageBucket': "ramhacks-196ad.appspot.com",
                  'messagingSenderId': "311742632429",
                  'appId': "1:311742632429:web:96ce7bd052c5f8d8d7d7e4",
                  'measurementId': "G-452SGS4GQ9"}

firebase = pyrebase.initialize_app(firebaseConfig)

# Storage
storage = firebase.storage()
# Upload file to Storage
# filename = input("Enter filename: ")
# cloudfilename = input("Name of file on the cloud: ")
# storage.child(cloudfilename).put(filename)
# url = storage.child(cloudfilename).get_url(None)
# print(url)

# Downloading file from Storage
cloudfilename = input("Name of file you want to download")
storage.child(cloudfilename).download("", "localfilename.txt")
