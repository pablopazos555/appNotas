const descripcion = {
    demand : true,
    alias : 'd'
}

const argv = require ('yargs')
 .command('crear', 'Crea un elemento por hacer', {
    descripcion 
 })
 .command('actualizar', 'Actualiza el estado completado de una tarea', {
    descripcion,
    completado : {
        alias : 'c',
        default: true 
    }
 })
 .command('borrar', 'Borra un elemento', {
    descripcion 
 })
 .command('listar', 'Imprime lista de tareas', {
    completado : {
        alias : 'c'
    }
 })
 .help()
 .argv;

 module.exports = {
    argv
 }