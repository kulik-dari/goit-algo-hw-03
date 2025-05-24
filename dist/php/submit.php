<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = $email; // отправляем данные на тот же адрес, который ввел пользователь
    $subject = "Форма обратной связи";
    $body = "Имя: $name\nЭлектронная почта: $email\nСообщение: $message";
    $headers = "From: webmaster@yourdomain.com";

    if (mail($to, $subject, $body, $headers)) {
        echo "Сообщение отправлено на адрес: $email";
    } else {
        echo "Ошибка отправки сообщения.";
    }
}
?>