# react-sticky-notes

Make your React components sticky!

## Installation

```sh
npm install react-sticky-notes
```

## Overview & Basic Example

The goal of `react-sticky-notes` is make it easier for developers to build UIs that have sticky elements. Some examples include a sticky navbar, or a two-column layout where the left side sticks while the right side scrolls.

`react-sticky-notes` works by calculating the position of a `<ReactStickyNotes>` component.

```js
  <ReactStickyNotes width="600px" height="400px" />
```
* `width` _(string)_ - css width of the container
* `height` _(number)_ - css height of the container
### Full Example

Here's an example of all of those pieces together:

app.js

```js
import React from 'react';
import ReactStickyNotes from 'react-sticky-notes';
// ...

class App extends React.Component {
  render() {
    return (
      <ReactStickyNotes width="600px" height="400px" />
    );
  },
};
``
