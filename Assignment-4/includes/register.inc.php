<?php

/* 
 * Copyright (C) 2013 peter
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

include_once 'db_connect.php';
include_once 'psl-config.php';

$error_msg = "";
$thisname = "";
$thisname2 = "";
$thisname3 = "";


function random_username($username)
{

$nrRand = rand(0, 10);

$newname = $username.trim($nrRand);
global $mysqli;
    $result = $mysqli->query("SELECT id FROM members WHERE username = '$newname'");
    if($result->num_rows == 0) {
         return $newname;
    } else {
         return random_username($newname);
    }  
}


if (isset($_POST['username'], $_POST['email'], $_POST['p'], $_POST['question'], $_POST['answer'])) {
    // Sanitize and validate the data passed in
    $username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $email = filter_var($email, FILTER_VALIDATE_EMAIL);
    #$question = filter_input(INPUT_POST, 'question', FILTER_SANITIZE_STRING);
    $answer = filter_input(INPUT_POST, 'answer', FILTER_SANITIZE_STRING);
    $question = $_POST['question'];

    


    if($question == ''){
        $error_msg = '<p class="error">Select atleast one security question</p>';
    }
    else if($answer == ''){
        $error_msg = '<p class="error">Give answer to provided security question</p>';
    }


    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Not a valid emai l
        $error_msg .= '<p class="error">The email address you entered is not valid</p>';
    }

    

    $password = filter_input(INPUT_POST, 'p', FILTER_SANITIZE_STRING);
    if (strlen($password) != 128) {
        // The hashed pwd should be 128 characters long.
        // If it's not, something really odd has happened
        $error_msg .= '<p class="error">Invalid password configuration.</p>';
    }

    // Username validity and password validity have been checked client side.
    // This should should be adequate as nobody gains any advantage from
    // breaking these rules.
    //
    
    
    $prep_stmt = "SELECT id FROM members WHERE email = ? LIMIT 1";
    $stmt = $mysqli->prepare($prep_stmt);
    
    if ($stmt) {
        $stmt->bind_param('s', $email);
        $stmt->execute();
        $stmt->store_result();
        
        if ($stmt->num_rows == 1) {
            // A user with this email address already exists
            $error_msg .= '<p class="error">A user with this email address already exists.</p>';
        }
    } else {
        $error_msg .= '<p class="error">Database error</p>';
    }
    
    $prep_stmt1 = "SELECT id FROM members WHERE username = ? LIMIT 1";
    $stmt1 = $mysqli->prepare($prep_stmt1);
    
    if ($stmt1) {
        $stmt1->bind_param('s', $username);
        $stmt1->execute();
        $stmt1->store_result();
        
        if ($stmt1->num_rows == 1) {
               
            $thisname = random_username($username);
            $thisname2 = random_username($username);
            $thisname3 = random_username($username);

            $error_msg .= '<p class="error">Username Taken . Available usernames '.$thisname.' , '.$thisname2.' , '.$thisname3.'</p>';
            // A user with this email address already exists
            #$error_msg .= '<p class="error">username taken</p>';
        }
    } else {
        $error_msg .= '<p class="error">Database error</p>';
    }

    // TODO: 
    // We'll also have to account for the situation where the user doesn't have
    // rights to do registration, by checking what type of user is attempting to
    // perform the operation.

    if (empty($error_msg)) {
        // Create a random salt
        $random_salt = hash('sha512', uniqid(openssl_random_pseudo_bytes(16), TRUE));

        // Create salted password 
        $password = hash('sha512', $password . $random_salt);

        // Insert the new user into the database 
        if ($insert_stmt = $mysqli->prepare("INSERT INTO members (username, email, question, answer, password, salt) VALUES (?, ?, ?, ?, ?, ?)")) {
            $insert_stmt->bind_param('ssssss', $username, $email, $question, $answer, $password, $random_salt);
            // Execute the prepared query.
            if (! $insert_stmt->execute()) {
                header('Location: ../error.php?err=Registration failure: INSERT');
                exit();
            }
        }
        header('Location: ./register_success.php');
        exit();
    }
}