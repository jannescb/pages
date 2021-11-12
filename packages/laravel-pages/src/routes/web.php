<?php

use AwStudio\Pages\PageController;
use Illuminate\Support\Facades\Route;

Route::post('/pages', [PageController::class, 'update'])->name('pages.update');
Route::post('/pages/{page}/files', [PageController::class, 'upload'])->name('pages.upload');
