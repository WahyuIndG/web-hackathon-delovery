import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductItem({
  id,
  nama,
  kategori_produk,
  harga,
  gambar,
  jumlah_stok,
  kota = 'Seluruh Kota',
}) {
  const navigate = useNavigate();

  const onProductClick = () => {
    navigate(`/product/${id}`);
  };

  const onProductPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/product/${id}`);
    }
  };

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
        <p>Kota : {kota}</p>
        <p>Cocok utk Momen : {kategori_produk}</p>
        <p>Stock Tersedia : {jumlah_stok}</p>
        <p>Price : Rp.{harga}</p>
      </div>
    </>
  );
}

export default ProductItem;
