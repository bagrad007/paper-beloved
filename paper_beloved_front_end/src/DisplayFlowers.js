import React from 'react'

import image from './imgs/PaperFlowers.jpeg'
import Image from 'react-bootstrap/Image'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './stylesheets/flowers.css'
const DisplayFlowers = () => {
    return (
        <div>

            <Row>
                <Col className='flowers'>
                    <Image src={image} fluid />
                </Col>


            </Row>

        </div>
    )
}

export default DisplayFlowers
