import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MyEventsPage = ({ data }) => {
  return (
    <div className="events_page">
      
      {data.map((ev) => (
          <Link className='card' href={`/events/${ev.id}`} key={ev.id}>
            <Image width={400} height={320} alt={ev.title} src={ev.image}/>
            <h2>{ev.title}</h2>
            
          </Link>
        ))}
      
    </div>
  )
}

export default MyEventsPage