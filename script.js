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

// KEY NOTES CLASSES

let xylo = document.querySelectorAll(".xylo");
let Do = xylo[1].classList.add("xyloDo");
let Re = xylo[2].classList.add("xyloRe");
let Mi = xylo[3].classList.add("xyloMi");
let Fa = xylo[4].classList.add("xyloFa");
let Sol = xylo[5].classList.add("xyloSol");
let La = xylo[6].classList.add("xyloLa");
let Si = xylo[7].classList.add("xyloSi");

// KEY NOTES TABLE

const tableNotes = [
    {
        note: "Do",
        base: `Mallet Note/Mallet C1.wav`,
        high: `Mallet Note/Mallet C2.wav`,
        sharp: `Mallet Note/Mallet C#2.wav`,
    },
    {
        note: "Re",
        base: `Mallet Note/Mallet D1.wav`,
        high: `Mallet Note/Mallet D2.wav`,
        sharp: `Mallet Note/Mallet D3.wav`,
    },
    {
        note: "Mi",
        base: `Mallet Note/Mallet E1.wav`,
        high: `Mallet Note/Mallet E2.wav`,
        sharp: `Mallet Note/Mallet E3.wav`,
    },
    {
        note: "Fa",
        base: `Mallet Note/Mallet F1.wav`,
        high: `Mallet Note/Mallet F2.wav`,
        sharp: `Mallet Note/Mallet F3.wav`,
    },
    {
        note: "Sol",
        base: `Mallet Note/Mallet G1.wav`,
        high: `Mallet Note/Mallet G2.wav`,
        sharp: `Mallet Note/Mallet G3.wav`,
    },
    {
        note: "La",
        base: `Mallet Note/Mallet A1.wav`,
        high: `Mallet Note/Mallet A2.wav`,
        sharp: `Mallet Note/Mallet A3.wav`,
    },
    {
        note: "Si",
        base: `Mallet Note/Mallet B1.wav`,
        high: `Mallet Note/Mallet B2.wav`,
        sharp: `Mallet Note/Mallet B3.wav`,
    },
];

// PLAYING MUSIC WITH THE MOUSE

const mousePlay = (key, note, note2, note3) => {
    key.addEventListener("click", function(event) {
        let audioElement;
            if (event.shiftKey) {
                audioElement = new Audio(note2);
            } else if (event.altKey) {
                audioElement = new Audio(note3);
            } else {
                audioElement = new Audio(note);
            }
            return audioElement.play();
            }
            )
        }
        

mousePlay(xylo[1], tableNotes[0].base, tableNotes[0].high, tableNotes[0].sharp);
mousePlay(xylo[2], tableNotes[1].base, tableNotes[1].high, tableNotes[1].sharp);
mousePlay(xylo[3], tableNotes[2].base, tableNotes[2].high, tableNotes[2].sharp);
mousePlay(xylo[4], tableNotes[3].base, tableNotes[3].high, tableNotes[3].sharp);
mousePlay(xylo[5], tableNotes[4].base, tableNotes[4].high, tableNotes[4].sharp);
mousePlay(xylo[6], tableNotes[5].base, tableNotes[5].high, tableNotes[5].sharp);
mousePlay(xylo[7], tableNotes[6].base, tableNotes[6].high, tableNotes[6].sharp);

// PLAYING MUSIC WITH THE KEYS

let audioNumber = 0;
let oldNumber;
let audioElement;

    let touchesDirectionnelles = ["ArrowLeft", "ArrowRight"];
    document.addEventListener("keydown", function(e) {
        
        if (touchesDirectionnelles.includes(e.key)) {
            e.preventDefault();
            }
            switch (e.key) {
                case "ArrowLeft": 
                    oldNumber = audioNumber;
                    if (audioNumber >= 0) {
                        audioNumber -= 1;
                    } else {
                        audioNumber -= 0;
                    }
                    console.log(audioNumber, oldNumber);
                    audioElement = new Audio(tableNotes[audioNumber].base);
                    audioElement.play();
                break;
                case "ArrowRight":
                    oldNumber = audioNumber;
                    if (audioNumber < tableNotes.length) {
                        audioNumber += 1;
                    } else {
                        audioNumber += 0;
                    }
                    console.log(audioNumber, oldNumber);
                    audioElement = new Audio(tableNotes[audioNumber].base);
                    audioElement.play();
                break;
            }
        }
    )
