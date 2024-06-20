async function getPost1() {
  try {
    const response1 = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response2 = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response3 = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data1 = await response1.json();
    const data2 = await response2.json();
    const data3 = await response3.json();

    let text1 =
      "Title: " + data1[0].title + " | | | " + "Description: " + data1[0].body;

    let text2 =
      "Title: " + data2[1].title + " | | | " + "Description: " + data2[1].body;

    let text3 =
      "Title: " + data3[2].title + " | | | " + "Description: " + data3[2].body;

    document.querySelector("#post1").innerText = text1;
    document.querySelector("#post1").innerText += text2;
    document.querySelector("#post1").innerText += text3;

    console.log(text1);
    console.log(text2);
    console.log(text3);
  } catch (err) {
    console.log(err);
  }
}

getPost1();
