<?php

namespace Ringer\AdminPanel;

use Illuminate\Support\ServiceProvider;

//use LaravelEnso\Core\app\Commands\Update;
//use LaravelEnso\Core\app\Commands\Upgrade;
//use Illuminate\Http\Resources\Json\Resource;
//use LaravelEnso\Core\app\Commands\TrackWhoUpdate;
//use LaravelEnso\Core\app\Commands\ClearPreferences;
//use LaravelEnso\Core\app\Commands\UpgradeFileManager;
//use LaravelEnso\Core\app\Commands\UpdateGlobalPreferences;
//use LaravelEnso\Core\app\Http\Middleware\VerifyActiveState;
//use LaravelEnso\Impersonate\app\Http\Middleware\Impersonate;
//use LaravelEnso\Localisation\app\Http\Middleware\SetLanguage;
//use LaravelEnso\ActionLogger\app\Http\Middleware\ActionLogger;
//use LaravelEnso\PermissionManager\app\Http\Middleware\VerifyRouteAccess;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->loadRoutesFrom(__DIR__.'/routes/api.php');


//        Resource::withoutWrapping();

//        $this->addCommands()
//            ->addMiddleware()
//            ->loadDependencies()
//            ->publishDependencies()
//            ->publishResources();
//        $this->loadDependencies()->publishDependencies();
    }

//    private function addCommands()
//    {
//        $this->commands([
//            ClearPreferences::class,
//            UpdateGlobalPreferences::class,
//            UpgradeFileManager::class,
//            Update::class,
//            Upgrade::class,
//            TrackWhoUpdate::class,
//        ]);
//
//        return $this;
//    }

//    private function addMiddleware()
//    {
//        $this->app['router']->aliasMiddleware('verify-active-state', VerifyActiveState::class);
//
//        $this->app['router']->middlewareGroup('core', [
//            VerifyActiveState::class,
//            ActionLogger::class,
//            Impersonate::class,
//            VerifyRouteAccess::class,
//            SetLanguage::class,
//        ]);
//
//        return $this;
//    }

    private function loadDependencies()
    {
//        $this->mergeConfigFrom(__DIR__.'/config/inspiring.php', 'enso.inspiring');
//        $this->mergeConfigFrom(__DIR__.'/config/config.php', 'enso.config');
//        $this->mergeConfigFrom(__DIR__.'/config/themes.php', 'enso.themes');
        $this->loadRoutesFrom(__DIR__.'/routes/api.php');
//        $this->loadMigrationsFrom(__DIR__.'/database/migrations');
        $this->loadViewsFrom(__DIR__.'/resources/views', 'ringer/admin-panel');

//        dd('aassssssssssdddddddddddddfffffffffffffggggggggggggggg');

        return $this;
    }

//    protected function loadViewsFrom($path, $namespace)
//    {
//
//        dump($this->app->config['view']['paths']);
//
//
//        if (is_array($this->app->config['view']['paths'])) {
//            foreach ($this->app->config['view']['paths'] as $viewPath) {
//                if (is_dir($appPath = $viewPath.'/vendor/'.$namespace)) {
//                    $this->app['view']->addNamespace($namespace, $appPath);
//                }
//            }
//        }
//
//        dump($this->app['view']);
//
//        $this->app['view']->addNamespace($namespace, $path);
//
//        dump($this->app['view']);
//
//        echo get_class($this->app['view']);
//
//        dump($this->app->config['view']['paths']);
//
//    }



    private function publishDependencies()
    {
//        $this->publishes([
//            __DIR__.'/config' => config_path('enso'),
//        ], 'core-config');
//
//        $this->publishes([
//            __DIR__.'/config' => config_path('enso'),
//        ], 'enso-config');
//
//        $this->publishes([
//            __DIR__.'/resources/preferences.json' => resource_path('preferences.json'),
//        ], 'core-preferences');
//
//        $this->publishes([
//            __DIR__.'/resources/preferences.json' => resource_path('preferences.json'),
//        ], 'enso-preferences');
//
//        $this->publishes([
//            __DIR__.'/database/factories' => database_path('factories'),
//        ], 'core-factories');
//
//        $this->publishes([
//            __DIR__.'/database/factories' => database_path('factories'),
//        ], 'enso-factories');
//
//        $this->publishes([
//            __DIR__.'/database/seeds' => database_path('seeds'),
//        ], 'core-seeders');

//        $this->publishes([
//            __DIR__.'/database/seeds' => database_path('seeds'),
//        ], 'enso-seeders');

        return $this;
    }

//    private function publishResources()
//    {
//        $this->publishes([
//            __DIR__.'/storage' => storage_path('app'),
//        ], 'core-storage');
//
//        $this->publishes([
//            __DIR__.'/resources/js' => resource_path('js'),
//            __DIR__.'/resources/customizableJs' => resource_path('js'),
//            __DIR__.'/resources/customizableSass' => resource_path('sass'),
//            __DIR__.'/resources/customizableImages' => resource_path('images'),
//            __DIR__.'/resources/sass' => resource_path('sass'),
//            __DIR__.'/resources/images' => resource_path('images'),
//        ], 'core-assets');
//
//        $this->publishes([
//            __DIR__.'/resources/js' => resource_path('js'),
//            __DIR__.'/resources/sass' => resource_path('sass'),
//            __DIR__.'/resources/images' => resource_path('images'),
//        ], 'enso-assets');
//
//        $this->publishes([
//            __DIR__.'/resources/views/mail' => resource_path('views/vendor/mail'),
//        ], 'enso-mail-assets');
//    }

    public function register()
    {
        //
    }
}
