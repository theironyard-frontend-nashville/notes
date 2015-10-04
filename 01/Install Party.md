## Basics

#### [OSX El Capitan](https://www.apple.com/osx/)

Everyone is required to use a Mac computer and the latest version of OSX.

#### [Google Chrome](https://www.google.com/intl/en/chrome/browser/)

There are a few good browsers out there, but in this class we'll be focusing on using Chrome. With it's built in dev tools you can't go wrong.

#### [XCode Command Line Tools](https://developer.apple.com/xcode/)

* Open up terminal and type `xcode-select --install` and follow the on screen instructions.

#### [iTerm 2](http://www.iterm2.com/)

This is an excellent replacement for Apple's built in terminal.

#### [Oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)

This makes your terminal (iTerm 2) come alive.

* Go [HERE](https://github.com/robbyrussell/oh-my-zsh#basic-installation) and follow directions.

#### [Github](http://github.com)

The web-based service we will be using to store all of your work.

* Sign up for a [free](https://github.com/join) account.

#### [Trello](http://trello.com)

The web-based service we will be using to store track your projects and stay organized.

* Sign up for a [free](https://trello.com/signup) account.

#### [Creating an SSH Key](https://help.github.com/articles/generating-ssh-keys)

You'll need an SSH key when using Github. SSH keys are a way to identify trusted computers, without involving passwords. Walk through the steps in this [tutorial](https://help.github.com/articles/generating-ssh-keys) to create your SSH key and add it to your Github account.

#### [Atom](http://atom.io)

* Download & Install

#### [Homebrew](http://brew.sh/)

A package manager for installing developmental tools onto your Apple computer.

* Open up Terminal.app (Applications > Utilities > Terminal)
* Go [here for install instructions](http://brew.sh/)
* Follow the instructions on-screen.
* When finished, run `brew doctor`.

#### [Node](http://nodejs.org/) & [NPM](https://www.npmjs.org/)

Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.

* Open up terminal
* Run `brew install node`

Node Package Manager (NPM) comes installed with Node. If you followed the above you'll have it installed. Let's check to make sure.

* Open up terminal
* Run `npm help`

- `brew install git`
- `brew install hub`
- `brew cleanup`
- `brew install caskroom/cask/brew-cask`
- `brew tap caskroom/versions`
- `brew cask install --appdir="/Applications" google-chrome`
- `brew cask install --appdir="/Applications" atom`
- `brew cask install --appdir="/Applications" slack`
- `brew cask install --appdir="/Applications" iterm2`
- `brew cask install --appdir="/Applications" screenhero`
- `brew cask install --appdir="/Applications" github`


#### Optionally set atom as the default text editor for git:
`git config --global core.editor "atom --wait"`
