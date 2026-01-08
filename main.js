function informator_potwierdzacz() {
    
 

    var x = document.getElementById("informator_numerowy").value;
    var kontener = document.getElementById("kontener");
    
    if (x > 200) {
        alert("Blokada: Podano za wysoką wartość");
        return;
    }

    var tekst = ""; 
    for (var i = 1; i <= x; i++) {
        
        tekst += "<input id='a" + i + "' placeholder='Strona A " + i + "'>";
        tekst += "<input id='b" + i + "' placeholder='Strona B " + i + "'>";
        tekst += "<br>";
    }
    
    
    tekst += "<button type='button' onclick='zbieracz()'>ZBIERZ DANE</button>";
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
    
    
    alert("Dane zostały zebrane do konsoli (F12)!");
}
console.log("Zebrane dane:", baza1, baza2);