const loadMovieBtn = document.querySelector('#loadMovieBtn');
const movieConsole = document.querySelector('#movieConsole');

const TMDB_TOKEN = ""; // TMDB API 토큰을 입력합니다.
const TMDB_URL = "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";

loadMovieBtn.addEventListener('click', async function() {
    console.log('영화 정보 불러오기 버튼이 클릭되었습니다.');
    const response = await fetch(TMDB_URL, {
        method : 'GET',
        headers : {
            accept : 'application/json',
            // 실습 4: Authorization 헤더에 토큰을 넣습니다.
            Authorization: `Bearer ${TMDB_TOKEN}`
        }
    });

    const data = await response.json();
    console.log('data', data);

    // 영화 목록 배열을 화면에 JSON 문자열로 출력해보자
    movieConsole.textContent = JSON.stringify(data.results, null, 2);

});