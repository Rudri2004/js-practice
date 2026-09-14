const posts = [
    { id: 1, title: 'JavaScript Basics', authorId: 101 },
    { id: 2, title: 'React Basics', authorId: 102 },
    { id: 3, title: 'Array Methods', authorId: 101 },
];

const comments = [
    { id: 1, postId: 1, text: 'Great post' },
    { id: 2, postId: 1, text: 'Very useful' },
    { id: 3, postId: 2, text: 'Nice article' },
];

// 1. Add commentCount to every post.

const updatedPosts = posts.map(post => ({
    ...post,
    commentCount: comments.filter(comment => comment.postId === post.id).length
}));
console.log(updatedPosts);


// 2. Find the post with the most comments.

const mostCommentsPost = updatedPosts.reduce(
    (max, post) =>post.commentCount > max.commentCount ? post : max
);
console.log(mostCommentsPost);


// 3. Find posts with zero comments.

const zeroCommentsPosts = updatedPosts.filter(
    post => post.commentCount === 0
);
console.log(zeroCommentsPosts);


// 4. Count comments for every post.

const commentCounts = posts.map(post => ({
    postId: post.id,
    count: comments.filter( comment => comment.postId === post.id ).length
}));
console.log(commentCounts);


// 5. Create an object where post ID is the key and comment count is the value.

const commentCountObject = Object.fromEntries(
    commentCounts.map(item => [
        item.postId,
        item.count
    ])
);
console.log(commentCountObject);