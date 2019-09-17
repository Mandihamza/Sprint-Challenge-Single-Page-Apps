import React from 'react'
import { Card, List, Icon } from 'semantic-ui-react'

export default function EpisodeCard({ episode }) {
  return (
    <Card>
        <Card.Content>
            <Card.Header>
                <Card.Description>Title: {episode.name}</Card.Description>
                
            </Card.Header>
        </Card.Content>
      <Card.Content>
        <List>
          <List.Item>
            <List.Icon name="circle" />
            <List.Content>Episode link: <a>{episode.episode}</a> </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="circle" />
            <List.Content>Air date: {episode.air_date}</List.Content>
          </List.Item>
        </List>
      </Card.Content>
    </Card>
  )
}
