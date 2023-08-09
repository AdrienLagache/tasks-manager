<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class TaskController extends Controller
{
    public function list()
    {
        $tasks = Task::all();

        $tasks = Task::with('category')->with('tag')->get();
        // return $tasks;
        // pour l'exemple mais dans notre cas (routes dans api.php),
        // laravel renverra automatiquement du json.
        return response()->json([
            'result' => 'OK',
            'tasks' => $tasks
        ]);
    }

    public function show(int $id)
    {
        $task = Task::where('id', '=', $id)->with('category')->with('tag')->get();

        return $task;
    }

    public function create(Request $request)
    {
        try {
            // Ajout d'un filtrage (Validation) pour la requète
            $validated = $request->validate([
                'title' => 'required'
            ]);
        }
        catch (ValidationException $error) {
            return $error;
        }

        $task = new Task();
        //recupere tous les inputs
        $task->title = $request->input('title');
        $task->category_id = $request->input('category_id');
        $task->save();
        $task = Task::where('id', '=', $task->id)->with('category')->first();

        return response()->json([
            'result' => 'OK',
            'tasks' => $task
        ]);
    }

    public function update(Request $request, int $id)
    {
        $task = Task::find($id);
        $task->title = $request->input('title');
        $task->save();

        return $task;
    }

    public function delete(int $id)
    {
        $task = Task::findOrFail($id);
        $task->delete();
    }
}

