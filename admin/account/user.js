function register() {
    let name = getValueInput('username');
    let email = getValueInput('email');
    let password = getValueInput('password');
    let confirmPassword = getValueInput('confirmPassword');
    if(name == '' || email == '' || password =='' || confirmPassword == ''){
        alert('Vui lòng nhập đủ thông tin');
    }else{
        let user = [name,email,password];
        createUser(user);
        alert('Đăng ký thành công');
        window.location.href = 'login.html';
    }
}

function getValueInput(id) {
    return document.getElementById(id).value;
}

function login() {
    let email = getValueInput('email');
    let password = getValueInput('password');
    let users = loadData();
    for(let i = 0; i<users.length;i++){
        if(users[i][1] == email && users[i][2] == password){
            alert('Đăng nhập thành công.');
            saveCurrentUser(users[i][0]);
            if(users[i][0] == 'admin'){
                window.location.href = 'admin.html';
            }else{
                window.location.href = 'home.html';

            }
            return;
        }
    }
    alert('Sai thông thông tin tài khoản.');
}

function logout() {
    localStorage.removeItem(CURRENT);
    window.location.href = 'login.html';
}

function getCurrentUser() {
    let username = loadCurrentUser();
    if(username != null){
        document.getElementById('username').innerHTML = username;
        return;
    }else{
        window.location.href = 'login.html';
    }
}