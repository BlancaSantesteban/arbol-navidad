export function christmasTree(height: number) {
  let tree: string = '';

  for (let floor = 0; floor !== height; floor++) {
    const isLastFloor = height - floor === 1;

    if (floor !== 0) {
      tree += '\n';
    }

    tree += getAir(height, floor) + getLeafs(floor);
  }

  return tree;
}

function getLeafs(floor: number) {
  return '*'.repeat(floor * 2 + 1);
}

function getAir(height: number, floor: number = 0) {
  return ' '.repeat(height - 1 - floor);
}
