[Table of Contents](/README.md)

# Tuesday, Oct 27th

## Challenge:
Let's build this together:
![](https://github.com/TIY-Austin-Front-End-Engineering/jquery-tabs/raw/master/tabs.gif)

## [Review](https://github.com/theironyard-frontend-nashville/notes/issues):
* Array functions (map, forEach, filter, reduce)

## Goals:
* [What is `this`?](/notes/week 04/tuesday/code/whatIsThis.js)
* Runtime Environment, Call Stack, Event Loop
	* What does the word 'asynchronous' mean?
	* Watch 17 mins of the video about [JS event loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
* AJAX
	* What does the AJAX mean?
	* [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en)
	* HTTP verbs (GET POST PUT DELETE)
	* jQuery.getJSON();
* Git branches/gh-pages

## Notes:


## In-Class Code
[Code that we wrote today](/notes/week 04/tuesday/code)

## Homework

### GitHub API Access (avoiding rate limit issues)

1. Create a Personal access token (https://github.com/settings/applications)
2. Give it a description like "GitHub Homework"
3. Select the `public_repo` and `user` scopes.
4. Click Generate token and copy the token
5. Create a file called `token.js` with contents:

    ```js
    var token = <Your actual token goes here>;

    $.ajaxSetup({
      headers: {
        "Authorization": "token " + token
      }
    });
    ```

6. Create a `.gitignore` file to ignore the token file:
    ```
    token.js
    ```

7. Include token.js in a script tag before your other script(s).

### Hosting your work on gh-pages
```
// on master branch in terminal
$ git add .
$ git status // to see what changes are going to be committed
$ git commit -m 'Some descriptive commit message'
$ git push origin master // push the master branch changes to GitHub
$ git checkout gh-pages // go to the gh-pages branch
$ git rebase master // bring gh-pages up to date with master
$ git push origin gh-pages// push the gh-pages branch changes to GitHub Pages
$ git checkout master // return to the master branch
```
