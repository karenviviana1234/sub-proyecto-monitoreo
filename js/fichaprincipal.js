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

function cargarData(){
    let nombre,line,ante,actu,modul,gener,descr,hadwa,sofwa,oteo,funci,adici,clien

    nombre = localStorage.getItem("nombre");
    line = localStorage.getItem("linea");
    ante = localStorage.getItem("anterior");
    actu = localStorage.getItem("actual");
    modul = localStorage.getItem("modulo");
    gener = localStorage.getItem("general");
    descr = localStorage.getItem("descripcion");
    hadwa = localStorage.getItem("hadware");
    sofwa = localStorage.getItem("software");
    oteo = localStorage.getItem("otro");
    funci = localStorage.getItem("funcional");
    adici = localStorage.getItem("adicional");
    clien = localStorage.getItem("cliente");


    a.innerHTML = nombre;
    b.innerHTML = linea;
    c.innerHTML = anterior;
    d.innerHTML = actual;
    e.innerHTML = modulo;
    f.innerHTML = general;
    g.innerHTML = descripcion;
    h.innerHTML = hadware;
    i.innerHTML = sofware;
    j.innerHTML = otro;
    k.innerHTML = funcional;
    l.innerHTML = adicional;
    m.innerHTML = cliente;
}

cargarData()
