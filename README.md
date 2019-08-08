# React Sticky Notes

A lightweight react component to handle stickies, notes and reminders without any single dependencies(like jQuery) except React.

# Demo

https://react-latest-ui.github.io/react-sticky-notes/

![Sticky Notes for React Application](screenshot.gif?raw=true)

## Installation

Install the React Sticky Notes [package](https://www.npmjs.com/package/@react-latest-ui/react-sticky-notes) package using [npm](https://www.npmjs.com/):

```bash
npm install @react-latest-ui/react-sticky-notes --save
```

## Setting Up

```bash
git clone https://github.com/react-latest-ui/react-sticky-notes.git
npm install
npm start run
```

## Features

* Pure React Sticky Notes
* Draggable & Resizable Stickies
* Inline Content Editable
* Configurable Sticky Colors

## Usage

```javascript
import React, { Component } from 'react';
import ReactStickyNotes from '@react-latest-ui/react-sticky-notes';

class MyApp extends Component {
	constructor(props) {
		super(props);
	}  
	render() {
		return (
			<ReactStickyNotes />
		)
	}
});
```

### React Stickies Props

```javascript
sessionKey: ?String,
colors: ?Array = [HexCodes],
notes: ?Array = [{
	color: ?HexCode,
	text: ?String
}],
containerWidth: ?String{px|%},
containerHeight: ?String{px|%},
noteWidth: ?Number,
noteHeight: ?Number,
footer: ?Boolean = {true|false},
onBeforeChange: (type:String, payload:Object, notes: Array) => {
	return payload;
}
onChange: (type:String, payload:Object, notes: Array) => {

}

```

## Contribute

If you have a feature request, please add it as an issue or make a pull request.

## TODO List

- [x] Basic Notes with CRUD
- [x] Resizable
- [x] Draggable
- [x] Responsive to all devices/desktop
- [x] Import notes from [JSON](data/sample-data.json)/[CSV](data/sample-data.csv)
- [ ] ---- 
