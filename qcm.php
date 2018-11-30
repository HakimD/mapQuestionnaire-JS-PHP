

<?php
$T = array();
$q['question'] = "Dans quel pays se situe le site archeologique de Chichen Itza, appele aussi La cite des sorciers ?";
$q['choix'] = array('Chili', 'Mexique', 'Perou' );
$q['reponse'] = "Mexique";
$q['latitude'] = 20.68073 ;
$q['longitude'] = -88.56601 ;
$q['info'] = "<a href='https://fr.wikipedia.org/wiki/Chich%C3%A9n_Itz%C3%A1' target='_blank'>Chichén Itzá</a> est une ancienne ville maya située entre Valladolid et Mérida dans la péninsule du Yucatán, au Mexique. Chichén Itzá fut probablement, au xe siècle, le principal centre religieux du Yucatán";
$T[]=$q;

$q['question'] = "Dans quel pays se site le site troglodyte de Petra? ";
$q['choix'] = array('Egypte', 'Grece', 'Jordanie');
$q['reponse'] = "Jordanie";
$q['latitude'] =  30.32740;
$q['longitude'] =35.44640 ;
$q['info'] = "<a href='https://fr.wikipedia.org/wiki/P%C3%A9tra' target='_blank'>Pétra</a> (de πέτρα petra, « rocher » en grec ancien ; البتراء Al-Butrāʾ en arabe), de son nom sémitique Reqem ou Raqmu (« la Bariolée »)2,3, est une cité nabatéenne préislamique située au sud de l'actuelle Jordanie";
$T[]=$q;

$q['question'] = "Dans quel pays se situe le site archeologique d'Angkor";
$q['choix'] = array( 'Cambodge', 'Vietnam', 'Chine');
$q['reponse'] = "Cambodge";
$q['latitude'] = 13.41250;
$q['longitude'] = 103.86655 ;
$q['info'] ="<a href='https://fr.wikipedia.org/wiki/Angkor' target='_blank'>Angkor</a> est un site archéologique du Cambodge composé d'un ensemble de ruines et d'aménagements hydrauliques (barays, canaux) qui fut une des capitales de l'Empire khmer, existant approximativement du ixe au xve siècle.";
$T[]=$q;

$q['question'] = "Dans quel pays se situent les statues monumentales de l'ile de Paques, appeles aussi les Moai ?";
$q['choix'] = array( 'Argentine', 'France', 'Chili');
$q['reponse'] = "Chili";
$q['latitude'] = -27.13768 ;
$q['longitude'] = -109.31070;
$q['info'] = "Les <a href='https://fr.wikipedia.org/wiki/Moa%C3%AF' target='_blank'> moaï</a>, localement mo'ai, sont les statues monumentales de l’île de Pâques (île appartenant au Chili) située en Polynésie, qui ne sont pas datées car on ne peut pas dater le taillage d'une roche.";
$T[]=$q;

$q['question'] = "Dans quel pays se situe le temple Kiyomizu ?";
$q['choix'] = array( 'Coree du sud', 'Japon', 'Vietnam');
$q['reponse'] = "Japon";
$q['latitude'] =  34.99443;
$q['longitude'] = 135.78432;
$q['info'] = "Le <a href='https://fr.wikipedia.org/wiki/Kiyomizu-dera' target='_blank'>temple Kiyomizu</a> ou Kiyomizu-dera (清水寺?) fait référence à un complexe de temples bouddhiques et shintoïstes mais est principalement utilisé pour un seul : l'Otowa-san Kiyomizu-dera (音羽山清水寺?) à l'est de Kyoto, qui est l'un des endroits les plus célèbres de la ville. Il a été enregistré au patrimoine mondial culturel de l'UNESCO en 1994";
$T[]=$q;

$q['question'] = "Dans quel pays se situe le Kremlin ?";
$q['choix'] = array( 'Pologne', 'Ukraine', 'Russie');
$q['reponse'] = "Russie";
$q['latitude'] =  55.75165;
$q['longitude'] = 37.61793;
$q['info'] ="Le <a href='https://fr.wikipedia.org/wiki/Kremlin_de_Moscou' target='_blank'>kremlin de Moscou</a> (russe : Московский Кремль, Moskovskiy Kremlʹ), souvent appelé simplement le Kremlin, est une grande forteresse située au cœur de Moscou, la capitale de la Russie.";
$T[]=$q;

$q['question'] = "Dans quel pays se situe le temple d'Artemis ?";
$q['choix'] = array( 'Grece', 'Turquie', 'Italie');
$q['reponse'] = "Turquie";
$q['latitude'] = 37.94740 ;
$q['longitude'] = 27.36568 ;
$q['info'] ="Le <a href='https://fr.wikipedia.org/wiki/Temple_d%27Art%C3%A9mis_%C3%A0_%C3%89ph%C3%A8se' target='_blank'>temple d'Artémis</a> à Éphèse (en grec Ἀρτεμίσιον / Artemísion, en latin Artemisium) est dans l'Antiquité l'un des plus importants sanctuaires d'Artémis, déesse grecque de la chasse et de la nature sauvage. Il se trouve aujourd'hui en Turquie";
$T[]=$q;


  //--------------------------------------------------------------------------
  // 3) echo result $T au format json
  //--------------------------------------------------------------------------

$E = json_encode($T);
echo $E;

?>








<?php
/*
  $host = "---";
  $user = "---";
  $pass = "---";

  $databaseName = "---";
  $tableName = "variables";

  $con = mysql_connect($host,$user,$pass);
  $dbs = mysql_select_db($databaseName, $con);
  $result = mysql_query("SELECT * FROM $tableName");          //query
  $T = mysql_fetch_row($result);                          //un enregistrement du r�sultat
*/
?>
