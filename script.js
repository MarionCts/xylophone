// CREATING & PUSHING HTML ELEMENTS

const container = document.createElement("div");
container.classList.add("container");
const body = document.querySelector("body");
body.append(container);

for (let i = 0; i <= 7; i++) {
    let xylo = document.createElement("div");
    xylo.classList.add("xylo");
    container.append(xylo);
}

// KEY NOTE CLASSES

let xylo = document.querySelectorAll(".xylo");
let Do = xylo[1].classList.add("xyloDo");
let Re = xylo[2].classList.add("xyloRe");
let Mi = xylo[3].classList.add("xyloMi");
let Fa = xylo[4].classList.add("xyloFa");
let Sol = xylo[5].classList.add("xyloSol");
let La = xylo[6].classList.add("xyloLa");
let Si = xylo[7].classList.add("xyloSi");

// SELECTING KEY NOTES

let xyloDo = document.querySelector(".xyloDo");
let xyloRe = document.querySelector(".xyloRe");
let xyloMi = document.querySelector(".xyloMi");
let xyloFa = document.querySelector(".xyloFa");
let xyloSol = document.querySelector(".xyloSol");
let xyloLa = document.querySelector(".xyloLa");
let xyloSi = document.querySelector(".xyloSi");

// SOUND FILES - REGULAR

const doNote = `Mallet Note/Mallet C1.wav`;
const reNote = `Mallet Note/Mallet D1.wav`;
const miNote = `Mallet Note/Mallet E1.wav`;
const faNote = `Mallet Note/Mallet F1.wav`;
const solNote = `Mallet Note/Mallet G1.wav`;
const laNote = `Mallet Note/Mallet A1.wav`;
const siNote = `Mallet Note/Mallet B1.wav`;

// SOUND FILES - HIGH PITCHED

const doNoteHigh = `Mallet Note/Mallet C2.wav`;
const reNoteHigh = `Mallet Note/Mallet D2.wav`;
const miNoteHigh = `Mallet Note/Mallet E2.wav`;
const faNoteHigh = `Mallet Note/Mallet F2.wav`;
const solNoteHigh = `Mallet Note/Mallet G2.wav`;
const laNoteHigh = `Mallet Note/Mallet A2.wav`;
const siNoteHigh = `Mallet Note/Mallet B2.wav`;

// LISTENING EVENTS - MOUSE

const mousePlay = (key, note, note2) => {
    key.addEventListener("click", function(event) {
        let audioElement;
            if (event.shiftKey) {
                audioElement = new Audio(note2);
            } else {
                audioElement = new Audio(note);
            }
            return audioElement.play();
            }
            )
        }
        

mousePlay(xyloDo, doNote, doNoteHigh);
mousePlay(xyloRe, reNote, reNoteHigh);
mousePlay(xyloMi, miNote, miNoteHigh);
mousePlay(xyloFa, faNote, faNoteHigh);
mousePlay(xyloSol, solNote, solNoteHigh);
mousePlay(xyloLa, laNote, laNoteHigh);
mousePlay(xyloSi, siNote, siNoteHigh);




// let touchesDirectionnelles = ["ArrowLeft", "ArrowRight"];

// document.addEventListener("keydown", function(e) {
//     if (touchesDirectionnelles.includes(e.key)) {
//         e.preventDefault();
//         }
//         switch (e.key) {
//             case "ArrowLeft": 
            
//             break;
//             case "ArrowRight": 
            
//             break;
//             case "ArrowDown": 
            
//             break;
//             case "ArrowUp": 
            
//             break;
//         }
//     }
// )