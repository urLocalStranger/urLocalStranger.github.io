let horaires = [
    {name:"Roman\n", cours:["11112011011", "1110xxxxxxx", "11100110xxx", "11011100111", "xx01110110x"]},
    {name:"Zachary\n", cours:["xx011101110", "11110000011", "xx0110110xx", "xx01100110x", "01111101110"]},
    {name:"Michelle\n", cours:["0120000110x", "11100001110", "xx011000110", "1111110110x", "1101111110x"]},
    {name:"Mariya\n", cours:["11100110xxx", "1110xxxx011", "11110110xxx", "1110111110x", "0111001110x"]},
    {name:"Layal\n", cours:["11001110xxx", "1110xxxxxxx", "1110110110x", "111011110xx", "110001110xx"]},
    {name:"Sarah-Jade\n", cours:["1100000110x", "01110000011", "1111101110x", "11101101110", "xxxxxxxx011"]},
    {name:"Gavriel\n", cours:["x0112011011", "x0110xxxxxx", "11100110111", "011101110xx", "x0111110xxx"]},
    {name:"Victor\n", cours:["xxxx0110xxx", "01110001110", "xx01100110x", "xx01110110x", "x0110011111"]},
    {name:"Xinqi\n", cours:["11100000111", "11000001111", "x01110xxxxx", "11111100111", "11100110xxx"]}
]

let arr;
let abcd = ["a","b","c","d","e","f","g","h","i","j","k"]

function getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;

    for (var i=0, iLen=options.length; i<iLen; i++) {
        opt = options[i];

        if (opt.selected) {
        result.push(opt.value || opt.text);
        }
    }
    return result;
}

function tableaufxt(param){
    for(let i = 0; i < horaires.length; i++){
        if(getSelectValues(document.getElementById("selection")).includes(String(i))){
            for(let j = 0; j < 5; j++){
                arr = horaires[i].cours[j].split("");
                for(let k = 0; k < 11; k++){
                    console.log(abcd[k] + String(j))
                    if(param == "c"){
                        if(arr[k] == "1" || arr[k] == "2"){
                            document.getElementById(abcd[k] + String(j+1)).innerText += horaires[i].name
                        }
                    }
                    else if(param == "d"){
                        if(arr[k] == "0" || arr[k] == "2"){
                            document.getElementById(abcd[k] + String(j+1)).innerText += horaires[i].name
                        }
                    }
                    else{
                        document.getElementById(abcd[k] + String(j+1)).innerText = ""
                        for(let j = 0; j < 5; j++){
                            for(let k = 0; k < 11; k++){
                                if(document.getElementById(abcd[k] + String(j+1)).className == "impair"){
                                    document.getElementById(abcd[k] + String(j+1)).style.backgroundColor = "#ffffff";
                                }else{
                                    document.getElementById(abcd[k] + String(j+1)).style.backgroundColor = "#f8f8f8";
                                }
                            }
                        }
                    }
                }
            }
        }
    };
}

tableaufxt("c")
const slct = document.getElementById("selection").addEventListener("change", reset)

const optcours = document.getElementById("drpdwn").addEventListener("click", reset)

function reset(){
    if(document.getElementById("drpdwn").innerText != "Cours"){
        tableaufxt("0")
        tableaufxt("c")
        document.getElementById("drpdwn").innerText = "Cours"
    }else if(document.getElementById("drpdwn").innerText != "Dispo"){
        tableaufxt("0")
        tableaufxt("d")
        document.getElementById("drpdwn").innerText = "Dispo"
    }
}

let str;
let target;
const searchbar = document.getElementById("searchbtn").addEventListener("click", function(){
    str = document.getElementById("search").value;
    for(let j = 0; j < 5; j++){
        for(let k = 0; k < 11; k++){
            target = document.getElementById(abcd[k] + String(j+1))
            if(target.innerText.includes(str) && str != ""){
                target.style.backgroundColor = "#fffcbd"
            }
            else{
                console.log("lol")
                if(target.className == "impair"){
                    target.style.backgroundColor = "#ffffff";
                }else{
                    target.style.backgroundColor = "#f8f8f8";
                }
            }
        }
    }
})

/*const hdebut = ["08:00", "08:55", "09:50", "10:45", "11:40", "12:35", "13:30", "14:25", "15:20", "16:15", "17:10"]
const hfin = ["08:50", "09:45", "10:40", "11:35", "12:30", "13:25", "14:20", "15:15", "16:10", "17:05", "18:00"]
const weekday = new Date().getDay() - 1;
const hours = new Date().getHours();
const minutes = new Date().getMinutes();
const ourdate = new Date("01", "01", "2020", hours , minutes, "00");
let liste = "";
console.log(ourdate);
console.log(weekday);
let hd;
let hf;
let hfav;

if(weekday<5 && weekday>=0){
    console.log(weekday);
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
        document.getElementById("textepresent").innerText = " Personne est au cégep...";
    }
}
else{
    document.getElementById("textepresent").innerText = " Personne est au cégep...";
}*/


