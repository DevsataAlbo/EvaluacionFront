import { Navigate, Route, Routes } from "react-router-dom"
import { Footer, Navbar } from "../../ui/components"
import { AnimePage, ComicPage, HeroPage, HomePage } from "../pages"



export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Navigate to="home"/>} />
            <Route path="home" element={<HomePage/>} />
            <Route path="anime" element={<AnimePage/>} />
            <Route path="comic" element={<ComicPage/>} />
            <Route path="hero/:id" element={<HeroPage/>} />
        </Routes>
        <Footer/>
    </>
  )
}
