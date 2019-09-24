<?php
    
    ini_set(varname, newvalue)

    $to = "ntomes@bgsu.edu";

	mail($to, $_POST['firstName'], $_POST['lastName'], $_POST['email'], $_POST['company']);

?>