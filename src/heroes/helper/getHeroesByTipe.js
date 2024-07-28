import { heroes } from "../data/heroes";

export const getHeroesByTipe = (tipo) => {
    const aux = ['anime', 'comic'];

    if (!aux.includes(tipo)) {
        throw new Error(`El tipo ${tipo} no se encuentra.`)
    }
    return heroes.filter( hero => hero.tipo === tipo);
}