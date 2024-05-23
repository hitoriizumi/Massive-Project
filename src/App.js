import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import Edukasi from './page/Edukasi';
import Dashboard from './page/Dashboard';
import Komunitas from './page/Komunitas';
import Biotalaut from './page/Biotalaut';
import Majalah from './page/Majalah';
import DetailMajalah from './page/DetailMajalah';
import DetailBiotalaut from './page/DetailBiotalaut';
import CrudBiotalaut from './page/CrudBiotalaut';
import CrudMajalah from './page/CrudMajalah';
import Navigationbar from './components/Navigationbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edukasi" element={<Edukasi />} />
        <Route path="/komunitas" element={<Komunitas />} />
        <Route path="/biotalaut" element={<Biotalaut />} />
        <Route path="/majalah" element={<Majalah />} />
        <Route path="/detailmajalah" element={<DetailMajalah />} />
        <Route path="/detailbiotalaut" element={<DetailBiotalaut />} />
        <Route path="/crudmajalah" element={<CrudMajalah />} />
        <Route path="/crudbiotalaut" element={<CrudBiotalaut />} />
      </Routes>
    </Router>
  );
}

export default App;