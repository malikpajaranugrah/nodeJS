// Malik Pajar Anugrah_20220040128_TI22I

// example var code
function contohVar() {
    console.log("example var code: ")
    var x = 12;
    if (true) {
      var y = 20;
      console.log(x); // Output: 12
      console.log(y); // Output: 16
    }
    console.log(x); // Output: 12
    console.log(y); // Output: 16
  }
  
  contohVar();
//console.log(x); // Output: Error (x is not defined)

// example let code
function contohLet() {
    console.log("example let code: ")
    let x = 12;
    if (true) {
      let y = 16;
      console.log(x); // Output: 12
      console.log(y); // Output: 16
    }
    console.log(x); // Output: 12
  //console.log(y); // Output: Error (y is not defined)
  }
  
  contohLet();
  

// example cost code
function contohConst() {
    console.log("example cosnt code: ")
    const x = 12;
    if (true) {
      const y = 16;
      console.log(x); // Output: 12
      console.log(y); // Output: 16
    }
    console.log(x); // Output: 12
  //console.log(y); // Output: Error (y is not defined)
  }
  
  contohConst();
  
  
  