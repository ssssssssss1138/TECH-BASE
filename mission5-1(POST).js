let param = {
  method: "POST",
  body: JSON.stringify({
    title: "a1 test",
    body: "this is test by a1",
    userId: 1
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
};

fetch('https://jsonplaceholder.typicode.com/posts', param)
  .then(res => res.json())
  .then(json => {
    console.log("post", json);
    fetch('https://jsonplaceholder.typicode.com/posts/${json.id}')
      .then(res => res.json())
      .then(json => console.log("query", json))
      .catch(e => console.error(e.message));
  })
  .catch(e => console.error(e.message));