import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";

export async function obtenerSuperheroePorId(id) {

    return await SuperHeroRepository.obtenerPorId(id);


}
export async function obtenerTodosLosHeroes() {
    return await SuperHeroRepository.obtenerTodos();

}

export async function BuscarSuperheroesPorAtributo(atributo, valor) {

    return await SuperHeroRepository.BuscarSuperheroesPorAtributo(atributo, valor);

}

export async function obtenerSuperheroesMayorDe30() {

    return await SuperHeroRepository.obtenerSuperheroesMayorDe30();


}
export async function agregarSuperheroeNuevo(nuevoSuperheroe) {
    return await SuperHeroRepository.agregarSuperheroeNuevo(nuevoSuperheroe);



}
export async function actualizarSuperheroe(id, datosActualizados) {
    return await SuperHeroRepository.actualizarSuperheroe(id, datosActualizados);



}
export async function eliminarSuperheroePorId(id) {
    return await SuperHeroRepository.eliminarSuperheroePorId(id);



}
export async function eliminarSuperheroePorNombre(nombreSuperHeroe) {
    return await SuperHeroRepository.eliminarSuperheroePorNombre(nombreSuperHeroe);



}