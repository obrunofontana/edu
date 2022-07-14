import { Route, Routes } from "react-router-dom";
import { Training } from "./pages/Training";

export function Router() {
  return (
    <Routes>
      <Route path="/"  element={<h1>Home</h1>} />
      <Route path="/training"  element={<Training />} />
      <Route path="/training/lesson/:slug"  element={<Training />} />
    </Routes>
  )
}