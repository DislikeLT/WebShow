document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const usernameRegex = /^[a-zA-Z0-9]{4,10}$/;
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,12}$/;

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    
    usernameError.textContent = '';
    passwordError.textContent = '';
    
    if (!usernameRegex.test(username)) {
        usernameError.textContent = '用户名无效(4-10个字母数字字符)';
    }
    
    if (!passwordRegex.test(password)) {
        passwordError.textContent = '密码无效(6-12个字符，包含特殊字符)';
    }
    
    if (usernameRegex.test(username) && passwordRegex.test(password)) {
        alert('登录成功');
    }
});
