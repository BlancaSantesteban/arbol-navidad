export function christmasTree(height: number) {
  let tree: string = getAir(height) + getLeafs(0);

  for (let floor = 1; floor !== height; floor++) {
    const isLastFloor = height - floor === 1;

    if (isLastFloor) {
      tree += '\n' + getLeafs(floor);
      return tree;
    }
    tree += '\n' + getAir(height, floor) + getLeafs(floor);
  }

  return tree;
}

function getLeafs(floor: number) {
  return '*'.repeat(floor * 2 + 1);
}

function getAir(height: number, floor: number = 0) {
  return ' '.repeat(height - 1 - floor);
}
