from app.utilities.values import *
import json

#--------------------------------------------------------------------------------------------
# This function validates if the room's name is valid
def validate_room_name(room_name):
    try:
        # Check if the room_name exists in the JSON object
        for category in pinMap.values():
            if room_name in category:
                return True
        return False
    except KeyError:
        return False
