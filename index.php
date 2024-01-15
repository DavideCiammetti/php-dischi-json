<?php

// prendo i dati da json
$database = file_get_contents(__DIR__.'/data.json');

// trasformo i dati in php
$discs = json_decode($database);

$result = $discs;

 // creo nuovi elementi per il mio db 
 if(isset($_POST['create'])){
        
    $newImg = $_POST['newImg']; 
    $newName = $_POST['newName'];
    $newType = $_POST['newType'];
    $newSinger = $_POST['newSinger'];
    
    $newData = [
        'img'=> $newImg,
        'name'=>  $newName,
        'show'=> false,
        'type'=> $newType,
        'singers'=> $newSinger,
    ];
    $discs[] = $newData;

    // inserisco i dati nel json codificandoli in json 
    file_put_contents('data.json',json_encode($discs));
}


header('Content-Type: application/json');
echo json_encode($discs);