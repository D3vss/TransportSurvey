//Variables
let slidesCounter = 0;
let slides = document.getElementsByClassName("slide"); //each slide represents a question

let suivantDepart = document.getElementById("suivant_depart");
let suivantArrivee = document.getElementById("suivant_arrivee");
let suivantLast = document.getElementById("suivant_last");
let finir = document.getElementById("finir");





//answers

//answer 1
let a1 = document.getElementById("a1");
let a1Oui = a1.children[0];
let a1Non = a1.children[1];

//answer 2
let a2 = document.getElementById("a2");
let a2Audepart = a2.children[0];
let a2Alarrivee = a2.children[1];

//answers 5
let a5 = document.getElementById('a5');
let a5m = a5.children[0];
let a5p = a5.children[1];

//boolean

let arriveeClicked = false;
let departClicked = false;

let passedByOui = false;
let passedByNon = false;


//Next function


const next = () => {
    slides[slidesCounter].classList.add("class_leaving");

    //Question 1
    slides[1].style.display = "block";
    a1Oui.addEventListener("click", function() {
        console.log("a1Oui is clicked");
        slides[1].classList.add("class_leaving");
        slides[2].style.display = "block";
        passedByOui = true;
    });

    slides[1].style.display = "block";
    a1Non.addEventListener("click", function() {
        console.log("a1Non is clicked");
        slides[1].classList.add("class_leaving");
        slides[3].style.display = "block";
        passedByNon = true;
    });



    //Question 2 
    a2Audepart.addEventListener("click", function() {
        console.log("a2Audepart is clicked");
        slides[2].classList.add("class_leaving");
        slides[4].style.display = "block";
        departClicked = true;
    });

    a2Alarrivee.addEventListener("click", function() {
        console.log("a2Alarrivee is clicked");
        slides[2].classList.add("class_leaving");
        slides[3].style.display = "block";
        arriveeClicked = true;
    });

    //Question 3 : Non 1 (Depart)

    suivantDepart.addEventListener("click", function() {
        console.log("suivantDepart is clicked");
        slides[3].classList.add("class_leaving");
        if (passedByOui) {
            slides[5].style.display = "block";
        }
        if (passedByNon) {
            slides[4].style.display = "block";
        }
    });

    //Question 4 : Non 2 (Arrivee)

    suivantArrivee.addEventListener("click", function() {
        console.log("suivantArrivee is clicked");
        slides[4].classList.add("class_leaving");
        slides[5].style.display = "block";
    });

    //Question 5 

    a5m.addEventListener("click", function() {
        slides[5].classList.add("class_leaving");
        slides[6].style.display = "block";
    })

    //Question 6 
    suivantLast.addEventListener("click", function() {
        slides[6].classList.add("class_leaving");
        slides[7].style.display = "block";
    })

    //Question 7
    finir.addEventListener("click", function() {
        slides[7].classList.add("class_leaving");
        slides[8].style.display = "block";
    })
}