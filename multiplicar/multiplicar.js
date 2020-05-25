// requires
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    let datos = '';

    console.log('===================='.green);
    console.log(`==Tabla de ${ base }==`.green);
    console.log('===================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }\n`)
    }

}



crearArchivo = (base, limite = 10) => {


    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } No es un Numero!!!`);
            return;
        }

        let datos = '';

        for (let i = 1; i <= limite; i++) {
            datos += `${ base } * ${ i } = ${ base * i }\n`;
        }

        const data = new Uint8Array(Buffer.from('Hello Node'));

        fs.writeFile(`./tablas/tabla-${ base }-al-${ limite }.txt`, datos, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);

            //console.log('The file has been saved!');
        });


    })
}

module.exports = {
    crearArchivo,
    listarTabla
}