import { useState, useEffect } from 'react';

function useLocalStorageState(key, defaultVal) {
  // make state, based off value in localStorage or default
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key)) || defaultVal;
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });

  // update localStorage when state changes
  useEffect(
    () => {
      window.localStorage.setItem(key, JSON.stringify(state));
    },
    [key, state]
  );

  return [state, setState];
}

export default useLocalStorageState;
