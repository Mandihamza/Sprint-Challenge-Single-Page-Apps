import React, { useEffect, useState } from 'react'
import axios from 'axios'

import LocationCard from './LocationCard'

export default function LocationsList() {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    axios('https://rickandmortyapi.com/api/location/')
      .then(res => setLocations(res.data.results))
      .catch(err => {
        console.log('err', err)
      })
  }, [])

  return (
    <section className="location-list grid-view">
      {locations.map(location => {
        return (
          <LocationCard
            location={location}
            key={location.id}
            name={location.name}
            type={location.type}
            dimension={location.dimension}
            residents={location.residents}
          />
        )
      })}
    </section>
  )
}
