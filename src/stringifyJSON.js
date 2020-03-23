// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';
  if(typeof obj === 'string'){
    result += '"' + obj + '"';
  } else if (typeof obj === 'boolean' || typeof obj === 'number'){
    result += obj.toString();
  } else if (obj === null){
    result += 'null';
  } else if (typeof obj === 'function' || typeof obj === 'undefined'){
    console.log('function or undefined');
  } else if (Array.isArray(obj)){
    result += '[';
    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]);
      if (i < obj.length - 1) result += ',';
    }
    result += ']';
  } else {
    result += '{';
    for (var key in obj) {
      // console.log('key', typeof key);
      // console.log('value', typeof obj[key])
      if (typeof obj[key] === 'function'){
        break;
      } else {
      result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    if (result.length > 1) result = result.substring(0, result.length - 1);
    result += '}';
  }
  return result;
};


// var helper = function(ele){
  //   if (Array.isArray(ele)){
  //     if(ele.length === 0){
  //       result += "[]";
  //     } else {
  //       for (var i = 0; i < ele.length; i++){
  //         if (i === 0){
  //           result += '['
  //         }
  //         result += helper(ele[i]);
  //         if (i !== ele.length -1){
  //           result += ','
  //         }
  //         if (i === ele.length -1){
  //           result += ']';
  //         }
  //       }
  //     }
  //   } else if (typeof ele === 'string'){
  //     result += '"' + ele + '"';
  //   } else if (typeof ele === 'number'){
  //     return result += ele;
  //   } else if(typeof ele === 'boolean'){
  //     result += ele;
  //   } else if (ele === null){
  //     result += "null";
  //   } else if (typeof ele === 'function' || ele === undefined){
  //     return undefined;
  //   } else {
  //     result += "{" + helper(ele) + "}";
  //   }
  // };
  // helper(obj);