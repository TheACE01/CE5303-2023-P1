# Setting host and port values
host = "0.0.0.0"
port = 5000

pinMap = {
    "lights": {
        "bedroom1": 15,
        "bedroom2": 27,
        "livingRoom": 22,
        "kitchen": 5,
        "diningRoom": 6
    },
    "doors": {
        "frontDoor": 23,
        "backDoor": 24,
        "bedroomDoor1": 25,
        "bedroomDoor2": 16
}}

# Setting status values constants
low = 0
high = 1

# Library path
libgpio = "/lib/libgpio.so.0"

# Setting input and output modes to read and send info
inputMode = 0
outputMode = 1

# If the command was completed correctly
error = -1
complete = 0