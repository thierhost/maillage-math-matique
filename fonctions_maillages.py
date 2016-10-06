#/usr/bin/env python3
# -*- coding:utf-8 -*-
def creation(nom_fichier,p):
    obFichier = open(nom_fichier,'a')
    var=nom_fichier+"2"
    obFichier.write(str(p))
    obFichier.write("\n")
    p=int(p)
    for i in range(p+1):
    	for j in range(p+1):
    		absice=float(i)/(p)
    		ordonne=float(j)/(p)
    		obFichier.write(str(absice))
    		obFichier.write(str(","))
    		obFichier.write(str(ordonne))   
    		obFichier.write("\n")	
    obFichier.close()
    k=2*p*p
    obFichier = open(var,'a')
    for k in range(k+1):
    	o=float(k)
    	obFichier.write(str(k))
    	obFichier.write("\n")
    obFichier.close()	
    

def lecture(fichier):
	ofi = open(fichier, 'r')
	t = str(ofi.read())
	ofi.close()
	return t

