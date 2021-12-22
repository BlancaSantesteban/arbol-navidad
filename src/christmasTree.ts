export function christmasTree(height: number) {

    let tree=' '.repeat(height-1)+"*";
        for(let i=1;i!=height;i++){
            if(height-i==1){
                tree+="\n"+'*'.repeat((i*2)+1);
                break;
            }
            tree+="\n"+' '.repeat((height-1)-i)+'*'.repeat((i*2)+1);
           
        }
    return tree;  
}
