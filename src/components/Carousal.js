import React from 'react'
import { Card } from 'react-bootstrap';

export const ProjectCarousal = ({ currentProject, image, currentDescription, technologies, link }) => {
    return (
        <div>
            <Card style = {{marginTop:75}}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        {currentDescription}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted"><a href={link}>{link}</a></small>
                    <p className="text-muted">{technologies}</p>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default ProjectCarousal;