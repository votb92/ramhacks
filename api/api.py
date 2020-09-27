import time
import json
import User
import main
from flask import Flask, request, jsonify, Response

app = Flask(__name__)

@app.route('/getZip', methods=['POST'])
def getZip() :
    req_Json = request.json
    zip = req_Json['zip']
    store_distance = main.getDistance(zip)
    # data=json.dump(store_distance)
    # print(data)
    return Response(json.dumps(store_distance), mimetype='application/json')


@app.route('/login', methods=['POST'])
def getLogIn() :
    req_Json = request.json
    userName = req_Json['userName']
    password = req_Json['password']
    User.LogIn(userName, password)
    return jsonify({"userName" : userName, "password" : password})


@app.route('/signup', methods=['POST'])
def getSignup() :
    req_Json = request.json
    userName = str(req_Json['userName'])
    password = str(req_Json['password'])
    confirmPassword = req_Json['confirmPassword']
    User.CreateUser(userName, password)
    return jsonify({"userName" : userName, "password" : password, "confirmPassword" : confirmPassword})


@app.route('/getById', methods=['POST'])
def getById() :
    req_Json = request.json
    _id = req_Json['id']
    store_info = main.getStoreInfo(_id)
    return jsonify({'id': _id,'data': store_info})
