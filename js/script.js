
// Copy to Clipboard
async function copyContent(target) {
  let rekening = document.getElementById(target);
  const storage = document.createElement('textarea');
  storage.value = rekening.innerText;
  rekening.appendChild(storage);
  storage.select();
  storage.setSelectionRange(0,99999);
  document.execCommand('copy');
  rekening.removeChild(storage);
  document.getElementById(`${target}-tooltip`).style.display = 'block';
  setTimeout( function() {
    document.getElementById(`${target}-tooltip`).style.display = "none";
}, 1000);
}
// navbar
function myFunction() {
  let x = document.getElementById("myNavbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 

// STORY
const inViewport = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("text-box-animation", entry.isIntersecting);
  });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {
  threshold: 1,
};

document.querySelectorAll('.story .bot-part .container').forEach(el => {
  Obs.observe(el, obsOptions);
});


let rekening = document.getElementById("bri").innerText
console.log(rekening)