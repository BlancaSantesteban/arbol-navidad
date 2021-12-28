export function christmasTree(height: number) {
  const floors = getFloors(height);

  return floors.reduce((tree, floor) => {
    const isTopOfTree = floor === 0;

    const air = ' '.repeat(height - 1 - floor);
    const leafs = '*'.repeat(floor * 2 + 1);
    return isTopOfTree ? tree + air + leafs : tree + '\n' + air + leafs;
  }, '');
}

function getFloors(height: number) {
  // los pisos se contarán de 0 a la altura menos uno
  // siendo 0 la punta del árbol
  return [...Array(height).keys()];
}

/**
 * EJEMPLO DE REDUCE PARA UNA ALTURA DE 3 PISOS
 * height = 3 => floors = [0, 1, 2]
 *
 * ''
 *
 * floor = 0; tree = ''
 * -> '  *'
 *
 * floor = 1; tree = '  *'
 * -> '  *\n ***'
 *
 * floor = 2; tree = '  *\n ***'
 * -> '  *\n ***\n*****'
 */
