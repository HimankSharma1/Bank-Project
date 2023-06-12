import flask
import random
from flask_cors import CORS
import mysql.connector as mysql


data = mysql.connect(host = "localhost", user = "root", password = "himank004", database="bankdata")
ed=data.cursor()
app=flask.Flask(__name__)
cors=CORS(app,resources={r'*':{'origins': '*'}})

@app.route("/check/username/<string:n>")
def check_username(n):
    name=n.replace("%20", " ")
    name=name.lower()
    ed.execute("select username from record")
    c=ed.fetchall()
    if(len(c)==0):
        find=0
    file_name=[]
    for i in range(len(c)):
        file_name.append(c[i][0])
    for i in file_name:
        if i == name:
            find=1
            return flask.jsonify(1)
        else:
            find=0
    if find==0:
        return flask.jsonify(0)

@app.route("/check/number/<string:n>")
def check_number(n):
    name=n.replace("%20", " ")
    ed.execute("select phone_no from record")
    c=ed.fetchall()
    if(len(c)==0):
        find=0
    file_name=[]
    for i in range(len(c)):
        file_name.append(c[i][0])
    for i in file_name:
        if i == name:
            find=1
            return flask.jsonify(1)
        else:
            find=0
    if find==0:
        return flask.jsonify(0)

@app.route("/enter/<string:n>")
def enter_name(n):
    dataentry=n.split()
    print(dataentry)
    que=f"insert into record values('{dataentry[0]}', '{dataentry[1]}', '{dataentry[2]}', '{dataentry[3]}', {dataentry[4]}, '{dataentry[5]}');"
    print(que)
    try:
        ed.execute(f"insert into record values('{dataentry[0]}', '{dataentry[1]}', '{dataentry[2]}', '{dataentry[3]}', {dataentry[4]}, '{dataentry[5]}');")
        data.commit()
        print("sending data as 0")
        return flask.jsonify(0)
    except Exception as a:
        print(a)
        print("sending data as 1")
        return flask.jsonify(1)
    
    
@app.route("/login/<string:n>")
def login(n):
    dataentry=n.split()
    print(dataentry)
    ed.execute(f"select username, password from record where username = '{dataentry[0]}'")
    c=ed.fetchall()
    print(c)
    if (dataentry[1]==c[0][1]):
        return flask.jsonify(0)
    else:
        return flask.jsonify(1)
    
if __name__=="__main__":
    app.run(debug=True, port=3000)