<?php

        //recuperation des identifiants
    if(isset($_POST['login']))
        $login = $_POST['login'];
    if(isset($_POST['password']))
        $password = sha1($_POST['password']);



    try{
        $bdd = new PDO('mysql:host=localhost;dbname=sitemap', 'root', 'root');
        $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        connexionAjax($bdd,$login,$password);
     }
     catch(Exception $e){
        echo "ko";
        die('Erreur connexion à la base de données : ' . $e->getMessage());
     }


    function verifierIdentifiantsExistant($bdd,$login,$password){
        //requete permettant de verifier si le login est déjà utilisé
        $req = $bdd->prepare("SELECT Pseudo FROM utilisateur WHERE Pseudo = ? AND MotDePasse = ?");
        $req->execute(array($login,$password));
        $result = $req->fetchAll();
        $num = count($result);
        
        if($num>0)
            return true;
        else
            return false;
    }

    function connexionAjax($bdd,$login,$password){
        if(verifierIdentifiantsExistant($bdd,$login,$password)){
            session_start();
            $_SESSION['login'] = $login;
            $_SESSION['MotDePasse'] = $password;
            echo "ok";
        }
        else {
            echo "ko";
        }
    }


?>