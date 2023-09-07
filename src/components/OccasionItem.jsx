import React from 'react';
import { useNavigate } from 'react-router-dom';

function OccasionItem({ nama, gambar, jumlah_stok }) {
  const navigate = useNavigate();

  const onOccasionClick = () => {
    navigate(`/occasion/${nama}`);
  };

  const onOccasionPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/occasion/${nama}`);
    }
  };

  return (
    <>
      <div
        className="occasion-item"
        onClick={onOccasionClick}
        onKeyDown={onOccasionPress}
        role="button"
        tabIndex={0}
      >
        <h3>{nama}</h3>
        <img src={gambar} alt={nama} />
        <p>{jumlah_stok}</p>
      </div>
    </>
  );
}

export default OccasionItem;
