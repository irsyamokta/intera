<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Actions\Chat\SendChatAction;

class ChatController extends Controller
{
    public function __invoke(Request $request, SendChatAction $action)
    {
        $request->validate([
            'message' => 'required|string|max:2000',
        ]);

        return response()->json([
            'reply' => $action->execute($request->message),
        ]);
    }
}
