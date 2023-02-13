const dakika = document.getElementById("dakika");
const saniye = document.getElementById("saniye");

const sectionDk = document.getElementById("section-dk");
const sectionSn = document.getElementById("section-sn");

const baslatbutonu = document.getElementById("baslat");
const sıfırlaButonu = document.getElementById("sıfırla");

const dayandırButonu = document.getElementById("dayandır");

function baslat(){
   baslatbutonu.classList.add("active");
    dayandırButonu.classList.remove("active");
};

function dayandır(){
     baslatbutonuclassList.remove("active");
     dayandırButonu.classList.add("active");
    clearInterval(baslatTimer);
};

let interval;

let dayan = false;

sectionDk.addEventListener("change", () =>{
    dakika.textContent = sectionDk.value; 
});

sectionSn.addEventListener("change", () =>{
    saniye.textContent = 
    sectionSn.value < 10 ? "0" + sectionSn.value : sectionSn.value;
});

baslatbutonu.addEventListener("click", startTimer);
sıfırlaButonu.addEventListener("click", () => {
    dayan = true;
    dakika.textContent = "00";
    saniye.textContent = "00";
    secilenDk.value = "00";
    secilenSn.value = "00";
});


    
function startTimer(){
    let dk = dakika.textContent;
    let sn = saniye.textContent;

    const interval = setInterval(() => {
        sn--;
        sn = sn < 10 ? "0" + sn : sn;
        if(sn == "0-1"){
            dk--;
            sn = 59;
        }
        if((dk == 00 && sn == 00) || (dk == 0 && sn == 0)){
            clearInterval(interval);
            secilenDk.value = "00";
            secilenSn.value = "00"; 
        }
        if(dayan){
            clearInterval(interval);
            return;
        }

        dayandırButonu.onclick = () => {
            clearInterval(interval);
        };

        dakika.textContent = dk;
        saniye .textContent = sn;

    }, 1000);
}

aud.volume = 0.07;

ringtone = new Audio(location);
if((dk == 00 && sn == 00) || (dk == 0 && sn == 0)){
    ringtone.play();
    ringtone.loop = true
}

localStorage;
