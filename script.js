var passwordInput = document.getElementById("passwordInput");
var message = document.getElementById("message");
var attemptCount = 0;

passwordInput.addEventListener("input", function() {
  var password = passwordInput.value;

  if (password.length === 4) {
    if (password === "1905") {
      message.innerText = "Chờ xíu >.<";
      message.classList.add("success");
      message.classList.remove("error");
      setTimeout(function() {
        window.location.href = "https://sin195.my.canva.site/";
      }, 2000);
    } else {
      attemptCount++;
      if (attemptCount >= 5) {
        message.innerText = "Toang rùi!";
        message.classList.add("error");
        message.classList.remove("success");
        setTimeout(function() {
          window.location.href = "https://www.facebook.com/sin.195";
        }, 2000);
      } else {
        message.innerText = "Mật khẩu không đúng! Vui lòng nhập lại.";
        message.classList.add("error");
        message.classList.remove("success");
        setTimeout(function() {
          passwordInput.value = "";
          message.innerText = "";
          message.classList.remove("error");
          message.classList.remove("success");
        }, 2000);
      }
    }

    message.classList.remove("hidden");
  } else {
    message.innerText = "";
    message.classList.remove("error");
    message.classList.remove("success");
    message.classList.add("hidden");
  }
});
