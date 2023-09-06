import React from 'react';
import OccasionItem from './OccasionItem';

function OccasionList({ occasions }) {
  return (
    <>
      <div className="occasion-list">
        {occasions.map((occasion) => (
          <OccasionItem key={occasion.id} {...occasion} />
        ))}
      </div>
    </>
  );
}

export default OccasionList;
