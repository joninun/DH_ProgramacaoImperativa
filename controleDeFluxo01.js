function podeSubir(altura, acompanhada){
    let podeSubir = false;
    if (altura > 1.4 && altura < 2){
        podeSubir = true; 
        console.log('Pode subir');
    }
    if (altura < 1.4 && altura >= 1.2 && acompanhada == true){
        podeSubir = true;
        console.log('Pode subir acompanhada');
    }
    if (altura < 1.2){
        podeSubir = false;
        console.log('Não pode subir');
    }
    return podeSubir;
}
console.log(podeSubir(1.1, true));