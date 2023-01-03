let mix = require('laravel-mix');

mix.setPublicPath('travel-icons');
mix.setResourceRoot('/travel-icons');

mix.sass('src/travel-icons.scss', 'travel-icons')
    .minify('travel-icons/travel-icons.css');