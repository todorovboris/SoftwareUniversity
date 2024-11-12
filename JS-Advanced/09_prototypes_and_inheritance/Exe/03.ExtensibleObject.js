function extensibleObject() {
    const obj = {
        extend: function (targetObject) {
            // Get the prototype of the current object
            const proto = Object.getPrototypeOf(this);

            // Iterate through the properties of the template object
            for (let key in targetObject) {
                if (targetObject.hasOwnProperty(key)) {
                    if (typeof targetObject[key] === 'function') {
                        // If the property is a function, add it to the prototype
                        proto[key] = targetObject[key];
                    } else {
                        // Otherwise, add it directly to the object
                        this[key] = targetObject[key];
                    }
                }
            }
        },
    };

    return obj;
}

const targetObject = {
    targetObjectProperty: 'someString',
    targetObjectMethod: function () {
        console.log('Extended method!');
    },
};

const myObj = extensibleObject();
myObj.extend(targetObject);

console.log(myObj.targetObjectProperty); // Outputs: 'someString'
myObj.targetObjectMethod(); // Outputs: 'Extended method!'
