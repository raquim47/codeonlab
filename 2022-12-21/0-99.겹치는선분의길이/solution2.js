// https://school.programmers.co.kr/learn/courses/30/lessons/120876?language=javascript

function solution(lines) {
  let arr = [];
  let arrI = 0;
  for (let i = 0; i < lines.length; i++) {
    for (let j = lines[i][0]; j < lines[i][1]; j++) {
      arr[arrI] = j + j + 1;
      arrI++;
    }
  }
  // console.log("arr", arr);
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    if(obj[arr[i]] === undefined){
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  console.log(obj);
  console.log(Object.entries(obj));
  const entry = Object.entries(obj); 
  let newArr = [];

  for (let i = 0; i < entry.length; i++) {
    if(entry[i][1] >= 2) {
      newArr.push(entry[i][0]);
    }
  }
  console.log(newArr);
}

console.log(
  solution([
    [0, 1],
    [2, 5],
    [3, 9],
  ])
); // 2
// console.log(
//   solution([
//     [-1, 1],
//     [1, 3],
//     [3, 9],
//   ])
// ); // 0
// console.log(
//   solution([
//     [0, 5],
//     [3, 9],
//     [1, 10],
//   ])
// ); // 8
