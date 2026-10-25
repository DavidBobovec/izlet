//unos podataka

var ime = prompt("Unesite svoje ime:");
var CijenaUlaznice = Number(prompt("Unesite cijenu jedne ulaznice:"));
var BrojUlaznica = Number(prompt("Unesite broj ulaznica:"));
var Budžet = Number(prompt("Unesite raspoloživi budžet:"));

//izračun i usporedbe

var UkupniTrošak = CijenaUlaznice * BrojUlaznica;
var PreostaliIznos = Budžet - UkupniTrošak;
var DovoljnoNovca = Budžet >= UkupniTrošak;
var TocanIznos = Budžet === UkupniTrošak;

//ispis rezultata

var nastavakPlaniranja = confirm("Želite li nastaviti s planiranjem izleta?");

alert("Ime: " + ime + "\n"
    + "Ukupni trošak: " + UkupniTrošak + " EUR\n"
    + "Preostali iznos: " + PreostaliIznos + " EUR\n"
    + "Dovoljno novca: " + DovoljnoNovca + "\n"
    + "Tocan iznos: " + TocanIznos + "\n"
    + "Nastavak planiranja: " + nastavakPlaniranja);