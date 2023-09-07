import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { asyncReceiveProductDetail } from '../states/productDetail/action';

function DetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { productDetail = null } = useSelector((states) => states);
  const dispatch = useDispatch;

  useEffect(() => {
    // TODO: dispatch async action to get detail product (use productId) | asyncReceiveProductDetail(productId)
    dispatch(asyncReceiveProductDetail(productId));
  }, [dispatch, productId]);

  const onBuyHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    alert('your order will be proceed soon 🥰');
    navigate('/');
  };

  if (!productDetail) {
    return null;
  }

  return (
    <>
      <div className="detail-product-page">
        <h2>Halaman Detail Produk</h2>
        <h3>Judul : Bunga {productDetail.name}</h3>
        <img src={productDetail.gambar} alt={productDetail.nama} />
        <p>
          Deskripsi : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore consequatur
          eos iusto numquam vel! Laborum ea officiis iste voluptatum incidunt doloribus dolore enim
          velit, alias hic eos molestiae explicabo architecto.
        </p>
        <p>Category : {productDetail.kategori_produk.nama}</p>
        <p>Stock : {productDetail.jumlah_stock}</p>
        <p>Harga : {productDetail.harga}</p>
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
