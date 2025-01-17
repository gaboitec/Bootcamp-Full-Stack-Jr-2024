<?php

function bubbleSort($array)
{
    if (count($array) <= 1) return $array;

    for ($i = 0; $i < count($array); $i++) {
        for ($j = 1; $j < count($array); $j++) {
            if ($array[$j - 1] < $array[$j]) {
                $temp = $array[$j - 1];
                $array[$j - 1] = $array[$j];
                $array[$j] = $temp;
            }
        }
    }

    return $array;
}

print_r(bubbleSort([1, 3, 4, 6, 7]));
