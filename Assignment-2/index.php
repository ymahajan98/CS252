<?php
require 'vendor/autoload.php'; 

$client = new MongoDB\Client("mongodb://localhost:27017");
$collection = $client->foo->myCollections;
$arr=array();
$ab=-1;
$state="NULL";
$ratio=0;
$count1=-1;
$state1="NULL";
if($_REQUEST["_query"]==1){
    $result = $collection->distinct("DISTRICT");
    foreach ($result as $entry) {
        $dt=$collection->count(array("DISTRICT" => $entry));
        if($dt > $ab ){
            $ab=$dt;
            $state=$entry;
        }
    }
    echo "District with maximum crime is $state with $ab crimes.";
    echo "<br>";
}
if($_REQUEST["_query"]==2){
    $result1=$collection->distinct("PS");
    foreach ($result1 as $entry) {
        $dt=$collection->count(array("PS" => $entry));
        $dt1=$collection->count(array("PS" => $entry, "Status" => "Pending"));
        if( (100*$dt1)/$dt > $ratio){
             $count1=$dt;
             $ratio=(100*$dt1)/$dt;
             $state1=$entry;
        }
    }
    echo "Police stations with most inefficient case completion with $ratio% inefficiency is";
    echo "<br>";
    foreach ($result1 as $entry) {
        $dt=$collection->count(array("PS" => $entry));
        $dt1=$collection->count(array("PS" => $entry, "Status" => "Pending"));
        if( (100*$dt1)/$dt == $ratio){
            echo "$entry with total crimes $dt.";
            echo "<br>";
        }
    }
    echo "<br>";
}
if($_REQUEST["_query"]==3){
    $result2=$collection->find();
    foreach($result2 as $entry){
        $res=$entry['Act_Section'];
        $ac=array();
        foreach($res as $ead){
            array_push($ac,$ead);
        }
        $ac1=array_unique($ac);
        foreach($ac1 as $c1){
            if($c1=="" || $c1=="unknown" || $c1==")")continue;
            array_push($arr,$c1);
        }
    }
    $vals=array_count_values($arr);
    $min=100000;
    $max=-1;
    $minelement="NULL";
    $maxelement="NULL";
    foreach($vals as $key=>$value){
        if($value > $max){
            $max=$value;
            $maxelement=$key;
        }    
        if($value < $min){
            $min=$value;
            $minelement=$key;
        }    
    }
    echo "Least applied crime law in FIR is ";
    foreach($vals as $key=>$value){
        if($value == $min){
            echo "$key, ";
        }    
    }
    echo  " with $min crimes.";
    echo "<br>";
    echo "Most applied crime law in FIR is ";
    foreach($vals as $key=>$value){
        if($value == $max){
            echo "$key, ";
        }    
    }
    echo  " with $max crimes.";
    echo "<br>";
}
?>
