//da ti Allah pomogne da skontaš ovo sve ispod
const tema = document.getElementById("tema");
const naslov = document.getElementById("glavni-naslov"); 
const sledecastrana = document.getElementById("sledecastrana"); 
const xml = document.getElementById("xml");
const xmlnaslov = document.getElementById("xmlnaslov");
const drugastrana = document.getElementById("drugastrana");
const drugastrananaslov = document.getElementById("drugastrananaslov");
const poslednjastrana = document.getElementById("poslednjastrana");

tema.classList.add("nestajanjetema");
sledecastrana.classList.add("nestajanjedugme");
xml.classList.add("nestajanjexml");
xmlnaslov.classList.add("nestajanjexmlnaslov");
drugastrana.classList.add("nestajanjedrugastrana");
drugastrananaslov.classList.add("nestajanjedrugastrananaslov");

naslov.addEventListener("mouseenter", () => {
    naslov.classList.add("nestajanje");


    setTimeout(() => {
        naslov.classList.remove("nestajanje");
        naslov.classList.add("vracanje");
        tema.classList.remove("nestajanjetema");
        tema.classList.add("vracanjetema");
        setTimeout(() => {
            xml.classList.remove("nestajanjexml");
            xml.classList.add("vracanjexml");
            xmlnaslov.classList.remove("nestajanjexmlnaslov");
            xmlnaslov.classList.add("vracanjexmlnaslov");
            sledecastrana.classList.remove("nestajanjedugme");
            sledecastrana.classList.add("vracanjedugme");
        }, 1500);

    }, 1000);

}, { once: true });

sledecastrana.addEventListener("click", (e) => {  //ovo za sledecu stranu dugme
    sledecastrana.classList.add("nestajanjedugme");
    naslov.classList.add("nestajanje");
    tema.classList.add("nestajanjetema");
    xml.classList.add("nestajanjexml");
    xmlnaslov.classList.add("nestajanjexmlnaslov");
    drugastrana.classList.remove("nestajanjedrugastrana");
    drugastrananaslov.classList.remove("nestajanjedrugastrananaslov");
    drugastrana.classList.add("vracanjedrugastrana");
    drugastrananaslov.classList.add("vracanjedrugastrananaslov");
    poslednjastrana.classList.add("pokazi");
    
    
});

poslednjastrana.addEventListener("click", (e) => {
    drugastrana.classList.add("nestajanjedrugastrana");
    drugastrananaslov.classList.add("nestajanjedrugastrananaslov");
    poslednjastrana.classList.remove("pokazi");
});