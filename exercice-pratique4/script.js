async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    const listsElementNode = document.getElementById("posts-list");

    if (!data.length) {
      return;
    }

    data.forEach(function (post) {
      // UL
      const listElementNode = document.createElement("li");

      const text =
        "Title: " + post.title + " | | | " + "Description: " + post.body;

      // LI
      const textListElementNode = document.createTextNode(text);

      listElementNode.append(textListElementNode);
      listsElementNode.append(listElementNode);
    });

    const loaderNode = document.getElementById("loader");
    loaderNode.remove();
  } catch (err) {
    console.log(err);
  }
}

getPosts();
