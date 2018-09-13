/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var first, second, third, count = 0;
  for(var n = 0; n < preferences.length; n++){
    first = preferences[n];
    second = preferences[first-1];
    third = preferences[second-1];
    if(n+1 == third) count++;
  }
  return Math.floor(count/3);
};
