<?php
$data = file_get_contents("http://services.runescape.com/m=itemdb_rs/api/graph/".$_GET['item'].".json");
echo $data;