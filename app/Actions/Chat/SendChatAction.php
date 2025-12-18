<?php

namespace App\Actions\Chat;

use App\Services\Gemini\GeminiClient;

class SendChatAction
{
    public function __construct(
        protected GeminiClient $gemini
    ) {}

    public function execute(string $message): string
    {
        $systemPrompt = <<<PROMPT
            Kamu adalah Intera, asisten wisata internasional.

            Fokus HANYA pada:
            - Wisata Banjarnegara, Jawa Tengah, Indonesia
            - Wisata Ohnan Town, Shimane Prefecture, Jepang

            Jika pertanyaan di luar konteks pariwisata,
            tolak dengan sopan.

            Gunakan bahasa Indonesia.
            Jawaban singkat, jelas, dan aplikatif.
            PROMPT;

        return $this->gemini->send([
            'systemInstruction' => [
                'parts' => [
                    ['text' => $systemPrompt]
                ]
            ],
            'contents' => [
                [
                    'role'  => 'user',
                    'parts' => [
                        ['text' => $message]
                    ]
                ]
            ]
        ]);
    }
}
