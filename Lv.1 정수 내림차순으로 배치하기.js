function solution(n) {
    var answer = 0;
    let str = n.toString();
    let arr = [];

    //매개변수 배열에 담기
    for (let i=0; i<str.length; i++) {
        arr[i] = str.substring(i, i+1);
    }//for end

    //내림차순으로 정렬
    arr.sort(function(a, b){return b-a});

    //배열에서 문자열로 변환
    for (let i=0; i<str.length; i++) {
        answer = answer + arr[i];
    }//for end

    //문자열 answer을 숫자형으로 변환
    answer = parseInt(answer);
    
    return answer;
}//solution() end