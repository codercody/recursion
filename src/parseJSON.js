// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {

  if(typeof(json) !== 'string'){
    throw 'Error! Value is not a valid string.';
  } else {
    if(json === 'true') {
        return true;
    } else if(json === 'false'){
        return false;
    } else if(json === 'null'){
        return null;
    } else if( (json[0] === '"' && json[json.length - 1] === '"')||(json[0] === "'" && json[json.length - 1] === "'") ){
        var output = '';
        for(var i = 1; i < json.length - 1; i++){
            output += json[i];
        }
        return output;
    } else if(json[0] === '[' && json[json.length - 1] === ']'){
        var arr = [];
        for(var i = 1; i < json.length - 1; i++){
            arr.push(parseJSON(json[i]));
            i++;
        }
        return arr;
    } else if(json[0] === '{' && json[json.length - 1] === '}'){
        var obj = {};
        var str = '';
        for(var i = 1; i < json.length - 1; i++){
            str += parseJSON[i];
        }
        str = str.split(':');
        return str[0] + ':' + str[1];
    } else {
        throw "SyntaxError";
    }

    
  }

};
