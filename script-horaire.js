let horaires = [
    {name:"Roman\n", cours:["1120110110x", "1110xx01110", "1111000110x", "1100112xxxx", "xxx01120011"]}, 
    {name:"Zachary\n", cours:["xx011000110", "xxxxxx01111", "11112011111", "11101111100", "x0110011111"]},
    {name:"Michelle\n", cours:["01111110xxx", "xxxxxx01111", "x0111001111", "xxx01101110", "xxxxxxxxxxx"]}, 
    {name:"Mariya\n", cours:["0110112110x", "110xxxxx011", "11110110xxx", "11100110112", "110112xxxxx"]},
    {name:"Layal\n", cours:["111011110xx", "0111000110x", "1111201110x", "x01110110xx", "11001110xxx"]},
    {name:"Sarah-Jade\n", cours:["xxxxxxxxxxx", "x0110000011", "11101120xxx", "x0110001110", "xxxxxxxxxxx"]},
    {name:"Gavriel\n", cours:["xxxx0110011", "11100001111", "x0110000110", "x0110110011", "xx011100110"]},
    {name:"Victor\n", cours:["xxxxxxxxxxx", "xxxxxxxxxxx", "xxxxxxxxxxx", "xxxxxxxxxxx", "xxxxxxxxxxx"]},
    {name:"Xinqi\n", cours:["1100110xxxx", "x0110001111", "11110000111", "111110110xx", "112110xxxxx"]}
]

let arr, cases;
let denied = [];
let abcd = ["a","b","c","d","e","f","g","h","i","j","k"];

function getSelectValues(select) {
    let result = [];
    let options = select && select.options;
    let opt;

    for (let i=0, iLen=options.length; i<iLen; i++) {
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
                    cases = document.getElementById(abcd[k] + String(j+1))
                    if(param == "c"){
                        if(arr[k] == "1" || arr[k] == "2"){
                            cases.innerText += horaires[i].name
                        }else if(arr[k] == "x"){
                            denied.push(abcd[k] + String(j+1))
                        }
                    }
                    else if(param == "d"){
                        if(arr[k] == "0" || arr[k] == "2"){
                            cases.innerText += horaires[i].name
                        }
                    }
                    else{
                        cases.innerText = ""
                        for(let j = 0; j < 5; j++){
                            for(let k = 0; k < 11; k++){
                                if(cases.className == "impair"){
                                    cases.style.backgroundColor = "#ffffff";
                                }else{
                                    cases.style.backgroundColor = "#f8f8f8";
                                }
                            }
                        }
                    }

                }
            }
        }
    }
}

tableaufxt("c")
const slct = document.getElementById("selection").addEventListener("change", reset)

const optcours = document.getElementById("drpdwn").addEventListener("click", reset)

function reset(){
    btntext = document.getElementById("drpdwn")
    tableaufxt("0")
    if(btntext.innerText != "Cours"){
        tableaufxt("c")
        btntext.innerText  = "Cours"
    }else{
        tableaufxt("d")
        btntext.innerText = "Dispo"
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
            /*if(target.innerText == "" && denied.includes(abcd[k] + String(j+1)) == false){
                target.style.backgroundColor = "#89f590"
            }*/
            else{
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
}
*/

