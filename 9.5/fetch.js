//WAP to get the data from the api and display it in the console
const url = "https://jsonplaceholder.typicode.com/todos";

fetch(url)
  .then((success) => {
    return success.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("there was an error", error);
  });
