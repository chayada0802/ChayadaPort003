window.onload = loginLoad;
function loginLoad()
{
    var clickButton = document.getElementById("myLogin");
    clickButton.onsubmit = checkLogin;
}
function checkLogin()
{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const UserName = urlParams.get('username');
    const password = urlParams.get('PasswordMain');

    var User = document.forms["myLogin"]["username"].value;
    var PW = document.forms["myLogin"]["PasswordMain"].value;

    if(User == UserName && PW == password)
    {
        alert("Login Finish!!");
    }
    if(User != UserName || PW != password)
    {
        alert("Username or Password is Wrong!!");
        return false;
    }
}
