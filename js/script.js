
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
document.querySelectorAll('.gallery .bot-part a').forEach(el => {
  Obs.observe(el, obsOptions);
});

// AUTO PLAY SONG
const audio = new Audio("./song/page-song.mp3");
const playSongBtn = document.querySelector('button');

playSongBtn.addEventListener('click', () => {
  audio.play()
})

// Disable Enable Scroll 
const inviteButton = document.querySelector('button'); 

inviteButton.addEventListener('click', () => {
  const body = document.querySelector('body');
  body.classList.add('enable-scroll');

})