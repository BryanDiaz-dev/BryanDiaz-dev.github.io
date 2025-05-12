import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

const ProjectDetail = () => {
  const { id } = useParams() // Obtiene el id de la URL
  const project = projects.find((project) => project.id === parseInt(id)) // Busca el proyecto por id

  if (!project) {
    return (
      <div className='h-screen bg-zinc-800 flex flex-col gap-5 justify-center items-center text-zinc-500'>
        <p className='text-4xl font-bold'>Proyecto no encontrado</p>
        <Link to='/' className='hover:text-zinc-400'>Volver</Link>
      </div>
    )
  }

  return (
    <div className='h-screen bg-zinc-800 p-4'>
      <div className='flex justify-between items-center p-4'>
        <h1 className='text-zinc-500 text-2xl'>Project</h1>
        <div>
          <Link to='/' className='text-zinc-500 text-2xl hover:text-zinc-400 transition-colors'>← Volver al inicio</Link>
        </div>
      </div>
      <div className='flex bg-zinc-700 rounded-2xl m-3 p-5'>
        <div className='w-1/2 text-white flex flex-col gap-3'>
          <h1 className='text-3xl font-bold'>{project.title}</h1>
          <h2><b>Tecnologias: </b>{project.technologies}</h2>
          <p><b>Descripcion: </b>{project.description}</p>
          <a href={project.github} className='text-blue-400 hover:text-blue-300'>Repositorio en Github</a>
        </div>

        <div className='w-1/2'>
          <img src={project.images} />
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
