export async function getCategories() {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const requestJson = await request.json();
  return requestJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (query) {
    const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const requestJson = await request.json();
    return requestJson;
  }
  if (categoryId) {
    const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${categoryId}`);
    const requestJson = await request.json();
    return requestJson;
  }
}
