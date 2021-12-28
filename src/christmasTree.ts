export function christmasTree(height: number) {
  let tree: string = ' '.repeat(height - 1) + '*';

  for (let i = 1; i !== height; i++) {
    const isLastFloor = height - i === 1;

    if (isLastFloor) {
      tree += '\n' + getLeafs(i);
      return tree;
    }
    tree += '\n' + ' '.repeat(height - 1 - i) + getLeafs(i);
  }

  return tree;
}

function getLeafs(floor: number) {
  return '*'.repeat(floor * 2 + 1);
}
