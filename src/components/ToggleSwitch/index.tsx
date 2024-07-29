import React, { useState } from 'react';
import { ToggleSwitchProps } from '../../store/interface';
import './ToggleSwitch.css';

function ToggleSwitch({ initialChecked = false, onChange }: ToggleSwitchProps) {
  const [checked, setChecked] = useState(initialChecked);

  const handleToggle = () => {
    setChecked(!checked);
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        id="toggleSwitch"
        checked={checked}
        onChange={handleToggle}
      />
      <label className="toggle-switch-label" htmlFor="toggleSwitch">
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
}

export default ToggleSwitch;
