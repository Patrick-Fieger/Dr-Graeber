<?php
    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $telefon = $_REQUEST['telefon'];
    $nachricht = $_REQUEST['nachricht'];
    //$adress = "patrickfieger90@gmail.com";
    $adress = "dr.m.graeber@t-online.de";

    if (($name=="") || ($email=="") || ($nachricht=="")){
        echo "FEHLER";
    }else{
        $from = "From: $name<$email>\r\nReturn-path: $email";
        $subject = "Anfrage Kontaktformular von $name";
        if(mail($adress, $subject, $nachricht . "\n Telefon:" . $telefon, $from)){
          echo "OK";
        }else{
          echo "FEHLER";
        }
    }
?>
