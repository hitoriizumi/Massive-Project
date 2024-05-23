import React from 'react';
import "../style/Majalah.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/londrina-solid';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const Majalah = () => {
    return (
        <div className='body'>
            <div className='mt-5'>
                <Container fluid style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                    <Link to="/dashboard" className="no-decoration" style={{ color: '#143A52', fontSize: '25px' }}>
                        KEMBALI KE DASHBOARD
                    </Link>
                </Container>
            </div>
  
        <div className="font-magazine">
            <div className="container-fluid">
                <div className="py-5">
                    <div className="text-center mb-3">
                        <h1 style={{ fontSize: '50px', marginBottom: '4%', marginTop: '2%' }}><strong>Majalah</strong></h1>
                    </div>
                    <div className='pb-5'>
                        <Container fluid style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                            <Row className='align-items-center mb-4'>
                                <Col xs={12}>
                                    <Form.Control type="text" className='mb-4' placeholder="Cari yang lain yuk!" style={{ fontSize: '24px', borderColor: '#143A52', width: '30%' }} />
                                </Col>
                            </Row>
                            <Link to={'/detailmajalah'} className='no-decoration' style={{ color: '#143A52' }}>
                                <Row className='align-items-start'>
                                    <Col xs={12} md={6}>
                                    <Image src={require('../assets/image/nemo.jpg')} alt="gambar-laut" className='img-fluid' style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }} />
                                    </Col>
                                    <Col xs={12} md={6}>
                                    <h1 className='mt-4 mt-md-0'>Penguin Antartika Lawan Dunia yang Kian Panas</h1>
                                    <p className='mt-3' style={{ fontSize: '25px' }}>Lebih jauh menjelajahi kekayaan biodiversitas yang mencakup hewan-hewan lucu, tumbuhan, dan makhluk-makhluk lainnya.</p>
                                    </Col>
                                </Row>
                            </Link>
                            <hr />
                            <Link to={''} className='no-decoration' style={{ color: '#143A52' }}>
                                <Row className='align-items-start'>
                                    <Col xs={12} md={6}>
                                    <Image src={require('../assets/image/lumba.jpg')} alt="gambar-laut" className='img-fluid' style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }} />
                                    </Col>
                                    <Col xs={12} md={6}>
                                    <h1 className='mt-4 mt-md-0'>Pupuk Kaltim Turunkan 6.882 Terumbu Karang</h1>
                                    <p className='mt-3' style={{ fontSize: '25px' }}>Lebih jauh menjelajahi kekayaan biodiversitas yang mencakup hewan-hewan lucu, tumbuhan, dan makhluk-makhluk lainnya.</p>
                                    </Col>
                                </Row>
                            </Link>
                            <hr />
                            <Link to={''} className='no-decoration' style={{ color: '#143A52' }}>
                                <Row className='align-items-start'>
                                    <Col xs={12} md={6}>
                                    <Image src={require('../assets/image/fish.jpg')} alt="gambar-laut" className='img-fluid' style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }} />
                                    </Col>
                                    <Col xs={12} md={6}>
                                    <h1 className='mt-4 mt-md-0'>Cara Burung Beristirahat Saat Menyebrangi Lautan</h1>
                                    <p className='mt-3' style={{ fontSize: '25px' }}>Lebih jauh menjelajahi kekayaan biodiversitas yang mencakup hewan-hewan lucu, tumbuhan, dan makhluk-makhluk lainnya.</p>
                                    </Col>
                                </Row>
                            </Link>
                            <hr />
                            <Link to={''} className='no-decoration' style={{ color: '#143A52' }}>
                                <Row className='align-items-start'>
                                    <Col xs={12} md={6}>
                                    <Image src={require('../assets/image/ikan-tuna.jpg')} alt="gambar-laut" className='img-fluid' style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }} />
                                    </Col>
                                    <Col xs={12} md={6}>
                                    <h1 className='mt-4 mt-md-0'>KKP Targetkan Kawasan Konservasi Laut Capai 30%</h1>
                                    <p className='mt-3' style={{ fontSize: '25px' }}>Lebih jauh menjelajahi kekayaan biodiversitas yang mencakup hewan-hewan lucu, tumbuhan, dan makhluk-makhluk lainnya.</p>
                                    </Col>
                                </Row>
                            </Link>
                            <hr/>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
  
      </div>
    );
  };
  
  export default Majalah;