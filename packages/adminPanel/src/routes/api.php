<?php

use Illuminate\Http\Request;

//Route::middleware('auth:api')

Route::namespace('Ringer\AdminPanel\App\Http\Controllers\Admin')
    ->prefix('admin')
    ->middleware('api')
    ->group(function(){
        Route::get('menu', 'AdminController@menus')->name('admin.menu');
        Route::post('users', 'AdminController@users')->name('admin.users');
    }
);
