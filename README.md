# React Sticky Notes

Sticky Notes for React Application

## Installation

Install the React Sticky Notes [package](https://www.npmjs.com/package/@react-latest-ui/react-sticky-notes) package using [npm](https://www.npmjs.com/):

```bash
npm install react-sticky-notes --save
```

## Features

* Pure React Sticky Notes
* Draggable & Resizable Stickies
* Inline Content Editable
* Configurable Sticky Colors

## Usage

```javascript
import React, { Component } from 'react';
import ReactStickyNotes from 'react-sticky-notes'; //ES6

class MyApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: []
		}
	}  
	render() {
		return (
			<ReactStickyNotes
				notes={this.state.notes}
				icons={this.state.icons}
				width={'100%'}
				height={'100%'}
			/>
		)
	}
});
```

### React Stickies Props

```javascript

// Display title on header
title: ?string,

// Configurable custom sticky notes colors
colors: ?Array = [HexCodes],

// Layout configuration
// Container width
width: ?String,
// Container height
height: ?String,
```

## Contribute

If you have a feature request, please add it as an issue or make a pull request.

## TODO List

- [x] Basic Notes with CRUD
- [x] Draggable Notes
- [x] Update Notes state
- [x] Notes position handling
- [x] Resizable handles on corners
- [ ] ---- 
