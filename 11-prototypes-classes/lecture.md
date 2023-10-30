# Classes and extension, prototypes

## Classes

```javascript
   class Animal {
     makeSound() {
       console.log('some sound')
     }
   }


   let animal = new Animal()
   animal.makeSound() // prints 'some sound' to console
```


## Extension


## Prototypes


1. **Basic Objects**:
Every object in JavaScript has a prototype. When you access a property or method on an object, JavaScript will first check the object itself, and if it doesn't find it, it will look on the object's prototype, and continue up the prototype chain until it finds the property/method or reaches the end (null).

   ```javascript
   let obj = {property: 'value'};
   console.log(obj.hasOwnProperty('property')); // true
   ```

   Here, `hasOwnProperty` is not directly on `obj`, but is accessible via its prototype, which is `Object.prototype`.

2. **Setting Prototypes**:
You can set the prototype of an object using `Object.create()`.

   ```javascript
   let animal = {
     makeSound: function() {
       console.log('some sound');
     }
   };

   let dog = Object.create(animal);
   dog.makeSound(); // 'some sound'
   ```

   Here, `dog` doesn't have a `makeSound` method by itself. It inherits it from `animal`, its prototype.

3. **Constructor Functions**:
You can also set prototypes using constructor functions and the `new` keyword.

   ```javascript
   function Animal() {}
   Animal.prototype.makeSound = function() {
     console.log('some sound');
   };

   let cat = new Animal();
   cat.makeSound(); // 'some sound'
   ```

   When `cat` is created using the `new` keyword, its prototype is set to `Animal.prototype`.

4. **Extending Prototypes**:
You can extend (inherit from) prototypes to create a new object that inherits properties and methods from another object.

   ```javascript
   function Dog() {}
   Dog.prototype = Object.create(Animal.prototype);
   Dog.prototype.constructor = Dog;  // Correcting the constructor property
   Dog.prototype.makeSound = function() {
     console.log('woof');
   };

   let myDog = new Dog();
   myDog.makeSound(); // 'woof'
   ```

   Here, `Dog` inherits from `Animal`, but we override the `makeSound` method.

5. **ES6 Classes**:
With the introduction of ES6, JavaScript got the `class` syntax, which simplifies prototype-based inheritance.

   ```javascript
   class Animal {
     makeSound() {
       console.log('some sound');
     }
   }

   class Dog extends Animal {
     makeSound() {
       console.log('woof');
     }
   }

   let myDog = new Dog();
   myDog.makeSound(); // 'woof'
   ```

   Under the hood, this `class` syntax is still using prototypes.

Remember, every object in JavaScript has a prototype chain ending in `Object.prototype`, unless explicitly set to `null`. The prototype mechanism is how JavaScript supports object-oriented programming features like inheritance.