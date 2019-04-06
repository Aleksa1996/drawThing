<?php

namespace App\Custom;

class Tools
{
    public static function maskWord($word)
    {
        return preg_replace('/[A-z]/i', '_', $word);
    }

    public static function generateChatMessage($text, $additionalData = [])
    {
        $message = [
            'id' => uniqid('message_' . mt_rand(), true),
            'text' => $text
        ];

        return [
            'message' => array_merge($message, $additionalData)
        ];
    }
}
