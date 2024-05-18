const start = document.getElementById("btn").addEventListener("click", calculs);

function calculs(){
  let hC = Math.round(hChateau(id("n1d1"), id("n1d2"), id("n1d3"), id("n1d4")) * 100)/100;
  let dC = Math.round(dChateau(id("n2d1"), id("n2d2"), id("n2d3"), id("n2d4"), hC) * 100)/100;
  let kR = Math.round(kRessort(id("n3d1"), id("n3d2"), id("n3d4"), hC) * 100)/100;
  let tC = tCordes(id("n4d1"), id("n4d2"), id("n4d3"), id("n4d4"), id("n3d3"));
  let dl = Math.round(dLentille(id("n5d1", false), id("n5d2"), id("n5d3"), id("n5d4"), id("n5d5")) * 10000)/10000;
  document.getElementById("cdon").style.display = "none";
  element("h1") = "Résultats";
  element("a") = `no1: ${hC} m`;
  element("b") = `no2: ${dC} m`;
  element("c") = `no3: ${kR}`;
  element("d") = `no4: t1 = ${Math.round(tC[0] * 100)/100} N\nt2 = ${Math.round(tC[1] * 100)/100} N`;
  element("e") = `no5: ${dl} m`;
  element("intror") = "Et voici les résultats!";
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





function element(id){
  return document.getElementById(id).innerText;
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

