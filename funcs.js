Array.prototype.myEach = function(callbackFn) {
    for(let i = 0; i < this.length; i++) {
        if(this[i] === undefined) {
            continue;
        }
        callbackFn(this[i], i, this);
    }
};

Array.prototype.myMap = function(callbackFn) {
    newArr = [];
    for(let i = 0; i < this.length; i++) {
        newArr[i] = callbackFn(this[i], i, this);
    }

    return newArr;
};

Array.prototype.myFilter = function(callbackFn) {
    newArr = [];
    pos = 0;
    for(let i = 0; i < this.length; i++) {
        if(callbackFn(this[i], i, this)) {
            newArr[pos] = this[i];
            pos++;
        }
    }

    return newArr;
};

Array.prototype.mySome = function(callbackFn) {
    for(let i = 0; i < this.length; i++) {
        if(callbackFn(this[i], i, this)) {
            return true;
        }
    }
};

Array.prototype.myEvery = function(callbackFn) {
    for(let i = 0; i < this.length; i++) {
        if(callbackFn(this[i], i, this) === false) {
            return false;
        }
    }
    
    return true;
};

Array.prototype.myReduce = function(callbackFn, initialValue) {
    if(initialValue != undefined) {
        accumulator = initialValue;
        for(let i = 0; i < this.length; i++) {
            currentValue = this[i];
            accumulator = callbackFn(accumulator, currentValue, i, this);
        }
    } else {
        accumulator = this[0]
        for(let i = 1; i < this.length; i++) {
            currentValue = this[i];
            accumulator = callbackFn(accumulator, currentValue, i, this);
        }
    }

    return accumulator;
};

Array.prototype.myIncludes = function(searchElement, fromIndex = 0) {
    if(fromIndex < 0) {
        fromIndex = this.length + fromIndex;
    }

    if(fromIndex >= this.length || fromIndex < 0) {
        return false;
    }

    for(let i = fromIndex; i < this.length; i++) {
        if(this[i] === searchElement) {
            return true;
        }
    }

    return false;
};

Array.prototype.myIndexOf = function(searchElement, fromIndex = 0) {
    if(fromIndex < 0) {
        fromIndex = this.length + fromIndex;
    }
    if(fromIndex >= this.length || fromIndex < 0) {
        return -1;
    }

    for(let i = fromIndex; i < this.length; i++) {
        if(this[i] === searchElement) {
            return i;
        }
    }
    
    return  -1;
};

Array.prototype.myLastIndexOf = function(searchElement, fromIndex = this.length -1) {
    if(fromIndex < 0) {
        fromIndex = this.length + fromIndex;
    }
    if(fromIndex >= this.length || fromIndex < 0) {
        return -1;
    }

    for(let i = fromIndex; i >= 0; i--) {
        if(this[i] === searchElement) {
            return i;
        }
    }
    
    return  -1;
};

Array.prototype.myPush = function(...args) {
    let arg_i = 0;
    let length =this.length;
    for(let i = length; i < length + args.length; i++) {
        this[i] = args[arg_i];
        arg_i++
    }

    return this.length;
};