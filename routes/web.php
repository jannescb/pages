<?php

use AwStudio\Pages\Models\Page;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $page = Page::where('name', 'Home')->with('files')->first();

    return Inertia::render('Test/Test', [
        'page'      => $page,
        'relations' => [
            Page::class => Page::all()->mapWithKeys(function ($page) {
                return [
                    $page->id => $page->name,
                ];
            })->toArray(),
        ],
    ]);
})->name('home');
