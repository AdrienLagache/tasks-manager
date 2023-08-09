<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Validation\ValidationException;

class CategoryController extends Controller
{
    public function list()
    {
        $categories = Category::all();

        return $categories;
    }

    public function show($id)
    {
        $category = Category::findOrFail($id);

        return $category;
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


        $category = new Category();
        $category->name = $request->input('name');
        $category->save();

        return [
            'category' => $category,
            'request' => $request->input('name'),
        ];
    }

    public function update(Request $request, int $id)
    {
        $category = Category::find($id);
        $category->name = $request->input('name');
        $category->save();

        return $category;
    }

    public function delete(int $id)
    {
        $category = Category::findOrFail($id);
        $category->delete();
    }
}
