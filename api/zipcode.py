from flask import Flask, request, jsonify

app= Flask(__name__)

@app.route('/getZip', methods=['POST'])
def getZip():
    req_Json = request.json
    zip = req_Json['zip']
    return jsonify({"zipCode": zip})

if __name__ == '_main_':
 app.run(debug=True, port=5000)
