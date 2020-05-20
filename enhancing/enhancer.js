module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  ++item.enhancement
  if (item.enhancement < 20) {
    return { ...item };
  } else {
    return { ...item, enhancement: 20 };
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    item.durability -= 5;
    return { ...item};
  }
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
