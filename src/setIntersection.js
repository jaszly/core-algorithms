
  const a = [1, 2, 3, 4]
  const b = [2, 4, 6, 8]

export default function setIntersection(arr1, arr2) {
  let combArr = arr1.concat(arr2)
let uniqueArr = combArr.filter(function(elem, index, array){
 return combArr.indexOf(elem) !== index;
  });
 return uniqueArr
}





  //[1, 2, 3, 4, 6, 8]
