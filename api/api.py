import time
import json
import User
import main
from flask import Flask, request, jsonify, Response

app = Flask(__name__)


@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/getZip', methods=['POST'])
def getZip():
    req_Json = request.json
    zip = req_Json['zip']
    store_distance = main.getDistance(zip)
    print(store_distance)
    # data=json.dump(store_distance)
    # print(data)
    return Response(json.dumps(store_distance),  mimetype='application/json')


@app.route('/getResults', methods=['GET'])
def getResults():
    # req_Json = request.json
    # userLocation = req_Json['zip)']
    # storeLocation= req_Json['location']
    # transfercost=req_Json['transfer_cost']
    return jsonify({"Transfer Cost": "300.00", "userLocation": ['-34.232423', '89.2342342'],
                    "storeLocation": ['21.324342', '-23.0000']})


@app.route('/login', methods=['POST'])
def getLogIn():
    req_Json = request.json
    userName = req_Json['userName']
    password = req_Json['password']
    User.LogIn(userName,password)
    return jsonify({"userName": userName, "password": password})


@app.route('/signup', methods=['POST'])
def getSignup():
    req_Json = request.json
    userName = str(req_Json['userName'])
    password = str(req_Json['password'])
    confirmPassword = req_Json['confirmPassword']
    User.CreateUser(userName, password)
    return jsonify({"userName": userName, "password": password, "confirmPassword": confirmPassword})
