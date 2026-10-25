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
