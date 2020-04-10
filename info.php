<?php
// if (isset($_POST['btn'])) {
//   $name = $_POST['name'];
//   $phone = $_POST['phone'];

//   $to      = 'reintdenis@gmail.com';
//   $subject = 'Перезвонить';
//   $message = 'Номер телефона - ' . $phone;
//   $message = 'Имя - ' . $name;
//   $headers = 'From: webmaster@example.com' . "\r\n" .
//     'Reply-To: webmaster@example.com' . "\r\n" .
//     'X-Mailer: PHP/' . phpversion();
// }
//     $success = mail($to, $subject, $message, $headers);
//   if (!$success) {
//       $errorMessage = error_get_last()['message'];
//   }else{
//     echo 1;
//   }
 
/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */
 
//Переменная $name,$phone, $mail получает данные при помощи метода POST из формы
  $name = $_POST['name'];
  $phone = $_POST['phone'];
 
//в переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1234468920:AAFTfIbWv63fVwbTQfK68SLrUJKdF0jXLI8";
 
//нужна вставить chat_id (Как получить chad id, читайте ниже)
$chat_id = "221587476";
 
//Далее создаем переменную, в которую помещаем PHP массив
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
);
 
//При помощи цикла перебираем массив и помещаем переменную $txt текст из массива $arr
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
 
//Осуществляется отправка данных в переменной $sendToTelegram
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
 
//Если сообщение отправлено, напишет "Thank you", если нет - "Error"
if ($sendToTelegram) {
  echo 1;
} else {
  echo "Error";
}

?>