# NationBuilding

NationBuilding is a starting point to develop your custom [Nation Builder](http://nationbuilder.com/) theme. It uses [Bower](http://bower.io/) to manage dependencies and [Gulp](http://gulpjs.com/) as build system.

It separates building and deployment phase. It replaces the flat folder structure that NB uses by default by a logical hierarchy.

It can be used in conjunction with the official [NationBuilder Theme Sync for Mac](http://nationbuilder.com/theme_sync) or with the [NationSync](https://github.com/dirk/nationsync) CLI tool.

## How to use ?

We assume that you have in /somedir/theme-xxx the directory containing the theme you are working on. This is the flat version downloaded from NB.

We will use NationBuilding to modify this directory. You should use one of the synchronization tool to keep you website up to date with this directory.

First move to another directory, and clone the repository :

    git clone nationbuilding.git my_theme

Install dependencies :

    npm install
    bower install

Then, create a symbolic link from the build destination of NationBuilding to the synchronized folder :

    cd my_theme
    ln -s /somedir/theme-xxx dist/theme

Start editing the theme in the `src` directory. When you want to build you changes to the synchronized folder, run gulp :

    gulp

You can use `gulp watch` to watch for changes in the theme and update in real time.
