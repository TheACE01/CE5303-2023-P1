from flask import render_template, jsonify, request, send_file, abort
from app import app
from app.utilities.queries import *
from app.utilities.types import *

@app.route('/')
def index():
    return render_template('index.html')

#--------------------------------------------------------------------------------------------
# Route to turn on an individual light of the house.
@app.route('/api/light/turn-on', methods = ['POST'])
def turnOnLight():
    # First, load the request's JSON body
    roomName = request.json['roomName']

    # Check if the room name is a valid one
    if validate_room_name(roomName) == False:
        return jsonify({"status": True, "message": f"{roomName} is not a valid room name"})

    # Prepare the 2 possible outputs
    success = {"status": True, "message": f"Succeded to turn on the light of {roomName}"}
    failure = {"status": False, "message": f"Failed to turn on the light of {roomName}"}

    # Use the query
    # result = lightOn(roomName)
    result = True

    # Filter the response
    response = success if result else failure
    return jsonify(response)

#--------------------------------------------------------------------------------------------
# Route to turn off an individual light of the house.
@app.route('/api/light/turn-off', methods = ['POST'])
def turnOffLight():
    # First, load the request's JSON body
    roomName = request.json['roomName']

    # Check if the room name is a valid one
    if validate_room_name(roomName) == False:
        return jsonify({"status": True, "message": f"{roomName} is not a valid room name"})

    # Prepare the 2 possible outputs
    success = {"status": True, "message": f"Succeded to turn off the light of {roomName}"}
    failure = {"status": False, "message": f"Failed to turn off the light of {roomName}"}

    # Use the query
    result = lightOff(roomName)

    # Filter the response
    response = success if result else failure
    return jsonify(response)

#--------------------------------------------------------------------------------------------
# Route to turn on all lights of the house.
@app.route('/api/lights/turn-on', methods = ['POST'])
def turnOnLights():
    # Prepare the 2 possible outputs
    success = {"status": True, "message": "Succeded to turn on all lights"}
    failure = {"status": False, "message": "Failed to turn on all lights"}

    # Use the query
    result = changeAllLightsState(1)

    # Filter the response
    response = success if result else failure
    return jsonify(response)

#--------------------------------------------------------------------------------------------
# Route to turn off all lights of the house.
@app.route('/api/lights/turn-off', methods = ['POST'])
def turnOffLights():
    # Prepare the 2 possible outputs
    success = {"status": True, "message": "Succeded to turn off all lights"}
    failure = {"status": False, "message": "Failed to turn off all lights"}

    # Use the query
    result = changeAllLightsState(0)

    # Filter the response
    response = success if result else failure
    return jsonify(response)

#--------------------------------------------------------------------------------------------
# Route to get the house status (doors and lights)
@app.route('/api/house/status', methods = ['GET'])
def getHouseStatus():

    response = {
    "lights": {
        "bedroom1": getLightState("bedroom1"),
        "bedroom2": getLightState("bedroom2"),
        "livingRoom": getLightState("livingRoom"),
        "kitchen": getLightState("kitchen"),
        "diningRoom": getLightState("diningRoom")
    },
    "doors": {
        "frontDoor": getDoorState("frontDoor"),
        "backDoor": getDoorState("backDoor"),
        "bedroomDoor1": getDoorState("bedroomDoor1"),
        "bedroomDoor2": getDoorState("bedroomDoor2")
    }}

    return jsonify(response)

#--------------------------------------------------------------------------------------------
# Route to take a picture of an specific section of the house
@app.route('/api/house/photo', methods = ['GET'])
def getHousePhoto():
    # Use the query
    image_path = TakePhoto()
    # return the image
    return send_file(image_path)



