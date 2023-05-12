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

    document.getElementById("Nombre").value ="";
    document.getElementById("Linea").value ="";
    document.getElementById("Anterior").value ="";
    document.getElementById("Actual").value ="";
    document.getElementById("Modulo").value ="";
    document.getElementById("General").value ="";
    document.getElementById("Descripcion").value ="";
    document.getElementById("Hadware").value ="";
    document.getElementById("Software").value ="";
    document.getElementById("Otro").value ="";
    document.getElementById("Funcional").value ="";
    document.getElementById("Adicional").value ="";
    document.getElementById("Cliente").value ="";
}

 
   


