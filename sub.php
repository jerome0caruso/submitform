<?php

    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $message = isset($_POST['message']) ? $_POST['message'] : '';

    $ok = true;
    $messages = array();

    if ( !isset($name) || empty($name) ) {
        $ok = false;
        $messages[] = 'Name cannot be empty!';
    }

    if ( !isset($email) || empty($email) ) {
        $ok = false;
        $messages[] = 'Email cannot be empty!';
    }
    if ( !isset($message) || empty($message) ) {
        $ok = false;
        $messages[] = 'Message cannot be empty!';
    }

    if ($ok) {
        if ($name === 'dcode' && $email === 'dcode'&& $message === 'dcode') {
            $ok = true;
            $messages[] = 'Successful Submit!';
        } else {
            $ok = false;
            $messages[] = 'Incorrect name/email$email combination!';
        }
    }

    echo json_encode(
        array(
            'ok' => $ok,
            'messages' => $messages
        )
    );

?>