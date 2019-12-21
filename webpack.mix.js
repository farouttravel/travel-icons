let mix = require('laravel-mix');

mix.setPublicPath('dist');
mix.setResourceRoot('/dist');

mix.sass('src/ala-icons.scss', 'dist');