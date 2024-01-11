<?php

include_once __DIR__. '/script.php';

// var_dump($discs);

foreach($discs as $i=> $disc){
    foreach($disc as $song){
        echo $i.$song.'<br>';
    }
}