import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {

    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    <Rating 
                    value={product.rating} 
                    />
                    {product.numReviews} Reviews
                </Card.Text>

                <Card.Text as='h3'>${product.price}</Card.Text>                               
            </Card.Body>

            <Button className='btn-block' type='button'>
                Add To Wishlist
            </Button>

        </Card>

    )
}

export default Product