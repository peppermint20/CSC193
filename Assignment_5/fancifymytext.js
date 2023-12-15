// Javascript file

function bigger() {
  const textArea = document.getElementById("text");
  textArea.style.fontSize = "24pt";
}

function fancy() {
  const textArea = document.getElementById("text");
  textArea.style.fontWeight = "bold";
  textArea.style.color = "blue";
  textArea.style.textDecoration = "underline";
}

function boring() {
  const textArea = document.getElementById("text");
  textArea.style.fontWeight = "normal";
  textArea.style.color = "";
  textArea.style.textDecoration = "";
}

function moo() {
  const textArea = document.getElementById("text");
  const text = textArea.value.toUpperCase();
  const textSplit = text.split(".");
  const joinedText = textSplit.join("-moo.");
  textArea.value = joinedText;
}
