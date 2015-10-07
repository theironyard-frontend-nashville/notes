# HTML Semantics

### You should already know about
* [HTML Documents](/units/html-documents/README.md)

## What's the point?
> Semantics is the study of language meaning. For language this is the words we use to communicate. For HTML it is the tags we use to mark a document up.

An example is the `<p>` tag for paragraphs which tells the browser that the text within a `<p>` tag is a paragraph. Note that we said that the text between the tag _is_ something. We are declaring the content's meaning. Also, note that we are not referring to how it would _look_ in a browser, either.

Semantics and Presentation are always to be considered separate.

### Why use it?

Why use semantic markup? If CSS can style any element to look like any other element, why bother?
- Better search engine rankings
- More maintainable code (Future Self and Co-workers)
- Easier code to style with CSS
- More accessible code for blind and partially sighted users
- You are future proofing your code
- You are using the right tools for the job

## Presentation versus Semantics

You can apply styles with css to any element, class, or id, so you should prefer good semantic markup over using the elements for display purposes. e.g. Do not use a h5 when an h1 is more semantically appropriate, just because the h5's default font-size is smaller.

Once you learn to look past element names and think of their essential meaning, it gets a bit easier to write markup.

> Don’t think of `<article>` as a magazine article. Think of it as an article of clothing, an independent entity that can be arranged in conjunction with other articles of clothing, but is a complete thing in itself.

### What has more semantic meaning?

Compare the following lists of my favorite restaurants and note which markup has more meaning, semantically:

```html
  <p>Hattie B's, Joey's House of Pizza, Arnold's Meat and Three</p>
```

```html
  <ul>
    <li>Hattie B's</li>
    <li>Joey's House of Pizza</li>
    <li>Arnold's Meat and Three</li>
  </ul>
```

While the first block of code is noticeably simpler, the second block of code has more semantic meaning. We are saying that the content is a list, and then marking each item in the list as a list item.

![Sectioning Chart](sectioning-flowchart.png)


## More Resources

* [Let's talk about semantics](http://html5doctor.com/lets-talk-about-semantics/)
* [What is semantic markup?](http://www.tyssendesign.com.au/articles/faqs/what-is-semantic-mark-up/)
* [The Importance of Semantic Markup](http://shapeshed.com/the_importance_of_semantic_markup/)
* [What does it all mean?](http://diveintohtml5.info/semantics.html)
* [Problems solved by HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document)
* [MDN HTML Developers Guide](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML)
