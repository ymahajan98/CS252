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


if (isset($_POST['username'], $_POST['password'], $_POST['question'], $_POST['answer'])) {
    // Sanitize and validate the data passed in
    $username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
   
    #$question = filter_input(INPUT_POST, 'question', FILTER_SANITIZE_STRING);
    $answer = filter_input(INPUT_POST, 'answer', FILTER_SANITIZE_STRING);
    $question = $_POST['question'];

    


    if($question == ''){
        $error_msg = '<p class="error">Select atleast one security question</p>';
    }
    else if($answer == ''){
        $error_msg = '<p class="error">Give answer to provided security question</p>';
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
    

 //   $emai = SELECT email FROM members WHERE username=$username;

        
    $sql1 = $mysqli->query("SELECT question FROM members WHERE username = '$username'");
    $row = $sql1->fetch_assoc();
    $q= array_values($row)[0];

    $sql2 = $mysqli->query("SELECT answer FROM members WHERE username = '$username'");
    $row = $sql2->fetch_assoc();
    $a= array_values($row)[0];

    #$a = $mysqli->query("SELECT answer FROM members WHERE username = '$username'");
    
        
    if($q != $question){
        $error_msg = '<p class="error">Wrong question!</p>';
    }
    
    else if($a != $answer){
        $error_msg = '<p class="error">Wrong answer!</p>';
    }


    if (empty($error_msg)) {
        // Create a random salt
        $random_salt = hash('sha512', uniqid(openssl_random_pseudo_bytes(16), TRUE));

        // Create salted password 
        $password = hash('sha512', $password . $random_salt);

        // Insert the new user into the database 
        if ($insert_stmt = $mysqli->prepare("UPDATE members SET password = ? , salt = ? WHERE username = ?")) {
            $insert_stmt->bind_param('sss', $password, $random_salt, $username);
            // Execute the prepared query.
            if (! $insert_stmt->execute()) {
                header('Location: ../error.php?err=Registration failure: INSERT');
                exit();
            }
        }
        header('Location: ./pwd_change.php');
        exit();
    }
}