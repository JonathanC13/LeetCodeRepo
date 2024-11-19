// https://leetcode.com/problems/defuse-the-bomb/?envType=daily-question&envId=2024-11-18



Number.prototype.mod = function (n) {
    "use strict";
    return ((this % n) + n) % n;
  };
  
  /**
   * @param {number[]} code
   * @param {number} k
   * @return {number[]}
   */
  var decrypt = function(code, k) {
      let result = []
      if (k === 0) {
          result = code.map((elm) => {return 0})
      } else {
  
          for (let i = 0; i < code.length; i ++) {
              let sum = 0
              if (k < 0) {
                  for (let j = k; j < 0; j ++){
                      sum += code[Math.abs((i + j).mod(code.length))]
                  }
              } else {
                  for (let j = 1; j <= k; j ++){
                      sum += code[Math.abs((i + j).mod(code.length))]
                  }
              }
              result[i] = sum
          }
      }
  
      
      return result.map((elm) => {return Number(elm)})
  };