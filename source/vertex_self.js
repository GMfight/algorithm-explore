// 邻接矩阵
function Vertex(){
    this.vexs=[]
    this.vertex=[]
    this.len=0;
}
function VertexNode(val,neighbors){
    this.val=val;
    this.neighbors=neighbors;
}
// 增加点
Vertex.prototype.addV=function(node){
    if(this.vertex.length>0&&(!node.neighbors||node.neighbors.length===0)){
        console.log('error node,the root node of vertex already exist')
        return;
    }

    if(!this.vertex||this.vertex.length===0){
        this.vexs[0]=node.val;
        this.vertex=[[1]]
        this.len=1;
        return;
    }
    if(this.vertex&&this.vertex.length>0){
        this.len++;
        let w=this.vertex[0].length;
        this.vexs[w]=node.val;
        this.vertex[w]=new Array(w+1).fill(0);
        let neighbors=node.neighbors;
        for(let i=0;i<neighbors.length;i++){
            if(neighbors[i]<=w){
                this.vertex[w][neighbors[i]]=1;
                this.vertex[neighbors[i]][w]=1;
            }
        }
    }
}
// 深度遍历
Vertex.prototype.dTravese=function(){
    let w=this.vertex.length;
    let visited=[]
    let dp=(i)=>{
        console.log(this.vexs[i],'--')

        visited[i]=true;
        for(let j=0;j<w;j++){
            if(this.vertex[i][j]===1&&!visited[j]){
                dp(j);
            }
        }
    }
    for(let i=0;i<w;i++){
        if(!visited[i]){
            dp(i)
        }
    }
}
// 路径搜索

Vertex.prototype.search=function(word){
    let str=word.split(''),w=this.len,visited=[];
    let dp=(vIndex,sIndex)=>{
        if(sIndex===word.length) return true;

        if(visited[vIndex]) return false;
        if(this.vexs[vIndex]!=str[sIndex]){
            return false;
        }
        visited[vIndex]=true;
        for(let j=0;j<w;j++){
            if(this.vertex[vIndex][j]===1&&!visited[j]){
                console.log('vIndex',vIndex,'j',j)
                if(dp(j,sIndex+1)){
                    return true;
                }
            }
        }
        visited[vIndex]=false;
        return false;
    }
    for(let i=0;i<w;i++){
        if(this.vexs[i]==str[0]&&!visited[i]){
            console.log('i',i)

            if(dp(i,0)) return true;
        }
    }
    return false;
}

Vertex.prototype.wTraverse=function(){
    let dp=(i)=>{
        if(visited[i]) return;
        visited[i]=true;
        // console.log(this.vexs[i])
        for(let j=0;j<w;j++){
            if(this.vertex[i][j]===1&&!visited[j]){
                queue.push(j);
            }
        }
        // console.log(queue,'queue',69)
        while(queue&&queue.length>0){
            dp(queue.shift());
        }
    }
    let queue=[],visited=[]
    let w=this.len;
    for(let i=0;i<w;i++){
        if(!visited[i]){
            dp(i);
        }
    }
}
let myGraph1=new Vertex()
//     0
// 1       3
//     2
myGraph1.addV(new VertexNode(0))
myGraph1.addV(new VertexNode(1,[0]))
myGraph1.addV(new VertexNode(3,[0]))
myGraph1.addV(new VertexNode(2,[0,3]))

// myGraph1.wTraverse()
console.log('search Result',myGraph1.search('02'));
// myGraph1.dTravese()
