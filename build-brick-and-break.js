export function build(n) {
  let count = 1;
  const inter = setInterval(() => {
    const div = document.createElement("div");
    div.id = `brick-${count}`;
    if ((count - 1) % 3 === 1) {
      div.dataset.foundation = true;
    }

    document.body.appendChild(div);

    if (count >= n) {
      clearInterval(inter);
    }

    count++;
  }, 100);
}
export function repair(...ids) {
  for (const id of ids) {
    const element = document.getElementById(id);
    if (!element) continue;

    if (element.hasAttribute("data-foundation")) {
      element.dataset.repaired = "in progress";
    } else {
      element.dataset.repaired = true;
    }
  }
}

export function destroy() {
  const last = document.body.lastElementChild;
  if (last) {
    document.body.removeChild(last);
  }
}
