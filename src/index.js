module.exports = function check(str, bracketsConfig) {
  let splitArr = str.split('');
  let bool;
  let bracketsConfigLength = bracketsConfig.length;
  for (let j = 0; j < bracketsConfigLength; j++){
    for (let i = 0; i < splitArr.length;){
      if (splitArr[i] == bracketsConfig[j][0] && splitArr[i + 1] == bracketsConfig[j][1]){
        splitArr.splice(i, 2);
        i = 0;
        j = 0;
      }
      else {
        i++;
      }    
    }
  }
  if (splitArr.length == 0 ) {
    bool = true;
  } 
  else {
    bool = false;
  }
  return bool;
}
