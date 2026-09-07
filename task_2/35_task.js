const names = [
  '  john doe ',
  'JANE SMITH',
  'alice   johnson',
  '',
  '   bob brown'
];
// 1  Remove unnecessary spaces.
//2. Remove empty names
// 3.  Convert names into title case.
// 4  Replace multiple spaces with one space.
  // 5.Sort the final names alphabetically.

const finalNames = names.map(name => name.trim().replace(/\s+/g, ' '))
 .filter(name => name !== '').map(name =>
    name
      .toLowerCase()
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ')).sort();

console.log(finalNames);

