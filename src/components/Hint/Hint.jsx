import { useCallback } from 'react';
import { getHintStatus, handleHintStatus } from '../../actions/actions';

function Hint() {
  const hintStatus = getHintStatus();
  const hintStyle = hintStatus ? 'bg-light shadow' : '';

  return useCallback(
    <div className="d-flex justify-content-end align-items-center">
      <div
        className={`border border-secondary fs-1 fw-bold px-3 m-3 user-select-none rounded ${hintStyle}`}
        role="button"
        onClick={handleHintStatus}
      >
        ?
      </div>
    </div>,
    [hintStyle, handleHintStatus]
  );
}

export default Hint;
