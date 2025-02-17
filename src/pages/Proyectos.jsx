import React from "react"
import { Link } from "react-router-dom"
import { projects } from "../data/projects.js"
import ProjectCard from "../components/ProjectCard"

const Projectos = () => {
  return (
    <main className="min-h-screen bg-[#1a1a1a] py-20">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
                <h1 className="text-3xl font-bold text-[#8b5cf6]">Todos los Proyectos</h1>
                <Link to="/" className="text-[#a78bfa] hover:text-[#8b5cf6] transition-colors">← Volver al inicio</Link>
            </div>      
        </div>
        <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {/* Mapea los proyectos y crea una tarjeta para cada uno */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Projectos
