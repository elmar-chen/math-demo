/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var tried = [0];
 
 function test(cell, m, n, k){
     if(cell[0]<0||cell[0]>=m)return false;
     if(cell[1]<0||cell[1]>=n)return false;
     if(tried.indexOf(cell[0]*1000+cell[1])>=0)return false;
     var num = cell[0]%10 + (cell[0] - cell[0]%10)/10;
     num += cell[1]%10 + (cell[1] - cell[1]%10)/10;
     if(num>k) return false;
     return true;
 }
 var movingCount = function(m, n, k) {
     var tries =[ [0, 0]];
     var dirs = [[0,1],[0,-1], [1,0],[-1,0]]
     while(tries.length>0){
         var newTries = [];
         for(var i=0; i<tries.length; i++){
             var cell = tries[i];
             dirs.forEach(dir=>{
                 var targetCell = [cell[0]+dir[0], cell[1]+dir[1]];
                 if(test(targetCell, m, n, k)){
                     tried.push(targetCell[0]*1000+targetCell[1]);
                     newTries.push(targetCell);
                 } 
             }) 
         }
         tries = newTries;
     }
         return tried.length;
 };
movingCount(1,3,11)

console.log(movingCount(1,3,11))