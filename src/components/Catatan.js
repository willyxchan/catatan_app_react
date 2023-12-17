import React from 'react';

const Catatan = ({ catatan, onDelete }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{catatan.judul}</h5>
        <p className="card-text">{catatan.isi}</p>
        <p className="card-text">
          <small className="text-muted">{catatan.waktu}</small>
        </p>
        <button onClick={onDelete} className="btn btn-danger ms-2">
          Hapus
        </button>
      </div>
    </div>
  );
};

export default Catatan;
