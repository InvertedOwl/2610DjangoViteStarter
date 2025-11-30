import React, { useEffect, useRef } from 'react';
import './SettingsPopup.css';
import { parse as parseCookie } from 'cookie';

export const SettingsPopup = (props) => {
  const blocks = props.blocks;

  const saveScript = async () => {
    const scriptData = { "script_json": blocks, "title": "My Script", "id": parseCookie(document.cookie).script_id || null };
    const scriptJSON = JSON.stringify(scriptData, null, 2);


    const response = await fetch("/script/", {
      method: "POST",
        headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": parseCookie(document.cookie).csrftoken
      },
      credentials: 'same-origin',
      body: scriptJSON,
    })

    const data = await response.json();
    if (data.script_id) {
      document.cookie = `script_id=${data.script_id}; path=/;`;
    }

    console.log(scriptJSON);
  }

  return (
    <div className="settings-popup" role="dialog" aria-label="Settings">
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

        <button onClick={saveScript}>Save Script</button>
      </div>
    </div>
  );
};

export default SettingsPopup;
