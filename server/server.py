from flask import Flask,request,jsonify
import util
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/get_location_name', methods=['GET'])
def get_location_name():
    response = jsonify({
        'locations': util.get_location_name()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

@app.route('/predict_home_price',methods=['POST'])
def predict_home_price():
     data = request.get_json() 

     total_sqft = float(data['total_sqft'])
     bhk = int(data['bhk'])
     bath = int(data['bath'])
     location = data['location']
     estimated_price = util.get_estimated_price(location,total_sqft,bhk,bath)
     response = jsonify({'estimated_price': estimated_price})
     response.headers.add('Access-Control-Allow-Origin', '*')
     return response

if __name__ == '__main__':
    print("Starting Flask server...")
    util.load_save_artifacts()
    app.run(debug=True, host='0.0.0.0', port=5000)