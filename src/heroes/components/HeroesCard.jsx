import { Link } from "react-router-dom"

export const HeroesCard = ({ id, nombre, tipo, origen, descripcion }) => {
  const imgCard = `/assets/heroes/${id}.jpg`
  return (
        <div className="card cardHero col-md-8 col-lg-4 mb-5 px-0">
          <img src={imgCard} alt="..." className="mx-0 px-0"/>
          <div className="card-body">
            <h5 className="card-title mb-4">{nombre}</h5>
            <Link to={`/hero/${id}`} className="btn btn-dark" >Ver mas...</Link>
          </div>
        </div>
  )
}
