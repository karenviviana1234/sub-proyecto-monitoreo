function almacenarData(){
    let nom,line,anterio,actua,modu,gene,descrip,hadwa,softwa,oteo,funci,adic,clien
    nom = document.getElementById("nombre").value
    line = document.getElementById("linea").value
    anterio = document.getElementById("anterior").value
    actua = document.getElementById("actual").value
    modu = document.getElementById("modulo").value
    gene = document.getElementById("general").value
    descrip = document.getElementById("descripcion").value
    hadwa = document.getElementById("hadware").value
    softwa = document.getElementById("software").value
    oteo = document.getElementById("otro").value
    funci = document.getElementById("funcional").value
    adic = document.getElementById("adicional").value
    clien = document.getElementById("cliente").value

    localStorage.setItem("Nombre", nom);
    localStorage.setItem("Linea", line);
    localStorage.setItem("Anterior", anterio);
    localStorage.setItem("Actual", actua);
    localStorage.setItem("Modulo", modu);
    localStorage.setItem("General", gene);
    localStorage.setItem("Descripcion", descrip);
    localStorage.setItem("Hadware", hadwa);
    localStorage.setItem("Software", softwa);
    localStorage.setItem("Otro", oteo);
    localStorage.setItem("funcional", funci);
    localStorage.setItem("Adicional", adic);
    localStorage.setItem("Cliente", clien);

    document.getElementById("nombre").value ="";
    document.getElementById("linea").value ="";
    document.getElementById("anterior").value ="";
    document.getElementById("actual").value ="";
    document.getElementById("modulo").value ="";
    document.getElementById("general").value ="";
    document.getElementById("descripcion").value ="";
    document.getElementById("hadware").value ="";
    document.getElementById("software").value ="";
    document.getElementById("otro").value ="";
    document.getElementById("funcional").value ="";
    document.getElementById("adicional").value ="";
    document.getElementById("cliente").value ="";
}

const a = document.querySelector("#datoProducto")
const b = document.querySelector("#datoLinea")
const c = document.querySelector("#datoAnterior")
const d = document.querySelector("#datoActual")
const e = document.querySelector("#datoModulo")
const f = document.querySelector("#datoGeneral")
const g = document.querySelector("#datoDescripcion")
const h = document.querySelector("#datoHadware")
const i = document.querySelector("#datoSoftware")
const j = document.querySelector("#datoOtro")
const k = document.querySelector("#datoFuncional")
const l = document.querySelector("#datoAdicional")
const m = document.querySelector("#datoCliente")

function getData(){
    let nombre,line,ante,actu,modul,gener,descr,hadwa,sofwa,oteo,funci,adici,clien

    nombre = localStorage.getItem("Nombre");
    line = localStorage.getItem("Linea");
    ante = localStorage.getItem("Anterior");
    actu = localStorage.getItem("Actual");
    modul = localStorage.getItem("Modulo");
    gener = localStorage.getItem("General");
    descr = localStorage.getItem("Descripcion");
    hadwa = localStorage.getItem("Hadware");
    sofwa = localStorage.getItem("Software");
    oteo = localStorage.getItem("Otro");
    funci = localStorage.getItem("Funcional");
    adici = localStorage.getItem("Adicional");
    clien = localStorage.getItem("Cliente");


    a.innerHTML = nombre;
    b.innerHTML = line;
    c.innerHTML = ante;
    d.innerHTML = actu;
    e.innerHTML = modul;
    f.innerHTML = gener;
    g.innerHTML = descr;
    h.innerHTML = hadwa;
    i.innerHTML = sofwa;
    j.innerHTML = oteo;
    k.innerHTML = funci;
    l.innerHTML = adici;
    m.innerHTML = clien;
}