// js 출력문 console.log("내용");
console.log("Hello, World!");

// 내가 하고싶은 일? js의 영역에서 html을 수정해주고 싶음
// a. html에 접근 : document
// b. 가져오다    : get
// c. 요소를      : element
// d. 뭐를 통해서? : ByTagName, ByClassName, ById .. etc

console.log(document.getElementById("loginBtn"));

// 요소를 자주 쓸 것 같은데? => '변수'
// 데이터를 담아주는 공간!
// JS에서는 변수 키워드 let / 상수키워드 const

// 로그인 버튼을 변수로 저장
// 만약 다른 개발자가 loginBtn 안에 3이라는 데이터를 임시로 넣어버리면
// 모든 코드가 꼬이게 된다! => loginBtn에 새로운 값을 넣지 못하도록
//                            에초에 const로 선언을 하는 것이 유리!

const loginBtn = document.getElementById("loginBtn");

// 사용자의 아이디, 비밀번호 입력창을 가져오기
const loginId = document.getElementById("loginId");
// const loginId = document.querySelector("#loginId");

const loginPw = document.getElementById("loginPw");
// const loginPw = document.querySelector("#loginPw");

// AI를 활용했을 떄는 querySelector 라는 문법을 많이 사용
// document.getElementById("abc")
// document.querySelector("#abc")

if (loginBtn){
    // 1. '로그인' 버튼을 눌렀을 때
        loginBtn.addEventListener("click", function(){
            console.log("클릭!");
            console.log("loginId : " , loginId.value);
            console.log("loginPw : " , loginPw.value);

            // 아이디나 비밀번호가 비어있으면 안내 메시지를 보여주고 실행멈춤
            if (loginId.value === "" && loginPw.value === ""){
                alert("아이디와 비밀번호를 모두 입력해주세요.");
                return;
            } else if (loginId.value === "") {
                alert("아이디를 입력해주세요.");
                return;
            } else if (loginPw.value === "") {
                alert("비밀번호를 입력해주세요.");
                return;
            }

            // 향후에는 해당 데이터를 데이터베이스에 직접 저장해서 보관

            alert("환영합니다.");

        })
    // 2. 사용자가 입력한 값들을 가져와야함 (아이디, 비밀번호)
    // 3. 로그인 성공 여부를 사용자에게 알려줄 것
}

// 1. '로그인' 버튼을 눌렀을 때
// 2. 사용자가 입력한 값들을 가져와야함 (아이디, 비밀번호)
// 3. 로그인 성공 여부를 사용자에게 알려줄 것