import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../components/ProductList';
import {
  asyncReceiveFilteredProductsByCity,
  asyncReceiveFilteredProductsByOccasion,
} from '../states/products/action';
import { asyncReceiveCities } from '../states/cities/action';
import { asyncReceiveOccasions } from '../states/occasions/action';

// ! delovery.com/occasion/1/
// ! delovery.com/occasion/occasionId/

function ProductByOccasionPage() {
  const { occasionId } = useParams();
  const { products = [], cities = [], occasions = [] } = useSelector((states) => states);
  const [titleOccasion, setTitleOccasion] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: dispatch async action to get products by occasion | asyncReceiveProductsByOccasion(occasionId)
    dispatch(asyncReceiveFilteredProductsByOccasion(occasionId));
    dispatch(asyncReceiveOccasions());

    // TODO: dispatch async action to get list of city | asyncReceiveCities()
    // dispatch(asyncReceiveCities());
  }, [dispatch, occasionId]);

  useEffect(() => {
    setTitleOccasion((prev) => {
      const occ = occasions.find((o) => o.id == occasionId);
      if (!occ) {
        return;
      }
      const capitilized = occ.nama.charAt(0).toUpperCase() + occ.nama.slice(1);
      return capitilized;
    });
  }, [products]);

  const onCityChange = ({ target }) => {
    // TODO: dispatch async action to get filtered products by city| asyncReceiveProductsByCity(target.value)  |  atur di action creator utk buat percabangan
    dispatch(asyncReceiveFilteredProductsByCity(target.value));
  };

  if (products.length === 0) {
    return null;
  }

  return (
    <>
      <div className="product-by-occasion-page">
        <h2>Halaman Produk utk Kategori {titleOccasion}</h2>

        <section className="list-section">
          <select onChange={onCityChange}>
            <option value="all">all</option>
            <option value="1">kota Banda Aceh</option>
            <option value="2">kota Sabang</option>
            <option value="3">Kota Lhokseumawe</option>
            <option value="4">Kota Langsa</option>
            <option value="5">Kota Subulussalam</option>
            {/* {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.nama}
              </option>
            ))} */}
          </select>

          <ProductList products={products} />
        </section>
      </div>
    </>
  );
}

export default ProductByOccasionPage;
