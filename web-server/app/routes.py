from flask import render_template, jsonify, request, send_file, abort
from os.path import isfile
from app import app
from app.utilities.types import *
import os

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
# Route to get the house status (doors and lights)
@app.route('/api/house/status', methods = ['GET'])
def getHouseStatus():

    response = jsonify({
    "lights": {
        "bedroom1": 1,
        "bedroom2": 0,
        "livingRoom": 1,
        "kitchen": 0,
        "diningRoom": 0
    },
    "doors": {
        "frontDoor": 1,
        "backDoor": 2,
        "bedroomDoor1": 1,
        "bedroomDoor2": 2
    }})

    return response

#--------------------------------------------------------------------------------------------
# Route to take a picture of an specific section of the house
@app.route('/api/house/photo', methods = ['GET'])
def getHousePhoto():

    image_path = 'camera/example.png'

    return send_file(image_path, mimetype='image/png')



