<?php

namespace App\Custom;

class Tools
{
    public static function maskWord($word)
    {
        return preg_replace('/[A-z]/i', '_', $word);
    }
}
