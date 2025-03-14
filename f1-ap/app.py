from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from prediction2 import predict_positions_new_model
from prediction import predict_positions


app = Flask(__name__)
CORS(app, upports_credentials=True, origins=["http://localhost:5173","https://just-a-f1-race-prediction.vercel.app"])
# Sample data storage
data_storage = "Hello ! this is Prediction API"


@app.route('/', methods=['GET'])
def home():
    return "Welcome to the Flask API! Use /api/hello for GET and POST requests.", 200


@app.route('/api/hello', methods=['GET'])
def get_data():
    return jsonify({"massage": data_storage}), 200


@app.route('/api/prediction-with-location', methods=['POST'])
def predictionWithLocation():
    # Read data from the request body
    data = request.get_json()
    drivers = data.get('drivers')
    grids = list(range(1, len(drivers) + 1))
    location = data.get('location')
    #  Make prediction
    prediction = predict_positions_new_model(drivers, grids, location)

    #! Check if 'name' and 'number' are in the request body
    if data.get('drivers') is None or data.get('location') is None:
        return jsonify({'error': 'Missing Drivers or Location'}), 400

    #! Convert DataFrame to list of dictionaries (JSON serializable)
    res = prediction.to_dict(orient='records')

    return jsonify(res), 201


@app.route('/api/prediction-with-out-location', methods=['POST'])
def predictionWithoutLocation():
    # Read data from the request body
    data = request.get_json()
    drivers = data.get('drivers')
    grids = list(range(1, len(drivers) + 1))

    #  Make prediction
    prediction = predict_positions(drivers, grids)

    #! Check if 'name' and 'number' are in the request body
    if data.get('drivers') is None:
        return jsonify({'error': 'Missing name or number'}), 400

    #! Convert DataFrame to list of dictionaries (JSON serializable)
    res = prediction.to_dict(orient='records')

    return jsonify(res), 201


if __name__ == '__main__':
    print("⚙️ Flask API server live  🚀")
    app.run(debug=True)
