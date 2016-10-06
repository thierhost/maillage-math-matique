#/usr/bin/env python3
# -*- coding:utf-8 -*-
#Ici on importe la bibliotheque flask ainsi que  l'objet request   
from flask import Flask,request,redirect,url_for,render_template
from random import randrange
import random
import os
import fonctions_maillages
from math import*

app=Flask(__name__)

#definition des routes
@app.route('/')
def index():
	#on redirige vers la  page accueil 
	return render_template("index.html")


@app.route('/maillage_simple',methods=['GET','POST'])
def maillage_simple():
	# si la page est appelée avec la methode post on dessine le maillage alors
	if(request.method=='POST'):
		#on recupere le P du maillage
		taille=int(request.form["taille"])
		return render_template("maillage_simple.html",taille=taille)
	#Si c la methode GET on lui send le formulaire aussi simple :)	
	if(request.method=='GET'):
		#on redirige vers la  page maillage_simple 
		return render_template("maillage_simple.html")


@app.route('/save',methods=['GET','POST'])
def save():
	if(request.method=='POST'):
		taille=int(request.form["tail"])
		name=request.form["name"]
		path="/home/localhost/Bureau/maillage/"
		path+=name
		fonctions_maillages.creation(path,taille)
		return render_template("index.html")

@app.route('/maillage_file',methods=['GET','POST'])
def maillage_file():
	if(request.method=='GET'):
		return render_template("maillage_file.html")
	if(request.method=='POST'):
		fichier = request.files['file']
		path="/home/localhost/Bureau/maillage/"+fichier.filename
		x=fonctions_maillages.lecture(path)
		return render_template("maillage_simple.html",taille=x[0])

app.run(debug= True)
	