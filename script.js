
let idArray1 = ["n1d1", "n1d2", "n1d3", "n1d4", "n2d1", "n2d2", "n2d3", "n2d4", "n3d1", "n3d2", "n3d3", "n3d4", "n4d1", "n4d2", "n4d3", "n4d4", "n5d1", "n5d2", "n5d3", "n5d4", "n5d5"];
let idArray2 = ["n6d1", "n6d2", "n6d3", "n7d1", "n7d2", "n7d3", "n7d4", "n7d5", "n8d1"]
const start1 = document.getElementById("btn").addEventListener("click", calculs1);
const start2 = document.getElementById("btnp2").addEventListener("click", calculs2);

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
  element("a", `no1: ${hC} m`);
  element("b", `no2: ${dC} m`);
  element("c", `no3: ${kR}`);
  element("d", `no4: t1 = ${Math.round(tC[0] * 100)/100} N\nt2 = ${Math.round(tC[1] * 100)/100} N`);
  element("e", `no5: ${dl} m`);
  element("intror", "Et voici les résultats!");
  document.getElementById("next").style.display = "flex";
  window.scrollTo(0,0);
}

function calculs2(){
  console.log("2");
  idArray2.forEach(newCookie);
  console.log(decodeURIComponent(document.cookie));
  let hC = Math.round(hChateau(getCookie("n1d1", false), getCookie("n1d2", false), getCookie("n1d3", false), getCookie("n1d4", false)) * 100)/100;
  let hP = Math.round(perche(id("n6d1"), id("n6d2")) * 100)/100;
  let aP = aPente(id("n7d1"), id("n7d2"), id("n7d3"), id("n7d4"), id("n7d5"), getCookie("n3d1", false));
  let dM = dMontagne(id("n8d1"), id("n7d5"), aP[1], hC);
  let tS = Math.round(tSon(dM[0], id("n8d1"), hC, dM[1]) * 100)/100;
  
  document.getElementById("cdon").style.display = "none";
  element("h1", "Résultats");
  element("a", `no1: ${hP} m`);
  element("b", `no2: ${Math.round(aP[0] * 100)/100} °`);
  element("c", `no3: ${Math.round(dM[0] * 100)/100} m`);
  element("d", `no4: ${tS} s`);
  element("e", `no5: ${Math.round(aP[2] * 100)/100} m`);
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
  console.log("Ep = " + epf);
  let em = ekf + epf; //Aussi epr
  console.log("Em = " + em);
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
  let angleR = 90 - atan(h / d);
  let angleO = asin(1.33 * (sin(angleR)));
  return (d * tan(90 - angleO)) - h;
}

function aPente(portee, lpente, kr, xressort, angleR, m){
  let eRessort = epr(kr, xressort, "kxe");
  let viR = Math.sqrt((portee * 9.8) / sin(2 * angleR));
  let ekLancement = ek(m, v, "mve");
  let ekfPente = ekLancement - eRessort;
  let hPente = ep(m, 9.8, ekfPente, "mgeh");
  let angle =asin(hPente / lpente);

  let vf = mrua(y, 9.8, viy, "xaift");
  let ekTour = ek(vf, m, "vme");

  return [angle, viR, ekTour];
}

function dMontagne(hMontagne, aCatapulte, viCatapulte, hChateau){
  let viy = viCatapulte * sin(aCatapulte);
  let y = (hChateau / 2) - hMontagne;
  let t = mrua(y, 9.8, viy, "xaitf");
  let vix = viCatapulte * cos(aCatapulte);
  return [vix * t, t];
}

function tSon(dMontagne, hMontagne, hChateau, temps){
  dSon = Math.sqrt((dMontagne ^ 2) + ((hMontagne - (hChateau / 2)) ^ 2));
  return (dSon / 340) + temps;
}




function setCookie(a){
  a.forEach(mehCookie);
}

function mehCookie(n){
  getCookie(n);
}

function newCookie(name){
  const date = new Date();
  date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
  let expires = "expires="+date.toUTCString();
  let value = document.getElementById(name).value
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
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
        return c[i+1];
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
    case "ménisque convergeant":
      return [-(Math.max(r1, r2)),Math.min(r1, r2)];
    case "ménisque divergeant":
      return [Math.max(r1, r2),-(Math.min(r1, r2))];
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
      return (-i + Math.sqrt(Math.pow(i,2) + (2 * a * x))) / (a);
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
    return Math.sqrt(e/(0,5 * k));

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
      return Math.sqrt(e/(0,5 * m));
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



