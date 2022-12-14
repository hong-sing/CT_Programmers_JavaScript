//https://school.programmers.co.kr/learn/courses/30/lessons/12910
/*
    array의 각 element 중 divisor로 나누어 떨어지는 값을
    오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
    divisor로 나누어 떨어지는 element가 하나도 없다면 
    배열에 -1을 담아 반환하세요.
*/
function solution(arr, divisor) {
    var answer = [];
    let cnt = 0;
    
    for (let i=0; i<arr.length; i++) {
        if (arr[i]%divisor==0) {
            answer[cnt] = arr[i];
            cnt++;
        }
    }
    
    if (answer.length==0) {        
        return [-1];
    } else {
        return answer.sort(function(a, b){return a - b});
    }
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3,2,6], 10));