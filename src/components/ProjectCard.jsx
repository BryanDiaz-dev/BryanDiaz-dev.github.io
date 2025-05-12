import { Link } from 'react-router-dom'

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/project/${project.id}`}
      className='w-[300px] bg-zinc-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow'
    >
      <img
        src={project.imageCard}
        alt={project.title}
        className='w-full h-64 object-cover'
      />
      <div className='p-4 text-zinc-300'>
        <h1 className='text-lg font-semibold text-white'>{project.title}</h1>
        <p className='text-sm text-zinc-400 mt-2'>{project.description}</p>
      </div>
    </Link>
  )
}

export default ProjectCard
