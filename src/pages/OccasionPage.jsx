import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OccasionList from '../components/OccasitonList';

function OccasionPage() {
  const { occasions = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: dispatch() async action to get list of occasion | asyncReceiveOccasion()
    dispatch();
  }, [dispatch]);

  if (occasions.length === 0) {
    return null;
  }

  return (
    <>
      <div className="occasion-page">
        <h2>Halaman Occasions</h2>
        <OccasionList occasions={occasions} />
      </div>
    </>
  );
}

export default OccasionPage;
