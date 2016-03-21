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
git clone https://github.com/guilro/jlm2017-nb-theme.git my_theme
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

## Using Vagrant development environment
A Vagrant development environment is maintained to ease administration tasks.
Take a look at [Vagrant website](https://www.vagrantup.com/) to get started and install apps. Then:

```bash
vagrant up
```
It will take some time to download clean image and install dependencies.

Then connect to the machine:
```bash
vagrant ssh
```

Your development sources will stay in sync in /vagrant directory. You can now start to work:
```bash
vagrant ssh
cd /vagrant/
npm run build
```

Note: Nationsync package is installed. See [https://github.com/jlm2017/nationsync](https://github.com/jlm2017/nationsync)
to configure. Then, you can:
```bash
vagrant ssh
cd /vagrant/dist/theme
nationsync watch
```


## Developers documentation

The [official theme documentation of NationBuilder](http://nationbuilder.com/liquid) is very rich and a good source of information, even if it is incomplete and full of error.

Another very good source of knowledge is the [default theme of NationBuilder](https://github.com/guilro/jlm2017-nb-theme/tree/36971a3125b4a73a139a38e76653615951fa39e4), which serves as basis for this theme, and use most of the features offered.
