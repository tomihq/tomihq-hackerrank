/* Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

Function description

Complete the  function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers
Return

int: the absolute diagonal difference
Input Format

The first line contains a single integer, , the number of rows and columns in the square matrix .
Each of the next  lines describes a row, , and consists of  space-separated integers .

Constraints
-100 <= arr[i][j] <= 100
Output Format

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

Sample Input

3
11 2 4
4 5 6
10 8 -12
Sample Output

15 */

(()=>{

    main();

    function diagonalDifference(arr: number[][]): number {
        let diagonals:number[] = [0, 0];
        for(let i = 0; i<arr.length; i++){
            let j = i+1;
            diagonals[0]+=arr[i][i];
            diagonals[1]+=arr[i][arr.length-j];
           
        }

        return (diagonals[0]-diagonals[1])<1 && ((diagonals[0]-diagonals[1])*-1) || diagonals[0]-diagonals[1];
    }

    function main(){
        let arr:number[][] = [
            [11, 2, 4], 
            [4, 5, 6], 
            [10, 8, -12]
        ];
        //Must return 15
        diagonalDifference(arr);
    }


})();