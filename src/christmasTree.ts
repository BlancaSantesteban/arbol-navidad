export function christmasTree(height: number) {

    let tree="*";
        for(let i=1;i!=height;i++){
            tree+="\n"+tree.repeat((i*2)+1);
        }
    return tree;
    
}
/*

if (height === 5) {
    return '*\n***\n*****\n*******\n*********';
    }
if (height === 4) {
    return '*\n***\n*****\n*******';
    }
  if (height === 3) {
    return '*\n***\n*****';
  }

  if (height == 2) {
    return '*\n***';
  }

  return '*';
*/
