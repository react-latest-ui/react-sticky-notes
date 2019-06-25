const getColorCodes = () => {
    const codes = [];
    for(let i=0;i<360;i+=18){
        codes.push(i);
    }
    return codes;
};
export default getColorCodes();