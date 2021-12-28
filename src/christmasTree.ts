export function christmasTree(height: number) {
  let tree: string = '';

  for (let floor = 0; floor < height; floor++) {
    const isTopOfTree = floor === 0;
    if (!isTopOfTree) {
      tree += '\n';
    }

    const air = ' '.repeat(height - 1 - floor);
    const leafs = '*'.repeat(floor * 2 + 1);
    tree += air + leafs;
  }

  return tree;
}
