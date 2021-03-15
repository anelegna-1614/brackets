module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
    let i = 0;
    let x = new Boolean (false);
    while (i < bracketsConfig.length) {
        let ind1 = arr.indexOf(bracketsConfig[i][0]);
        let ind2 = arr.indexOf(bracketsConfig[i][1]);
        if ((arr.length % 2 === 1) || ((ind2-ind1)%2 === 0)) {
          x = false;
          break;
        }  else {
          x= true;
          i = i + 1;
        } 
      }return x;
        
        }
        
      
  

