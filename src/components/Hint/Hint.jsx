import React from 'react';

function Hint() {
  return (
    <div className="d-flex justify-content-end">
      <div
        className="border border-secondary fs-1 fw-bold px-3 m-3 shadow"
        style={{ width: 'fit-content', backgroundColor: '#ECCCB2' }}
      >
        ?
      </div>
    </div>
  );
}

export default Hint;
