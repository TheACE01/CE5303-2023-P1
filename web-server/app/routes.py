from flask import render_template, jsonify, request
from app import app
from app.utilities.types import *

@app.route('/')
def index():
    return render_template('index.html')

#--------------------------------------------------------------------------------------------
# Route to turn on an individual light of the house.
@app.route('/api/light/turn-on', methods = ['POST'])
def turnOnLight():
    # First, load the request's JSON body
    lightNumber = request.json['lightNumber']
    
    # Check for errors in the request
    if not isNumeric(lightNumber):
        response = jsonify({
            "status": False,
            "message": "Numeric value expected for the light number"
        })
        return response

    # return a good response
    response = jsonify({
        "status": True,
        "message": f"Light {lightNumber} turned on successfully"
    })
    return response

#--------------------------------------------------------------------------------------------
# Route to turn off an individual light of the house.
@app.route('/api/light/turn-off', methods = ['POST'])
def turnOffLight():
    # First, load the request's JSON body
    lightNumber = request.json['lightNumber']
    
    # Check for errors in the request
    if not isNumeric(lightNumber):
        response = jsonify({
            "status": False,
            "message": "Numeric value expected for the light number"
        })
        return response

    # return a good response
    response = jsonify({
        "status": True,
        "message": f"Light {lightNumber} turned off successfully"
    })
    return response

#--------------------------------------------------------------------------------------------
# Route to turn on all lights of the house.
@app.route('/api/lights/turn-on', methods = ['POST'])
def turnOnLights():

    # return a good response
    response = jsonify({
        "status": True,
        "message": f"All lights turned on successfully"
    })
    return response

#--------------------------------------------------------------------------------------------
# Route to turn off all lights of the house.
@app.route('/api/lights/turn-off', methods = ['POST'])
def turnOffLights():

    # return a good response
    response = jsonify({
        "status": True,
        "message": f"All lights turned off successfully"
    })
    return response

#--------------------------------------------------------------------------------------------
# Route to turn off all lights of the house.
@app.route('/api/lights/turn-off', methods = ['POST'])
def turnOffLights():

    # return a good response
    response = jsonify({
        "status": True,
        "message": f"All lights turned off successfully"
    })
    return response

