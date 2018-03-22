<style>
	#hero{
		min-width: 320px;
		padding: 4px;
		margin: 2px;
	}
</style>
<title>Sparta</title>
<script src='https://www.google.com/recaptcha/api.js'></script>
<link rel="stylesheet" type="text/css" href="../assets/css/core.css">
<div id="centre">
	<h1>
	WELCOME TO <span class="anaglyph">SPARTA</span>
</h1>
	<form action="" method="get">
		<input id="hero" type="text" placeholder="recipient" name="recipient">
		<br><input id="hero" type="text" placeholder="sender" name="sender">
		<br><input id="hero" type="text" placeholder="subject" name="subject">
		<br><textarea id="hero" rows="8" cols="40" name="message" placeholder="message"></textarea>
		<br><div style="margin-left: auto; margin-right: auto; width: 320px;"class="g-recaptcha" data-sitekey="6LdgwiMUAAAAAEdwC5aMW4kkeZiaJkGhEz0KTnnB"></div>
		<br><input type="submit" name="submit" value="submit">
	</form>
	
	<?php
if(isset($_GET['submit'])){
	$to      = $_GET["recipient"];
$subject = $_GET["subject"];
$message = $_GET["message"];
$headers = 'From: ' . $_GET["sender"] . "\r\n" .
    'Reply-To:' . $_GET["sender"] . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
echo("Mail sent.");
mail($to, $subject, $message, $headers);
}    
?>
</div>