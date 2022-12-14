// https://school.programmers.co.kr/learn/courses/30/lessons/92334?language=javascript

// 케이스 4개 시간초과
// 중복 제거
function removeDup(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isInNewArr = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        isInNewArr = true;
        break;
      }
    }

    if (!isInNewArr) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

function solution(id_list, report, k) {
  const noDupReport = removeDup(report);

  const reportedList = {};
  for (let i = 0; i < id_list.length; i++) {
    reportedList[id_list[i]] = [];
  }
  // console.log("reportedList :", reportedList);

  for (let i = 0; i < noDupReport.length; i++) {
    const [reporter, reported] = noDupReport[i].split(" ");
    reportedList[reported].push(reporter);
  }
  // console.log("reportedList :", reportedList);

  const result = new Array(id_list.length).fill(0);
  // console.log(result);
  for (const key in reportedList) {
    if (reportedList[key].length >= k) {
      for (let i = 0; i < reportedList[key].length; i++) {
        for (let j = 0; j < id_list.length; j++) {
          if (reportedList[key][i] === id_list[j]) {
            result[j] += 1;
          }
        }
      }
    }
  }
  return result;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
); // [2,1,1,0]
// console.log(
//   solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
// ); // [0,0]
