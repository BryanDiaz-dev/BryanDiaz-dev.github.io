const SkillsCategory = ({ children, category, emoji }) => {
  return (
    <article className='flex flex-col gap-5 bg-zinc-800 p-8 rounded-xl border border-zinc-600'>
      <h3 className='text-2xl font-bold text-violet-500'>
        <span>{emoji} </span>{category}
      </h3>
      <div className='flex flex-wrap justify-evenly gap-4'>
        {children}
      </div>
    </article>
  )
}

export default SkillsCategory
