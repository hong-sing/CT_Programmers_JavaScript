//https://school.programmers.co.kr/learn/courses/30/lessons/12943?language=javascript

function solution(num) {
    var answer = 0;   //작업 반복 횟수를 위한 변수 초기화       
    //입력된 수가 1이라면 0 반환
    if (num==1) {
        return 0;
    } else {  //입력된 수가 1이 아니라면
        while (true) {
            if (answer==500) { //작업을 500번 반복할 때까지 1이 
                return -1;
                break;
            } else if (num==1) { //작업을 1이 될때까지 반복(1이 
                break;
            } else if (num%2==0) {  //입력된 수가 짝수인가?
                num = num/2;
                answer++;
            } else {              //입력된 수가 홀수인가?
                num = (num*3)+1;
                answer++;
            }//if end
        }//while end
    }//if end
    return answer;  //작업 반복 횟수 반환
}//solution() end