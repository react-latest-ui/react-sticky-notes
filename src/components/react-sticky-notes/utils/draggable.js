export default class Draggable {
    currentX = 0;
    currentY = 0;
    initialX = 0;
    initialY = 0;
    xOffset = 0;
    yOffset = 0;
    active = false;
    init(options) {
        this.options = options;
        if(options.position){
            this.xOffset = options.position.x;
            this.yOffset = options.position.y;
            this.setTranslate(options.position.x,options.position.y);
        }
        if(options.onInit){
            options.onInit({
                limitX: options.element.parentElement.offsetWidth-options.element.offsetWidth,
                limitY: options.element.parentElement.offsetHeight-options.element.offsetHeight
            });
        }
    }
    onMouseMove = (e) => {
        const el = this.options.element;
        e.preventDefault();
        if (e.type === "touchmove") {
            this.currentX = e.touches[0].clientX - this.initialX;
            this.currentY = e.touches[0].clientY - this.initialY;
        } else {
            this.currentX = e.clientX - this.initialX;
            this.currentY = e.clientY - this.initialY;
        }
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

        this.xOffset = this.currentX;
        this.yOffset = this.currentY;

        this.setTranslate(this.currentX, this.currentY);
    }
    onMouseDown = (e) => {
        if (e.type === "touchstart") {
            this.initialX = e.touches[0].clientX - this.xOffset;
            this.initialY = e.touches[0].clientY - this.yOffset;
        } else {
            this.initialX = e.clientX - this.xOffset;
            this.initialY = e.clientY - this.yOffset;
        }
        document.addEventListener('mousemove', this.onMouseMove, null);
        document.addEventListener('mouseup', this.onMouseUp, null);
        
    }
    onMouseUp = (e) => {
        this.initialX = this.currentX;
        this.initialY = this.currentY;
        if(this.options.onDragComplete){
            this.options.onDragComplete.call(this, {
                x:this.initialX,
                y:this.initialY
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
}
