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
    } 

};
