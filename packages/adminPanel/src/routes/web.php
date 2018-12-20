<?php

//use Illuminate\Http\Request;

//Route::middleware('auth:api')

//Route::namespace('Ringer\AdminPanel\App\Http\Controllers\Admin')
//    ->prefix('admin')
//    ->middleware('web')
//    ->group(function(){
//        Route::get('/menu', 'AdminController@menus')->name('admin.menu');
//    }
//    );

Route::middleware('web')->get('admin', function(){
    return view('ringer/admin-panel::index');
})->name('admin.index');

