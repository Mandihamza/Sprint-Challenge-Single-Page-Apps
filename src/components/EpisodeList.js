import React, { useEffect, useState } from 'react'
import axios from 'axios'

import EpisodeCard from './EpisodeCard'

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    axios('https://rickandmortyapi.com/api/episode')
      .then(res => setEpisodes(res.data.results))
      .catch(err => {
        console.log('err', err)
      })
  }, [])

  return (
    <section className="episode-list grid-view">
      {episodes.map(episode => {
        return (
          <EpisodeCard
            episode={episode}
            key={episode.id}
            name={episode.name}
            type={episode.episode}
            characters={episode.air_date}
          />
        )
      })}
    </section>
  )
}
