export default class Draggable {
    dx=0;
    dy=0;
    currentX = 0;
    currentY = 0;
    init(options) {
        this.options = options;
    }
    onMouseMove = (e) => {
        e.preventDefault();
        const el = this.options.element;
        const parentElement = el.parentElement;
        const pRect = parentElement?parentElement.getBoundingClientRect():{left:0,top:0};
        const position = this.getPosition(e, this.dx, this.dy);
        let x = position.left - pRect.left;
        let y = position.top - pRect.top;
        this.currentX = x>0?x:0;
        this.currentY = y>0?y:0;

        this.setTranslate(this.currentX, this.currentY);

    }
    onMouseDown = (e) => {
        const el = this.options.element;
        const parentElement = el.parentElement;
        const rect = el.getBoundingClientRect();
        const pRect = parentElement?parentElement.getBoundingClientRect():{left:0,top:0};
        this.currentX = - pRect.left + rect.left;
        this.currentY = - pRect.top + rect.top;
        
        const position = this.getPosition(e);
        this.dx = position.left - rect.left;
        this.dy = position.top - rect.top;

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
            this.options.element.style.left = `${x}px`;
            this.options.element.style.top = `${y}px`;
        }
    }
    getPosition(e, dx=0, dy=0){
        if ((/touch/).test(e.type)) {
            return {
                left: e.touches[0].clientX - dx,
                top: e.touches[0].clientY - dy,
                x: e.touches[0].clientX - dx,
                y: e.touches[0].clientY - dy
            };
        } else {
            return {
                left: e.clientX - dx,
                top: e.clientY - dy,
                x: e.clientX - dx,
                y: e.clientY - dy
            };
        }
    }
}
