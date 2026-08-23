from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS so frontend can call this backend

@app.route('/api/greet')
def greet():
    return jsonify({"message": "learning :- PYTHON with REACTJS on Cloud (AWS,GCP) using DevSecOps Tools"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
