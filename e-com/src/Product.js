import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping, faEye } from '@fortawesome/free-solid-svg-icons';

function Product() {
  return (
    <div>
      <Header />

      <div className="about-hero text-center text-white " style={{ backgroundImage: `url(${require('./img/about1.png')})`, backgroundSize: 'cover', padding: '150px 0' }}>
        <h1 className="display-4 fw-bold ">Products PlantStore</h1>
        <p className="fs-4">Home : Product</p>
      </div>

      <Container style={{ maxWidth: '1550px' }}>
        <CardGroup className='my-5'>
          <Card className='border-0 p-2'>
            <div className='image-container'>
              <Card.Img src={require('./img/product-01.png')} style={{ borderRadius: '20px' }} />
              <div className="hover-buttons1">
                <button className="hover-btn"><FontAwesomeIcon icon={faHeart} /></button>
                <button className="hover-btn"><FontAwesomeIcon icon={faCartShopping} /></button>
                <button className="hover-btn"><FontAwesomeIcon icon={faEye} /></button>
              </div>
            </div>
            <Card.Body>
              <Card.Title>Ficus 'Ruby'</Card.Title>
              <Card.Text>
                Ficus Elastica Ruby, also known as a Ruby Rubber Tree, is a cultivar of the Ficus elastica plant,
                prized for its vibrant and cream.<br /><br />
                <h3 className='hi3'>$110.00 <del>$130.00</del></h3>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='border-0 p-2'>
            <div className='image-container'>
              <Card.Img src={require('./img/product-04.png')} style={{ borderRadius: '20px' }} />
              <div className="hover-buttons1">
                <button className="hover-btn"><FontAwesomeIcon icon={faHeart} /></button>
                <button className="hover-btn"><FontAwesomeIcon icon={faCartShopping} /></button>
                <button className="hover-btn"><FontAwesomeIcon icon={faEye} /></button>
              </div>
            </div>
            <Card.Body>
              <Card.Title>Bird Of Paradise</Card.Title>
              <Card.Text>
                The bird of paradise can refer to a family of birds called the
                Paradisaeidae, also known the crane flower, due to its distinctive flower.<br /><br />
                <h3 className='hi3'>$132.00</h3>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='border-0 p-2'>
            <div className='image-container'>
              <Card.Img src={require('./img/product-3.png')} style={{ borderRadius: '20px' }} />
              <div className="hover-buttons1">
                <button className="hover-btn"><FontAwesomeIcon icon={faHeart} /></button>
                <button className="hover-btn"><FontAwesomeIcon icon={faCartShopping} /></button>
                <button className="hover-btn"><FontAwesomeIcon icon={faEye} /></button>
              </div>
            </div>
            <Card.Body>
              <Card.Title>zz plant</Card.Title>
              <Card.Text>
                The ZZ Plant is a classic indoor houseplant that proudly flaunts its indestructible nature.
                Low maintenance and fuss-free.<br /><br />
                <h3 className='hi3'>$145.00 <del>$160.00</del></h3>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='border-0 p-2'>
            <div className='image-container'>
              <Card.Img src={require('./img/product-02.png')} style={{ borderRadius: '20px' }} />
              <div className="hover-buttons1">
                <button className="hover-btn"><FontAwesomeIcon icon={faHeart} /></button>
                <button className="hover-btn"><FontAwesomeIcon icon={faCartShopping} /></button>
                <button className="hover-btn"><FontAwesomeIcon icon={faEye} /></button>
              </div>
            </div>
            <Card.Body>
              <Card.Title>Olive Tree</Card.Title>
              <Card.Text>
                The olive tree is a subtropical evergreen tree native to the Mediterranean region,
                known for its long lifespan.<br /><br />
                <h3 className='hi3'>$150.00</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>

        <CardGroup className='my-5'>
          <Card className='border-0 p-2'>
            <div className='image-container'>
              <Card.Img src={require('./img/c3.png')} style={{ borderRadius: '20px' }} />
              <div className="hover-buttons1">
                <button className="hover-btn"><FontAwesomeIcon icon={faHeart} /></button>
                <button className="hover-btn"><FontAwesomeIcon icon={faCartShopping} /></button>
                <button className="hover-btn"><FontAwesomeIcon icon={faEye} /></button>
              </div>
            </div>
            <Card.Body>
              <Card.Title>Colorful Classic Round Pot</Card.Title>
              <Card.Text>
                Make your plants stand out with our Colorful Classic Round Pot planter.Crafted width 100%
                porcelain ceramic to perfection.
                <br /><br />
                <h3 className='hi3'>$125.00</h3>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='border-0 p-2'>
            <div className='image-container'>
              <Card.Img src={require('./img/product-11.png')} style={{ borderRadius: '20px' }} />
              <div className="hover-buttons1">
                <button className="hover-btn"><FontAwesomeIcon icon={faHeart} /></button>
                <button className="hover-btn"><FontAwesomeIcon icon={faCartShopping} /></button>
                <button className="hover-btn"><FontAwesomeIcon icon={faEye} /></button>
              </div>
            </div>
            <Card.Body>
              <Card.Title>Plant Pot With Metal Stand</Card.Title>
              <Card.Text>
                Elevate your indoor or outdoor space with our sleek and versatile Classic Matte Round
                pot. Available in anthracite and taupe.<br /><br />
                <h3 className='hi3'>$120.00 <del>$135.00</del></h3>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='border-0 p-2'>
            <div className='image-container'>
              <Card.Img src={require('./img/Product-8.png')} style={{ borderRadius: '20px' }} />
              <div className="hover-buttons1">
                <button className="hover-btn"><FontAwesomeIcon icon={faHeart} /></button>
                <button className="hover-btn"><FontAwesomeIcon icon={faCartShopping} /></button>
                <button className="hover-btn"><FontAwesomeIcon icon={faEye} /></button>
              </div>
            </div>
            <Card.Body>
              <Card.Title>Abstract Colors Ceramic Plant Pot</Card.Title>
              <Card.Text>
                Add a pop of color and style to your home with these Beautifully crafted Abstract Colors Ceramic Plant Pot.
                <br /><br />
                <h3 className='hi3'>$140.00</h3>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='border-0 p-2'>
            <div className='image-container'>
              <Card.Img src={require('./img/product-13.png')} style={{ borderRadius: '20px' }} />
              <div className="hover-buttons1">
                <button className="hover-btn"><FontAwesomeIcon icon={faHeart} /></button>
                <button className="hover-btn"><FontAwesomeIcon icon={faCartShopping} /></button>
                <button className="hover-btn"><FontAwesomeIcon icon={faEye} /></button>
              </div>
            </div>
            <Card.Body>
              <Card.Title>Flower pot</Card.Title>
              <Card.Text>
                A flower pot is just a container for plants, and "take it easy" means to chill out or not
                rush things. <br /><br />
                <h3 className='hi3'>$109.00</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
      <Footer />
    </div>
  )
}

export default Product