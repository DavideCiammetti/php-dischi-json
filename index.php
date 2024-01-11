<?php

include_once __DIR__. '/script.php';


$string = file_get_contents('data.json');

$data = json_decode($string);

header('Content-Type: application/json');
echo json_encode($data);