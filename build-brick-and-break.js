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
  for (let i = 0; i < ids.length; i++) {
    const element = document.getElementById(ids[i]);

    if (element.hasAttribute("data-foundation")) {
      element.dataset.repaired = "in progress";
    }
  }
}

export function destroy() {
  const last = document.body.lastElementChild;
  if (last) {
    document.body.removeChild(last);
  }
}
