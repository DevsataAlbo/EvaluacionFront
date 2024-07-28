// import { heroes } from "../data/heroes"

import { getHeroesByTipe } from "../helper/getHeroesByTipe"
import { HeroesCard } from "./HeroesCard"


export const HeroesList = ({tipo}) => {

    const heroes = getHeroesByTipe(tipo)

    return (
      <>
          
            <h2 className="text-center my-4">Lista de personajes de {tipo}</h2>
            <div className="container">
                <div className="row">
                      {
                          heroes.map(aux => (
                              <HeroesCard key={aux.id} {...aux} />
                            ))
                        }
                </div>
            </div>
      </>
    )
}

        