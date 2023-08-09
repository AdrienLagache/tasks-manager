<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tag;
use Illuminate\Validation\ValidationException;

class TagController extends Controller
{
    public function list()
    {
        $tags = Tag::all();

        return $tags;
    }

    public function show($id)
    {
        $tag = Tag::findOrFail($id);

        return $tag;
    }

    public function create(Request $request)
    {
        try {
            // Ajout d'un filtrage (Validation) pour la requète
            $validated = $request->validate([
                'name' => 'required|unique:categories'
            ]);
        }
        catch (ValidationException $error) {
            return $error;
        }


        $tag = new Tag();
        $tag->name = $request->input('name');
        $tag->save();

        return $tag;
    }

    public function update(Request $request, int $id)
    {
        $tag = Tag::find($id);
        $tag->name = $request->input('name');
        $tag->save();

        return $tag;
    }

    public function delete(int $id)
    {
        $tag = Tag::findOrFail($id);
        $tag->delete();
    }
}
