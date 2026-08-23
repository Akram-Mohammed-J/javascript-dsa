

function travellingMaze(maze, start, destination ) {
            let m = maze.length-1
            let n = maze[0].length -1
            
            let result =[]

            function dfs(i, j, strArray) {
                if(i < 0 || j < 0 || i > m  || j> n) {
                    return
                }
                if(i == destination[0] && j == destination[1]) {
                    result.push(strArray.join(""))
                }
                if(maze[i][j] == 1) {
                    return
                }
                // choose to include 
                strArray.push("D")
                dfs(i+1, j, strArray)
                strArray.pop()
                strArray.push("R")
                dfs(i, j+1, strArray)
                 strArray.pop()
            }

            dfs(start[0], start[1], [])
        
        return result

}





const maze = [
  [0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0]
];

const start = [0, 0];
const destination = [4, 4];

const out =  travellingMaze(maze, start, destination )
console.log(out)
