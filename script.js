function append(data) {
  console.log(data.message);
  let conatiner = document.getElementById("container");
  let img = document.getElementById("img");
  img.src = data.message;
  img.style.width = "600px";
  img.style.height = "600px";
}
async function callapi() {
  try {
    let res = await fetch("https://dog.ceo/api/breeds/image/random ");
    let data = await res.json();
    //   console.log(data.message)
    append(data);
  } catch (err) {
    console.log(err);
  }
}

callapi();
