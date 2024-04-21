const checkLoginButton = document.getElementById('checklogin');
  
checkLoginButton.addEventListener('click', function (event) {
  event.preventDefault();

  const usernameInput = document.getElementById('Username');
  const passwordInput = document.getElementById('Password');

  const usernameLength = usernameInput.value.trim().length;
  const passwordLength = passwordInput.value.trim().length;

  if (usernameLength < 3 || passwordLength < 8) {
    alert('用户名必须至少包含三个字符，密码必须至少包含八个字符！');
  } else {
    document.form_login.submit();
  }
});