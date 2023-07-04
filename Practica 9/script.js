let form = document.getElementById("form");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let post = document.getElementById("post");

const charCount = document.getElementById('charCount');
const charRemaining = document.getElementById('charRemaining');

textarea.addEventListener('input', function() {
  const count = textarea.value.length;
  charCount.textContent = count;
  charRemaining.textContent = 100 - count;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textarea.value === "") {
    msg.innerHTML = "El comentario no puede estar vacio.";
  } else {
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = textarea.value;
  createPost();
};

let createPost = () => {
  post.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span>
        <i onclick="editpost(this)" class="fas fa-edit"></i>
        <i onclick="deletepost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `
    textarea.value = "";
};

let editpost = (e) => {
    textarea.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}

let deletepost = (e) => {
    e.parentElement.parentElement.remove();
}