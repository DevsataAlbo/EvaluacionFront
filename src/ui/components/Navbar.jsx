import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoutClick = (e) => {
    e.preventDefault();
    const swalWithBootstrapButtons = window.Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: "Noooo!!!!",
      text: "Estas seguro que quieres cerrar sesion?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, quiero salir!",
      cancelButtonText: "No, no quiero!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Ok, estas fuera!",
          text: "Tu sesion a cerrado correctamente",
          icon: "success"
        });
        navigate('/login');
      } else if (
        result.dismiss === window.Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelado",
          text: "Muy bien, tu sesion sigue activa :)",
          icon: "error"
        });
      }
    });
  };

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home"><img src="/assets/heroes/logotipo_personajes.jpg" alt="" /></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/anime">Anime</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/comic">Comic</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login" onClick={handleLogoutClick}>Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

