from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
app.config["DEBUG"] = True

# Apply cors policies to manage who can use the 
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})  # Replace with your specific origin

from app import routes
