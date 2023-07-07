<?php

$name = $_POST['name']
$number = $_POST['phoneNumber']
$email = $_POST['email']
$message = $_POST['message']

$recipient = 'info@beautexhealthcare.com'

$subject = "New Inquiry from" .$name.

$emailBody = "
<html>
<head>
<title>HTML email</title>
</head>
<body>
<p>This email contains HTML Tags!</p>
<table>
<tr>
<th>Name: </th>
<th>Email: </th>
<th>Phone Number: </th>
</tr>
<tr>
<td>.$name.</td>
<td>.$email.</td>
<td>.$number.</td>
</tr>
</table>
</body>
</html>
"

mail($recipient, $subject, $emailBody)

?>