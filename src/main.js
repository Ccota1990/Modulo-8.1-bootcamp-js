const reservas = [
    {
        id: 23453,
        precio: 250,
        habitacion: "standard",
        prepago: false,
        completadaConExito: true,
    },
    {
        id: 56456,
        precio: 150,
        habitacion: "superior",
        prepago: false,
        completadaConExito: true,
    },
    {
        id: 43243,
        precio: 550,
        habitacion: "standard",
        prepago: true,
        completadaConExito: false,
    },
    {
        id: 23223,
        precio: 550,
        habitacion: "standard",
        prepago: true,
        completadaConExito: true,
    },
    {
        id: 89232,
        precio: 650,
        habitacion: "superior",
        prepago: true,
        completadaConExito: false,
    },
    ];
       

    const reservasQueHanFallado = [];

    for (let i = 0; i< reservas.length; i++) {
        if (!reservas[i].completadaConExito){
            reservasQueHanFallado.push(reservas[i]);
        }
    }; 

    console.log("reservas que han fallado", reservasQueHanFallado);

   

    for (let i =0; i<reservas.length; i++){
        if (reservas[i].habitacion === 'standard') {
            reservas[i].habitacion = 'superior';
            break;
        } 
    };

    console.log(reservas);

    

    const reservasConDescuento = [];
    for (let i = 0; i < reservas.length; i++) {
        const reservaConDescuento = {
        ...reservas[i],
        precio: reservas[i].precio * 0.9,
    };
     reservasConDescuento.push(reservaConDescuento);
    }

    console.log("Reservas con descuento: ", reservasConDescuento);

    let totalPrecio = 0;

    for (let i =0; i<reservas.length; i++){
        totalPrecio = totalPrecio + reservas[i].precio;
    }

    console.log(totalPrecio)



  