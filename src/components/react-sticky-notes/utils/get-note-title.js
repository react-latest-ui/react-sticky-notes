export const getNoteTitle = ({title, text, limit = 10}) => {
	const title = title?title:String(text).substr(0, limit);
	return title.substr(0, 1).toUpperCase() + title.substr(1, title.length);
}
