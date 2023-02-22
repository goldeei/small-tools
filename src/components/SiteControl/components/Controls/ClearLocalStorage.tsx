function ClearLocalStorage() {
  function clearLocalStorage() {
    localStorage.clear();
  }

  return <button onClick={() => clearLocalStorage()}>Clear All Storage</button>;
}

export default ClearLocalStorage;
