let jouer = true;
let btnarr = ["col1", "col2", "col3", "col4", "col5", "col6", "col7"];
let hori = ["_______","_______","_______","_______","_______","_______"];
let verti = ["______","______","______","______","______","______", "______"];
let diag1 = ["_", "__", "___", "____", "_____","______", "______", "_____", "____", "___", "__", "_"];
let diag2 = ["_", "__", "___", "____", "_____","______", "______", "_____", "____", "___", "__", "_"];

const col1L = listener(btnarr[0]);
const col2L = listener(btnarr[1]);
const col3L = listener(btnarr[2]);
const col4L = listener(btnarr[3]);
const col5L = listener(btnarr[4]);
const col6L = listener(btnarr[5]);
const col7L = listener(btnarr[6]);

let playernum = 0;

function listener(id){
  document.getElementById(id).addEventListener("click", function(){
  if(jouer){
    start(Number(id.replaceAll("col","")));
  }
  });
}

function start(cn){
    let id;
    let color;
    let placementId;
  
// Où placer
    for(let i = 41 - (6 - (cn - 1)); i >= cn - 1; i -= 7){
      id = document.getElementsByClassName("cases")[i].id;
      color = window.getComputedStyle(document.getElementById(id)).getPropertyValue("background-color");
      if(color == "rgb(122, 194, 162)"){
        placementId = id;
        break;
      }
      else{
        continue;
      }
    }

    if(placementId != null){
      if(playernum % 2 == 0){
        document.getElementById(placementId).style.backgroundColor = "#df527e";
        memory(placementId, "red");
      }
      else{
        document.getElementById(placementId).style.backgroundColor = "#f1c746";
        memory(placementId, "yellow");
      }
      playernum += 1;
    }
    else{
      console.log("Remplie!");
    }
    hori.forEach(verification);
    verti.forEach(verification);
    for(let i = 3; i < 8; i++){
      verification(diag1[i]);
      verification(diag2[i]);
    }
}

function memory(id, co){
  let r = ranId(id);
  let c = colId(id);
  let ci = co.charAt(0).toUpperCase()
  
  hori[r] = scI(hori[r], c, ci);
  verti[c] = scI(verti[c], r, ci);
  diag1[r+c] = scI(diag1[r+c], r, ci);
  diag2[r+c] = scI(diag2[r+c], c, ci);
}


function ranId(id){
  let rarr = ["a", "b", "c", "d", "e", "f"];
  return rarr.indexOf(id.charAt(0))
}

function colId(id){
  let carr = ["1", "2", "3", "4", "5", "6", "7"];
  return carr.indexOf(id.charAt(1));
}

function verification(v){
  let verifR = v.replaceAll("RRRR", "");
  let verifY = v.replaceAll("YYYY", "");

  if(verifR.length <= v.length - 4){
    console.log("Rouge gagne!!!");
    jouer = false; 
  }
  else if(verifY.length <= v.length - 4){
    console.log("Jaune gagne!!!");
    jouer = false;
  }
}

function scI(str, index, char){
  str = str.split(''); 
  str.splice(index, 1, char);
  str = str.join('');
  return str;
}

function restart(){
  hori = ["_______","_______","_______","_______","_______","_______"];
  verti = ["______","______","______","______","______","______", "______"];
  diag1 = ["_", "__", "___", "____", "_____","______", "______", "_____", "____", "___", "__", "_"];
  diag2 = ["_", "__", "___", "____", "_____","______", "______", "_____", "____", "___", "__", "_"];
  jouer = true;
  for(let i = 0; i < 42; i++){
    document.getElementsByClassName("cases")[i].style.backgroundColor = "#7ac2a2";
  }
  playernum = 0;
}


/*function uValue(){
  let arrarr = [hori, verti];
  let idArrarr = 0;
  let verifR = v.replaceAll("RRR_", "");
  let verifY = v.replaceAll("YYY_", "");
  for(let i = 0; i < arrarr[idArrarr].length; i++){
    let utilityHR = arrarr[idArrarr];
    v.replaceAll("RRR", "");
  }
}*/

function intervention(){
  
}
