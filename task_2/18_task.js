


const words = [
  'javascript',
  'react',
  'javascript',
  'html',
  'css',
  'react',
  'javascript',
  'html'
];



// 1. Count the frequency of every word.
// 5. Solve the frequency calculation using reduce.
const frequency = words.reduce((result, word) => {
    result[word] = (result[word] || 0) + 1;

    return result;
}, {});
console.log(frequency);

// 2. Find the most frequently used word.
// 3. Find all words that appear more than once.
const repeatedWords = Object.entries(frequency)
    .filter(([word, count]) => count > 1)
    .map(([word]) => word);
console.log(repeatedWords);

// 4. Sort words by frequency from highest to lowest.


