export const getCurrentDateTime = () => new Date().toISOString().replace('T',' ').substring(0, 19)
