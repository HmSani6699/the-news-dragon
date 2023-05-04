import moment from 'moment';
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShare, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCart = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
    console.log(news);
    return (
        <div>
            <Card className=" mb-4">
                <Card.Header className='d-flex justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <Image style={{ height: '44px' }} src={author?.img} roundedCircle />
                        <span className='ps-2'>
                            <p className='mb-0 '>{author.name}</p>
                            <p className='mb-0 '><small>{moment(author?.published_date).format('yyyy-MM-d')}</small></p>
                        </span>
                    </div>
                    <div>
                        <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details < 250 ? { details } : <>
                            {details.slice(0, 250)}....
                            <Link to={`/news/${_id}`}>Read more</Link>
                        </>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1'>
                        <Rating
                            placeholderRating={rating?.number}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        /> <span>{rating?.number}</span>

                       
                    </div>
                    <div>
                        <FaEye></FaEye> {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCart;