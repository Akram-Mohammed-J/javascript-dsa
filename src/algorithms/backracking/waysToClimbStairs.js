function waysToClimbStairs(n) {
let result = []
let tmpArray = []
function dfs(i, tmpArray) {
   if(i == n) {
    result.push([...tmpArray])
    return
   }
   if(i>n){ return }
//  choose to include
    tmpArray.push(1)
   dfs(i+1, tmpArray)
   // choose not to include
   tmpArray.pop()
   tmpArray.push(2)
   dfs(i+2, tmpArray)
}
dfs(0, tmpArray )
return result
}
 

const out = waysToClimbStairs(3)
console.log(out)
