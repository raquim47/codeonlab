// https://school.programmers.co.kr/learn/courses/30/lessons/17681?language=javascript

function toRadix(n, radix) {
  let radix3 = "";

  while (n > 0) {
    radix3 = n % radix + radix3;
    n = Math.floor(n / radix);
  }

  return radix3;
}

console.log(toRadix(45, 3)); // 1200

function returnBinary(number, numlength) {
  let str = toRadix(number, 2).split('').reverse().join('');

  // 빈자리에 0 채워넣기
  str = str.padEnd(numlength, '0');
  console.log('str', str);

  // 거꾸로 돌리기
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

function solution(n, arr1, arr2) {
  for (let i = 0; i < n; i++) {
    arr1[i] = returnBinary(arr1[i], n);
    arr2[i] = returnBinary(arr2[i], n);
  }

  combinedArr = [];
  
  for (let i = 0; i < n; i++) {
    let str = "";

    for (let j = 0; j < n; j++) {
      if(arr1[i][j] === "1" || arr2[i][j] === "1"){
        str += "#";
      } else {
        str += " ";
      }
    }

    combinedArr[i] = str;
  }

  return combinedArr;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])); // ["#####","# # #", "### #", "# ##", "#####"]

// console.log(solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10])); // ["######", "### #", "## ##", " #### ", " #####", "### # "]
