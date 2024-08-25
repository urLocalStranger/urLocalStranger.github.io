let horaires = [
    {name:"Roman\n", cours:["11111011011", "1110xxxxxxx", "11100110xxx", "11011100111", "xx01110110x"]},
    {name:"Zachary\n", cours:["xx011101110", "11110000011", "xx0110110xx", "xx01100110x", "01111101110"]},
    {name:"Michelle\n", cours:["0110000110x", "11100001110", "xx011000110", "1111110110x", "1101111110x"]},
    {name:"Mariya\n", cours:["11100110xxx", "11100000011", "11110110xxx", "1110111110x", "0111001110x"]},
    {name:"Layal\n", cours:["11001110xxx", "1110xxxxxxx", "1110110110x", "111011110xx", "110001110xx"]},
    {name:"Sarah-Jade\n", cours:["1111111110x", "x0110000011", "1111101110x", "11101101110", "xxxxxxxx011"]},
    {name:"Gavriel\n", cours:["x0111011011", "x0110xxxxxx", "11100110111", "011101110xx", "x0111110xxx"]},
    {name:"Viktor\n", cours:["xxxx0110xxx", "01110001110", "xx01100110x", "xx01110110x", "x0110011111"]}
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
const weekday = 5;//new Date().getDay();
const hours = 9;//new Date().getHours() + 1;
const minutes = new Date().getMinutes() + 1;
const ourdate = new Date("01", "01", "2020", hours , minutes, "00");
let liste = "";
console.log(ourdate);
console.log(weekday);
let hd;
let hf;
let hfav;

if(weekday<6){
    for(let i = 0; i < 11; i++){
        hd = hdebut[i].split(":");
        hf = hfin[i].split(":");
        if(i != 0){
            hfav = hfin[i-1].split(":");
        }else{
            hfav = hfin[i].split(":");
        }
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
            if(liste == ""){
                document.getElementById("textepresent").innerText = " Personne de libre...";
            }else{
                document.getElementById("textepresent").innerText = liste.replace(/\n/gm,'')
            }
            console.log(i)
            break;
        }else if(new Date("01", "01", "2020", hd[0], hd[1], "00") > ourdate && new Date("01", "01", "2020", hfav[0], hfav[1], "00") < ourdate){
            document.getElementById("textepresent").innerText = " C'est la pause... Tout le monde est libre...";
        }
    }
    if(hours >= 18 || hours < 8){
        document.getElementById("textepresent").innerText = " Personne est au cegep...";
    }
}
else{
    document.getElementById("textepresent").innerText = " Personne est au cegep...";
}
