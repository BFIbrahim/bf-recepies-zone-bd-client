import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const RecipeDetails = () => {

    const details = useLoaderData();
    console.log(details);

    return (
        <div>
            <Card className='container  mx-auto w-75'>
                <Card.Img className='w-100%' variant="top" src={details?.chefPicture} />
                <Card.Body>
                    <Card.Title>{details?.chefName}</Card.Title>
                    <Card.Text>
                        <p>Details: {details?.description}</p>
                    </Card.Text>
                    <Card.Text>
                        <p>Experiencec : {details.yearsOfExperience} Years</p>
                    </Card.Text>
                    <Card.Text>
                        <p>  Numbers of recipes : {details?.numRecipes}</p>
                    </Card.Text>
                    <Card.Text>
                        <p>  Total Likes : {details.likes}</p>
                    </Card.Text>
                </Card.Body>

                <Card.Body>
                    <Link><Button>Add To favoraite</Button></Link>

                </Card.Body>
            </Card>
        </div>
    );
};

export default RecipeDetails;