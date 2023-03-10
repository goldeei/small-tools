function ClearLocalStorage() {
  function clearLocalStorage() {
    localStorage.clear();
    location.reload();
  }

  return <button onClick={() => clearLocalStorage()}>Clear All Storage</button>;
}

export default ClearLocalStorage;
