const SkillCard = ({ techName }) => {
  return (
    <div className='flex flex-col items-center bg-[#1a1a1a] p-4 rounded-lg'>
      <span className='text-[#a78bfa]'>{techName}</span>
    </div>
  )
}

export default SkillCard
