// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  console.log('JSON.parse(json):');
  console.log(JSON.parse(json));

  var counter = 0;
  var end = json.length;
  var result;

  var helper = function(str) {
    var char = str[counter];
    if (counter < end) {
      if (char === '[') {
        return arrayBuilder(str);
      } else if (char === '{') {
        return objBuilder(str);
      } else if (char === '"') {
        return stringBuilder(str);
      } else if (char === ' ' || char === ',' || char === ':') {
        counter++;
        return helper(str);
      } else if (char === 'n') {
        char += 4;
        return null;
      } else if (char === 't') {
        char += 4;
        return true;
      } else if (char === 'f') {
        char += 5;
        return false;
      }
    } else {
      return result;
    }
  };

  var arrayBuilder = function(str) {
    var tempArr = [];
    counter++;
    while (str[counter] !== ']') {
      //console.log(helper(str));
      tempArr.push(helper(str));
    }
console.log(tempArr);
    return tempArr;
  };

  var objBuilder = function(str) {
    var tempObj = {};
    //var char = str[counter];
    counter++;
    //console.log(tempObj);
    while (str[counter] !== '}') {
      //console.log(str[counter]);
      var tempKey = helper(str);
      tempObj[tempKey] = helper(str);
    }
    return tempObj;
  };

  var stringBuilder = function(str) {
    var tempStr = '';
    //var char = str[counter];
    counter++;
    while (str[counter] !== '"') {
      tempStr += str[counter];
      counter++;
    }
    counter++;
    return tempStr;
  };


  return helper(json);
  // console.log(result);
  // return result;
};
