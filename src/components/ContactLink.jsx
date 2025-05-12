const ContactLink = ({ icon: Icon, link, name }) => {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='group flex flex-col gap-3 items-center'
    >
      <div className='w-16 h-16 bg-[#222222] rounded-full flex items-center justify-center group-hover:bg-[#6d28d9]'>
        <Icon className='w-8 text-[#a78bfa] group-hover:text-white' />
      </div>
      <span className='text-[#a78bfa] group-hover:text-[#8b5cf6]'>{name}</span>
    </a>
  )
}

export default ContactLink
