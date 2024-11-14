const allProductsUrl =
  "https://marquis4484.github.io/tealaxation_api/JSON_STORE_API.json";

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

const formatPrice = () => {};

const getStorageItem = () => {};
const setStorageItem = () => {};

export {
  allProductsUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
};
