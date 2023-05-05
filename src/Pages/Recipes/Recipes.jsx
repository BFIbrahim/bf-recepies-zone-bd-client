import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Recipes.css'

const Recipes = ({singleChef}) => {

    return (
        <div >
             <Card  className='container my-container'>
                        <Card.Img variant="top"  src = {singleChef?.chefPicture} />
                        <Card.Body>
                            <Card.Title>{singleChef?.chefName}</Card.Title>
                            <Card.Text>
                              <p>Experiencec : {singleChef.yearsOfExperience} Years</p>
                            </Card.Text>
                            <Card.Text>
                              <p>  Numbers of recipes : {singleChef?.numRecipes}</p>
                            </Card.Text>
                            <Card.Text>
                              <p>  Total Likes : {singleChef.likes}</p>
                            </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Link to={`/recipes/${singleChef?.id}`}><Button>Recipie Details</Button></Link>

                        </Card.Body>
                    </Card>
        </div>
    );
};

export default Recipes;