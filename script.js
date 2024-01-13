const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const afterBtn = document.querySelector('.after');
const textElement = document.querySelector('.js-text');
const wrapper = document.querySelector('.wrapper');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener("click", () => {
  textElement.innerHTML = 'Yeeeeeyyyy!';
  noBtn.style.visibility = "hidden";
  yesBtn.style.visibility = "hidden";
  afterBtn.style.visibility = "visible";
});

const texts = [];
texts.push("Boo I'm yours already", "Aww babe I'm yours shh", "I'm yours already dummy", "Aw I'm yours already", "Muahhh I'm yours", "Yes I'm only yours", "Onlyyyy yours", "I love you <3");

function cuteTexts() {
  const random = Math.floor(Math.random() * texts.length);
  textElement.innerHTML = texts[random];
}

function yes() {
  let img = document.getElementById('image');
  img.src = 'images/together.gif';
}


noBtn.addEventListener('mouseover', () => {
  const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
  const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
  noBtn.style.left = i + 'px';
  noBtn.style.top = j + 'px';
});

noBtn.addEventListener('click', () => {
  const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
  const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
  noBtn.style.left = i + 'px';
  noBtn.style.top = j + 'px';
});