import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TambahCatatan = (props) => {
  const [judul, setJudul] = useState('');
  const [isi, setIsi] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onTambahCatatan({ judul, isi });
    setJudul('');
    setIsi('');
  };

  return (
    <div className="container mt-4">
      <h2>Tambah Catatan</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="judul" className="form-label">
            Judul Catatan
          </label>
          <input
            type="text"
            className="form-control"
            id="judul"
            placeholder="Judul Catatan"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="isi" className="form-label">
            Isi Catatan
          </label>
          <textarea
            className="form-control"
            id="isi"
            rows="3"
            placeholder="Isi Catatan"
            value={isi}
            onChange={(e) => setIsi(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Tambah Catatan
        </button>
        <Link to="/" className="btn btn-secondary ms-2">
          Kembali
        </Link>
      </form>
    </div>
  );
};

export default TambahCatatan;
