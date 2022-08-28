import React, { useCallback } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { getText, getExampleText, getHintStatus } from '../../actions/actions';

function PreviewCard() {
  const [text, exampleText] = [getText(), getExampleText()];
  const hintStatus = getHintStatus();
  const finalText = hintStatus ? exampleText : text;

  return useCallback(
    <div
      className="w-50 shadow rounded m-2 p-3 user-select-none"
      style={{ minHeight: '75vh', backgroundColor: '#F5E8C7' }}
    >
      <div style={{ height: '75vh', overflowY: 'auto' }}>
        <ReactMarkdown children={finalText} />
      </div>
    </div>,
    [finalText]
  );
}

export default PreviewCard;
