
// Inheritance

// core concepts of OOP that allows an obj
// to take on the methods and propeties of another object.
//  Super/ Base/ Parent class
// Derived/ Sub/ Child class

// Prototypical Inheritance
// Prototype is the parent of another object. 


// Property Descriptor
let person = { name: 'Mosh' };
    // let objectBase = Object.getPropertyOf(person);
    // let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
    // console.log(descriptor);

    Object.defineProperty(person, 'name', {
        writable: false,
        configurable: false, //not be able to delete object
    });

    person.name = 'John';
    console.log(person)
// In JavaScript properties have attributes attached to
// them that prevent a property form being enumerated.


// Prototypes vs Instance Members

function Circle(radius) {
    // Instance Members
    this.radius = radius;

    this.move = function() {
        this.draw();
        console.log('move');
    }
}

// Prototype members
Circle.prototype.draw = function() {
    console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(2);

Circle.prototype.toString = function() {
    return 'Circle with radius ' + this.radius;
}

// Iterating Propeties
// Object.keys only returns instance memebrs not prtotype members
// for in returns all members


// Exercise

function Stopwatch() { 
    let startTime, endTime, running, duration = 0;
  
    this.start = function() {
      if (running) 
        throw new Error('Stopwatch has already started.');
      
      running = true; 
  
      startTime = new Date();
    };
  
    this.stop = function() {
      if (!running) 
        throw new Error('Stopwatch is not started.');
  
      running = false; 
        
      endTime = new Date();
  
      const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
      duration += seconds; 
    };
  
    this.reset = function() { 
      startTime == null;
      endTime == null;
      running == false; 
      duration == 0; 
    };
  
    Object.defineProperty(this, 'duration', {
      get: function() { return duration; }
    });
  }
  
// prototype
  Stopwatch.prototype.start = function() {
    console.log('Stopwatch has already started.')
  }
