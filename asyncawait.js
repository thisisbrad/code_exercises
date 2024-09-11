function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data:", data);
      return data;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
fetchData("https://jsonplaceholder.typicode.com/todos/1");

// const fetchData = async (url) => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log("Data:", data);
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };
