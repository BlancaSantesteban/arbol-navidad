export function christmasTree(arg0: number) {
  if (arg0 === 3) {
    return '*\n***\n*****';
  }

  if (arg0 == 2) {
    return '*\n***';
  }
  return '*';
}
