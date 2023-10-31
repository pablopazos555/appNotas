const fs = require ('fs');

let listaPendientes = [];

const crearDB = () => {
    data = JSON.stringify(listaPendientes);
    fs.writeFile('db/data.json', data,  (err) => {
        if (err) throw new Error('No se pudo grabar', err);
})};

const cargarDB = () => {

    try {
        listaPendientes = require('../db/data.json');
    } catch {
        listaPendientes = [];
    }
}

const getListado = (completado) => {
    cargarDB();
    
     const nuevaLista = listaPendientes.filter(tarea => {
        return tarea.completado === completado
    });
    listaPendientes = nuevaLista;
    return listaPendientes
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = listaPendientes.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listaPendientes[index].completado = completado;
        crearDB(); 
        return true; 
    } else {
        return false; 
    }
    
}

const crear = (descripcion) => {
    
    cargarDB();

    let pendiente = {
        descripcion,
        completado: false 
    };
    
    listaPendientes.push(pendiente);
    crearDB();

    return pendiente;
}

const borrar = (descripcion) => {

    cargarDB();
    let index = listaPendientes.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        let borrado = listaPendientes.splice(index, 1);
        crearDB(); 
        return true; 
    } else {
        return false; 
    }
}


module.exports = {
    crear,
    getListado, 
    actualizar,
    borrar

}