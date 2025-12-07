export function generateLetters() {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let fontsize = 11;
  let fontweight = 300;
  for (let i = 0; i < 120; i++) {
    const n = Math.floor(Math.random() * 25) + 1;

    let alp = alphabet[n];
    const div = document.createElement("div");
    div.textContent = alp;
    div.style.fontSize = `${fontsize}px`;

    div.style.fontWeight = fontweight;
    document.body.appendChild(div);
    fontsize++;
    if (i === 39) {
      fontweight = 400;
    } else if (i === 79) {
      fontweight = 600;
    }
  }
}
