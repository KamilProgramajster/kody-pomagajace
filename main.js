
var x = 0;

function informator_potwierdzacz() {
    
 

    x = document.getElementById("informator_numerowy").value;
    var kontener = document.getElementById("kontener");
    
    if (x > 54) {
        alert("Blokada: Podano za wysoką wartość");
        return;
    }

    var tekst = ""; 
    for (var i = 1; i <= x; i++) {
        
        tekst += "<input  maxlength='15' id='a" + i + "' placeholder='Strona A " + i + "'>";
        tekst += "<input  maxlength='15' id='b" + i + "' placeholder='Strona B " + i + "'>";
        tekst += "<br>";
    }
    
    
    tekst += "<button id='dodrukarz' type='button' onclick='zbieracz()'>ZBIERZ DANE</button>";
    kontener.innerHTML = tekst;
}
var baza1 = [];
var baza2 = [];

function zbieracz() {
    var x = document.getElementById("informator_numerowy").value;


    for (var i = 1; i <= x; i++) {
        var dane1 = document.getElementById("a" + i).value;
        var dane2 = document.getElementById("b" + i).value;
        
        baza1.push(dane1);
        baza2.push(dane2);
    }
    
    
    
    drukarz();
    
}

function drukarz(){
        for (var i = 1; i <= x; i++) {
        document.getElementById("a" + i).style.display="none";
        document.getElementById("b" + i).style.display="none";}
    document.getElementById("informator").style.display="none";
    document.getElementById("informator_numerowy").style.display="none";
    document.getElementById("zatwierdzacz").style.display="none";
    document.getElementById("dodrukarz").style.display="none";
    document.getElementById("kontener").style.display="none";
    document.getElementById("").style.display="block";
    var liczba_okien1 = baza1.length;
    var liczba_okien2 = baza1.length;
    var liczydlo = ""; 
    var wartosc_okna = "";
    for(var i = 0; i < liczba_okien1; i++){
        wartosc_okna = baza1[i];
        liczydlo += "<div id='okno'>" + baza1[i] + "</div>";

    }
    var kontener1 = document.getElementById("kontener1");
    kontener1.innerHTML = liczydlo;
    document.getElementById("koncowka").style.display="block";



        

    
    
    
}
