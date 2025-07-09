import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"

const IndexPage = lazy(() => import("./pages/IndexPage"))
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"))
const GenerateAIPage = lazy(() => import("./pages/GenerateAIPage"))

export default function AppRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={
                        <Suspense fallback="Cargando...">
                            <IndexPage />
                        </Suspense>
                    } index />
                    <Route path="/favoritos" element={
                        <Suspense fallback="Cargando...">
                            <FavoritesPage />
                        </Suspense>
                    } />
                    <Route path="/generate" element={
                        <Suspense fallback="Cargando...">
                            <GenerateAIPage />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
