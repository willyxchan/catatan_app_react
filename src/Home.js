/* yang disini versi 1 
import React from 'react';
import Catatan from './components/Catatan';

const Home = () => {
  const daftarCatatan = [
    { title: 'Catatan 1', createdAt: '2023-01-01', body: 'Isi catatan 1' },
    { title: 'Catatan 2', createdAt: '2023-01-02', body: 'Isi catatan 2' },
    // Tambah catatan lain jika diperlukan
  ];

  return (
    <div className="container mt-4">
      <h1>Daftar Catatan</h1>
      {daftarCatatan.map((catatan, index) => (
        <Catatan key={index} {...catatan} />
      ))}
    </div>
  );
};

export default Home;
*/

// versi 2
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Catatan from './components/Catatan';
import TambahCatatan from './TambahCatatan';

const Home = () => {
  const [daftarCatatan, setDaftarCatatan] = useState([
    { title: 'Catatan 1', createdAt: '2023-01-01', body: 'Isi catatan 1' },
    { title: 'Catatan 2', createdAt: '2023-01-02', body: 'Isi catatan 2' },
    // Tambah catatan lain jika diperlukan
  ]);

  const handleUpdateCatatan = (newCatatan) => {
    setDaftarCatatan((prevDaftarCatatan) => [
      ...prevDaftarCatatan,
      newCatatan,
    ]);
  };

  useEffect(() => {
    // Tambahkan logic untuk mengupdate daftarCatatan setelah penambahan catatan dari halaman Tambah Catatan
  }, [daftarCatatan]);

  return (
    <div className="container mt-4">
      <h1>Daftar Catatan</h1>
      <Link to="/tambah-catatan" className="btn btn-primary mb-3">
        Tambah Catatan
      </Link>
      {daftarCatatan.map((catatan, index) => (
        <Catatan key={index} {...catatan} />
      ))}
      {/* Pastikan melewatkan prop onUpdateCatatan ke TambahCatatan */}
      <TambahCatatan onUpdateCatatan={handleUpdateCatatan} />
    </div>
  );
};

export default Home;




