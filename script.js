let idArray1 = ["n1d1", "n1d2", "n1d3", "n1d4", "n2d1", "n2d2", "n2d3", "n2d4", "n3d1", "n3d2", "n3d3", "n3d4", "n4d1", "n4d2", "n4d3", "n4d4", "n5d1", "n5d2", "n5d3", "n5d4", "n5d5"];
let idArray2 = ["n6d1", "n6d2", "n6d3", "n7d1", "n7d2", "n7d3", "n7d4", "n7d5", "n8d1"];
let idArray3 = ["n11d1", "n13d1", "n13d2", "n13d3", "n13d4", "n14d1", "n14d2", "n14d3", "n14d4", "n14d5", "n15d1", "n15d2", "n15d3", "n15d4"];
const start1 = document.getElementById("btn").addEventListener("click", calculs1);
const start2 = document.getElementById("btnp2").addEventListener("click", calculs2);
const start3 = document.getElementById("btnp3").addEventListener("click", calculs3);

function calculs1(){
  idArray1.forEach(newCookie);
  console.log(decodeURIComponent(document.cookie));
  let hC = Math.round(hChateau(id("n1d1"), id("n1d2"), id("n1d3"), id("n1d4")) * 100)/100;
  let dC = Math.round(dChateau(id("n2d1"), id("n2d2"), id("n2d3"), id("n2d4"), hC) * 100)/100;
  let kR = Math.round(kRessort(id("n3d1"), id("n3d2"), id("n3d4"), hC) * 100)/100;
  let tC = tCordes(id("n4d1"), id("n4d2"), id("n4d3"), id("n4d4"), id("n3d3"));
  let dl = Math.round(dLentille(id("n5d1", false), id("n5d2"), id("n5d3"), id("n5d4"), id("n5d5")) * 10000)/10000;
  
  document.getElementById("cdon").style.display = "none";
  element("h1", "Résultats");
  element("a", `no1:\n${hC} m`);
  element("b", `no2:\n${dC} m`);
  element("c", `no3:\n${kR}`);
  element("d", `no4:\nt1 = ${Math.round(tC[0] * 100)/100} N\nt2 = ${Math.round(tC[1] * 100)/100} N`);
  element("e", `no5:\n${dl} m`);
  element("intror", "Et voici les résultats!");
  document.getElementById("next").style.display = "flex";
  window.scrollTo(0,0);
}

function calculs2(){
  idArray2.forEach(newCookie);
  console.log(decodeURIComponent(document.cookie));
  let hC = Math.round(hChateau(getCookie("n1d1", false), getCookie("n1d2", false), getCookie("n1d3", false), getCookie("n1d4", false)) * 100)/100;
  let hP = Math.round(perche(id("n6d1"), id("n6d2")) * 100)/100;
  let aP = aPente(id("n7d1"), id("n7d2"), id("n7d3"), id("n7d4"), id("n7d5"), getCookie("n3d1", false), hC);
  let dM = dMontagne(id("n8d1"), id("n7d5"), aP[1], hC, getCookie("n3d1", false));
  let tS = Math.round(tSon(dM[0], id("n8d1"), hC, dM[1]) * 100)/100;
  
  document.getElementById("cdon").style.display = "none";
  element("h1", "Résultats");
  element("a", `no6:\n${hP} m`);
  element("b", `no7:\n${Math.round(aP[0] * 100)/100} °`);
  element("c", `no8:\n${Math.round(dM[0] * 100)/100} m`);
  element("d", `no9:\n${tS} s`);
  element("e", `no10:\n${Math.round(dM[2] * 100)/100} J`);
  element("intror", "Et voici les résultats!");
  document.getElementById("next").style.display = "flex";
  window.scrollTo(0,0);
}

function calculs3(){
  idArray3.forEach(newCookie);
  console.log(decodeURIComponent(document.cookie));
  let vV = Math.round(vVaisseau(id("n11d1")) * 100000)/100000;
  let cV = cVetement()
  let vP = vPhysicien(id("n13d1"), id("n13d2"), id("n13d3"), id("n13d4"));
  let vL = Math.round(vLasso(id("n14d1"), id("n14d2"), id("n14d3"), id("n14d4"), id("n14d5")) * 100)/100;
  let tL = Math.round(tLasso(id("n15d1"), id("n15d2"), id("n15d3"), id("n15d4"), id("n14d2")) * 100)/100;
  
  document.getElementById("cdon").style.display = "none";
  element("h1", "Résultats");
  element("a", `no11:\n${vV} m/s`);
  element("b", `no12:\n${cV[0]}\n ${cV[1]}\n ${cV[2]}`);
  element("c", `no13:\n${Math.round(vP[0] * 100)/100} m/s`);
  element("d", `no14:\n${vL} m/s`);
  element("e", `no15:\n${tL} N`);
  element("intror", "Et voici les résultats!");
  window.scrollTo(0,0);
}

function hChateau(x, t1, v, t2){
  let ombreC = ms(v) * t1;
  let longueurB = mrua(t2, -9.8, 0, "taixf");
  return ombreC * (-longueurB/x);
}
 
function dChateau(f2, d12, hi2, di2, hChateau){
  let do2 = doif(f2, di2, "fio");
  let di1 = do2 - d12;
  let hi1 = grandissement(hi2, do2, di2, "iôîo");
  return grandissement(di1, hi1, hChateau, "îioô");
}

function kRessort(m, v, d, hChateau){
  let ekf = ek(m, v, "mve");
  let epf = ep(m, 9.8, hChateau/2, "mghe");
  let em = ekf + epf; //Aussi epr
  return epr(em, d, "exk");
}

function tCordes(m, coeff, angle1, angle2, anglePente){
  let fg = 9.8 * m;
  let fgy = fg * cos(anglePente);
  let fgx = fg * sin(anglePente);
  let ff = fgy * coeff;
  let ft2 = fgx + ff;
  let ft1x = ft2 * sin(angle2); //Ft1x = Ft2x
  let ft1 = ft1x / (sin(angle1));
  return [ft1, ft2];
}

function dLentille(forme, r1, r2, vr, h){
  let r12 = rayons((r1/100), (r2/100), forme);
  let vr1 = 0.52 * ((1/r12[0])+(1/r12[1]));
  console.log("C1 = " + vr1);
  let vrt = vr1 + vr;
  console.log("Ctot = " + vrt);
  let f = 1 / vrt;
  return ((0.3 / h) + 1) * f;
}

function perche(h, d){
  let z = [h,d];
  console.log(z);
  let angleR = 90 - atan(h / d);
  console.log(angleR);
  let angleO = asin((sin(angleR)) / 1.33);
  console.log(angleO);
  return (d * tan(90 - angleO)) - h;
}

function aPente(portee, lpente, kr, xressort, angleR, m, hChateau){
  let eRessort = epr(kr, xressort, "kxe");
  let viR = Math.sqrt((portee * 9.8) / sin(2 * angleR));
  let ekLancement = ek(m, viR, "mve");
  let ekfPente = ekLancement - eRessort;
  let hPente = ep(m, 9.8, ekfPente, "mgeh");
  let angle = asin(hPente / lpente);

  return [angle, viR];
}

function dMontagne(hMontagne, aCatapulte, viCatapulte, hChateau, m){
  let viy = viCatapulte * sin(aCatapulte);
  console.log("viy" + viy);
  let y = (hChateau / 2) - hMontagne;
  console.log("y" + y);
  let t = mrua(y, -9.8, viy, "xaitf");
  console.log("t" + t);
  let vix = viCatapulte * cos(aCatapulte);
  console.log("vix" + vix);
  
  let vfy = mrua(t, -9.8, viy, "taifx");
  let vf = Math.sqrt(Math.pow(vfy, 2) + Math.pow(vix, 2));
  let ekTour = ek(vf, m, "vme");
  
  return [vix * t, t, ekTour];
}

function tSon(dMontagne, hMontagne, hChateau, temps){
  let h = hChateau/2;
  let dSon = Math.sqrt(Math.pow(dMontagne, 2) + Math.pow((hMontagne - h), 2));
  return (dSon / 340) + temps;
}

function vVaisseau(h){
  return Math.sqrt((Math.pow(10,13)*6.67*5.9736)/((h * 1000) + 6380000));
}


function cVetement(){
  let coArray = [[scColor("n12d1"), scColor("n12d2"), scColor("n12d3")], [scColor("n12d4"), scColor("n12d5"), scColor("n12d6")]];
  let v = [];
  for(let i = 0; i <= 2; i++){
    if(coArray[0][i] == "red" && coArray[1][i] == "blue"){
      v.push("blanc");
    }
    else if(coArray[0][i] == "red" && coArray[1][i] == "black"){
      v.push("rouge");
    }
    else if(coArray[0][i] == "black" && coArray[1][i] == "blue"){
      v.push("bleu");
    }
    else if(coArray[0][i] == "black" && coArray[1][i] == "black"){
      v.push("vert");
    }
  }
  return v;
}

function vPhysicien(vi1, x1, t1, vf2){
  let a = mrua(vi1, t1, x1, "itxaf");
  let vf1 = mrua(vi1, t1, x1, "itxfa");
  let x2 = mrua(vf1, a, vf2, "iafxt");
  let t2 = mrua(vf1, a, vf2, "iaftx");
  let xPhy = Math.sqrt(Math.pow(x1, 2) + Math.pow(x2, 2));
  let vPhy = xPhy / (t1 + t2);
  let oPhy = atan(x2 / (x1));
  let z = [a, vf1, x2, t2, xPhy];
  console.log(z);
  return [vPhy, oPhy];
}

function vLasso(d1, vm, vc, d2, t){
  let vM = ms(vm);
  let vC = ms(vc);
  let dFin = -(vC-vM) * t + d1;
  let tLancer = -((d2-d1)/(vC-vM));
  let tLasso = t - tLancer;
  let xLasso = (tLasso * vM) + d2;
  let z = [vM, vC, dFin, tLancer, tLasso, xLasso];
  console.log(z);
  return (xLasso / tLasso) - vC;
}

function tLasso(d, h, lLasso, m, vM){
  let a = mrua(ms(vM), d, 0, "ixfat");
  let fx = m * -a;
  let angle = asin(h/lLasso);
  console.log([a, fx, angle]);
  return fx / cos(angle);
}

function setCookie(a){
  a.forEach(mehCookie);
}

function mehCookie(n){
  getCookie(n);
}

function newCookie(name){
  const date = new Date();
  date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
  let expires = "expires="+date.toUTCString();
  let value = document.getElementById(name).value
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
  document.cookie = name + "=" + value + ";" + expires + ";path=/partiedeux-physique";
  console.log("New Cookie!");
}

function getCookie(name, html = true){
	let cookie = decodeURIComponent(document.cookie);
  let cs = cookie.replace(/;/g, "");
	let c = cs.split(/=|\s/g);
  for(let i = 0; i <= c.length - 2; i+=2){
    if (c[i] == name){
      if(html){
        document.getElementById(name).value = c[i+1];
      }
      else{
        return Number(c[i+1]);
      }
    }
    else{
      continue;
    }
  }
}

function element(id, content){
  document.getElementById(id).innerText = content;
}

function id(code, nb = true){
  donnéehtml = document.getElementById(code).value;
  if (nb){
    return Number(donnéehtml);
  }
  else{
    return donnéehtml;
  }
}

function switchColor(id){
  let element = document.getElementById(id);
  let color = window.getComputedStyle(element).getPropertyValue("background-color");
  let newColor;
  switch(color){
    case "rgb(232, 26, 19)":
      newColor = "#3c75de";
      break;
    case "rgb(60, 117, 222)":
      newColor = "#1f2021";
      break;
    case "rgb(31, 32, 33)":
      newColor = "#e81a13";
      break;
  }
  element.style.backgroundColor = newColor;
}

function scColor(id){
  bc = window.getComputedStyle(document.getElementById(id)).getPropertyValue("background-color");
  switch(bc){
    case "rgb(232, 26, 19)":
      return "red";
    case "rgb(60, 117, 222)":
      return "blue";
    case "rgb(31, 32, 33)":
      return "black";
    default:
      return "aucune possible...";
  }
}



//Fonctions pour les formules de physique...

function kmh(x) {
  return x * 3.6;
}

function ms(x) {
  return x / 3.6;
}

function sin(angle){
  return Math.sin(angle * (Math.PI / 180));
}

function cos(angle){
  return Math.cos(angle * (Math.PI / 180));
}

function tan(angle){
  return Math.tan(angle * (Math.PI / 180));
}

function asin(d){
  return Math.asin(d) * (180 / Math.PI);
}

function acos(d){
  return Math.acos(d) * (180 / Math.PI);
}

function atan(d){
  return Math.atan(d) * (180 / Math.PI);
}

function rayons(r1, r2, forme){
  switch (forme.trim().toLowerCase()){
    case "biconvexe":
      return [r1, r2];
    case "biconcave":
        return [-r1, -r2];
    case "ménisque convergent":
      return [(-(Math.max(r1, r2))),(Math.min(r1, r2))];
    case "ménisque divergent":
      return [(Math.max(r1, r2)),(-(Math.min(r1, r2)))];
    default:
      return [0,0];
  }
}

function mrua(d1, d2, d3, p) {
  //params: i=vi, f=vf, x=Δx, t=Δt, a=a
  let d = [d1, d2, d3];

  if(p.length != 5){
    return "invalid param!";
  }

  let x = d[p.indexOf('x')];
  let a = d[p.indexOf('a')];
  let i = d[p.indexOf('i')];
  let f = d[p.indexOf('f')];
  let t = d[p.indexOf('t')];

  switch (p.slice(3,5)) {
    case "fx":
      return i + (a * t);
    case "ix":
      return f - (a * t);
    case "ax":
      return (f - i) / t;
    case "tx":
      return (f - i) / a;
    case "xa":
      return ((i + f) * t) / 2;
    case "ia":
      return ((2 * x) / t) - f;
    case "fa":
      return ((2 * x) / t) - i;
    case "ta":
      return (2 * x) / (i + f);
    case "ft":
      return Math.sqrt(Math.pow(i,2) + (2 * a * x));
    case "it":
      return Math.sqrt(Math.pow(f,2) - (2 * a * x));
    case "at":
      return (Math.pow(f,2) - Math.pow(i,2)) / (2 * x);
    case "xt":
      return (Math.pow(f,2) - Math.pow(i,2)) / (2 * a);
    case "xf":
      return (i * t) + (0.5 * a * Math.pow(t,2));
    case "if":
      return (x - (0.5 * a * Math.pow(t,2))) / t;
    case "af":
      return (x - (i * t)) / (0.5 * Math.pow(t,2));
    case "tf":
        return Math.max(((-i + Math.sqrt(Math.pow(i,2) + (2 * a * x))) / (a)), (((-i - Math.sqrt(Math.pow(i,2) + (2 * a * x))) / (a))));
    case "xi":
      return (f * t) - (0.5 * a * Math.pow(t,2));
    case "fi":
      return (x + (0.5 * a * Math.pow(t,2))) / t;
    case "ai":
      return (x - (f * t)) / (-0.5 * Math.pow(t,2));
    case "ti":
      return (-f + Math.sqrt(Math.pow(f,2) - (2 * a * x))) / (-a);
    default:
      return "...?";
  }
}

function fr(d1, d2, p){
  //params: f=fRessort, x=Δx, k=kr
  let d = [d1, d2];

  if(p.length != 3){
    return "invalid param!";
  }

  let f = d[p.indexOf('f')];
  let x = d[p.indexOf('x')];
  let k = d[p.indexOf('k')];

  switch (p.slice(2,3)){
    case "f":
      return x * k;
    case "x":
      return f / k;
    case "k":
      return f / x;
    default:
      return "...?";
  }
}

function epr(d1, d2, p){
  //params: e=Epotentiel de rappel, k=kr, x=Δx
  let d = [d1, d2];

  if(p.length != 3){    
    return "invalid param!";  
  }  
  let e = d[p.indexOf('e')];  
  let x = d[p.indexOf('x')];  
  let k = d[p.indexOf('k')];

  switch(p.slice(2,3)){
  case "e":
    return 0.5 * Math.pow(x,2) * k;
  case "k":
    return e/(Math.pow(x,2) * 0.5);
  case "x":
    return Math.sqrt(e/(0.5 * k));

  }
}

function ek(d1, d2, p){
  //params: e=Ek,m=masse, v=vitesse
  let d = [d1, d2];
  if(p.length != 3){
    return "invalid params!";
  }
  
  let e = d[p.indexOf('e')];
  let m = d[p.indexOf('m')];
  let v = d[p.indexOf('v')];

  switch(p.slice(2,3)){
    case "e":
      return 0.5 * Math.pow(v,2) * m;
   case "m":
      return e/(Math.pow(v,2) * 0.5);
    case "v":
      return Math.sqrt(e/(0.5 * m));
    default:
      return "...?";
  }
}

function ep(d1, d2, d3, p){
  //params: e=Ek, m=masse, g=gravité, h=hauteur
  let d = [d1, d2, d3];
  if(p.length != 4){
    return "invalid params!";
  }

  let e = d[p.indexOf('e')];
  let m = d[p.indexOf('m')];
  let g = d[p.indexOf('g')];
  let h = d[p.indexOf('h')];
  switch(p.slice(3,4)){
    case "e":
      return m * g * h;
   case "m":
      return e / (g * h);
    case "g":
      return e / (m * h);
    case "h":
      return e / (m * g);
    default:
      return "...?";
  }
}

function doif(d1, d2, p){
    //params: o=Do, i=Di, f=foyer
  let d = [d1, d2];
  if(p.length != 3){
    return "invalid params!";
  }

  let o = d[p.indexOf('o')];
  let i = d[p.indexOf('i')];
  let f = d[p.indexOf('f')];

  switch(p.slice(2,3)){
    case 'f':
      return 1 / ((1 / o) + (1 / i));
   case 'o':
      return 1 / ((1 / f) - (1 / i));
    case 'i':
      return 1 / ((1 / f) - (1 / o));
    default:
      return "...?";
  }
}

function grandissement(d1, d2, d3, p){
  //params: o=Ho, ô=Do, i=Hi, î=Di
  let d = [d1, d2, d3];  
  if(p.length != 4){
    return "invalid params!";
  }
  let ho = d[p.indexOf('o')];
  let do_ = d[p.indexOf('ô')];
  let hi = d[p.indexOf('i')];
  let di = d[p.indexOf('î')];

  switch(p.slice(3,4)){
    case "o":
      return hi / (-di / do_);
   case "i":
      return ho * (-di / do_);
    case "ô":
      return -di / (hi / ho);
    case "î":
      return -do_ * (hi / ho);
    default:
      return "...?";
  }
}


