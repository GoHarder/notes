# Markdown <!-- omit in toc -->

## Sections <!-- omit in toc -->

- [Useful Snippets](#useful-snippets)

## Useful Snippets

### Limit the content width in the viewport.

```css
body {
  max-width: clamp(300px, 90%, 1200px);
  margin: 0 auto;
}
```

This will limit the content size to occupy 90% of the viewport width.
with a minimum of 300px and a maximum of 1200px.

### Limit the width of text within the content.

```css
p {
  max-width: 65ch;
}
```

This will limit the width of text within the content to 65ch (characters).

### Balance the warpping of text.

```css
h1, h2, h3, h4, h5, h6 {
  text-wrap: balance;
}
```

This will evently wrap the text into even lines.
The value of `pretty` is also available, which will add an extra word to the ends of paragraphs that end with one word.

### Set default color for standard form elements.

```css
body {
  accent-color: hsl(0, 0%, 0%); /* pick your favorite color */
}
```

Self explanitory the form elements will be colored the way you want.

### Readable table rows.

```css
:is(tbody, table) > tr:nth-child(odd) {
  background: #0001; /* or #fff1 for dark themes */
}

td, th {
  padding: 0.5em; /* adds space between cells */
}
```

This will make the background of every odd row a bit more readable.

## Accessibility

### Reduced motion

Some people get motion sick, so it's a good idea to reduce the animations.

```css
@media (prefers-reduced-motion) {
  *, *::before, *::after {
    animation-duration: 0s !important;
    /* additional recommendation */
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

> [!NOTE]
> Add this to the main css reset file.