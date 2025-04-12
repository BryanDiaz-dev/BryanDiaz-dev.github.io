import React from "react"
import { Link } from "react-router-dom"
import NavBar from '../components/NavBar'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import { GitHubIcon } from '../assets/icons/redes/github'
import { InstagramIcon } from '../assets/icons/redes/instagram'
import { LinkedInIcon } from '../assets/icons/redes/linkedin'
import SkillCard from  '../components/SkillCard'


const Home = () => {


    return (
        <main className="min-h-screen bg-[#1a1a1a]">
            <NavBar />

            <section id="inicio" className="container mx-auto pt-28 pb-16 sm:py-32 px-4">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#8b5cf6] mb-4">¡Hola! Soy Bryan Diaz</h2>
                    <p className="text-lg sm:text-xl text-[#a78bfa]">Desarrollador Full Stack</p>
                </div>
            </section>

            <section id="habilidades" className="bg-[#151515] py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-[#8b5cf6] text-center mb-16">Tecnologías y Herramientas</h2>
                    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">            
                        {/* Columna izquierda */}
                        <div className="space-y-6 sm:space-y-8">
                            <div className="bg-[#222222] p-4 sm:p-8 rounded-xl border border-[#6d28d9]/20">
                                <h3 className="text-xl sm:text-2xl font-bold text-[#8b5cf6] mb-4 sm:mb-6 flex items-center gap-2">
                                    <span className="text-[#7c3aed]">⚡</span> Lenguajes
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
                                    <SkillCard techName="Java" />
                                    <SkillCard techName="Java Script" />
                                    <SkillCard techName="CSS3" />
                                    <SkillCard techName="MySQL" />
                                </div>
                            </div>
                            <div className="bg-[#222222] p-8 rounded-xl border border-[#6d28d9]/20">
                                <h3 className="text-2xl font-bold text-[#8b5cf6] mb-6 flex items-center gap-2">
                                    <span className="text-[#7c3aed]">📦</span> Frameworks y Librerías
                                </h3>
                                <div className="grid grid-cols-3 gap-6">
                                    <SkillCard techName="React" />
                                    <SkillCard techName="Tailwind CSS" />
                                </div>
                            </div>
                            <div className="bg-[#222222] p-8 rounded-xl border border-[#6d28d9]/20">
                                <h3 className="text-2xl font-bold text-[#8b5cf6] mb-6 flex items-center gap-2">
                                    <span className="text-[#7c3aed]">💻</span> Sistemas y Entornos
                                </h3>
                                <div className="grid grid-cols-3 gap-6">
                                    <SkillCard techName="Windows" />
                                    <SkillCard techName="Linux distros" />
                                    <SkillCard techName="Consola/Terminal" />
                                </div>
                            </div>
                        </div>
                        {/* Columna derecha */}
                        <div className="space-y-8">
                            <div className="bg-[#222222] p-8 rounded-xl border border-[#6d28d9]/20">
                                <h3 className="text-2xl font-bold text-[#8b5cf6] mb-6 flex items-center gap-2">
                                    <span className="text-[#7c3aed]">🛠️</span> Entornos y Herramientas de Desarrollo
                                </h3>
                                <div className="grid grid-cols-3 gap-6">
                                    <SkillCard techName="VS Code" />
                                    <SkillCard techName="phpMyAdmin" />
                                </div>
                            </div>
                            <div className="bg-[#222222] p-8 rounded-xl border border-[#6d28d9]/20">
                                <h3 className="text-2xl font-bold text-[#8b5cf6] mb-6 flex items-center gap-2">
                                    <span className="text-[#7c3aed]">🔄</span> Control de Versiones y Gestión de Código
                                </h3>
                                <div className="grid grid-cols-3 gap-6">
                                    <SkillCard techName="Git" />
                                    <SkillCard techName="Github" />
                                    <SkillCard techName="Docker" />
                                    <SkillCard techName="Postman" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="sobre-mi" className="bg-[#1f1f1f] py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-[#8b5cf6] text-center mb-12">Sobre Mí</h2>
                    <div className="max-w-3xl mx-auto text-[#a78bfa]">
                        <p className="mb-4">
                        Soy un desarrollador de software apasionado por la tecnología y el 
                        aprendizaje continuo. Me especializo en el desarrollo de aplicaciones 
                        web, de escritorio y en la gestión de bases de datos. Disfruto explorando 
                        nuevas herramientas y frameworks para mejorar mis habilidades y optimizar 
                        mis proyectos. Mi capacidad de adaptación y resolución de problemas me permite 
                        enfrentar nuevos desafíos con eficacia. Siempre estoy en busca de oportunidades 
                        para seguir creciendo en el mundo del desarrollo.
                        </p>
                    </div>
                </div>
            </section>

            <section id="proyectos" className="bg-[#1a1a1a] py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-[#8b5cf6] text-center mb-12">Mis Proyectos</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                        {projects.slice(0, 3).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
            
                    {/* Botón Ver Más */}
                    <div className="text-center mt-12">
                        <Link 
                            to="/proyectos" 
                            className="inline-block bg-[#6d28d9] text-white px-8 py-3 rounded-lg hover:bg-[#5b21b6] transition-colors"
                        >
                            Ver Todos los Proyectos
                        </Link>
                    </div>
                </div>
            </section>

            <section id="redes-sociales" className="bg-[#151515] py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-[#8b5cf6] text-center mb-8">Mis Redes Sociales</h2>
                    <div className="flex justify-center space-x-12">
                        <a 
                            href="https://github.com/BryanDiaz-dev" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center"
                        >
                        <div className="w-16 h-16 bg-[#222222] rounded-full flex items-center justify-center mb-3 group-hover:bg-[#6d28d9] transition-colors">
                            <div className="w-8 h-8 text-[#a78bfa] group-hover:text-white transition-colors flex items-center justify-center">
                                <GitHubIcon />
                            </div>
                        </div>
                        <span className="text-[#a78bfa] group-hover:text-[#8b5cf6] transition-colors">GitHub</span>
                        </a>
                        <a 
                            href="https://www.instagram.com/daniel_diazz._/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center"
                        >
                        <div className="w-16 h-16 bg-[#222222] rounded-full flex items-center justify-center mb-3 group-hover:bg-[#6d28d9] transition-colors">
                            <div className="w-8 h-8 text-[#a78bfa] group-hover:text-white transition-colors flex items-center justify-center">
                                <InstagramIcon />
                            </div>
                        </div>
                        <span className="text-[#a78bfa] group-hover:text-[#8b5cf6] transition-colors">Instagram</span>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/bryan-d-08457830a/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center"
                        >
                        <div className="w-16 h-16 bg-[#222222] rounded-full flex items-center justify-center mb-3 group-hover:bg-[#6d28d9] transition-colors">
                            <div className="w-8 h-8 text-[#a78bfa] group-hover:text-white transition-colors flex items-center justify-center">
                                <LinkedInIcon />
                            </div>
                        </div>
                        <span className="text-[#a78bfa] group-hover:text-[#8b5cf6] transition-colors">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home