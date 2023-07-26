import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from '../EditorsInsight/EditorsInsight';

const News = () => {
    const news = useLoaderData();
    const { _id, title, details, image_url,category_id } = news;
    console.log(category_id);
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link className='text-dacoretion-none' to={`/categor/${category_id}`}><Button variant='danger'><FaArrowLeft></FaArrowLeft> ll news in this category</Button></Link>
                </Card.Body>
            </Card>
            <EditorsInsight></EditorsInsight>
        </div>

    );
};

export default News;