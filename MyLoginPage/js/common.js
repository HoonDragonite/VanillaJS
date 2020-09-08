init();

function init(){
    var loginBtn = document.getElementById("submit");
    loginBtn.addEventListener('click', login)
}

function login(){
    var id = document.getElementById("id").value;
    var pw = document.getElementById("pw").value;
    
    alert("안녕하세요! " + id);
}

function enterKey() {
    if (window.event.keyCode == 13) {
         login();
    }
}

function moveToPw(){
    if (window.event.keyCode == 13) {
        document.getElementById('pw').focus();
   }
}