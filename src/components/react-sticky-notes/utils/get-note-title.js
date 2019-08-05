export const getNoteTitle = ({title, text, limit = 10}) => {
	const str = title?title:String(text).substr(0, limit);
	return str.substr(0, 1).toUpperCase() + str.substr(1, str.length);
}
