<?php

    //recuperation des identifiants
    if(isset($_POST['login']))
        $login = $_POST['login'];
    if(isset($_POST['password']))
        $password = sha1($_POST['password']);
    if(isset($_POST['Age']))
        $Age = $_POST['Age'];


        //Connexion à la base de données
            try{
                $bdd = new PDO('mysql:host=localhost;dbname=sitemap', 'root', 'root');
                $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                connexionAjax($bdd,$login,$password, $Age);
                //echo "ok";
             }
             catch(Exception $e){
                //echo "ko";
                die('Erreur connexion à la base de données : ' . $e->getMessage());
             }
            //verif dans la Bdd


            function verifierIdentifiantsExistant($bdd,$login){
                //requete permettant de verifier si le login est déjà utilisé
                $req = $bdd->prepare("SELECT Pseudo FROM utilisateur WHERE Pseudo = ?");
                $req->execute(array($login));
                $result = $req->fetchAll();
                $num = count($result);
                
                if($num>0)
                    return true;
                else
                    return false;
            }

            function connexionAjax($bdd,$login,$password,$Age){
                if(verifierIdentifiantsExistant($bdd,$login)){
                    echo "ko";
                }

                else {
                    $req = $bdd->prepare('INSERT INTO utilisateur(Pseudo, MotDePasse, Age) VALUES(:Pseudo, :MotDePasse, :Age)');
                    $req->execute(array(
                        'Pseudo' => $login, 
                        'MotDePasse' => $password,
                        'Age' => $Age
                        ));
                    echo "ok";
                }
            }

?>
