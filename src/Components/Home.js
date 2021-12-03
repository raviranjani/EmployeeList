import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//components
import UserDetails from './UserDetails';
import UserList from './UserList';


const Home = () => {

    const [name, setName] = useState([
        {
            id: 1,
            name: 'Ranjani',
            age: 24,
        },
        {
            id: 2,
            name: 'Sampathkumar',
            age: 27,
        },
        {
            id: 3,
            name: 'Lavanya',
            age: 24,
        },
        {
            id: 4,
            name: 'Ravichandran',
            age: 29,
        },
    ]);

    const [selectedId, setSelectedId] = useState();

    const handleClick = (userId) => {
        console.log(userId);
        setSelectedId(userId - 1);
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={6} ls={12}>
                        <UserList users={name} handleClick={(userId) => handleClick(userId)} />
                    </Col>
                    <Col xs={12} sm={12} md={6} ls={12}>
                        <UserDetails userDetails={name[selectedId]} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;