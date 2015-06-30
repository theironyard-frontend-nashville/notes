# Intro to Terminal

```sh
# make a directory
$ mkdir <directory-name>

# move into a directory
$ cd <directory-name>

# list the contents of a directory
$ ls

# the symbol for the parent directory is ..
$ cd .. # this moves up a directory

# See the current directory
$ pwd
```

## Git Commands

#### Creating a repository on your computer
This creates a git repository in the current directory.

```sh
git init
```

#### Adding files to the staging area

To see the current status of your directory and repository:

```sh
$ git status
```

To add a single file to be tracked

```sh
$ git add filename.extension
```

To track *all* files. You can do this by adding the current directory.

```sh
$ git add .
```

#### Checking the status again, and do this often
```sh
$ git status
```

#### Committing files
Now that you have files in the staging area, you can save a snapshot of the staging area using a commit.

This will open up your default `git` editor. Which is mostl likely Sublime. You'll want to make sure to save your commit message and exit sublime before you go back to your terminal so it can close the commit session

```sh
$ git commit
```

#### Ignore Certain Files

Want to ignore a specific file, create a `.gitignore` file and add any files to it you want to ignore. Ah'hem ... I'm looking at you `.DS_Store`.

### Floating

* `float: left;`
* `float: right;`
* `float: none'`

[Clearfix Hack](http://learnlayout.com/clearfix.html)


### Positioning

[CSS Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

* `position:relative;`
* `position:absolute;`

Introduction of `top`, `right`, `bottom`, `left` and `z-index`

### Links / Resources

* [HTML Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
* [CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors)
* [CSS Z-INDEX](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context)
* [Learn Layout](http://learnlayout.com/)
* [Try Git](https://try.github.io/levels/1/challenges/1)
* [Git Manual](http://git-scm.com/doc)
