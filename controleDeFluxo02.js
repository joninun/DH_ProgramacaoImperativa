function estacao(est){
    switch(est){
        case "Verao":
            console.log("que calor, ein?")
            break;
        case "Inverno":
            console.log("Que frio!")
            break;
        case "Outono": 
            console.log("É a estação que as folhas caem")
            break;
        case "Primavera": 
            console.log('É o momento que as flores crescem')
            break;
        default:
            console.log('Opção Inválida!')
    }
    return est
}estacao('outono')