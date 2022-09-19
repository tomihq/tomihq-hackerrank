/* In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

Function Description

Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

aVeryBigSum has the following parameter(s):

int ar[n]: an array of integers .
Return

long: the sum of all array elements
Input Format

The first line of the input consists of an integer .
The next line contains  space-separated integers contained in the array.

Output Format

Return the integer sum of the elements in the array.

Constraints
1 <= n <= 10
0 <= ar[i] <= 10^10 

Sample Input 
5
1000000001 1000000002 1000000003 1000000004 1000000005
*/

(()=>{

    main();

    function aVeryBigSum(ar: number[]): number {
        return ar.reduce((acum, number)=>acum+number, 0);
    
    }

    function main(){
        let arr:number[] = [5, 1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
        aVeryBigSum(arr);
    }


})();