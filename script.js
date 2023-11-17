
const d = document.getElementById("timer")
let count = 10
setTimeout(function () {
    d.innerHTML = count;
  count --
    setTimeout(function () {
        d.innerHTML = count;
        count --;
  
      setTimeout(function () {
        d.innerHTML = count;
  count --;
  
        setTimeout(function () {
            d.innerHTML = count;
            count --;
  
          setTimeout(function () {
            d.innerHTML = count;
            count --;
  
            setTimeout(function () {
                d.innerHTML = count;
                count --;
  
              setTimeout(function () {
                d.innerHTML = count;
                count --;
  
                setTimeout(function () {
                    d.innerHTML = count;
                    count --;
  
                  setTimeout(function () {
                    d.innerHTML = count;
                      count --;
  
                    setTimeout(function () {
                        d.innerHTML = count;
                        count --;
  
                      setTimeout(function () {
                        d.innerHTML = 'Happy Independence Day';
                      }, 1000); // 1 second delay for the final operation
                    }, 1000); // 1 second delay for the tenth operation
                  }, 1000); // 1 second delay for the ninth operation
                }, 1000); // 1 second delay for the eighth operation
              }, 1000); // 1 second delay for the seventh operation
            }, 1000); // 1 second delay for the sixth operation
          }, 1000); // 1 second delay for the fifth operation
        }, 1000); // 1 second delay for the fourth operation
      }, 1000); // 1 second delay for the third operation
    }, 1000); // 1 second delay for the second operation
  }, 1000); // 1 second delay for the first operation


  