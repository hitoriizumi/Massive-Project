import React from 'react';
import "../style/DetailBiotalaut.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/londrina-solid';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const DetailBiotalaut = () => {

    return (
        <div className='body'>
            <div className='mt-5'>
                <Container fluid style={{ paddingLeft: '65px' }}>
                    <Link to="/dashboard" className="no-decoration" style={{ color: '#143A52', fontSize: '25px' }}>
                        KEMBALI
                    </Link>
                </Container>
            </div>

            <Container fluid style={{ marginTop: '20px',paddingLeft: '65px', paddingRight: '65px' }}>
                <div style={{ position: 'relative', width: '100%' }}>
                    <Image src={require('../assets/image/hiu-magazine.png')} style={{ width: '100%', height: '500px', objectFit: 'cover' }} alt="banner" className='center-content' />
                    <div style={{ position: 'absolute', left: '0', bottom: '0', padding: '10px', color: 'white' }}>
                    <p style={{ margin: '0', fontSize: '30px' }}>BIOINFORMASI</p>
                    <h1 style={{ margin: '0' }}>HIU MACAN (TIGER SHARK)</h1>
                    </div>
                </div>
            </Container>

            <div style={{ marginTop: '20px', paddingLeft: '65px', paddingRight: '65px' }}>
                <Container fluid className='p-5' style={{ backgroundColor: '#143A52' }}>
                    <Row className="mx-auto align-items-center mb-5">
                    <Col md={3} sm={6}>
                        <Card border="0" style={{ backgroundColor: 'transparent', height: '150px' }} className="d-flex align-items-center">
                        <div className="mx-auto text-center">
                            <Card.Img variant="top" src={require('../assets/image/icon-berat.png')} alt="Image 1" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '10px' }} />
                            <Card.Body>
                            <Card.Text style={{ fontSize: '30px', color: 'white' }}>
                                385 - 635 kg
                            </Card.Text>
                            </Card.Body>
                        </div>
                        </Card>
                    </Col>
                    <Col md={3} sm={6}>
                        <Card border="0" style={{ backgroundColor: 'transparent', height: '150px' }} className="d-flex align-items-center">
                        <div className="mx-auto text-center">
                            <Card.Img variant="top" src={require('../assets/image/icon-makan.png')} alt="Image 2" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '10px' }} />
                            <Card.Body>
                            <Card.Text style={{ fontSize: '30px', color: 'white' }}>
                                ikan, singa laut, hiu kecil, dll
                            </Card.Text>
                            </Card.Body>
                        </div>
                        </Card>
                    </Col>
                    <Col md={3} sm={6}>
                        <Card border="0" style={{ backgroundColor: 'transparent', height: '150px' }} className="d-flex align-items-center">
                        <div className="mx-auto text-center">
                            <Card.Img variant="top" src={require('../assets/image/icon-ukuran.png')} alt="Image 3" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '10px' }} />
                            <Card.Body>
                            <Card.Text style={{ fontSize: '30px', color: 'white' }}>
                                3,25 - 4,25 m
                            </Card.Text>
                            </Card.Body>
                        </div>
                        </Card>
                    </Col>
                    <Col md={3} sm={6}>
                        <Card border="0" style={{ backgroundColor: 'transparent', height: '150px' }} className="d-flex align-items-center">
                        <div className="mx-auto text-center">
                            <Card.Img variant="top" src={require('../assets/image/icon-kedalaman.png')} alt="Image 4" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '10px' }} />
                            <Card.Body>
                            <Card.Text style={{ fontSize: '30px', color: 'white' }}>
                                8 - 40 m
                            </Card.Text>
                            </Card.Body>
                        </div>
                        </Card>
                    </Col>
                    </Row>
                </Container>
            </div>

            <Container fluid style={{ paddingLeft: '150px', paddingRight: '150px'  }} >
                <Row>
                    <Col md={8} className="isi-text">
                    <h1 className="mt-5" style={{ color: '#143A52', marginBottom: '10px'  }}>
                        The Tiger Shark
                    </h1>
                    <p align="justify" style={{ color: '#143A52', marginBottom: '10px', fontSize: '30px'  }}>
                        mendapatkan namanya dari ciri khas batang vertikal yang menutupi sisi tubuhnya. Meskipun garis-garis ini sedikit memudar ketika individu mencapai usia dewasa, 
                        garis-garis ini sangat terlihat pada remaja dan setidaknya terlihat sepanjang hidup. Dengan panjang setidaknya 18 kaki (5,5 m) dan 2000 pon (hampir satu metrik ton), 
                        hiu macan adalah hiu terbesar keempat dan hiu predator terbesar kedua, setelah hiu putih besar.
                        <br /><br />

                        Hiu macan adalah predator agresif, terkenal karena memakan apa saja yang mereka temukan atau mampu tangkap. Mereka diketahui memakan banyak ikan dan invertebrata yang 
                        berbeda, antara lain burung laut, penyu, beberapa mamalia laut, ikan pari dan pari lainnya, hiu kecil, ular laut, dan hewan pemakan bangkai. Beberapa hiu macan diketahui 
                        memakan sampah, antara lain logam, plastik, kayu, alat tangkap, dan sampah lainnya. Meskipun mereka adalah predator umum, di beberapa wilayah, hiu macan cenderung 
                        mengkhususkan diri pada mangsa tertentu yang banyak tersedia. Misalnya, di Hawaii, hiu macan diketahui sering menyerang dan memakan penyu hijau dan anjing laut biksu 
                        Hawaii di dekat pantai tempat kedua spesies tersebut bersarang. Para ilmuwan sering mengamati individu yang siripnya hilang setelah digigit harimau. Di kelompok pulau 
                        lain, hiu macan diketahui berkumpul di dekat tempat penangkaran burung laut pada saat burung muda sedang belajar terbang (dan sering kali berakhir di permukaan laut). 
                        <br /><br />

                        Hiu macan kawin melalui pembuahan internal dan melahirkan hidup sebanyak 80 anak kecil atau lebih. Meskipun mereka melahirkan hidup, hiu macan tidak terhubung dengan 
                        anak-anaknya melalui plasenta, seperti pada kebanyakan mamalia. Sebaliknya, embrio berkembang di dalam telur hingga menetas. Baru setelah itu induknya melahirkan 
                        anak-anaknya yang masih hidup. Setelah lahir, hiu macan muda sudah menjadi predator alami dan memakan ikan pesisir serta invertebrata. Hiu macan dewasa tidak memiliki 
                        predator alami, meskipun hiu macan muda dapat dimakan oleh hiu lain, termasuk hiu macan dewasa. Karena alasan ini dan alasan lainnya, remaja dan dewasa hidup di habitat 
                        yang sedikit berbeda. Ikan dewasa lebih menyukai pantai terbuka dan terumbu karang berenergi tinggi, sedangkan ikan muda biasanya ditemukan di muara dan teluk yang 
                        dilindungi. Pembagian penggunaan habitat ini mungkin memberikan perlindungan bagi remaja dari orang dewasa yang kanibal.
                        <br /><br />

                        Meskipun hiu macan dianggap sebagai spesies yang sebagian besar berada di pesisir, sebaran geografisnya mencakup seluruh perairan tropis dan beriklim sedang di seluruh
                        dunia, sehingga beberapa individu harus bermigrasi antar kelompok pulau. Para ahli menganggap hiu macan ‘hampir terancam’ dengan kepunahan, mengingat berkurangnya 
                        jumlah mereka akibat penangkapan ikan yang ditargetkan dan tidak disengaja. Reputasi mereka sebagai spesies yang menggigit manusia (meskipun sangat jarang) membuat 
                        mereka menjadi target upaya pengendalian populasi di beberapa tempat, sebuah praktik yang tidak didukung oleh para ilmuwan di mana pun hal tersebut terjadi.
                        <br /><br />
                    </p>
                    </Col>
                </Row>
            </Container>

            <Container fluid className='py-4' style={{ paddingLeft: '150px', paddingRight: '150px', backgroundColor: '#143A52'  }} >
                <Row>
                    <Col md={8} className="isi-text">
                    <h1 style={{ color: 'white', marginBottom: '10px'  }}>
                        FAKTA MENARIK TENTANG HIU HARIMAU
                    </h1>
                    <p style={{ color: 'white', fontSize: '30px'  }}>
                        1. Hiu macan dapat tumbuh hingga panjang 18 kaki (5,5 m) dan berat 2.000 pon (900 kg), menjadikannya salah satu spesies hiu terbesar.
                        <br />

                        2. Hiu macan diberi nama berdasarkan garis atau bintik vertikal abu-abu khas yang menutupi sisi tubuhnya.
                        <br />

                        3. Hiu macan dikenal suka memakan apa saja, termasuk hiu lain, ikan, burung laut, lumba-lumba, penyu, pari, dan krustasea.1 Hiu macan 
                        juga ditemukan membawa banyak benda bukan makanan di dalam perutnya, termasuk benda logam, plastik, karung goni. dan penolakan lainnya.
                        <br />

                        4. Hiu macan betina memiliki 10 hingga 82 embrio dan melahirkan rata-rata 30 hingga 35 anak per kelahiran.
                        <br />

                        5. Hiu macan hidup di perairan pantai yang dangkal, namun dapat terlihat di kedalaman 1.150 kaki (350 m).2
                        <br />
                    </p>
                    </Col>
                </Row>
            </Container>

            <div className='pb-5'>
                <Container fluid style={{ paddingLeft: '65px', paddingRight: '65px', marginTop: '70px' }}>
                    <Row className='justify-content-center'>
                    <Col xs={12} md={6} lg={3} className='text-left'>
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                        <Image src={require('../assets/image/fish.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                        <p className='text-center' style={{ position: 'absolute', bottom: '0', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px' }}>Penguin Antartika Lawan Dunia yang Kian Panas</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3} className='text-left'>
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                        <Image src={require('../assets/image/penguin2.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                        <p className='text-center' style={{ position: 'absolute', bottom: '0', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px' }}>Penguin Antartika Lawan Dunia yang Kian Panas</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3} className='text-left'>
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                        <Image src={require('../assets/image/nemo.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                        <p className='text-center' style={{ position: 'absolute', bottom: '0', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px' }}>Penguin Antartika Lawan Dunia yang Kian Panas</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3} className='text-left'>
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                        <Image src={require('../assets/image/fish.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                        <p className='text-center' style={{ position: 'absolute', bottom: '0', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px' }}>Penguin Antartika Lawan Dunia yang Kian Panas</p>
                        </div>
                    </Col>
                    </Row>
                </Container>
                <div className="text-center mt-5">
                    <Link to="/biotalaut">
                        <Button variant="primary" className="mx-auto border-0" style={{ fontSize: '30px' }}>Lihat biota yang lain yuk!</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
  };
  
  export default DetailBiotalaut;