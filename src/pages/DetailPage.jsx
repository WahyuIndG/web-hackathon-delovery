import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function DetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { detailProduct } = useSelector((states) => states);
  const dispatch = useDispatch;

  useEffect(() => {
    // TODO: dispatch async action to get detail product (use productId) | asyncReceiveDetailProduct(productId)
  }, [dispatch]);

  const onBuyHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    alert('your order will be proceed soon 🥰');
    navigate('/');
  };

  return (
    <>
      <div className="detail-product-page">
        <h2>Halaman Detail Produk</h2>
        <h3>Judul : Bunga {detailProduct.name}</h3>
        <img src={detailProduct.gambar} alt={detailProduct.nama} />
        <p>
          Deskripsi : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore consequatur
          eos iusto numquam vel! Laborum ea officiis iste voluptatum incidunt doloribus dolore enim
          velit, alias hic eos molestiae explicabo architecto.
        </p>
        <p>Category : {detailProduct.kategori_produk.nama}</p>
        <p>Stock : {detailProduct.jumlah_stock}</p>
        <p>Harga : {detailProduct.harga}</p>
        <button onClick={onBuyHandler}>BUY</button>
      </div>
    </>
  );
}

export default DetailPage;

/**
    "data": {
        "id": 1,
        "kategori_produk_id": 4,
        "nama": "illo",
        "harga": 2356,
        "jumlah_stok": 248,
        "gambar": null,

        "kategori_produk": {
            "id": 4,
            "nama": "autem",
    }
 */
