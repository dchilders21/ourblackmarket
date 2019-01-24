from flask import render_template, Blueprint, jsonify
hello_blueprint = Blueprint('hello',__name__)
import requests
import json

@hello_blueprint.route('/')
def index():
	return render_template("index.html")

@hello_blueprint.route('/article')
def article():
	return render_template("article.html")

@hello_blueprint.route("/api/home/")
def getHome():
	r = requests.get('https://vlihxbj1cl.execute-api.us-west-1.amazonaws.com/dev/todos')
	return jsonify(r.json()['message'])
	
@hello_blueprint.route("/api/article/")
def getArticle():
	r = requests.get('https://vlihxbj1cl.execute-api.us-west-1.amazonaws.com/dev/summary/about')
	return jsonify(r.json()['message'])
	