export const getNotes = (colorCodes, notes ) => {
	const _notes = localStorage.getItem('react-sticky-notes') ? JSON.parse(localStorage.getItem('react-sticky-notes')) : notes?notes:[
		{
			text: '',
			position: { x: 0, y: 0 },
			color: colorCodes[Math.floor(Math.random() * colorCodes.length)],
			selected:true
		}
	];
	return _notes;
}
