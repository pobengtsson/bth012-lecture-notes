## JavaScript Objects: An Introduction

### 1. **What are Objects?**
   - In JavaScript, **objects** are collections of **key-value pairs**.
   - They can be thought of as **dictionaries**—each key (or property) maps to a specific value.
   - Objects are fundamental in JavaScript, used to store structured data.

#### Object Syntax: Object Literal
   - An object literal is a simple way to create objects in JavaScript using curly braces `{}`.
   - Each property is a key-value pair, separated by a colon `:`.
   - The properties are separated by commas.
   ```javascript
   let person = {
       name: 'Alice',
       age: 25,
       isStudent: true
   }
   ```

### 2. **Using Objects as Dictionaries**
   - Objects can be used to store **key-value pairs**, similar to dictionaries in Python or hash maps in Java.
   - You can access, add, or modify properties using **dot notation** or **bracket notation**.
   ```javascript
   let user = {
       username: 'jsDev',
       password: 'secret123'
   }

   // Accessing properties
   console.log(user.username) // Output: 'jsDev'
   console.log(user['password']) // Output: 'secret123'

   // Adding properties
   user.email = 'jsDev@example.com'
   console.log(user) // Output: { username: 'jsDev', password: 'secret123', email: 'jsDev@example.com' }

   // Modifying properties
   user.password = 'newSecret456'
   console.log(user.password) // Output: 'newSecret456'
   ```

### 3. **Object Properties as Functions**
   - Object properties can also be **functions**, making objects act like "containers" for related data and behavior.
   ```javascript
   let calculator = {
       add: function(a, b) {
           return a + b
       },
       subtract(a, b) {
           return a - b
       }
   }

   console.log(calculator.add(5, 3)) // Output: 8
   console.log(calculator.subtract(10, 4)) // Output: 6
   ```
   - This pattern is similar to how objects are used in Java and Python to store both data and related functions.

### 4. **Commonly Used Built-in Object Methods**

#### Object.keys()
   - The `Object.keys()` method returns an array of a given object's **own property names**.
   ```javascript
   let car = {
       brand: 'Toyota',
       model: 'Camry',
       year: 2020
   }

   let keys = Object.keys(car)
   console.log(keys) // Output: ['brand', 'model', 'year']
   ```

#### Object.values()
   - The `Object.values()` method returns an array of a given object's **own property values**.
   ```javascript
   let car = {
       brand: 'Toyota',
       model: 'Camry',
       year: 2020
   }

   let values = Object.values(car)
   console.log(values) // Output: ['Toyota', 'Camry', 2020]
   ```

#### Object.entries()
   - The `Object.entries()` method returns an array of the object's **own key-value pairs** as arrays.
   ```javascript
   let car = {
       brand: 'Toyota',
       model: 'Camry',
       year: 2020
   }

   let entries = Object.entries(car)
   console.log(entries)
   // Output: [['brand', 'Toyota'], ['model', 'Camry'], ['year', 2020]]
   ```

#### hasOwnProperty()
   - The `hasOwnProperty()` method returns a boolean indicating whether the object has the specified property.
   ```javascript
   let car = {
       brand: 'Toyota',
       model: 'Camry'
   }

   console.log(car.hasOwnProperty('brand')) // Output: true
   console.log(car.hasOwnProperty('year')) // Output: false
   ```

### 5. **Using the Spread Operator with Objects**
   - The **spread operator** (`...`) is useful for **copying objects** or **merging objects**.
   - It creates a **shallow copy** of an object, making it easy to modify properties without affecting the original object.

#### Example: Copying Objects with the Spread Operator
   ```javascript
   let original = {
       name: 'Alice',
       age: 25
   }

   // Creating a copy of the object
   let copy = { ...original }
   copy.age = 30

   console.log(original) // Output: { name: 'Alice', age: 25 }
   console.log(copy) // Output: { name: 'Alice', age: 30 }
   ```

#### Example: Merging Objects with the Spread Operator
   ```javascript
   let defaultSettings = {
       theme: 'light',
       notifications: true
   }

   let userSettings = {
       theme: 'dark'
   }

   // Merging objects
   let settings = { ...defaultSettings, ...userSettings }

   console.log(settings) // Output: { theme: 'dark', notifications: true }
   ```

### 6. **Summary**
   - Objects in JavaScript are used to store **key-value pairs** and can be used as dictionaries.
   - They can store both **data** and **functions** as properties, making them versatile containers.
   - Common built-in methods like `Object.keys()`, `Object.values()`, and `Object.entries()` are useful for working with object data.
   - The **spread operator** simplifies creating copies and merging objects, allowing for more elegant code.
