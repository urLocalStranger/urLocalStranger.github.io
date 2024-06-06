let btnarr = [col1, col2, col3, col4, col5, col6, col7];
const col1L = listener(btnarr[0]);
const col2L = listener(btnarr[1]);
const col3L = listener(btnarr[2]);
const col4L = listener(btnarr[3]);
const col5L = listener(btnarr[4]);
const col6L = listener(btnarr[5]);
const col7L = listener(btnarr[6]);
let colnum;

function listener(id){
  document.getElementById(id).addEventListener("click", function(){
  colnum = Number(id.replaceAll("col",""));
  start(colnum);
});
}

function start(cn){
    let id;
    let color;
    let placementId;

    for(let i = cn + 41; i > cn - 1; i -= 7){
        id = document.getElementByClassName("cases")[i].id;
        color = window.getComputedStyle(getElementById(id)).getPropertyValue("background-color");
        if(color == "rgb(122, 194, 162)"){
            placementId = id;
            break;
        }
        else{
            continue;
        }
    }
    if(placementId != null){
        document.getElementById(placementId).style.backgroundColor = "#df527e";
    }
}




