from flask import Flask, request, jsonify
import google.generativeai as genai
from flask_cors import CORS

API_KEY = "AIzaSyDaP301UPruGVR-E34IgTl3bUpAlF5e80Q"
genai.configure(api_key=API_KEY)

app = Flask(__name__)
CORS(app)

def get_response(prompt):
    model = genai.GenerativeModel('gemini-1.5-flash')
    return model.generate_content(prompt)

@app.route('/api', methods=['POST'])
def handle_request():
    data = request.get_json()
    prompt = data['prompt']
    response = get_response(prompt)
    return jsonify({'response': response.text})

if __name__ == "__main__":
    app.run(debug=True, port=5000)