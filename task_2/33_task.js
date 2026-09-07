const users = [
  { id: 1, name: 'John', role: 'admin' },
  { id: 2, name: 'Alice', role: 'editor' },
  { id: 3, name: 'Bob', role: 'viewer' },
];

const permissions = {
  admin: ['create', 'read', 'update', 'delete'],
  editor: ['read', 'update'],
  viewer: ['read'],
};

// 1  Write a function can Access(userId, permission).
//2 Return true if the user's role has the requested permission.


function canaccess(userId, permission) {
  const user = users.find(user => user.id === userId);

  if (!user) return false;

  return permissions[user.role]?.includes(permission) ?? false;
}

// 3. Find all users who can update
const canupdate = users.filter(user =>
  canaccess(user.id, 'update')
);
console.log("can update", canupdate);

// 4. Find all users who can delete
const candelete = users.filter(user =>
  canaccess(user.id, 'delete')
);
console.log("can delete:", candelete);

// 5. Find all users who can only read
const canread = users.filter(user =>
  permissions[user.role]?.length === 1 &&
  permissions[user.role].includes('read')
);
console.log("can read:" ,canread);
