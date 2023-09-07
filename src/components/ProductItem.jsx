import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncReceiveCities } from '../states/cities/action';
import { asyncReceiveOccasions } from '../states/occasions/action';

function ProductItem({ id, nama, kategori_produk_id, harga, gambar, jumlah_stok }) {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { occasions = [] } = useSelector((states) => states);

  const onProductClick = () => {
    navigate(`/product/${id}`);
  };

  const onProductPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/product/${id}`);
    }
  };

  // useEffect(() => {
  //   dispatch(asyncReceiveOccasions());
  // }, []);

  return (
    <>
      <div
        className="product-item"
        onClick={onProductClick}
        onKeyDown={onProductPress}
        role="button"
        tabIndex={0}
      >
        <h3>{nama}</h3>
        <img src={gambar} alt={nama} />
        {/* <p>
          Cocok utk Momen :{' '}
          {occasions.find((occasion) => {
            if (occasion.id === kategori_produk_id) return occasion.name;
          })}
        </p> */}
        <p>Stock Tersedia : {jumlah_stok}</p>
        <p>Price : Rp.{harga}</p>
      </div>
    </>
  );
}

export default ProductItem;
