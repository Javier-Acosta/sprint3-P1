import SuperHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {
        return await SuperHero.findById(id);

    }
    async obtenerTodos() {
        return await SuperHero.find({});

    }
    async buscarPorAtibuto(atributo, valor) {
        const query = {
            [atributo]: new RegExp(valor, 'i')
        };
        return await SuperHero.find(query);
    }
    async ObtenerMayoresDe30() {
        return await SuperHero.find({ edad: { $gt: 30 }, planetaOrigen: 'Tierra', poderes: { $size: { $gte: 2 } } });
    }

    async agregarSuperheroeNuevo(nuevoSuperheroe) {
        try {
            const superheroe = new SuperHero(nuevoSuperheroe); // crea una isnstancia del modelo 
            return await superheroe.save(); //guarda en la base de datos
        } catch (error) {
            console.error("Error al agregar al superheroe", error);
            throw error;

        }
    }
    async actualizarSuperheroe(id, datosActualizados) {
        try {
            const superheroeActualizado = await SuperHero.findByIdAndUpdate(id, { $set: datosActualizados }, { new: true } //devuelve el docuemnto actualizado
            );
            return await superheroeActualizado; //guarda en la base de datos
        } catch (error) {
            console.error("Error en actualizarSuperheroe", error.message);
            throw new Error("No se pudo actualizar el superhéroe en la base de datos");

        }
    }

    async eliminarSuperheroePorId(id) {
        try {
            const superheroeEliminado = await SuperHero.findByIdAndDelete(id);
            return superheroeEliminado;
        } catch (error) {
            console.error("Error al eliminar superheroe", error.message);
            throw new Error("No se pudo eliminar superheroe por ID en la base de datos");

        }
    }

    async eliminarSuperheroePorNombre(nombre) {
        try {
            const superheroesEliminado = await SuperHero.deleteMany({ nombreSuperHeroe: nombre });
            return superheroesEliminado;
        } catch (error) {
            console.error("Error en eliminarSuperheroePorNombre", error.message);
            throw new Error("No se pudo eliminar superheroe por el nombre en la base de datos");

        }
    }
}
export default new SuperHeroRepository();