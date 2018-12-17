<?php

use Illuminate\Http\Request;

//Route::middleware('auth:api')

Route::namespace('Ringer\AdminPanel\App\Http\Controllers\Admin')
    ->prefix('admin')
    ->group(function(){
        Route::get('/menu', 'AdminController@menus');
}
);
