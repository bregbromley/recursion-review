// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = "";

  var helper = function(ele){
    if (Array.isArray(ele)){
      result += "[" + helper(ele) + "]";
    } else if (typeof ele === 'string'){
      result += '"' + ele + '"';
    } else if (typeof ele === 'number' || typeof ele === 'boolean'){
      result += ele.toString();
    } else if (ele === null){
      result += "null";
    } else if (typeof ele === 'function' || ele === undefined){

    }
  }
  helper(obj);

  return result;
};
