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