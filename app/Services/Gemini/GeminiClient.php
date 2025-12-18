<?php

namespace App\Services\Gemini;

use Illuminate\Support\Facades\Http;

class GeminiClient
{
    public function send(array $payload): string
    {
        $response = Http::withHeaders([
            'x-goog-api-key' => config('services.gemini.key'),
            'Content-Type'  => 'application/json',
        ])->post(
            'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent',
            $payload
        );

        if (! $response->successful()) {
            logger()->error('Gemini API Error', [
                'status' => $response->status(),
                'body'   => $response->body(),
            ]);

            return 'Maaf, AI gagal merespons.';
        }

        return data_get(
            $response->json(),
            'candidates.0.content.parts.0.text',
            'AI tidak menghasilkan jawaban.'
        );
    }
}
