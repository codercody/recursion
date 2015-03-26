// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
    var output;
    if(typeof(obj) ==='undefined'){
        return;
    } else if(obj === null){
        return obj + '';
    } else if(typeof(obj) === 'function'){
        return;
    } else if(typeof(obj) === 'number'){
        return obj + '';
    } else if(typeof(obj) === 'boolean'){
        return obj + '';
    } else if(typeof(obj) === 'string'){
        return "\"" + obj + "\"";
    } else if(Array.isArray(obj)){
        output = [];
        _.each(obj, function(item){
            output.push(stringifyJSON(item));
        });
        return "[" + output + "]";
    } else if(typeof(obj) === 'object'){
        output = '';
        _.each(obj, function(value, key){
            var left = stringifyJSON(key);
            var right = stringifyJSON(value);
            if(right !== undefined){
                output = output + left + ":" + right + ",";   
            }
        });
        return "{" + output.slice(0, -1) + "}";
    }
    
};
