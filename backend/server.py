from flask import Flask, request
import base64
import cv2
import sys
import numpy as np
from flask_cors import CORS

# with open("imageToSave.png", "wb") as fh:
#     fh.write(base64.decodebytes(img_data))

'''

def data_uri_to_cv2_img(uri):
    encoded_data = uri.split(',')[1]
    nparr = np.fromstring(encoded_data.decode('base64'), np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    return img
'''
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}, send_wildcard=True)


def imgsToVid(imgArr, id):
    image_list_temp = imgArr
    image_decoded = []
    for image in image_list_temp:
        encoded_data = image.split(',')[1]
        nparr = np.frombuffer(base64.b64decode(encoded_data), np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        image_decoded.append(img)
    height, width, _ = image_decoded[0].shape
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')  # Be sure to use lower case
    video = cv2.VideoWriter("output{}.mp4".format(id), fourcc, 20.0, (width, height))
    for image in image_decoded:
        video.write(image)
    cv2.destroyAllWindows()
    video.release()


@app.route("/getResponse", methods=["POST"])
def getResponse():
    # Set CORS headers for the preflight request
    if request.method == 'OPTIONS':
        # Allows POST requests from any origin with the Content-Type
        # header and caches preflight response for an 3600s
        headers = {
            'Access-Control-Allow-Origin': '*',
            # 'Access-Control-Allow-Methods': 'POST',
            # 'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }

        return ('', 204, headers)

    request_json = request.get_json()
    headers = {
        'Access-Control-Allow-Origin': '*',
    }
    try:
        if 'images' not in list(request_json.keys()):
            return ('no-images', 400, headers)
        images = request_json.get("images")
        for i in range(len(images)):
            imgsToVid(images[i], i)
    except Exception as e:
        print(e, file=sys.stderr)
        return(str(e), 500, headers)
    return("no-errors", 200, headers)


@app.route("/")
def hello():
    return "Hello World!"


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
