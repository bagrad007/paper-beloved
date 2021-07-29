import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import DisplayFlowers from '../DisplayFlowers'

const Welcome = () => {
    return (
        <>
            <Jumbotron>
                <Container>
                    <h1 className="display-3">Welcome to Paper Beloved</h1>
                    <p className="lead">Here at Paper Beloved, we worship batch cat</p>
                    <hr className="my-2" />
                    <p>Those who do not respect batch cat, are ultimately fed to the king. He feasts nightly. he cannot be stopped</p>
                    <p className="lead">
                        <Button color="primary">Order a Craft!</Button>
                    </p>
                </Container>
            </Jumbotron>
            <DisplayFlowers />
        </>
    )
}

export default Welcome
