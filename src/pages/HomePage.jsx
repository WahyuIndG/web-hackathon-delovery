import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import OccasionList from '../components/OccasitonList';
import { asyncReceiveSeveralOccasions } from '../states/severalOccasions/action';
import { asyncReceiveRecomProducts } from '../states/recomProducts/action';

function HomePage() {
  const { recomProducts = [], severalOccasions = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: dispatch asyncEeceiveRecomProducts()
    dispatch(asyncReceiveRecomProducts());
    // TODO: dispatch asyncReceiveSeveralOccasions()
    dispatch(asyncReceiveSeveralOccasions());
  }, [dispatch]);

  return (
    <>
      <div className="home-page">
        <h1>Halaman Home</h1>
        <section className="occasion-section">
          <h3>Rekomendasi Produk 💕</h3>
          <Link to="/product">see all..</Link>
          <br />
          <ProductList products={recomProducts} />
        </section>

        <section className="product-section">
          <h3>Pilih Momenmu 💕</h3>
          <Link to="/occasion">see all..</Link>
          <br />
          <OccasionList occasions={severalOccasions} />
        </section>
      </div>
    </>
  );
}

export default HomePage;
