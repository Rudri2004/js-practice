const menu = [
  {
    id: 1,
    title: 'Dashboard',
    children: []
  },
  {
    id: 2,
    title: 'Settings',
    children: [
      {
        id: 3,
        title: 'Profile',
        children: []
      },
      {
        id: 4,
        title: 'Security',
        children: [
          {
            id: 5,
            title: 'Password',
            children: []
          }
        ]
      }
    ]
  }
];

// 1. Find a menu item by id
function findMenuItem(items, id) {
  for (const item of items) {
    if (item.id === id) {
      return item;
    }

    if (item.children.length > 0) {
      const result = findMenuItem(item.children, id);

      if (result) {
        return result;
      }
    }
  }

  return null;
}

// 2. Find item with id 5
const item5 = findMenuItem(menu, 5);

console.log("Item 5:");
console.log(item5);

// 3. Return the complete path of item id 5.
// 4. Count total menu items.
// 5. Find the maximum nesting level.
