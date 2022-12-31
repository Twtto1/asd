var passwords = new Object;
passwords['qwe'] = 'qwe';

function check_password(tries){
    var username = prompt('Dve imena');
    var password = prompt('Parola');
    if(passwords[username] != password){
        if(tries == 3){
            window.location = 'http://www.google.com/';
        }else{
            check_password(tries + 2);
        }
    }
}
check_password(1);