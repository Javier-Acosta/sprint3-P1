class IRepository {
    obtenerPorId(id) {
        throw new Error("Metodo 'ObtenerPorId()' no implementado");

    }
    obtenerTodos() {
        throw new Error("Metodo 'ObtenerTodos()' no implementado ");
    }

    buscarPorAtibuto(atributo, valor) {
        throw new Error("Metodo 'BuscarPorAtributo' no implementado");
    }
    ObtenerMayoresDe30() {
        throw new Error("Metodo 'ObtenerMayoresDe30' no implementado");
    }

    agregarSuperheroeNuevo() {
        throw new Error("Método:' agregarSuperheroeNuevo' no implementado");
    }
    actualizarSuperheroe(id, datosActualizados) {
        throw new Error("Método:' actualizarSuperheroe' no implementado");
    }
    eliminarSuperheroePorId(id) {
        throw new Error("Método:' aliminarSuperheroePorId' no implementado");
    }
    eliminarSuperheroePorNombre(nombreSuperheroe) {
        throw new Error("Método: 'eliminarSuperheroePorNombre ' no implementado");
    }


}
export default IRepository;