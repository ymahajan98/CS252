/* 
 * Copyright (C) 2013 peredur.net
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var levenshtein = function(a, b){
    if(!a || !b) return (a || b).length;
    var m = [];
    for(var i = 0; i <= b.length; i++){
        m[i] = [i];
        if(i === 0) continue;
        for(var j = 0; j <= a.length; j++){
            m[0][j] = j;
            if(j === 0) continue;
            m[i][j] = b.charAt(i - 1) == a.charAt(j - 1) ? m[i - 1][j - 1] : Math.min(
                m[i-1][j-1] + 1,
                m[i][j-1] + 1,
                m[i-1][j] + 1
            );
        }
    }
    return m[b.length][a.length];
};
function formhash(form, password) {
    // Create a new element input, this will be our hashed password field. 
    var p = document.createElement("input");

    // Add the new element to our form. 
    form.appendChild(p);
    p.name = "p";
    p.type = "hidden";
    p.value = hex_sha512(password.value);

    // Make sure the plaintext password doesn't get sent. 
    password.value = "";

    // Finally submit the form. 
    form.submit();
}
function pass_stren(password){
    var common_pwd = ["123456","password", "12345678","qwerty","12345","123456789","letmein","1234567","football","iloveyou","admin","welcome","monkey",
    "login","abc123","starwars","123123","dragon","passw0rd","master","hello","freedom","whatever","qazwsx","trustno1" ];
    var i;

    var dist=0;
    
    for(i=0;i<25;i++){
        if(dist <(100 - 100 * levenshtein(password.value, common_pwd[i] ) / Math.max(password.value.length, common_pwd[i].length)))
            dist=(100 - 100 * levenshtein(password.value, common_pwd[i] ) / Math.max(password.value.length, common_pwd[i].length));
    }

    if(1){
        if(password.value.length==0){
            document.getElementById("demo").innerHTML = "";
        }
        else if(password.value.length<= 3){
            document.getElementById("demo").innerHTML = "Password Strength: Very weak";
            document.getElementById("demo").style.color = 'red';
           
    //        alert("Very weak password");
        }
         else if(password.value.length<= 6){
            document.getElementById("demo").innerHTML = "Password Strength: Weak";
            document.getElementById("demo").style.color = 'tomato';
  //          alert("Weak password");
        }
        else if(dist<20 ){
            document.getElementById("demo").innerHTML = "Password Strength: Very strong";
            document.getElementById("demo").style.color = 'green';
        }
        else if(dist<40){
            document.getElementById("demo").innerHTML = "Password Strength: Strong";
            document.getElementById("demo").style.color = 'Lightgreen';
        }
        else if(dist<60){
            document.getElementById("demo").innerHTML = "Password Strength: Neutral";
            document.getElementById("demo").style.color = 'blue';
        }
        else if(dist<80){
            document.getElementById("demo").innerHTML = "Password Strength: Weak";
            document.getElementById("demo").style.color = 'tomato';
  //          alert("Weak password");
        }
        else{
            document.getElementById("demo").innerHTML = "Password Strength: Very weak";
            document.getElementById("demo").style.color = 'red';
           
    //        alert("Very weak password");
        }
    }
}
function regformhash(form, uid, email, password, conf) {
    // Check each field has a value

    if (uid.value == '' || email.value == '' || password.value == '' || conf.value == '') {
        alert('You must provide all the requested details. Please try again');
        return false;
    }
    
    // Check the username
    re = /^\w+$/; 
    if(!re.test(form.username.value)) { 
        alert("Username must contain only letters, numbers and underscores. Please try again"); 
        form.username.focus();
        return false; 
    }
    
    // Check that the password is sufficiently long (min 6 chars)
    // The check is duplicated below, but this is included to give more
    // specific guidance to the user
    if (password.value.length < 6) {
        alert('Passwords must be at least 6 characters long.  Please try again');
        form.password.focus();
        return false;
    }
    
    // At least one number, one lowercase and one uppercase letter 
    // At least six characters 
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/; 
    if (!re.test(password.value)) {
        alert('Passwords must contain at least one number, one lowercase and one uppercase letter.  Please try again');
        return false;
    }
    
    // Check password and confirmation are the same
    if (password.value != conf.value) {
        alert('Your password and confirmation do not match. Please try again');
        form.password.focus();
        return false;
    }
        
    // Create a new element input, this will be our hashed password field. 
    var p = document.createElement("input");
    
    // Add the new element to our form. 
    form.appendChild(p);
    p.name = "p";
    p.type = "hidden";
    p.value = hex_sha512(password.value);

    // Make sure the plaintext password doesn't get sent. 
    password.value = "";
    conf.value = "";

    // Finally submit the form. 
    form.submit();
    return true;
}
