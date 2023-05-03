import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import Q__zon from '../Q-Zon/Q__zon';

const RightNav = () => {
    return (
        <div>
            <h5 className='mb-3'>Login With</h5>
            <Button className='mb-2 w-100' variant="outline-primary"> <FaFacebook /> Facebook Login</Button>
            <Button className=' w-100' variant="outline-primary"> <FaGithub /> Facebook Login</Button>
            <h5 className='mt-4 mb-3'>Find Us On</h5>
            <ListGroup as="ul">
                <ListGroup.Item as="li"><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                <ListGroup.Item as="li"><FaInstagram></FaInstagram> Instragram</ListGroup.Item>
                <ListGroup.Item as="li"><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
            </ListGroup>
            <h5 className='mt-4 mb-3'>Q-Zone</h5>
            <Q__zon></Q__zon>
        </div>
    );
};

export default RightNav;