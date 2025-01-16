// come back https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/572648/c-java-python-prefix-sum-with-picture-explain-clean-concise/

/*
build the prefix sum for the grid.
create 2D array of rows + 1 and cols + 1 fill with 0
    reason for +1 is since prefix sum needs the top and left element, we can line them with 0 so we don't have to check for boundaries in summing and sumRegion

iterate rows
    iterate cols
        // prefix sum = current elem + top sum + left sum - sum at r-1, c-1
        this.sumGrid[r + 1][c + 1] = matrix[r][c] + this.sumGrid[r][c + 1] + this.sumGrid[r + 1][c] - this.sumGrid[r][c]
*/

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.rows = matrix.length
    this.cols = matrix[0].length
    this.sumGrid = new Array(this.rows + 1).fill().map((e) => {return Array(this.cols + 1).fill(0)})

    for (let r = 0; r < this.rows; r ++) {
        for (let c = 0; c < this.cols; c ++) {
            this.sumGrid[r + 1][c + 1] = matrix[r][c] + this.sumGrid[r][c + 1] + this.sumGrid[r + 1][c] - this.sumGrid[r][c]
        }
    }
    console.log(this.sumGrid)
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    // to get the sum for the region, with the prefix sum of the grid. 
    // It is sum of (row2 + 1, col2 + 1) - sum of (row2 + 1, col1) - sum of (row1, col2 + 1) + sum of (row1, col1)
    // Reason is (row2 + 1, col2 + 1) is the total sum from 0,0 to row2,col2, then subtract the sums just outside the region; left and top, and then add back row1-1,col1-1 because when subtracting the left and top the topleft corner overlapped so need to restore!

    return this.sumGrid[row2 + 1][col2 + 1] - this.sumGrid[row2 + 1][col1] - this.sumGrid[row1][col2 + 1] + this.sumGrid[row1][col1]
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */