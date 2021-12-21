import { christmasTree } from './christmasTree';

describe('Árbol Navidad', () => {
  it('Tiene altura uno', () => {
    const arbol = christmasTree(1);

    expect(arbol).toEqual('*');
  });
});
