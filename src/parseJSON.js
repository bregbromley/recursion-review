// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  console.log('JSON.parse(json): ');
  console.log(JSON.parse(json));

  var counter = 0;
  var end = json.length;
  var result;

  var helper = function(str) {
    var char = json[counter]
    if (counter < end){
      if (char === '[') {
        counter++;
        return arrayBuilder(str);
      } else if (char === '{') {
        counter++;
        return objBuilder(str);
      } else if (char === '"') {
        counter++;
        return stringHelper(str);
      }
    }

  }


  var arrayBuilder = function(str) {
    var tempArr = [];
    while (str[counter] !== ']') {
      tempArr.push(helper(str));
      if (str[counter] === ',') {
        counter += 2;
      }
    }
    return tempArr;
  }

  var objBuilder = function(str) {

  }

  var stringHelper = function(str) {
    var str = '';
    while (str[counter] !== '"') {
      str += str[counter];
      counter++;
    }
    counter++;
    return str;
  }

  helper(json);

  return result;
};
