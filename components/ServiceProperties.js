'use client'
import { useState } from 'react'
import Link from 'next/link'

function ServiceProperties({ properties: initialProperties }) {
    const [services, setServices] = useState(initialProperties);
  
    return services.map((service) => (
      <div key={service._id} className="serviceItem">
        <div className='details'>
          <p>{service.name}</p>
          <p>{service.type}</p>
          <p>£{service.price}</p>
        </div>
        <div className='actions'>
        </div>
      </div>
    ))
  }
  
  export default ServiceProperties