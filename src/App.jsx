import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projectos from './pages/Proyectos'
import ProjectDetail from './pages/ProjectDetail'
import NotFound from './pages/NotFound'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/proyectos' element={<Projectos />} />
      <Route path='/project/:id' element={<ProjectDetail />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
