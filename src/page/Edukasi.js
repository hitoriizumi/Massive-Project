import React from 'react';
import "../style/Edukasi.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/londrina-solid';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Edukasi = () => {
    return (
        <div className='body'>
        <div className="container-fluid banner d-flex align-items-end justify-content-start font-first" style={{ marginTop: '50px', marginBottom: '80px' }}>
          <div className="image-container"></div>
          <h1 className="warna7 col-2" style={{ fontSize: '35px', marginBottom: '20px' }}>Explore and Discover<br />All the Wonders of the<br />Ocean</h1>
        </div>
  
        <div className="bg font-majalah">
          <div className="container-fluid">
            <div className="py-5">
              <div className="text-center mb-3">
                <h3 style={{ fontSize: '50px', marginBottom: '4%', marginTop: '2%' }}><strong>MAJALAH</strong></h3>
              </div>
              <div className='section3 pb-5'>
                <Container fluid style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                  <h1 className='judul'>Jelajahi Majalah Kami!</h1>
                  <Row className='justify-content-center'>
                    <Col md={6} lg={4} className='text-left'>
                      <Image src={require('../assets/image/fish.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                      <h2>Sahulawi</h2>
                      <p>Lebih jauh menjelajahi kekayaan biodiversitas yang mencakup hewan-hewan lucu, tumbuhan, dan makhluk-makhluk lainnya.</p>
                    </Col>
                    <Col md={6} lg={4} className='text-left'>
                      <Image src={require('../assets/image/penguin2.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                      <h2>Florida</h2>
                      <p>Jelajahi pulau-pulau serta seluruh objek di laut yang di kelilingi Florida, meliputi ruang-ruang di laut dan daratan.</p>
                    </Col>
                    <Col md={6} lg={4} className='text-left'>
                      <Image src={require('../assets/image/nemo.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                      <h2>Australia</h2>
                      <p>Menjelajahi objek di Australia yang dipenuhi dengan fauna dan flora yang unik serta beberapa makhluk-makhluk di bawah laut.</p>
                    </Col>
                    <Col md={6} lg={4} className='text-left'>
                      <Image src={require('../assets/image/pari.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                      <h2>Australia</h2>
                      <p>Menjelajahi objek di Australia yang dipenuhi dengan fauna dan flora yang unik serta beberapa makhluk-makhluk di bawah laut.</p>
                    </Col>
                    <Col md={6} lg={4} className='text-left'>
                      <Image src={require('../assets/image/star.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                      <h2>Australia</h2>
                      <p>Menjelajahi objek di Australia yang dipenuhi dengan fauna dan flora yang unik serta beberapa makhluk-makhluk di bawah laut.</p>
                    </Col>
                    <Col md={6} lg={4} className='text-left'>
                      <Image src={require('../assets/image/turtle.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                      <h2>Australia</h2>
                      <p>Menjelajahi objek di Australia yang dipenuhi dengan fauna dan flora yang unik serta beberapa makhluk-makhluk di bawah laut.</p>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className="text-center mt-3">
                <Link to={'/majalah'}>
                  <Button style={{ width: '30%', backgroundColor: 'white', fontSize: '20px', color: '#143A52' }} type="button" variant="primary" className="mx-auto border-0">
                    TAMPILKAN LEBIH BANYAK
                  </Button>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
  
        <Container fluid style={{ paddingLeft: '100px', paddingRight: '100px' }}>
          <div className="py-5" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
            <div className="text-center mb-3">
              <h3 style={{ fontSize: '50px', marginTop: '2%', color: '#143A52' }}><strong>FAKTA UNIK</strong></h3>
              <p style={{ fontSize: '30px', color: '#143A52' }}>Flip kartu dibawah untuk mengetahui fakta yang sebenarnya!</p>
            </div>
            <div >
              <Row className="justify-content-center">
                <Col className="text-center">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <p className='font-fact'>Apakah benar bahwa Pinguin merupakan hewan setia?</p>
                      </div>
                      <div className="flip-card-back">
                        <p className="font-fact">Wahh benar tuh pinguin itu hewan yang setia loh teman-teman!, semoga kamu juga ya hehe</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className=" text-center">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front2">
                        <p className="font-fact">Apakah benar bahwa Pinguin merupakan hewan setia?</p>
                      </div>
                      <div className="flip-card-back2">
                        <p className="font-fact">Wahh benar tuh pinguin itu hewan yang setia loh teman-teman!, semoga kamu juga ya hehe</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className=" text-center">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front3">
                        <p className="font-fact">Apakah benar bahwa Pinguin merupakan hewan setia?</p>
                      </div>
                      <div className="flip-card-back3">
                        <p className="font-fact">Wahh benar tuh pinguin itu hewan yang setia loh teman-teman!, semoga kamu juga ya hehe</p>
                      </div>
                    </div>
                  </div>
                </Col>
  
                <div className="col text-center">
                  <Link to={'/biotalaut'}>
                    <Image className="final" src={require('../assets/image/final flip.png')} alt="Image 5 " />
                  </Link>
                </div>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    );
  };
  
  export default Edukasi;