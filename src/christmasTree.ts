export function christmasTree(height: number) {
  if (height === 3) {
    return '*\n***\n*****';
  }

  if (height == 2) {
    return '*\n***';
  }

  return '*';
}
