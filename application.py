import os

from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
socketio = SocketIO(app)

# list of all channels
channel_list = ['general']

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/addchnl", methods=["POST"])
def addchnl():

    litem = request.form.get("newchnl")
    channel_list.append(litem)
    return jsonify({channel_list})



