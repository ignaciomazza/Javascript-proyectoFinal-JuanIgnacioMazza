class zapatilla{
    constructor(modelo, stock){
        this.modelo = modelo.toLowerCase();
        this.stock = parseInt(stock);
    }
    sumaStock(cantidad){
        this.stock = this.stock + cantidad;
        return this.stock;
    }
    restaStock(cantidad){
        this.stock = this.stock - cantidad;
        return this.stock;
    }
}

const zapatillas = [];

zapatillas.push(new zapatilla("vans", "5"));
zapatillas.push(new zapatilla("nike", "5"));
zapatillas.push(new zapatilla("adidas", "5"));

let pregunta1 = prompt("Que operacion busca realizar? \n 1-Comprar \n 2-Ingresar Stock \n 3-Ingresar Modelo");
pregunta1 = pregunta1.toLowerCase();

if (pregunta1 === "ingresar stock"){

    let contra = prompt("Esta opcion es solo para empleados, ingrese la contraseña para continuar");

    if(contra === "1234"){
        let model = prompt("De que modelo desea ingresar stock?");
        model = model.toLowerCase();

        const existe = zapatillas.find((el) => el.modelo === model);

        if (existe){

            let cantidad = prompt("Cuantos pares ingresarian?");
            cantidad = parseInt(cantidad);

            zapatillas.forEach( (zapa)=>{
                if(zapa.modelo === model){
                    let cant = zapa.sumaStock(cantidad);
                    alert(`La cantidad de pares ${model} es: ${cant}`);
                }
            } );
            
        }else{

            alert("Lo siento no tenemos ese modelo");

        }
    }else{
        alert("Contraseña incorrecta!");
    }
    
}else if(pregunta1 === "comprar"){

    let model = prompt("Que modelo desea comprar?");
    model = model.toLowerCase();

    const existe = zapatillas.find((el) => el.modelo === model);

    if (existe){

        let cantidad = prompt("Que cantidad desea comprar?");
        cantidad = parseFloat(cantidad);

        zapatillas.forEach( (zapa)=>{
            if(zapa.modelo === model){
                let cant = zapa.restaStock(cantidad);
                alert(`Su compra de ${model} ha sido esxitosa!`);
            }
        } );

    }else{
            alert("Lo siento no tenemos ese modelo");
    }
}else if(pregunta1 === "ingresar modelo"){

    let contra = prompt("Esta opcion es solo para empleados, ingrese la contraseña para continuar");

    if(contra === "1234"){
        let model = prompt("Que modelo desea ingresar?");
        model = model.toLowerCase();

        const existe = zapatillas.find((el) => el.modelo === model);

        if(existe){
            alert("Ese modelo ya existe! Pruebe con otro modelo");
        }else{
            zapatillas.push(new zapatilla(model, "1"));
        }
    }else{
        alert("Contraseña incorrecta!");
    }

}

