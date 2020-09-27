<?php
if(isset( $_POST['name']))
$name = $_POST['name'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['subject']))
$subject = $_POST['subject'];
if(isset( $_POST['message']))
$message = $_POST['message'];


$content="Od: $name \n Email: $email \n Wiadomość: $message";
$recipient = "adrian.wicha98@gmail.com";
$mailheader = "Od: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Błąd wysyłania!");
echo "Email wysłany!";
?>