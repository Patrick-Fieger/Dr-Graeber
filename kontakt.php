<!doctype html>
<html lang="de">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<title>Dr. Matthias Gräber</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700' rel='stylesheet' type='text/css'>
		<link rel="apple-touch-icon" href="apple-touch-icon.png">
		<!-- Place favicon.ico in the root directory -->
		<link rel="stylesheet" href="css/normalize.css">
		<link rel="stylesheet" href="css/main.css">
	</head>
	<body>
		<!--[if lt IE 8]>
			<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->

		<div class="row content_bg">
			<?php include('header.php') ?>
			<section>
				<div class="col-3 text">
					<h1>Kontakt</h1><br>
					<div class="errorfeedback">Sie müssen alle Felder ausfüllen. <br> <a href="">Neue Nachricht</a></div>
					<div class="successfeedback">Vielen Dank für Ihre Nachricht! Wir werden uns so schnell wie möglich bei Ihnen melden! <br> <a href="#">Neue Nachricht</a></div>
					<form>
						<label>
							<span>Name:</span>
							<input required placeholder="Name" name="name" type="text">
						</label>

						<label>
							<span>Telefon:</span>
							<input placeholder="Telefon" name="telefon" type="tel">
						</label>
						<label>
							<span>Email:</span>
							<input required placeholder="Email" name="email" type="email">
						</label>
						<label>
							<span>Nachricht:</span>
							<textarea required placeholder="Nachricht" name="nachricht"></textarea>
						</label>
						<button type="submit">Nachricht senden</button>
					</form>
				</div>
				<div class="col-3 text">
					<h1>Impressum</h1><br>

					<p>Angaben gemäß § 5 TMG</p>

					<p>Tierarztpraxis<br>
					Dr. med. vet. Matthias Gräber<br>
					(in Deutschland approbiert)</p>

					<p>Brunnweg 1<br>
					69469 Weinheim</p>

					<p>Tel.: 06201 59111<br>
					Fax: 06201 507209<br>
					Mobil: 0171 7702778</p>

					<p>Steuer-Nr.: 47127/41823</p>

					<p>Bankverbindung:<br>
					Volksbank Weschnitztal eG<br>
					BLZ: 50961592<br>
					Kto: 6418635<br>
					BAN: DE 30509615920006418635<br>
					BIC: GEHODE51FHO</p>
				</div>
			</section>


			<?php include('footer.php') ?>
		</div>

		<script src="js/j.js"></script>
		<script src="js/plugins.js"></script>
		<script src="js/main.js"></script>
	</body>
</html>
