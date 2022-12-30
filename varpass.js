var passwords = new Object;
passwords['qwe'] = 'qwe';

function check_password(tries){
    var username = prompt('Please enter your username');
    var password = prompt('Please enter your password');
    if(passwords[username] != password){
        if(tries == 3){
            window.location = 'http://www.google.com/';
        }else{
            check_password(tries + 1);
        }
    }
}
check_password(1);