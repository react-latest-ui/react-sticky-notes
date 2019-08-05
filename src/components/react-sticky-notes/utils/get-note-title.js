export const getNoteTitle = ({text, limit = 10}) => {
	return String(text).substr(0, limit);
}
