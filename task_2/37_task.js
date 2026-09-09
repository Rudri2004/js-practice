const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  { id: 6, name: 'Item 6' },
  { id: 7, name: 'Item 7' },
  { id: 8, name: 'Item 8' },
  { id: 9, name: 'Item 9' },
  { id: 10, name: 'Item 10' },
];

// QUESTION:
// Create a pagination function.
//
// The function should accept:
// page
// limit
//
// Return:
// {
//   data: [],
//   currentPage,
//   totalItems,
//   totalPages,
//   hasNextPage,
//   hasPreviousPage
// }
//
// Also handle invalid page numbers.

function paginate(page, limit) {
  const totalItems = items.length;

  // Handle invalid limit
  limit = Number(limit);

  if (!Number.isInteger(limit) || limit <= 0) {
    limit = 10;
  }

  // Calculate total pages
  const totalPages = Math.ceil(totalItems / limit);

  // Handle invalid page
  page = Number(page);

  if (!Number.isInteger(page) || page < 1) {
    page = 1;
  }

  // If page is greater than total pages,
  // use the last page
  const currentPage = Math.min(page, totalPages);

  // Calculate starting index
  const startIndex = (currentPage - 1) * limit;

  // Get data for current page
  const data = items.slice(startIndex, startIndex + limit);

  return {
    data,
    currentPage,
    totalItems,
    totalPages,
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
  };
}

// Call the function
const result = paginate(2, 3);

// Print output
console.log(result);
