import time

from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/getZip', methods=['POST'])
def getZip():
    req_Json = request.json
    zip = req_Json['zip']
    return jsonify({"zipCode": zip})

@app.route('/login', methods=['POST'])
def getLogIn():
    req_Json = request.json
    userName = req_Json['userName']
    password = req_Json['password']
    return jsonify({"userName": userName, "password": password})


@app.route('/signup', methods=['POST'])
def getSignup():
    req_Json = request.json
    userName = req_Json['userName']
    password = req_Json['password']
    confirmPassword = req_Json['confirmPassword']
    return jsonify({"userName": userName, "password": password, "confirmPassword":confirmPassword})
