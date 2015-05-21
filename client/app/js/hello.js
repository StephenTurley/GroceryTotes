window.helloText = function() {
  return 'Welcome to grocery-totes!';
};

window.hello = function() {
  html = JST['app/templates/hello.us']({text: helloText()});
  document.body.innerHTML += html;
};

if(window.addEventListener) {
  window.addEventListener('DOMContentLoaded', hello, false);
} else {
  window.attachEvent('onload', hello);
}
