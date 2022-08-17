

// Factory function
// Create logic and avoid dupilication

function createCircle(radius, location) {
    return {
        radius, // same as radius: radius when key and value are the same
        // location: location,
        // isVisible: true,
        draw() {
            console.log('draw');
        }
     };  
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);
