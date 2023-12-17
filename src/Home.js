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
