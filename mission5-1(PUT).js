let param = {
  method: "PUT",
  body: JSON.stringify({
    title: "a1 update test",
    body: "updated test by a1",
    userId: 1,
    id: 1
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
};

fetch('https://jsonplaceholder.typicode.com/posts/1', param)
  .then(res => res.json())
  .then(json => {
    console.log("post", json);
    fetch('https://jsonplaceholder.typicode.com/posts/${json.id}')
      .then(res => res.json())
      .then(json => console.log("query", json))
      .catch(e => console.error(e.message));
  })
  .catch(e => console.error(e.message));