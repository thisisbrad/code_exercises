// Original callback-based functions converted to return Promises
function fetchUserData(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = { id: userId, name: "User " + userId };
      resolve(user);
    }, 1000);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const posts = ["Post 1", "Post 2", "Post 3"];
      resolve(posts);
    }, 1000);
  });
}

function fetchPostComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const comments = ["Comment 1", "Comment 2"];
      resolve(comments);
    }, 1000);
  });
}

//     return fetchUserPosts(user.id);
//   })
//   .then((posts) => console.log(posts));

// Refactored code using Promise chain
// fetchUserData(1)
//   .then((user) => {
//     console.log("User:", user);
//     return fetchUserPosts(user.id);
//   })
//   .then((posts) => {
//     console.log("Posts:", posts);
//     return fetchPostComments(posts[0]);
//   })
//   .then((comments) => {
//     console.log("Comments:", comments);
//   })
//   .catch((error) => {
//     console.error("An error occurred:", error);
//   });
