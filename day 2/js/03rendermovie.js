 // 실습 1: 화면에서 필요한 요소를 선택합니다.
const loadMovieBtn = document.querySelector("#loadMovieBtn");
const movieList = document.querySelector("#movieList");
const movieConsole = document.querySelector("#movieConsole");

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYWQ3ZDczMGI0N2Y4Nzg3NDg3OWQ1MzY0ZDEyZDlhOCIsIm5iZiI6MTY3NTIyMDMyNC44NjIwMDAyLCJzdWIiOiI2M2Q5ZDU2NGE5MTE3ZjAwNzk3NzI0ODIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.W0I3Zx3AjcW2p0mk_PNW1RUbzJny1MmburXPGmtgNjs";
const TMDB_URL = "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

loadMovieBtn.addEventListener("click", async function () {
  movieList.innerHTML = "<p>영화 정보를 가져오는 중입니다.</p>";

  const response = await fetch(TMDB_URL, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_TOKEN}`
    }
  });

  const data = await response.json();

  // 실습 2: 영화 목록 배열을 가져옵니다.
  const movies = data.results;

  movieList.innerHTML = "";

  movies.forEach(function (movie) {
    // 실습 3: 포스터 이미지 주소를 완성합니다.
    const posterUrl = IMAGE_BASE_URL + movie.poster_path;

    const card = document.createElement("article");
    card.className = "movie-card";

    // 실습 4: 영화 제목과 개봉일을 화면에 출력합니다.
    card.innerHTML = `
      <img src="${posterUrl}" alt="${movie.title} 포스터">
      <h2>${movie.title}</h2>
      <p>개봉일: ${movie.release_date}</p>
    `;

    movieList.appendChild(card);
  });
});
