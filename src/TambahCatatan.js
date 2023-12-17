/* versi 2 mulainya */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TambahCatatan = ({ onUpdateCatatan }) => {
  const [judul, setJudul] = useState('');
  const [isi, setIsi] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Lakukan sesuatu dengan data judul dan isi, seperti menyimpan ke state atau API
    // ...

    // Pastikan onUpdateCatatan adalah fungsi sebelum memanggilnya
    if (typeof onUpdateCatatan === 'function') {
      // Panggil callback onUpdateCatatan untuk memberi tahu halaman Home bahwa catatan telah ditambahkan
      onUpdateCatatan({ title: judul, createdAt: new Date().toISOString(), body: isi });
    }

    // Setelah submit, kembali ke halaman Home
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h1>Tambah Catatan</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="judul" className="form-label">Judul</label>
          <input
            type="text"
            className="form-control"
            id="judul"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="isi" className="form-label">Isi Catatan</label>
          <textarea
            className="form-control"
            id="isi"
            value={isi}
            onChange={(e) => setIsi(e.target.value)}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
          disabled={!judul || !isi}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TambahCatatan;




