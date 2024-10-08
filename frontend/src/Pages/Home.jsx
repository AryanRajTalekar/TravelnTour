import React from 'react'
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from './../shared/Subtitle';
import worldImg from '../assets/images/world.png'


import SearchBar from '../shared/SearchBar'; 
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tour/FeaturedTourList';


const Home = () => {
  return (
    <>
      <Container className='page1'>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'} />
                <img src={worldImg} alt="World" /> 
              </div>
              <h1>Travelling opens the door to creating <span className='highlight'>memories</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dolores ad! Autem, esse odio voluptas officiis adipisci, sapiente error quia suscipit fugit nostrum obcaecati? Maxime.
              </p>
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img_box">
            <img src={heroImg} alt=""/>
            </div>
          </Col> 

           <Col lg='2'>
            <div className="hero__img_box mt-4">
            <video src={heroVideo} muted autoPlay loop />
            </div>
          </Col> 

           <Col lg='2'>
            <div className="hero__img_box mt-5">
            <img src={heroImg02} alt=""/>
            </div>
          </Col>

          <SearchBar/>


            
        </Row>
      </Container>

                        {/* hero section start kela hite */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList/>
          </Row>
        </Container>
      </section>

                    {/* featured tour section start kela hite */}
                    <section className="featured-tour-section">
                      <Container>
                        <Row>
                          <Col>
                          <div className="hero__subtitle d-flex align-items-center">
                            <Subtitle subtitle={'Our Featured Tours'} />
                            {/* <img src={worldImg} alt="World" />  */}
                          </div>
                          </Col>
                          
                        </Row>
                        <Row>
                        <FeaturedTourList/>
                        </Row>
                        
                      </Container>
                    </section>
                    {/* featured tour section end kela hite */}


    </>
  );
}

export default Home;
