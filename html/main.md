# Markdown <!-- omit in toc -->

## Sections <!-- omit in toc -->

- [Lesser-Known HTML Attributes and Use Cases](#lesser-known-html-attributes-and-use-cases)
  - [`autocomplete` for `<inmput>`](#autocomplete-for-inmput)
  - [`srcset` for `<img>`](#srcset-for-img)
  - [`download` for `<a>`](#download-for-a)
  - [`multiple` for `<select>`](#multiple-for-select)
  - [`autofocus` for `<input>`](#autofocus-for-input)

## Lesser-Known HTML Attributes and Use Cases

### `autocomplete` for `<inmput>`

```html
<input type="text" name="name" autocomplete="on">
```
Allows the browser to suggest possible values for the input field.

### `srcset` for `<img>`

```html
<img src="image.jpg" srcset="image-low.jpg 480w, image-med.jpg 800w">
```

The `srcset` attribute allows you to provide a list of image sources for different screen resolutions.

### `download` for `<a>`

```html
<a href="https://example.com/file.zip" download="file.zip">Download</a>
```

Allows the browser to download the file when the link is clicked.

### `multiple` for `<select>`

```html
<select multiple>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>
```

Allows the user to select multiple options from a dropdown.

### `autofocus` for `<input>`

```html
<input type="text" autofocus>
```

Sets the input field to be focused automatically when the page loads.