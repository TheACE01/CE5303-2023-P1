from app import app
from app.utilities.queries import initDoors, initLights
from app.utilities.values import host, port

if __name__ == '__main__':
    initDoors()
    initLights()
    app.run(host=host, port=port, debug=True)
