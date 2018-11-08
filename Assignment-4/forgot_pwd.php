<?php
/**
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

include_once 'includes/p.php';
include_once 'includes/functions.php';



?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Password recovery</title>
        <script type="text/JavaScript" src="js/sha512.js"></script> 
        <script type="text/JavaScript" src="js/forms.js"></script>
        <link rel="stylesheet" href="styles/main.css" /> 
    </head>
    <body>
        <!-- 
        Registration form to be output if the POST variables are not
        set or if the registration script caused an error. 
         -->
        <?php
        if (!empty($error_msg)) {
            echo $error_msg;
        }
        ?>
           
            <form method="post" name="reg_form" action="<?php echo esc_url($_SERVER['PHP_SELF']); ?>">
            Username: <input type='text' name='username' id='username' /><br>
            Email: <input type="text" name="email" id="email" /><br>
            New Password: <input type="password"
                             name="password" 
                             id="password"/><br>
            Confirm new password: <input type="password" 
                                     name="confirmpwd" 
                                     id="confirmpwd" /><br>

        
            Select your Security question: <select id="question" name="question" class="required-entry validate-select">
            <option value="What is the name of your dog?">What is the name of your dog?</option>
            <option value="What is the name of your favorite teacher?">What is the name of your favorite teacher?</option>
            <option value="What is your pet's name?">What is your maiden name?</option>
            <option value="In what city were you born?">In what city were you born?</option>
            <option value="What is your favorite food?">What is your favorite food?</option>
            <option value="What school did you attend for sixth grade?">What school did you attend for sixth grade?"</option>
            </select>
            <ul>
            <li><class="input-box">
                    Answer: <input type="text" name="answer" id="answer" class="required-entry input-text"/>
            </li>
            </ul>
            
             <input type="button" value="Submit" onclick="return regformhash(this.form,
                                   this.form.username,
                                   this.form.email,
                                   this.form.password,
                                   this.form.confirmpwd);" /> 
        </form>
    </body>
</html>