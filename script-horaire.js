let horaires = [
    {name:"R", cours:["11111011011", "11100000000", "11100110000", "11011100111", "00011101100"]},
    {name:"Z", cours:["00011101110", "11110000011", "00011011000", "00011001100", "01111101110"]},
    {name:"Mi", cours:["01100001100", "11100001110", "00011000110", "11111101100", "11011111100"]},
    {name:"Ma", cours:["11100110000", "11100000011", "11110110000", "11101111100", "01110011100"]},
    {name:"L", cours:["11001110000", "11100000000", "11101101100", "11101111000", "11000111000"]}
]

let arr;
let abcd = ["a","b","c","d","e","f","g","h","i","j","k"]

for(let i = 0; i < horaires.length; i++){
    for(let j = 0; j < 5; j++){
        arr = horaires[i].cours[j].split("");
        for(let k = 0; k < 11; k++){
            console.log(abcd[k] + String(j))
            if(arr[k] == "1"){
                document.getElementById(abcd[k] + String(j+1)).innerText += horaires[i].name
            }
        }
    }
};

const hdebut = ["08:00", "08:55", "09:50", "10:45", "11:40", "12:35", "13:30", "14:25", "15:20", "16:15", "17:10"]
const hfin = ["08:50", "09:45", "10:40", "11:35", "12:30", "13:25", "14:20", "15:15", "16:10", "17:05", "18:00"]
const weekday = 1;//new Date().getDay();
const hours = new Date().getHours() + 1;
const minutes = new Date().getMinutes() + 1;
const ourdate = new Date("01", "01", "2020", "10", minutes, "00");
let liste = "";
console.log(ourdate);
console.log(weekday);
let hd;
let hf;
let hfav;

if(weekday<6){
    for(let i = 0; i < 11; i++){
        hd = hdebut[i].split(":")
        hf = hfin[i].split(":")
        hfav = hfin[i-1].split(":")
        if(new Date("01", "01", "2020", hd[0], hd[1], "00") < ourdate && new Date("01", "01", "2020", hf[0], hf[1], "00") > ourdate){
            for(let j = 0; j < horaires.length; j++){
                if(horaires[j].cours[weekday-1].split("")[i] == "0"){
                    if(liste == ""){
                        liste += " " + horaires[j].name;
                    }else{
                        liste += ", " + horaires[j].name;
                    }
                }
            }
            document.getElementById("textepresent").innerText = liste
            console.log(i)
            break;
        }else if(new Date("01", "01", "2020", hd[0], hd[1], "00") > ourdate && new Date("01", "01", "2020", hfav[0], hfav[1], "00") < ourdate){
            document.getElementById("textepresent").innerText = " C'est la pause..."
        }
    }
    //document.getElementById("textepresent").innerText = " Bro... il y a personne..."
}
else{
    document.getElementById("textepresent").innerText = " Bro... il y a personne..."
}
