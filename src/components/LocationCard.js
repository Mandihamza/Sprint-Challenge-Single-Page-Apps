import React from 'react'
import { Card, List, Label, Icon } from 'semantic-ui-react'

export default function LocationCard({ location }) {
  return (
    <Card>
      <Card.Header>
        <Icon fitted name="globe" size="big"/>
          {location.name}</Card.Header>
      <Card.Content>
        <List>
          <List.Item>
            <List.Icon name="compass outline" />
            <List.Content>Type: {location.type}</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="move" />
            <List.Content>Dimension: {location.dimension}</List.Content>
          </List.Item>
        </List>
        <Label attached="bottom right">
          <Icon name="group" />
          <Label.Detail>Population: {location.residents.length}</Label.Detail>
        </Label>
      </Card.Content>
    </Card>
  )
}
