<?php





//10 -> passos a seguir agarrar un celular
//

//BubbleSort -> Ordenamiento de tipo burbuja

function bubbleSort($array)
{
    $n = count($array);
    if ($n <= 1) return "No puedo";

    for ($i = 0; $i < $n - 1; $i++) {
        for ($j = 0; $j < $n - $i - 1; $j++) {
            if ($array[$j] > $array[$j + 1]) {
                // Intercambiar elementos 
                $temp = $array[$j];
                $array[$j] = $array[$j + 1];
                $array[$j + 1] = $temp;
            }
        }
    }
    return $array;
}

print_r(bubbleSort([1, 2, 3]));

function merge($left, $right)
{
    $result = [];

    while (count($left) > 0 && count($right) > 0) {
        if ($left[0] <= $right[0]) {
            array_push($result, array_shift($left));
        } else {
            array_push($result, array_shift($right));
        }
    }

    while (count($left) > 0) {
        array_push($result, array_shift($left));
    }

    while (count($right) > 0) {
        array_push($result, array_shift($right));
    }

    return 0;
}


function duplicados($array)
{
    $arrayOrdenado = bubbleSort($array);

    for ($i = 0; $i < count($arrayOrdenado) - 1; $i++) {
        if ($arrayOrdenado[$i] == $arrayOrdenado[$i + 1]) {
            return "Existen duplicados";
        }
    }
    return "No existen duplicados";
}

print(duplicados([4, 3, 5, 1, 2]));
