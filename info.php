<?php
if (isset($_POST['btn'])) {
	$name = $_POST['name'];
	$phone = $_POST['phone'];

	$to      = 'reintdenis@gmail.com';
	$subject = 'Перезвонить';
	$message = 'Номер телефона - ' . $phone;
	$message = 'Имя - ' . $name;
	$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	

	mail($to, $subject, $message, $headers);
echo 1;
?>