import React from 'react';
import "../style/Biotalaut.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/londrina-solid';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const Biotalaut = () => {
    return (
        <div className='body'>
            <div className='mt-5'>
                <Container fluid style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                    <Link to="/dashboard" className="d-flex align-items-center text-judul no-decoration" style={{ color: '#143A52' }}>
                    KEMBALI KE DASHBOARD
                    </Link>
                </Container>
            </div>
  
        <div className="font-magazine">
          <div className="container-fluid">
            <div className="py-5">
              <div className="text-center mb-3">
                <h3 style={{ fontSize: '50px', marginBottom: '4%', marginTop: '2%' }}><strong>Biotalaut</strong></h3>
              </div>
              <div className='pb-5'>
                <Container fluid style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                    <Form.Control type="text" className='mb-4' placeholder="Cari yang lain yuk!" style={{ width: '30%', fontSize: '24px', borderColor: '#143A52' }} />
                    <Row className='justify-content-center'>
            
                        <Col md={6} lg={4} className='text-left'>
                            <Link to={'/detailbiotalaut'} className='no-decoration' style={{ color: '#143A52' }}>
                                <Image src={require('../assets/image/fish.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
                                <h2>Sahulawi</h2>
                                <p>Lebih jauh menjelajahi kekayaan biodiversitas yang mencakup hewan-hewan lucu, tumbuhan, dan makhluk-makhluk lainnya.</p>
                            </Link>
                        </Col>
                        
                        <Col md={6} lg={4} className='text-left'>
                            <Image src={require('../assets/image/penguin2.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
                            <h2>Florida</h2>
                            <p>Jelajahi pulau-pulau serta seluruh objek di laut yang di kelilingi Florida, meliputi ruang-ruang di laut dan daratan.</p>
                        </Col>
                        <Col md={6} lg={4} className='text-left'>
                            <Image src={require('../assets/image/nemo.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
                            <h2>Australia</h2>
                            <p>Menjelajahi objek di Australia yang dipenuhi dengan fauna dan flora yang unik serta beberapa makhluk-makhluk di bawah laut.</p>
                        </Col>
                        <Col md={6} lg={4} className='text-left'>
                            <Image src={require('../assets/image/pari.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
                            <h2>Australia</h2>
                            <p>Menjelajahi objek di Australia yang dipenuhi dengan fauna dan flora yang unik serta beberapa makhluk-makhluk di bawah laut.</p>
                        </Col>
                        <Col md={6} lg={4} className='text-left'>
                            <Image src={require('../assets/image/star.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
                            <h2>Australia</h2>
                            <p>Menjelajahi objek di Australia yang dipenuhi dengan fauna dan flora yang unik serta beberapa makhluk-makhluk di bawah laut.</p>
                        </Col>
                        <Col md={6} lg={4} className='text-left'>
                            <Image src={require('../assets/image/turtle.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
                            <h2>Australia</h2>
                            <p>Menjelajahi objek di Australia yang dipenuhi dengan fauna dan flora yang unik serta beberapa makhluk-makhluk di bawah laut.</p>
                        </Col>
                        <Col md={6} lg={4} className='text-left'>
                            <Image src={require('../assets/image/hewanlaut.png')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
                            <h2>Australia</h2>
                            <p>Menjelajahi objek di Australia yang dipenuhi dengan fauna dan flora yang unik serta beberapa makhluk-makhluk di bawah laut.</p>
                        </Col>
                        <Col md={6} lg={4} className='text-left'>
                            <Image src={require('../assets/image/ikan-tuna.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
                            <h2>Australia</h2>
                            <p>Menjelajahi objek di Australia yang dipenuhi dengan fauna dan flora yang unik serta beberapa makhluk-makhluk di bawah laut.</p>
                        </Col>
                        <Col md={6} lg={4} className='text-left'>
                            <Image src={require('../assets/image/lumba.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
                            <h2>Australia</h2>
                            <p>Menjelajahi objek di Australia yang dipenuhi dengan fauna dan flora yang unik serta beberapa makhluk-makhluk di bawah laut.</p>
                        </Col>
                        <Col md={6} lg={4} className='text-left'>
                            <Image src={require('../assets/image/paus2.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
                            <h2>Australia</h2>
                            <p>Menjelajahi objek di Australia yang dipenuhi dengan fauna dan flora yang unik serta beberapa makhluk-makhluk di bawah laut.</p>
                        </Col>
                        <Col md={6} lg={4} className='text-left'>
                            <Image src={require('../assets/image/penguin.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
                            <h2>Australia</h2>
                            <p>Menjelajahi objek di Australia yang dipenuhi dengan fauna dan flora yang unik serta beberapa makhluk-makhluk di bawah laut.</p>
                        </Col>
                        <Col md={6} lg={4} className='text-left'>
                            <Image src={require('../assets/image/sea2.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
                            <h2>Australia</h2>
                            <p>Menjelajahi objek di Australia yang dipenuhi dengan fauna dan flora yang unik serta beberapa makhluk-makhluk di bawah laut.</p>
                        </Col>
                    </Row>
                </Container>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    );
  };
  
  export default Biotalaut;