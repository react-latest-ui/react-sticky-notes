export default class Draggable {
    initialX = 0;
    initialY = 0;
    currentX = 0;
    currentY = 0;
    init(options) {
        this.options = options;
        /*if(options.position){
            this.xOffset = options.position.x;
            this.yOffset = options.position.y;
            this.setTranslate(options.position.x,options.position.y);
        }*/
    }
    onMouseMove = (e) => {
        e.preventDefault();
        const el = this.options.element;
        const position = this.getPosition(e, this.initialX, this.initialY);
        this.currentX = position.x;
        this.currentY = position.y;
        const x1 = this.options.element.parentElement.offsetWidth-this.options.element.offsetWidth;
        const y1 = this.options.element.parentElement.offsetHeight-this.options.element.offsetHeight
        if( this.currentX<0 ){
            this.currentX = 0;
        }
        if( this.currentY<0 ){
            this.currentY = 0;
        }
        if( this.currentX>x1 ){
            this.currentX = x1;
        }
        if( this.currentY>y1 ){
            this.currentY = y1;
            if(el.parentElement.offsetHeight<el.offsetHeight){
                this.currentY = 0;
            }
        }

        this.setTranslate(this.currentX, this.currentY);
    }
    onMouseDown = (e) => {
        const el = this.options.element;
        const rect = el.getBoundingClientRect();
        const position = this.getPosition(e, rect.x, rect.y);
        this.initialX = position.x;
        this.initialY = position.y;
        document.addEventListener('mousemove', this.onMouseMove, null);
        document.addEventListener('mouseup', this.onMouseUp, null);
        
    }
    onMouseUp = (e) => {
        if(this.options.onDragComplete){
            this.options.onDragComplete.call(this, {
                x:this.currentX,
                y:this.currentY
            })
        }
        
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp, null);
    }
    setTranslate(x, y) {
        if(this.options.element){
            this.options.element.style.transform = `translate3d(${x}px,${y}px,0)`;
        }
    }
    getPosition(e, dx, dy){
        if ((/touch/).test(e.type)) {
            return {
                x: e.touches[0].clientX - dx,
                y: e.touches[0].clientY - dy
            };
        } else {
            return {
                x: e.clientX - dx,
                y: e.clientY - dy
            };
        }
    }
}
