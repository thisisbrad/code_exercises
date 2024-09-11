function fetchUserData(userId, callback) {
  setTimeout(() => {
    const user = { id: userId, name: "User " + userId };
    callback(user);
  }, 1000);
}

function fetchUserPosts(userId, callback) {
  setTimeout(() => {
    const posts = ["Post 1", "Post 2", "Post 3"];
    callback(posts);
  }, 1000);
}

function fetchPostComments(postId, callback) {
  setTimeout(() => {
    const comments = ["Comment 1", "Comment 2"];
    callback(comments);
  }, 1000);
}

fetchUserData(1, (user) => {
  console.log(user);
  fetchUserPosts(user.id, (posts) => {
    console.log(posts);
    fetchPostComments(posts[0], (post) => {
      console.log(post);
    });
  });
});

// Example usage (to be refactored):
// fetchUserData(1, (user) => {
//   console.log("User:", user);
//   fetchUserPosts(user.id, (posts) => {
//     console.log("Posts:", posts);
//     fetchPostComments(posts[0], (comments) => {
//       console.log("Comments:", comments);
//     });
//   });
// });
