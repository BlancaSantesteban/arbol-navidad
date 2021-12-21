import { christmasTree } from './christmasTree';

describe('Árbol Navidad', () => {
  it('Tiene altura uno', () => {
    const arbol = christmasTree(1);

    expect(arbol).toEqual('*');
  });

  it('tiene altura dos', () => {
    const arbol = christmasTree(2);

    expect(arbol).toEqual('*\n***');
  });

  it('tiene altura tres', () => {
    const arbol = christmasTree(3);

    expect(arbol).toEqual('*\n***\n*****');
  });
});
