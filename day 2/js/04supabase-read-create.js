import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// URL 찾는 방법은 오른쪽 상단 검책상 'URL' -> COPY
const SUPABASE_URL = "https://livslihohkyzcjrypsbi.supabase.co";
// project settings -> API Keys -> Legacy anon, service role API Keys -> anon public API Keys -> COPY
const SUPABASE_ANON_KEY = ""; // Supabase anon key 입력

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const loadSavedBtn = document.querySelector('#loadSavedBtn');
const savedMovieList = document.querySelector('#savedMovieList');

loadSavedBtn.addEventListener("click", async function () {
  await loadSavedMovies();
});

async function loadSavedMovies() {
  savedMovieList.innerHTML = "<p>저장된 영화를 불러오는 중입니다.</p>";

  const { data, error } = await supabase
    .from("movies")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    console.log(error);
    savedMovieList.innerHTML = "<p>데이터를 불러오지 못했습니다.</p>";
    return;
  }

  renderSavedMovies(data);
}

function renderSavedMovies(movies) {
  savedMovieList.innerHTML = "";

  movies.forEach(function (movie) {
    const card = document.createElement("article");
    card.className = "movie-card";

    card.innerHTML = `
      <img src="${movie.poster_url}" alt="${movie.title} 포스터">
      <h2>${movie.title}</h2>
      <p>개봉일: ${movie.release_date}</p>
      <p>메모: ${movie.memo || "없음"}</p>
    `;

    savedMovieList.appendChild(card);
  });
}
