fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
    const postsDiv = document.getElementById('posts');

    json.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
      postsDiv.appendChild(postElement);
    });
  })
  .catch((error) => console.error('Error:', error));

