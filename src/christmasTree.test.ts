import { christmasTree } from './christmasTree';

describe('Árbol Navidad', () => {
  it('tiene altura uno', () => {
    const arbol = christmasTree(1);

    expect(arbol).toEqual('*');
  });

  it('tiene altura dos', () => {
    const arbol = christmasTree(2);

    expect(arbol).toEqual(' *\n***');
  });

  it('tiene altura tres', () => {
    const arbol = christmasTree(3);

    expect(arbol).toEqual('  *\n ***\n*****');
  });
  it('tiene altura cinco', () => {
    const arbol = christmasTree(5);

    expect(arbol).toEqual('    *\n   ***\n  *****\n *******\n*********');
  });
 
});
