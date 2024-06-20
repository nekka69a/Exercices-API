const latitude = 45.764043;

const longitude = 4.835659;

async function getPost1() {
  try {
    const response1 = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const response2 = await fetch(
      "https://jsonplaceholder.typicode.com/posts/2"
    );
    const response3 = await fetch(
      "https://jsonplaceholder.typicode.com/posts/3"
    );
    const data1 = await response1.json();
    const data2 = await response2.json();
    const data3 = await response3.json();

    let text1 =
      "Title: " + data1.title + " | | | " + "Description: " + data1.body;

    let text2 =
      "Title: " + data2.title + " | | | " + "Description: " + data2.body;

    let text3 =
      "Title: " + data3.title + " | | | " + "Description: " + data3.body;

    if (!data1) {
      return;
    }

    const posts = document.querySelector("#posts");

    const post1 = document.createElement("div");
    const post2 = document.createElement("div");
    const post3 = document.createElement("div");

    post1.innerHTML = text1;
    post2.innerHTML = text2;
    post3.innerHTML = text3;

    posts.append(post1);
    posts.append(post2);
    posts.append(post3);

    const loaderNode = document.querySelector("#loader");
    loaderNode.remove();
  } catch (err) {
    console.log(err);
  }
}

getPost1();
