// 1. 버튼과 결과 영역을 가져와 보자

const loadPostBtn = document.querySelector('#loadPostBtn');
const result = document.querySelector('#result');

console.log(loadPostBtn, result);

// 2. 버튼을 눌렀을 때, 데이터를 가져와 보자
loadPostBtn.addEventListener('click', async function() {
    console.log('버튼이 클릭되었습니다.');

    // API 요청 시 필요한 3가지
    // 1. fetch("URL주소") : 이 URL로 다녀와줘
    //    네트워크 요청은 즉시 끝나지 않는다. 시간이 걸림
    // 2. async function(){} : 이 함수 안에 fetch 작업 있음
    // 3. await : fetch 결과가 도착할때까지 기다릴게

    result.textContent = '데이터를 불러오는 중입니다...';

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    console.log(response);

    // 서버 응답은 바로 사용할 수 없기 때문에 json() 형식으로 바꿔줘야함
    const data = await response.json();
    console.log('data:', data.userId);
    console.log('data:', data.id);
    console.log('data:', data.title);
    console.log('data:', data.body);

    // 받아온 데이터를 화면에 출력하는 방법
    result.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.body}</p>
    `;

});