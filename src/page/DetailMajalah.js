import React from 'react';
import "../style/DetailMajalah.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/londrina-solid';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const DetailMajalah = () => {

    return (
        <div className='body'>
            <div className='mt-5'>
                <Container fluid style={{ paddingLeft: '65px' }}>
                    <Link to="/dashboard" className="no-decoration" style={{ color: '#143A52', fontSize: '25px' }}>
                        KEMBALI KE DASHBOARD
                    </Link>
                </Container>
            </div>

            <div className='mt-3' >
                <Container fluid style={{ paddingLeft: '65px' }}>
                    <h1 style={{ color: '#143A52' }}>Penguin Antartika Lawan Dunia yang Kian Panas</h1>
                </Container>
            </div>

            <div className="container-fluid d-flex align-items-end justify-content-start font-first" style={{ marginTop: '20px' }}>
                <Image src={require('../assets/image/nemo.jpg')} style={{ width: '95%', height: '500px', objectFit: 'cover', borderRadius: '30px' }} alt="banner" className='center-content'/>
            </div>

            <Container fluid style={{ paddingLeft: '65px', paddingRight: '65px',  }} >
                <Row>
                    <Col md={8} className="magazine-text">
                    <p className="font-isi text-justify" style={{ color: 'white' }}>
                        Antartika - Di tengah meningkatnya suhu global, penguin Antartika menghadapi tantangan yang semakin berat untuk bertahan hidup. Perubahan iklim yang drastis di kutub selatan telah mempengaruhi ketersediaan makanan dan habitat es, yang krusial bagi kehidupan penguin.
                        Menurut penelitian terbaru dari Pusat Studi Antartika, populasi penguin di beberapa koloni telah menunjukkan penurunan yang signifikan dalam dekade terakhir. "Pemanasan global telah mengurangi lapisan es, yang tidak hanya penting sebagai tempat beristirahat dan berkembang biak bagi penguin, tetapi juga mempengaruhi siklus kehidupan spesies mangsa mereka," ujar Dr. Helena Agustsson, kepala penelitian. <br /><br />

                        Pencairan es juga memaksa penguin untuk berjalan lebih jauh dalam mencari makanan, meningkatkan risiko terhadap pemangsa dan mengurangi waktu yang dapat mereka habiskan untuk mengasuh anak-anak mereka. Lebih lanjut, perubahan suhu laut telah mengubah distribusi krill dan ikan kecil, sumber makanan utama bagi penguin.
                        Dalam menghadapi krisis ini, konservasionis mendesak tindakan global yang lebih tegas untuk membatasi emisi dan mengurangi pemanasan global. "Kita perlu bertindak sekarang untuk menyelamatkan penguin Antartika dan ekosistem unik yang mereka huni," tegas Dr. Agustsson.
                        Pemerintah dan organisasi non-profit dunia kini berlomba-lomba mengembangkan strategi konservasi yang efektif, termasuk menciptakan area perlindungan laut yang lebih luas dan melakukan penelitian lebih lanjut mengenai adaptasi spesies terhadap perubahan iklim. <br /><br />

                        Saat bumi terus menghangat, masa depan penguin Antartika dan banyak spesies lain di kutub tergantung pada tindakan kita hari ini. <br /><br />
                    </p>
                    </Col>
                </Row>
            </Container>

            <div className='mt-3' >
                <Container fluid style={{ paddingLeft: '65px' }}>
                    <h1 style={{ color: '#143A52' }}>Postingan Terbaru</h1>
                </Container>
            </div>

            <div className='pb-5'>
                <Container fluid style={{ paddingLeft: '65px', paddingRight: '65px' }}>
                    <Row className='justify-content-center'>
                    <Col xs={12} md={6} lg={3} className='text-left'>
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                        <Image src={require('../assets/image/fish.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
                        <p className='text-center' style={{ position: 'absolute', bottom: '0', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px' }}>Penguin Antartika Lawan Dunia yang Kian Panas</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3} className='text-left'>
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                        <Image src={require('../assets/image/penguin2.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
                        <p className='text-center' style={{ position: 'absolute', bottom: '0', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px' }}>Penguin Antartika Lawan Dunia yang Kian Panas</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3} className='text-left'>
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                        <Image src={require('../assets/image/nemo.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
                        <p className='text-center' style={{ position: 'absolute', bottom: '0', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px' }}>Penguin Antartika Lawan Dunia yang Kian Panas</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3} className='text-left'>
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                        <Image src={require('../assets/image/fish.jpg')} alt="gambar-laut" className='center-content img-fluid' fluid style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
                        <p className='text-center' style={{ position: 'absolute', bottom: '0', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px' }}>Penguin Antartika Lawan Dunia yang Kian Panas</p>
                        </div>
                    </Col>
                    </Row>
                </Container>
                <div className="text-center mt-5">
                    <Link to="/majalah">
                    <Button variant="primary" className="mx-auto border-0" style={{ fontSize: '30px' }}>Lihat majalah yang lain yuk!</Button>
                    </Link>
                </div>
            </div>


        </div>
    );
  };
  
  export default DetailMajalah;