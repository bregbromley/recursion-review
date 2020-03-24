// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  var helper = function(ele){
    if (ele.childNodes.length > 0){
      for (var i = 0; i < ele.childNodes.length; i++){
        helper(ele.childNodes[i]);
      }
    }
    if (ele.classList !== undefined){
      if (ele.classList.contains(className)){
        result.unshift(ele);
      }
    }
  };
  helper(document.body);
  return result;
};


//You should use document.body, element.childNodes, and element.classList