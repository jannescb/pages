<?php

namespace AwStudio\Pages;

use Illuminate\Support\ServiceProvider;

class PagesServiceProvider extends ServiceProvider
{
    /**
     * Register application services.
     *
     * @return void
     */
    public function register()
    {
        $this->loadRoutesFrom(__DIR__.'/routes/web.php');
    }

    /**
     * Boot application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->publishes([
            __DIR__.'/../publish/resources/views' => resource_path('views'),
        ], 'views');
        $this->publishes([
            __DIR__.'/../publish/database/migrations' => database_path('migrations'),
        ], 'migrations');
    }
}
