# JLM 2017

This is the [Nation Builder](http://nationbuilder.com) theme used by [jlm2017.fr ](http://www.jlm2017.fr), the website of Jean-Luc Mélenchon campaigns for French Presidential Elections.

## How it works ?

This repository uses [Bower](http://bower.io/) to manage dependencies, and [Gulp](http://gulpjs.com/) as build system.

It separates building and deployment phase. It replaces the flat folder structure that NB uses by default by a logical hierarchy.

It must be used in conjunction with the official [NationBuilder Theme Sync for Mac](http://nationbuilder.com/theme_sync) or with the [NationSync](https://github.com/dirk/nationsync) CLI tool.

## Install

We assume that you have in /somedir/theme-xxx the directory containing the theme you are working on. This is the flat version downloaded from NB.

You should use one of the synchronization tool to keep you website up to date with this directory.

First move to another directory, and clone the repository :

```bash
git clone nationbuilding.git my_theme
```

Install dependencies :

```bash
cd my_theme
npm install
bower install
```

Then, create a symbolic link from the build destination of the theme to the synchronized folder :

```bash
ln -s /somedir/theme-xxx dist/theme
```

Start editing the theme in the `src` directory. When you want to build you changes to the synchronized folder, run :

```bash
npm run build
```

You can use `npm run watch` to watch for changes in the theme and update in real time.
