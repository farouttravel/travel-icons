let mix = require('laravel-mix');

mix.setPublicPath('dist');
mix.setResourceRoot('/dist');

mix.sass('src/travel-icons.scss', 'dist')
    .minify('dist/travel-icons.css')
    .copy('src/index.html', 'dist');