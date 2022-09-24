//https://school.programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
    var answer = 0;

    //a가 b보다 큰 수이면 자리바꿈. a=5, b=3이면 a=3, b=5로 변경
    if (a>b) {
        let tmp = a;
        a = b;
        b = tmp;
    }

    //a부터 b 사이의 모든 정수의 합
    for (let i=a; i<=b; i++) {
        answer += i;
    }
    return answer;
}