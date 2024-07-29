import React, { ChangeEvent, FormEvent, useState } from 'react';
import './inputForm.css';
import { InputFormProps } from '../../store/interface';
import ToggleSwitch from '../ToggleSwitch';

function InputForm({ onSearch, onError, theme, setTheme }: InputFormProps) {
  const [textValue, setTextValue] = useState(localStorage.getItem('lastRequest') || '');

  function handleSearchInput(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    localStorage.setItem('lastRequest', textValue.trim());
    onSearch(textValue);
  }

  function changeText(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setTextValue(newValue);
  }

  function throwError() {
    try {
      throw new Error('Simulated error from InputForm');
    } catch (error) {
      onError(error as Error, { componentStack: '' });
    }
  }

  function handleToggleChange() {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  return (
    <form onSubmit={handleSearchInput}>
      <input type="text" name="search" value={textValue} onChange={changeText} />
      <button type="submit">Search</button>
      <button type="button" className="errorBtn" onClick={throwError}>
        Error
      </button>
      <ToggleSwitch initialChecked={false} onChange={handleToggleChange} />
    </form>
  );
}

export default InputForm;
