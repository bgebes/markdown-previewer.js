import React, { useCallback } from 'react';
import {
  getText,
  getExampleText,
  handleText,
  getHintStatus,
} from '../../actions/actions';

function InputCard() {
  const [text, exampleText] = [getText(), getExampleText()];
  const hintStatus = getHintStatus();
  const finalText = hintStatus ? exampleText : text;

  return useCallback(
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
        value={finalText}
        onChange={handleText}
      />
    </div>,
    [finalText, handleText]
  );
}

export default InputCard;
