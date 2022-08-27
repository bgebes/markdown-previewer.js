import React from 'react';

function InputCard() {
  return (
    <div
      className="w-50 shadow rounded m-2 p-3"
      style={{ minHeight: '75vh', backgroundColor: '#F5E8C7' }}
    >
      <textarea
        className="w-100 border-0"
        style={{
          height: '75vh',
          resize: 'none',
          background: 'none',
          outline: '0px',
        }}
        type="text"
        defaultValue="this is user input"
      />
    </div>
  );
}

export default InputCard;
