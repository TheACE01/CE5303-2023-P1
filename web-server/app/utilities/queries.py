from app.utilities.handlerGPIO import *
import app.utilities.values as values
import datetime
import os

#--------------------------------------------------------------------------------------------
# This function start all the doors' GPIO
def initDoors():
    print("Init doors......")
    for room, pin in values.pinMap["doors"].items():
        print(f"room: {room}, pin: {pin}")
        print(f'Starting the init process for the {room} with the GPIO {pin}')
        if export_command(pin) == values.error:
            print(f"Error at init doors: Pin {pin} for {room} failed to start.")
        else:
            if pin_mode(pin, values.inputMode) == values.error:
                print(f"Error at init doors: Pin {pin} for {room} failed to start.")
            print(f"Success at init lights: Pin {pin} for {room} is ready")

#--------------------------------------------------------------------------------------------
# This function start all the lights' GPIO
def initLights():
    for room, pin in values.pinMap["lights"].items():
        print("Init lights......")
        print(f'Starting the init process for the {room} with the GPIO {pin}')
        if export_command(pin) == values.error:
            print(f"Error at init lights: Pin {pin} for {room} failed to start.")
        else:
            if pin_mode(pin, values.outputMode) == values.error:
                print(f"Error at init lights: Pin {pin} for {room} failed to start.")
            print(f"Success at init lights: Pin {pin} for {room} is ready")

#--------------------------------------------------------------------------------------------
# This function finalize all GPIOs
def finalize():
    for room, pin in values.pinMap["doors"].items():
        print(f"Finalize {room} at pin {pin}")
        unexport_command(pin)

    for room, pin in values.pinMap["lights"].items():
        print(f"Finalize {room} at pin {pin}")
        unexport_command(pin)

#--------------------------------------------------------------------------------------------
# This function turns on an specific light
def lightOn(room: str):
    print(f"Turning on light at {room}")
    pin = values.pinMap["lights"][room]
    if digital_write(pin, values.high) == values.error:
        return False
    return True

#--------------------------------------------------------------------------------------------
# This function turns off an specific light
def lightOff(room: str):
    print(f"Turning off light at {room}")
    pin = values.pinMap["lights"][room]
    if digital_write(pin, values.low) == values.error:
        return False
    return True

#--------------------------------------------------------------------------------------------
# This function retrieves the state of an specific light
def getLightState(room: str):
    pin = values.pinMap["lights"][room]
    result = digital_read(pin)
    if (result == values.error):
        print("Light Error: {room} in pin {pin} is not available.")
    return result

#--------------------------------------------------------------------------------------------
# This function retrieves the state of an specific door
def getDoorState(room: str):
    pin = values.pinMap["doors"][room]
    result = digital_read(pin)
    if (result == values.error):
        print("Door Error: {room} in pin {pin} is not available.")
    return result

#--------------------------------------------------------------------------------------------
# This function change the state of all the lights
# The state can be on (1) or off (0)
def changeAllLightsState(status: int):
    print(f"Change all lights state to {status}")
    results = []
    for room in values.pinMap["lights"]:
        if status == 1:
            results.append(lightOn(room))
        else:
            results.append(lightOff(room))

    for result in results:
        if result != True:
            return False
    return True

#--------------------------------------------------------------------------------------------
# This function tells OS to take a photo with the webcam
def TakePhoto():
    image_name = f'/web-server/app/camera/{datetime.datetime.now()}.jpg'.replace(' ', '_')
    os.system(f'fswebcam --no-banner {image_name}')
    return image_name
