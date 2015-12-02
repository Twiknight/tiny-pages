# Guide

### Free you from Jekyll!
---------------------------
This is a template I meant to use in my repo [Tiny](http://github.com/Twiknight/tiny).
When I tried to write a blog series for it,
I found it hard for windows users to use the GitHub-Pages engine,
which is based on Jekyll.

Using Ruby is not that convenient for windows users.
Installing and configuration the Jekyll server is horrible work.

So it came out as Tiny-Pages:

* A pure front-end GitHub-Pages template. Written in 100% Html, JavaScript and  CSS.

* Using Node for debugging, and that will be much easier for windows users.

* Using [vue.js](http://vuejs.org) as the framework, thus it can be easily redesigned. (I‘m so sorry that I have a horrible taste in design)

### Installing
--------------------

#### for Veterans
You can use it as what you do with other gh-pages template:

_Just clone the branch to your own `gh-pages `branch and use it._

You can configure it in `site.json`or you may want refactoring ( source files are in `src` folder. Webpack task is ready in `gulpfile.js`).

The only difference is that, you had to manually add the article name and link in your `site.json` file.

Or you can write a `gulp task` to do it automatically.

This may be a drawback, But why not think it a different way: you can load article from any domain that permits cross-site.

#### for Fresh-Hands
Maybe you should firstly learn to use [Git](http://www.git-scm.com/) and [GitHub-Pages](https://pages.github.com/).

Than you replace your own `gh-pages` branch with this one by Git command or manually.

Both methods are ok. It doesn't matter how you do it.

OK, now you own a blog site look exactly the same as this one.
Then you can begin your blogging.

1. write a  new article, say named `Hello-GitHub-Pages.md`;
2. Then you lay it in the folder `articles`
(Why not `posts`? Because `posts` is a reserved path in Jekyll);
3. Add it in the `site.json`:
        "posts":[
            {
                "title":"Hello GitHub-Pages!",
                "url":"/posts/Hello-GitHub-Pages.md"
            }
        ],
4. Open your own GitHub-Pages site and you'll be able to select this one from the post list.


### license
-------------------
This project uses [Unlicense](http://unlicense.org/) just like sqlite. This license endows the users the max freedom.

But this does not mean the other projects used in the project are under unlicense.

__YOU SHOULD FOLLOW THEIR OWN LICENSE CODE.__
