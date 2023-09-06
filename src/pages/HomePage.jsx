import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import OccasionList from '../components/OccasitonList';

function HomePage() {
  const { recommendedProducts = [], recommendedOccasions = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: dispatch receiveRecommendedProducts()
    // TODO: dispatch receiveRecommendedOccasions()
  }, [dispatch]);

  return (
    <>
      <div className="home-page">
        <section className="occasion-section">
          <h3>Apa Momenmu 💕</h3>
          <Link to={'/occasion'}>see all..</Link>
          <OccasionList recommendedOccasions={recommendedOccasions} />
        </section>

        <section className="product-section">
          <h3>Rekomendasi Puket 💕</h3>
          <Link to={'/product'}>see all..</Link>
          <ProductList recommendedProducts={recommendedProducts} />
        </section>
      </div>
    </>
  );
}

export default HomePage;
