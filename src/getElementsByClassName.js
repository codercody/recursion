// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	var initialelement = document.body;
	var arr = [];
function theDOMElementWalker(element) {
    

    if(_.contains(element.classList, className)) arr.push(element);
 			
        
 
        element = element.firstChild;

        
 
        while (element) {
            theDOMElementWalker(element);
            element = element.nextSibling;
 	      }

    }
    

theDOMElementWalker(initialelement);
return arr;
	
}
