import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/1.png';
import second from '../../../assets/2.png';
import thard from '../../../assets/3.png';

const EditorsInsight = () => {
    return (
        <div className='mt-5 mb-4'>
            <h4 className='mb-4'>Editors Insight</h4>
            <Row xs={1} md={2} lg={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={first}/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={second}/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={thard}/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
            </Row>
        </div>
    );
};

export default EditorsInsight;