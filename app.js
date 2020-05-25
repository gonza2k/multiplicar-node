// requires
//const fs = require('fs');
//const fs = require('express');
//const fs = require('./fs');
//console.log(module);

//console.log(process.argv);

//const argv = require('yargs')
//    .command('listar', 'Imprime en consola la tabla de multiplicar', {
//        base: {
//            demand: true,
//            alias: 'b'
//        },
//        limite: {
//            alias: 'l',
//            default: '10'
//        }
//    })
//    .command('crear', 'Genera un archivo con la tabla de multiplicar', {
//        base: {
//            demand: true,
//            alias: 'b'
//        },
//        limite: {
//            alias: 'l',
//            default: '10'
//        }
//    })
//    .help()
//    .argv;

const argv = require('./config/yargs').argv;

const colors = require('colors/safe');

const { crearArchivo, listarTabla } = multiplicar = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        //console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado `, colors.green(archivo)))
            .catch(e => console.log(e));

        console.log('Crear');
        break;

    default:
}

//let base = '2';
//let argv2 = process.argv;
//let param = argv[2];
//let base = param.split('=')[1];

//console.log(argv.base);
//console.log(argv.limite);

//console.log(argv2);

//console.log(base[1]);

//crearArchivo(base)
//    .then(archivo => console.log(`Archivo creado : ${ archivo }`))
//    .catch(e => console.log(e));