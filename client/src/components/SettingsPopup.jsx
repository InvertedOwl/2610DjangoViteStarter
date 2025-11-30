import React, { useEffect, useRef } from 'react';
import './SettingsPopup.css';

export const SettingsPopup = ({ onClose }) => {
  const ref = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDocClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onDocClick);
    };
  }, [onClose]);

  return (
    <div className="settings-popup" ref={ref} role="dialog" aria-label="Settings">
      <div className="settings-header">
        <strong>Settings</strong>
      </div>
      <div className="settings-body">
        <label>
            <input type="range" min="1" max="100" value="50" />
        </label>
        <label>
          <input type="checkbox" /> Enable feature B
        </label>
        <div className="settings-note">(Example options — replace with your controls)</div>
      </div>
      <div className="settings-footer">
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SettingsPopup;
