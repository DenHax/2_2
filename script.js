document.querySelector('#login-btn').onclick = function() {
  document.querySelector('#loginModal').style.display = 'block';
}

document.querySelector('#register-btn').onclick = function() {
  document.querySelector('#registerModal').style.display = 'block';
}

document.querySelector('#closeLogin').onclick = function() {
  document.querySelector('#loginModal').style.display = 'none';
}

document.querySelector('#closeRegister').onclick = function() {
  document.querySelector('#registerModal').style.display = 'none';
}

document.querySelector('#toRegister').onclick = function() {
  document.querySelector('#loginModal').style.display = 'none';
  document.querySelector('#registerModal').style.display = 'block';
}

document.querySelector('#toLogin').onclick = function() {
  document.querySelector('#registerModal').style.display = 'none';
  document.querySelector('#loginModal').style.display = 'block';
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
  if (event.target == document.querySelector('#loginModal')) {
    document.querySelector('#loginModal').style.display = 'none';
  }
  if (event.target == document.querySelector('#registerModal')) {
    document.querySelector('#registerModal').style.display = 'none';
  }
}

document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const registerData = {
    username: this[0].value,
    password: this[1].value,
    email: this[2].value
  };
  console.log('Данные регистрации:', registerData);
  this.reset();
  document.getElementById('registerModal').style.display = 'none';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const loginData = {
    username: this[0].value,
    password: this[1].value
  };
  console.log('Данные входа:', loginData);
  this.reset(); // Сбрасываем форму
  document.getElementById('loginModal').style.display = 'none';
});
