class Shape{
    // class shape with constructor that initializes it and can the colour can be added .
    
        constructor(){
            this.color=''
        }
        setColor(color){
            this.color=(color);
        }
    }
    // circle class declaring properties for a circle and filling with selected color .
    class Circle extends Shape{
        render(){
            return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
        }
    }
    //circle class declaring properties for a circle and filling with selected color.
    class Square extends Shape{
        render(){
            return `<rect x="50" height="200" width="200" fill="${this.color}">`
        }
    }
    // circle class declaring properties for a circle and filling with selected color.
    class Triangle extends Shape{
        render(){
            return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
        }
    };
    
    module.exports = {Circle, Square, Triangle}