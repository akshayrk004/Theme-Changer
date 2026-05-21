const btn = document.querySelector("#btn");

document.body.style.backgroundColor = "black";
document.body.style.color = "white";

btn.innerHTML = "Light Mode";

btn.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    btn.innerHTML = "Dark Mode ";
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    btn.innerHTML = "Light Mode";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
  }
});
