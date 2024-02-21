const goat = document.getElementById('goat');
const chili = document.getElementById('chili');
const score = document.getElementById('score');

function jump() {
    goat.classList.add('jump-animation')
    setTimeout(() => {
        goat.classList.remove('jump-animation');
    }, 500);
}

document.addEventListener('keypress', () => {
    if (!goat.classList.contains('jump-animation')) {
        jump();
      }
})

setInterval(() => {
    score.innerText++; 
    const goatTop = parseInt(window.getComputedStyle(goat)
    .getPropertyValue('top'));
    const chiliLeft = parseInt(window.getComputedStyle(chili)
    .getPropertyValue('left'));

    if (chiliLeft < 0) {
        chili.style.display = 'none';
    } else {
        chili.style.display = '';
    }

    if (chiliLeft < 50 && chiliLeft > 0 && goatTop > 150 ) {
        alert("Du torskade. Poäng: " + score.innerText +
        "\n\nSpela igen?");
        location.reload();
    }

}, 50);