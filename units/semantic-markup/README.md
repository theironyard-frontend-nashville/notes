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

You can apply styles with css to any element, class, or id, so you should prefer good semantic markup over using the elements for display purposes. e.g. Do not use a `h5` when an `h1` is more semantically appropriate, just because the `h5`'s default font-size is smaller.

Once you learn to look past element names and think of their essential meaning, it gets a bit easier to write markup.

> Don’t think of `<article>` as a magazine article. Think of it as an article of clothing, an independent entity that can be arranged in conjunction with other articles of clothing, but is a complete thing in itself.

### What has more semantic meaning?

Compare the following lists of my favorite restaurants, and note which markup has more meaning semantically:

```html
  <p>Hattie B's, Joey's House of Pizza, Arnold's Meat and Three</p>
```

vs.

```html
  <ul>
    <li>Hattie B's</li>
    <li>Joey's House of Pizza</li>
    <li>Arnold's Meat and Three</li>
  </ul>
```

While the first block of code is noticeably simpler, the second block of code has more semantic meaning. We are saying that the content is a list, and then marking each item in the list as a list item.

Another example:

```html
<div>
  <div>My very first blog post!</div>
  <p>My very first blog post is kind of short.</p>
  <div>Posted on Wednesday, 10/7/2015</div>
</div>
```

vs.

```html
<article>
  <header>
    <h2>My very first blog post!</h2>
  </header>
  <section class="post_content">
    <p>My very first blog post is kind of short.</p>
  </section>
  <footer>
    Posted on <time datetime="2015-10-07 19:00">Wednesday, 10/7/2015</time>
  </footer>
</article>
```


## Sectioning Content
![Sectioning Chart](sectioning-flowchart.png)

## Common Elements
There are a few types of HTML elements:
(This is my take on the most common elements, and is not a complete representation)

- Basic Elements: `html`, `doctype`
- Document Metadata: `head`, `link`, `meta`, `style`, `title`
- Content Sectioning: `address`, `article`, `body`, `header`, `footer`, `h1 - h6`, `nav`, `section`
- Text Content: `ul`, `li`, `div`, `main`, `p`
- Inline text: `a`, `br`, `span`, `i`
- Embedded Content: `img`, `iframe`
- Media: `audio`, `img`, `video`
- Scripting: `script`, `canvas`
- Tables: `table`, `thead`, `tfoot`, `tbody`, `th`, `tr`, `td`
- Forms: `button`, `fieldset`, `input`, `label`, `legend`, `option`, `select`, `textarea`

As you come across resources, tutorials, etc. You may notice some tags that are no longer best practice. Refer to the [MDN Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) Obsolete and deprecated elements table and make sure that you're following the latest best practices.

## More Resources

* [Let's talk about semantics](http://html5doctor.com/lets-talk-about-semantics/)
* [What is semantic markup?](http://www.tyssendesign.com.au/articles/faqs/what-is-semantic-mark-up/)
* [The Importance of Semantic Markup](http://shapeshed.com/the_importance_of_semantic_markup/)
* [What does it all mean?](http://diveintohtml5.info/semantics.html)
* [Problems solved by HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document)
* [MDN HTML Developers Guide](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML)
* [MDN Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
