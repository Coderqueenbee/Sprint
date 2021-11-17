function calcularPocentajes(limitePM10,limitePM2punto5, limiteNO2, limiteCO, limiteS02, valorPM10, valorPM2punto5, valorNO2, valorCO,
    valorS02){


    return {
        porcentajePM10: limitePM10=0?0:valorPM10,
        porcentajePMpunto2:limitePM2punto5=0?0:valorPM2punto5,
        porcentajeNO2:limiteNO2=0?0:valorNO2, 
        porcentajeCO:limiteCO=0?0:valorCO, 
        porcentajeSO2:limiteS02=0?0:valorS02
    }