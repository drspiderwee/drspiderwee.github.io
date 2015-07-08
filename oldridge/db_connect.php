<?php
$db_host = "localhost";
$db_user = "melrose_oldrige";
$db_database = "melrose_oldridge";
$db_pass = "11ww2233";

$link = mysql_connect($db_host,$db_user,$db_pass);

mysql_select_db($db_database,$link) or die ("НЕТ СОЕДИНЕНИЯ С БАЗОЙ ДАННЫХ".mysql_error());
mysql_query("SET names UTF-8");
?>