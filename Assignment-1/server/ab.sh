#!/bin/bash
echo "<html>" >> index.html
cars=$1
cats=$2
dogs=$3
trucks=$4
jpeg=".jpeg"
i=1
if [ $1 -gt 0 ];then
    echo '<h1> Car </h1>' >> index.html
    echo '<table><tr>' >> index.html
    while [ $i -le $1 ] ;do
        num="$i"
        filename="images/car"
        filename=$filename$num$jpeg
        echo '<td>'>> index.html

        echo '<img src="data:image/jpeg;base64,' >> index.html
        base64 -i $filename >> index.html
        echo '" height="200" width="300" />' >>index.html
        echo "</td>" >>index.html
        i=$(($i+1))
    done
    echo '</tr></table>'>> index.html

fi
i=1
if [ $2 -gt 0 ];then
    echo '<h1> Cat </h1>'>> index.html

    echo '<table><tr>'>> index.html

    while [ $i -le $2 ] ;do
        num="$i"
        filename="images/cat"
        filename=$filename$num$jpeg
        echo '<td>'>> index.html

        echo '<img src="data:image/jpeg;base64,' >> index.html
        base64 -i $filename >> index.html
        echo '" height="200" width="300" />' >>index.html
        echo "</td>" >>index.html
        i=$(($i+1))
    done
    echo '</tr></table>'>> index.html

fi
i=1
if [ $3 -gt 0 ];then
    echo '<h1> Dog </h1>'>> index.html

    echo '<table><tr>'>> index.html

    while [ $i -le $3 ] ;do
        num="$i"
        filename="images/dog"
        filename=$filename$num$jpeg
        echo '<td>'>> index.html

        echo '<img src="data:image/jpeg;base64,' >> index.html
        base64 -i $filename >> index.html
        echo '" height="200" width="300" />' >>index.html
        echo "</td>" >>index.html
        i=$(($i+1))
    done
    echo '</tr></table>'>> index.html

fi
i=1
if [ $4 -gt 0 ];then
    echo '<h1> Truck </h1>'>> index.html

    echo '<table><tr>'>> index.html

    while [ $i -le $4 ] ;do
        num="$i"
        filename="images/truck"
        filename=$filename$num$jpeg
        echo '<td>'>> index.html

        echo '<img src="data:image/jpeg;base64,' >> index.html
        base64 -i $filename >> index.html
        echo '" height="200" width="300" />' >>index.html
        echo "</td>" >>index.html
        i=$(($i+1))
    done
    echo '</tr></table>'>> index.html

fi
echo "</html>" >>index.html
