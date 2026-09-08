const currentPermissions = ['read', 'write', 'delete'];
const newPermissions = ['read', 'update', 'delete'];

// 1. Find permissions that were added.
// 2. Find permissions that were removed.
// 3. Find permissions that remain unchanged.
// 4. Return:
//
// {
//   added: [],
//   removed: [],
//   unchanged: []
// }

const result = {
 
  added: newPermissions.filter(
    (permission) => !currentPermissions.includes(permission)
  ),

  removed: currentPermissions.filter(
    (permission) => !newPermissions.includes(permission)
  ),

  unchanged: currentPermissions.filter(
    (permission) => newPermissions.includes(permission)
  ),
};

console.log(result);
