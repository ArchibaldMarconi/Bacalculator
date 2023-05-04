
<?php

   if ( isset( $_GET['submit'] ) ) {
     $nom = $_GET['nom']; 
     $age = $_GET['email']; 
     $adresse = $_GET['message'];
     echo '<h3>Information</h3>'; 
     echo 'Nom : ' . $nom . <br>;
     echo ' email : ' . $email . <br>;
     echo ' message : ' . $message; 
     exit;
  }
?>
