import { useNavigate, useParams } from "react-router-dom";
import { getHeroesById } from "../helper/getHeroById";
import { useEffect } from "react";

export const HeroPage = () => {
    const { id } = useParams();
    const hero = getHeroesById(id);
    const url = useNavigate();

    useEffect(() => {
        if (!hero) {
            const swalWithBootstrapButtons = window.Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-success",
                    cancelButton: "btn btn-danger"
                },
                buttonsStyling: false
            });

            swalWithBootstrapButtons.fire({
                title: "UUUPS!!!",
                text: "El personaje solicitado no existe, puedes volver a revisar en:",
                icon: "error",
                showCancelButton: true,
                confirmButtonText: "Anime",
                cancelButtonText: "Cómic",
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    url('/anime');
                } else if (result.dismiss === window.Swal.DismissReason.cancel) {
                    url('/comic');
                }
            });
        }
    }, [hero, url]);

    if (!hero) {
        return null;
    }

    const { nombre, tipo, origen, descripcion } = hero;

    return (
        <div className="cardHeroPage">
            <img
                src={`/assets/heroes/${id}.jpg`}
                className="card-img-top imgCardHeroPage"
                alt={`${nombre}`}
            />
            <div className="card-body bodyCardHeroPage">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">Tipo: {tipo}</p>
                <p className="card-text">Origen: {origen}</p>
                <p className="card-text">Descripcion: {descripcion}</p>
                <button className="btn btn-dark" onClick={() => url(-1)}>
                    Volver
                </button>
            </div>
        </div>
    );
};
