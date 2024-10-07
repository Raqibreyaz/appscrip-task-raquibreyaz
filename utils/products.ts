export const fetchProducts = async (
  query: {
    category: string;
    sort: string;
  } | null
) => {
  const q = query
    ? `/category/${query.category}${
        query.sort ? `?sort=${query.sort}&limit=25` : "?limit=25"
      }`
    : "";

  // key:/electronics, /jewelry
  const storedProducts = localStorage.getItem(q);

  // if products are already chached for that query then use it
  if (storedProducts) return JSON.parse(storedProducts);

  // otherwise fetch products and then store and use them
  const products = await fetch(`https://fakestoreapi.com/products${q}`).then(
    (res) => {
      return res.json();
    }
  );

  localStorage.setItem(q, JSON.stringify(products));

  return products;
};

export const fetchCategories = async (): Promise<string[]> => {
  // first check if categories are already cached
  const storedCategories = localStorage.getItem("categories");

  // if not cached then fetch them
  if (!storedCategories) {
    return await fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((res) => {
        // store the categories in localstorage for future use
        localStorage.setItem("categories", JSON.stringify(res));

        return res;
      });
  }
  // if cached then return them
  else {
    // use the pre saved data
    return JSON.parse(storedCategories);
  }
};
