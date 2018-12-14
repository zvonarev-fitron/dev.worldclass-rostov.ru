<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Contracts\Support\Responsable;

class ProbaController extends Controller
{
    public function __invoke()
    {
        // TODO: Implement __invoke() method.
//        dd('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        return new ppppp();
    }
}

class ppppp implements Responsable
{
    public function toResponse($request)
    {
        //return ['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'];

        dd($request);

    }
}
