import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../components/ProductList';

// ! delovery.com/occasion/pernikahan/
// ! delovery.com/occasion/wisuda/
// ! delovery.com/occasion/:name/

function ProductByOccasionPage() {
  const { occasionId } = useParams();
  const { products = [], cities = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: dispatch async action to get products by occasion | asyncReceiveProductsByOccasion(occasionId)
    // TODO: dispatch async action to get list of city | asyncReceiveCities()
  }, [dispatch]);

  const onCityChange = ({ target }) => {
    // TODO: dispatch async action to get filtered products by city| asyncReceiveProductsByCity(target.value)  |  atur di action creator utk buat percabangan
  };

  if (products.length === 0) {
    return null;
  }

  return (
    <>
      <div className="product-by-occasion-page">
        <h2>Halaman Produk utk {name}</h2>

        <section className="list-section">
          <select onChange={onCityChange}>
            <option value="all">all</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>

          <ProductList products={products} />
        </section>
      </div>
    </>
  );
}

export default ProductByOccasionPage;
