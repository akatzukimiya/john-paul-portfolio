function isLight() {
    return localStorage.getItem("dark-mode");
  }
  
  function toggleRootClass() {
    document.querySelector("body").classList.toggle("dark");
  }
  
  function toggleLocalStorageItem() {
    if (isLight()) {
      localStorage.removeItem("dark-mode");
    } else {
      localStorage.setItem("dark-mode", "set");
    }
  }
  
  if (isLight()) {
    toggleRootClass();
  }
  
  document.querySelector(".theme-toggle").addEventListener("click", () => {
    toggleLocalStorageItem();
    toggleRootClass();
  });