// function fetchUserPromise(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userId) {
//         const user = { id: userId, name: "User " + userId };
//       } else {
//         reject("Error: Invalid Username");
//       }
//     }, 1000);
//   })
//     .then((userId) => {
//       //.then to start the promise chain

//       setTimeout(() => {
//         if (userId) {
//           const posts = ["Post 1", "Post 2", "Post 3"];

//           resolve(posts);
//         } else {
//           reject(posts);
//         }
//       }, 1000);
//     })
//     .then((postId) => {
//       //.then to continue promise chain

//       setTimeout(() => {
//         if (postId) {
//           const comments = ["Comment 1", "Comment 2"];

//           resolve(comments);
//         } else {
//           reject(comments);
//         }
//       }, 1000);
//     });
// } // end of promise chain

// //function to run promise and display the data.
// fetchUserPromise()
//   .then((user) => {
//     console.log("User:" + user);
//   })
//   .then((posts) => {
//     console.log("Posts:" + posts);
//   })
//   .then((comments) => {
//     console.log("Comments" + comments);
//     //to catch any errors and throwback an error message.
//   })
//   .catch((error) => {
//     console.log(error.name + " " + error.message);
//   });

//function to fetch the userID info and return a New Promise------

function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        const user = { id: userId, name: "User " + userId };
        resolve(user);
      } else {
        reject("Error! Invalid data...");
      } //error handling }, 1000); });}
    }, 1000);
  });
}

//function to fetch the user posts into new promise------

function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        const posts = ["Post 1", "Post 2", "Post 3"];
        resolve(posts);
      } else reject("Error....");
    }, 1000);
  });
}

// function to fetch the user comments adn return a new promise ----

function fetchPostComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (postId) {
        const comments = ["Comment 1", "Comment 2"];
        resolve(comments);
      } else reject("Error!!!");
    }, 1000);
  });
}

//Now taking Promises and Chaining Them then() --------------------------------------------------------------------------------/*Refactoring: // / fetchUserData(1, (user) => {// console.log("User:", user);// fetchUserPosts(user.id, (posts) => {// console.log("Posts:", posts);// fetchPostComments(posts[0], (comments) => {// console.log("Comments:", comments);// });// });*/

fetchUserData(1)
  .then((user) => {
    //callback user data //Display results/data

    console.log(`User: ${user}`); //process and moving onto the next promise - user Posts

    return fetchUserPosts(user.id);
  })

  .then((posts) => {
    //fetching the user posts data

    console.log(`Posts: ${posts}`); //exceuting and returnin new promsie

    return fetchPostComments(posts[0]); //return specific post
  })
  .then((comments) => {
    console.log(`Comments: ${comments}`);

    //fetch/displays comments  //setup error handling
  })
  .catch((error) => console.error(error));
