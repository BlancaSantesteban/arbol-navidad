describe('Árbol Navidad', () => {
  it('Tiene altura uno', () => {
    const arbol = christmasTree(1);

    expect(arbol).toEqual('*');
  });
});

function christmasTree(arg0: number) {
  return '*';
}
