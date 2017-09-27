function Concesionario() {
    //declaro atributos sin valor por defecto
    this.nombre;
    this.comanda = [];
    this.direccion;

//set direccion

    this.setDireccion = function (dir) {
        this.direccion = dir;
    };

//set direccion

    this.setNombre = function (nom) {
        this.nombre = nom;
    };
// funcion add comanda
    this.addComanda = function (com) {
        this.comanda.push = com;
        return this.comanda.length;
    };


}
/* 
 1) Crea una array que almacene un mínimo de 5 extras para un coche (“ABS”, “cierres centralizados”, etc..).
 */

var extraCoche = [];
var extraCoche = new Array();

extraCoche[1] = "ABS";
extraCoche[2] = "Cierre Centralizado";
extraCoche[3] = "ASR";
extraCoche[4] = "Reprogramacion";
extraCoche[5] = "Aleron";
extraCoche.push("Extras");


/*
 2) Crea un objeto “Coche” que almacene: el modelo del coche, el precio del coche , una array vacía de extras,  
 una función que nos permita añadir un extra y una función que nos permita obtener el nombre de un extra según su posición dentro del array.
 */

var coche = new Coche();
coche.nombre = "Ford Mustang";
coche.precio = "64000€";
document.write('<br />Nompre Coche: ');
document.write(coche.nombre);
document.write('<br />Precio: ');
document.write(coche.precio);
var numExtra = coche.addExtra("ABS");
// var numExtra1 = coche.addExtra("ABS");
var extra = coche.getExtra(numExtra - 1);
document.write('<br />Extra: ');
document.write(extra);

/*
 3) Crea un objeto “Concesionario” que almacene: el nombre del concesionario, la dirección, un array   
 “comanda” para almacenar los Coches pedidos, las funciones “setNombre”y “setDireccion”  
 que permitan establecer el nombre y la dirección del concesionario,
 y una función  “addComanda” que permita añadir un Coche a l’array “comanda”. 
 */

var myConcesionario = new Concesionario();
myConcesionario.setNombre("Mario Kart");
myConcesionario.setDireccion("c/Mushroom Kingdom 1");

var coche = new Coche();
coche.nombre = "Fantastico!";
coche.precio = "70000€";
var numExtra = coche.addExtra("Airbag");
var extra = coche.getExtra(numExtra - 1);
var posicionComanda = myConcesionario.addComanda(coche);

document.write('<br />Nompre Concesionario: ');
document.write(myConcesionario.nombre);
document.write('<br />Direccion: ');
document.write(myConcesionario.direccion);
document.write('<br /> Nombre coche: ');
document.write(myConcesionario.comanda[posicionComanda - 1].nombre);
document.write('<br /> Nombre extra: ');
document.write(myConcesionario.comanda[posicionComanda - 1].extras[numExtra - 1]);

//creamos otro coche
var coche2 = new Coche();
coche2.nombre = "Fantastico2";
