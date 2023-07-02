let countBox = document.querySelector('.counting');

let count = 0;

setInterval(() => {
  if (count === 100) {
    clearInterval(counting);
    return false;
  }
  count += 1;
  countBox.innerHTML = count + '%'
}, 20)