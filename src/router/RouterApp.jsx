import { Route, Routes } from "react-router-dom";
import LoginPage from "../auth/pages/LoginPage";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";


const RouterApp = () => {
  return (
    <>
        <Routes>
            <Route path="/*" element={<HeroesRoutes/>}/>
            <Route path="login" element={<LoginPage/>} />
        </Routes>
    </>
  )
}

export default RouterApp
