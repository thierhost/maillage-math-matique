
// cette  fonction permet de tracer un carré de taille P
function carre(p)
{

var c = document.getElementById("maillage");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(600,0);
ctx.lineTo(600,600);
ctx.lineTo(0,600);
ctx.moveTo(0,0);
ctx.lineTo(0,600);
ctx.lineWidth='2';
ctx.strokeStyle='#800';
ctx.lineCap='square';
ctx.stroke();

}

// cette fonction permet de construire PxP carrés
function tracer_partie(p)
{

 var c = document.getElementById("maillage");
 var ctx = c.getContext("2d");

  ctx.beginPath();
  
  // l'axe des abscisses
  for (i=1; i<(600/p); i++)
  {
    ctx.moveTo(0,(i*p));  
    ctx.lineTo(600,(i*p));
  }
  ctx.stroke();

    // laxe des ordonnées
   for (j=1; j<(600/p); j++)
  {
    ctx.moveTo((j*p),0);  
    ctx.lineTo((j*p),600);
   }
     ctx.lineWidth='2';
   ctx.strokeStyle='rgb(128,0,0)';
    ctx.lineCap='round';
  
  ctx.stroke();

}

// fonction qui permet de tracer le maillage 
function tracer_maillage(p)
{
  var c = document.getElementById("maillage");
  var ctx = c.getContext("2d");
   ctx.moveTo(0,0);
   
   var i =p;
   while(i<=600)
   {

    ctx.moveTo(0,600-i);
    ctx.lineTo(i,600);
    i+=p;
   }

   var j =p;
   while(j<600)
   {

    ctx.moveTo(600-j,0);
    ctx.lineTo(600,j);
    j+=p;
   }
   
   
    ctx.stroke();


}


/*
// cette  fonction permet de tracer un carré de taille P
function carre(p)
{

var c = document.getElementById("maillage");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(p,0);
ctx.lineTo(p,p);
ctx.lineTo(0,p);
ctx.moveTo(0,0);
ctx.lineTo(0,p);
ctx.lineWidth='2';
ctx.strokeStyle='#800';
ctx.lineCap='square';
ctx.stroke();

}

// cette fonction permet de construire PxP carrés
function tracer_partie(p)
{

 var c = document.getElementById("maillage");
 var ctx = c.getContext("2d");

  ctx.beginPath();
  
  // l'axe des abscisses
  for (i=1; i<(p/100); i++)
  {
    ctx.moveTo(0,(i*100));  
    ctx.lineTo(p,(i*100));
  }
  ctx.stroke();

    // laxe des ordonnées
   for (j=1; j<(p/100); j++)
  {
    ctx.moveTo((j*100),0);  
    ctx.lineTo((j*100),p);
   }
   ctx.lineWidth='3';
   ctx.strokeStyle='rgb(128,0,0)';
    ctx.lineCap='round';
  ctx.stroke();

}

// fonction qui permet de tracer le maillage 
function tracer_maillage(p)
{
  var c = document.getElementById("maillage");
  var ctx = c.getContext("2d");
   taille = p/100;
   ctx.moveTo(0,0);
   
   var i =100
   while(i<=p)
   {

    ctx.moveTo(0,p-i);
    ctx.lineTo(i,p);
    i+=100;
   }

   var j =100
   while(j<p)
   {

    ctx.moveTo(p-j,0);
    ctx.lineTo(p,j);
    j+=100;
   }
   
   
    ctx.stroke();


}
*/

// recuperation de la taille depuis le formulaire
var input  = document.getElementsByTagName("input");
p = 600/input[0].value;

//Appel des fonctions 

carre(p);
tracer_partie(p);
tracer_maillage(p);

// zoom
function exportCanvas(){
        var mycanvas = document.getElementById("maillage");
        if( mycanvas.getContext) {
            var img = mycanvas.toDataURL("/home/localhost/Bureau/maillage/image/png;base64;");
            //img = img.replace("image/png","image/octet-stream"); // force download, user would have to give the file name.
            // you can also use anchor tag with download attribute to force download the canvas with file name.
            //document.write(<img src=img width="100" height="94" />);
            window.open(img,"","width=700,height=700");
            anchor = document.getElementById("download");
            anchor.href = img;
            anchor.innerHTML = "Download";

        }
        else {
             alert("Can not export");
        }
    }
