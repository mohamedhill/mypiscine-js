function fusion(obj1, obj2) {
  const result = {};

  const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

  for (const key of keys) {
    const v1 = obj1[key];
    const v2 = obj2[key];

    if (v2 === undefined) {
      result[key] = v1;
      continue;
    }

    if (v1 === undefined) {
      result[key] = v2;
      continue;
    }

    if (typeof v1 !== typeof v2 || Array.isArray(v1) !== Array.isArray(v2)) {
      result[key] = v2;
      continue;
    }

    if (Array.isArray(v1)) {
      result[key] = [...v1, ...v2];
      continue;
    }
    if (typeof v1 === "number") {
      result[key] = v1 + v2;
      continue;
    }
    if (typeof v1 === "string") {
      result[key] = v1 + " " + v2;
      continue;
    }

    if (typeof v1 === "object") {
      result[key] = fusion(v1, v2);
      continue;
    }


    result[key] = v2;
  }

  return result;
}
