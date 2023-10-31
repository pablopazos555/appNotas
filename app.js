const argv = require('./config/yargs').argv;
const crear = require('./porHacer/porHacer');
const colors = require('colors');

let comando = argv._[0];

switch(comando) {
    case 'crear':
       let tarea = crear.crear(argv.descripcion);
       console.log(tarea)
    break;

    case 'listar': 
       let lista = crear.getListado(argv.completado);

        for ( let tarea of lista) {
        console.log('========Por Hacer======='.green)
        console.log(tarea.descripcion)
        console.log('Estado:', tarea.completado)
        console.log('========================'.green)
        }
        
    break;

    case 'actualizar': 
    
    let listaActualizada = crear.actualizar(argv.descripcion, argv.completado);
    console.log(listaActualizada)

    break;

    case 'borrar': 

    let borrado = crear.borrar(argv.descripcion);
    console.log(borrado)

    break;

    default:
        console.log('Comando no reconocido')
}