// https://neetcode.io/problems/rotate-matrix

class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        if (matrix === null){
            return matrix
        }
        const len = matrix.length

        let l = 0
        let r = len - 1
        
        while(l < r){
            for (let j = 0; j < r - l; j++){
                const top = l
                const bot = r
                const tempTL = matrix[top][l + j]

                // tl with bl
                matrix[top][l + j] = matrix[bot - j][l]

                // bl with br
                matrix[bot - j][l] = matrix[bot][r - j]

                // br with tl
                matrix[bot][r - j] = matrix[top + j][r]

                // tr
                matrix[top + j][r] = tempTL 
            }
            console.log(matrix)
            l += 1
            r -= 1
        }

        return matrix
    }
}
