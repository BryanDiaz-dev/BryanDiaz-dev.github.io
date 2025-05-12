import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { Linkedin, Instagram, Github } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import NavBar from '../components/NavBar'
import SkillCard from '../components/SkillCard'
import SkillsCategory from '../components/SkillCategory'
import ContactLink from '../components/ContactLink'

const Home = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className='min-h-screen bg-[#1a1a1a]'>
        <section id='inicio' className='container mx-auto pt-28 pb-16 sm:py-32 px-4'>
          <div className='text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-[#8b5cf6] mb-4'>¡Hola! Soy Bryan Diaz</h2>
            <p className='text-lg sm:text-xl text-[#a78bfa]'>Desarrollador Full Stack</p>
          </div>
        </section>

        <section id='tecnologias' className='bg-[#151515] py-20'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-[#8b5cf6] text-center mb-16'>Tecnologías y Herramientas</h2>
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12'>
              <SkillsCategory category='Lenguajes de Programación' emoji='⚡'>
                <SkillCard techName='HTML 5' />
                <SkillCard techName='JavaScript' />
                <SkillCard techName='Java' />
                <SkillCard techName='CSS3' />
                <SkillCard techName='MySQL' />
              </SkillsCategory>
              <SkillsCategory category='Frameworks y Librerías' emoji='📦'>
                <SkillCard techName='React' />
                <SkillCard techName='Tailwind CSS' />
                <SkillCard techName='Bootstrap' />
              </SkillsCategory>
              <SkillsCategory category='Herramientas de Desarrollo' emoji='🛠️'>
                <SkillCard techName='Visual Studio Code' />
                <SkillCard techName='phpMyAdmin' />
                <SkillCard techName='Git' />
                <SkillCard techName='GitHub' />
                <SkillCard techName='Postman' />
                <SkillCard techName='NodeJS' />
                <SkillCard techName='Docker' />
              </SkillsCategory>
            </div>
          </div>
        </section>

        <section id='sobre-mi' className='bg-[#1f1f1f] py-20'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-[#8b5cf6] text-center mb-12'>Sobre Mí</h2>
            <div className='max-w-3xl mx-auto text-[#a78bfa]'>
              <p className='mb-4 text-justify'>
                Soy un desarrollador Full Stack que está comenzando en el mundo de la programación, apasionado por la tecnología y el código. Me encanta programar y descubrir cómo con líneas de código se pueden lograr cosas increíbles. Estoy comprometido con el aprendizaje continuo y busco constantemente mejorar mis habilidades para enfrentar nuevos desafíos y crear soluciones innovadoras.
              </p>
            </div>
          </div>
        </section>

        <section id='proyectos' className='bg-[#1a1a1a] py-20'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-[#8b5cf6] text-center mb-12'>Mis Proyectos</h2>
            <div className='flex flex-wrap justify-around gap-9'>
              {projects.slice(0, 3).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className='text-center mt-12'>
              <Link
                to='/proyectos'
                className='inline-block bg-[#6d28d9] text-white px-8 py-3 rounded-lg hover:bg-[#5b21b6] transition-colors'
              >
                Ver Todos los Proyectos
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer id='contacto' className='bg-[#151515] py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-[#8b5cf6] text-center mb-8'>Contacto</h2>
          <div className='flex justify-center space-x-12'>
            <ContactLink icon={Github} link='https://github.com/BryanDiaz-dev' name='Github' />
            <ContactLink icon={Instagram} link='https://www.instagram.com/daniel_diazz._/' name='Instagram' />
            <ContactLink icon={Linkedin} link='https://www.linkedin.com/in/bryan-d-08457830a/' name='LinkedIn' />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home
