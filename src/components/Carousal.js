import React from 'react'
import {Card} from 'react-bootstrap';

export const ProjectCarousal = ({image}) => {
    return (
        <div>
<Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
        </div>
    )
}

export default ProjectCarousal;