export const getNotes = (colorCodes) => {
    return localStorage.getItem('react-sticky-notes')?JSON.parse(localStorage.getItem('react-sticky-notes')):[
        {
          text:'',
          position:{x:0,y:0},
          color: colorCodes[Math.floor(Math.random()*colorCodes.length)]
        }
      ]
}
