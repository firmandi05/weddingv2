
// Copy to Clipboard
async function copyContent(target) {
  let rekening = document.getElementById(target).innerText;
  navigator.clipboard.writeText(rekening);
  document.getElementById(`${target}-tooltip`).style.display = 'block';
  setTimeout( function() {
    document.getElementById(`${target}-tooltip`).style.display = "none";
}, 1000);
}

// Comment Section
