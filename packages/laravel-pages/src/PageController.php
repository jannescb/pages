<?php

namespace AwStudio\Pages;

use AwStudio\Pages\Models\Page;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class PageController
{
    public function update(Request $request)
    {
        $validated = $request->validate([
            'name'    => 'required|string',
            'route'   => 'required|string',
            'content' => 'sometimes',
        ]);

        Page::updateOrCreate([
            'name' => $validated['name'],
        ], [
            'content' => $validated['content'],
        ]);

        return Redirect::route($validated['route']);
    }

    public function upload(Request $request, Page $page)
    {
        $validated = $request->validate([
            'route' => 'required|string',
            'file'  => 'required',
        ]);

        $page->addFile($validated['file'])->save();

        return Redirect::route($validated['route']);
    }
}
