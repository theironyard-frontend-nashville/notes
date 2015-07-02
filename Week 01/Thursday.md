# Intro To Responsive Web Design


#### Prevent Scaling on Mobile Devices

Putting this meta tag in the head of the HTML document tells mobile browsers that this webpage should not be scaled and rendered as is.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```


#### Media Queries

By specifying a _max width_ you are setting a stylesheet to be ignored if the viewport width exceeds that value. This allows you to create a special css file to only be used on small screens.

```html
<link rel="stylesheet" media="(max-width: 425px)" href="tiny.css" />
```
By specifying a _min width_ you are setting a stylesheet to be ignored if the viewport width is less than that value. This allows you to create a special css file to only be used on large screens.

```html
<link rel="stylesheet" media="(min-width: 700px)" href="big.css" />
```


#### Place all elements inside of a wrapper/container element

By placing all elements inside of a container and using values like percents and `em`s it makes it much easier to adjust values on the container and have the effects trickle down to child elements.

```html
<body>
  <div class="wrapper">
    <!-- Rest of content here -->
  </div>
</body>
```


#### Flexible Layout

In most cases a good rule of thumb is that values that are applied horizontally ( _left, right, width_ ) should use scaling units such as `%` and `em`. Values that are applied vertically ( _top, bottom, height_ ) should use units that are precise such as `px`.


#### View Port Units

You can use the size of the viewport ( _the viewport is the viewable area displaying the webpage in the browser_ ) as a unit. You can use `vw` and `vh` for viewport width and height respectively. Using these values, `1vh` matches exactly the height of the viewport and `0.5vh` matches exactly half of the viewport height.

## Box Model

Every element on the page is a box. Every box can be styled with a border, background, etc. There are 4 parts to the box:

* Content
* Padding
* Border
* Margin

By default when you set the `width` of an element, you are specifing the width of the content portion of the box only. Any padding, border, and margin will be added to the width. For example, if you had a div with the styles:

```css
{
  width: 100px;
  border: 1px solid red;
  padding: 10px;
}
```

The full width of the entire box would be `122px` because it has the border and margin on each side of the content:

| Margin | Border | Padding | Content | Padding | Border | Margin |
|--------|--------|---------|---------|---------|--------|--------|
| 0 | 1px | 10px | 100px | 10px | 1px | 0 |

0 + 1 + 10 + 100 + 10 + 1 + 0 = 122


#### Box Sizing

You can change the way __width__ works on boxes using the `box-sizing` css property. The default value for this is `content-box` which works as described above where the width property only applies to the content of the box. The other possible values are:

* `padding-box` the __width__ property is applied to the content plus the padding
* `border-box` the __width__ property is applied to the content, padding and border


## Forms

Forms are how a user inputs data into a web page. There are many different form elements for getting different types of inputs from the user. All form elements must be wrapped inside of a `form` element. The form element has several attributes but the 2 most common are:

* __action__ this is where the data will be sent when the form is submitted. _defaults to the current page_
* __method__ this is the type of request that is made, we will cover the different types when we cover REST

There are many types of inputs that can be used in forms to get information from the user, the most primitive is the text input:

```html
<input type="text" name="username" placeholder="Enter Your Username">
```
The attributes are:

* __type__ this is the type of input. Other common types are _hidden_, _password_, _submit_, and there are many others.
* __name__ this is what the piece of data is refered to by the program that recieves the form data after it is submitted.
* __placeholder__ this is an optional placeholder message to show in the text field if it is empty.


## Google Fonts

This is an easy way for you to add custom fonts to a webpage. You can't normally just set the font to any arbitrary font you desire. This is because in order for the font to show up on the users device, they must have that font installed on their machine, unless the stylesheet specifies where the font can be loaded from. That is precisely what Google fonts do.

You generally want to use the embeded `<link>` way if possible over the `@import` statement. This is because if you use the embeded version, both stylesheets can be downloaded simultaneously. If you use the `@import` method they will have to be downloaded sequentially. Lets assume you have your main stylesheet `main.css` and you are trying to import `fonts.css` and each one takes 5 seconds to load.

If you embed them individually they will download at the same time:

| Downloading simultaneously |
|----------------------------|
| 5 seconds to load main.css |
| 5 seconds to load fonts.css |

__5 seconds total__


If you embed the main.css and then the fonts.css gets imported from within it, they must download one after another:

| Downloading consecutively ||
|----------------------------|-----------------------------|
| 5 seconds to load main.css | 5 seconds to load fonts.css |

__10 seconds total__


## Resources

* [RWD Checklist](http://samkap.github.io/rwd-checklist/)
* [Media Queries](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries)
* [Viewport Units](https://web-design-weekly.com/2014/11/18/viewport-units-vw-vh-vmin-vmax/)
* [Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model)
* [Box Sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
* [HTML Forms Guide](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms)
* [Google Fonts](https://www.google.com/fonts)
