from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
app.config["DEBUG"] = True
cors = CORS(app)

from app import routes
