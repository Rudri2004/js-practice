const products = [
  { id: 1, name: 'Phone', category: 'mobile', price: 70000 },
  { id: 2, name: 'Laptop', category: 'laptop', price: 100000 },
  { id: 3, name: 'Tablet', category: 'tablet', price: 40000 },
  { id: 4, name: 'Monitor', category: 'electronics', price: 25000 },
];

// TASK:

// Create a reusable search/filter function that supports:


function searchProducts(products, {
  search = '',
  category = '',
  minPrice,
  maxPrice,
} = {}) {
  const query = search.trim().toLowerCase();

  return products.filter(product => {
    const matchesName =
      !query || product.name.toLowerCase().includes(query);

    const matchesCategory =
      !category ||
      product.category.toLowerCase() === category.toLowerCase();

    const matchesMinPrice =
      minPrice === undefined || product.price >= minPrice;

    const matchesMaxPrice =
      maxPrice === undefined || product.price <= maxPrice;

    return (
      matchesName &&
      matchesCategory &&
      matchesMinPrice &&
      matchesMaxPrice
    );
  });
}


// 1. Search by product name.
console.log(searchProducts(products, { search: 'phone' }));

// 2. Filter by category.
console.log(searchProducts(products, { category: 'laptop' }));

// 3. Minimum price.
console.log(searchProducts(products, { minPrice: 50000 }));

// 4. Maximum price.
console.log(searchProducts(products, { maxPrice: 50000 }));

// 5. Any combination of the above filters.
console.log(
  searchProducts(products, {
    category: 'electronics',
    minPrice: 20000,
    maxPrice: 30000
  })
);


// 6. Return an empty array if nothing matches.
console.log(searchProducts(products, { category: 'shoes' }));
