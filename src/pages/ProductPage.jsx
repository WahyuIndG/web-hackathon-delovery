import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../components/ProductList';
import {
  asyncReceiveAllProducts,
  asyncReceiveFilteredProductsByCity,
} from '../states/products/action';
import { asyncReceiveCities } from '../states/cities/action';

function ProductPage() {
  const { products = [], cities = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: dispatch() async action to getAllProducts()  => semua products
    dispatch(asyncReceiveAllProducts());
    // TODO: dispatch() async action to getAllCities() => dptin kota-kota
    // dispatch(asyncReceiveCities());
  }, [dispatch]);

  const onCityChange = ({ target }) => {
    // TODO: dispatch async action to get filtered products by city | asyncReceiveProductsByCity(target.value)  |  atur di action creator utk buat percabangan
    // dispatch(asyncReceiveFilteredProductsByCity(target.value));
  };

  if (products.length === 0) {
    return null;
  }

  return (
    <>
      <div className="product-page">
        <h2>Halaman Produk</h2>

        <section className="section-list">
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

export default ProductPage;
