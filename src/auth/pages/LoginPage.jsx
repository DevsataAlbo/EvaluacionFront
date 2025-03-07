import { NavLink } from "react-router-dom"

const LoginPage = () => {
  return (
    <>
      <section className="vh-100 gradient-custom fondo-login">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Ingresa tus credenciales!</p>
                    <div data-mdb-input-init className="form-outline form-white mb-4">
                      <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                      <label className="form-label" >Email</label>
                    </div>
                    <div data-mdb-input-init className="form-outline form-white mb-4">
                      <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                      <label className="form-label" >Password</label>
                    </div>

                    <NavLink className="btn btn-outline-light btn-lg px-5" to="/" data-mdb-button-init data-mdb-ripple-init type="submit">Login</NavLink>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default LoginPage
