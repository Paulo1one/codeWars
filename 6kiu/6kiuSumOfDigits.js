function digital_root(n) {
  while (n >= 10) {
    n = n
      .toString()
      .split("")
      .reduce((acc, curr) => acc + Number(curr), 0);
  }
  return n;
}

digital_root(16); //7
digital_root(456); // 6);
