<?php

$msg = "Email: " . $_GET['email'] . "\nSubject: " . $_GET['subject'] . "\nMessage: " . $_GET['message'] . "";
$msg = wordwrap($msg,70);
$subject = "3E LABS Website Message :: " . $_GET['subject'] . "";

$mail=mail("sophiadew2000@gmail.com", $subject, $msg, $header);
$mail=mail("sophiadew2000@gmail.com", $subject, $msg, $header);
$mail=mail("sophiadew2000@gmail.com", $subject, $msg, $header);
$mail=mail("sophiadew2000@gmail.com", $subject, $msg, $header);

?>