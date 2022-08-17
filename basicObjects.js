 
 // Object-oreinted Programming (OOP)

 // If a function is part of an object we call that function a method
 let radius = 1;
 let x =1;
 let y = 1;

 const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
 };


// We are calling the method
 circle.draw();

