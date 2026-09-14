
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}


// 1. Predict the output.
//output
//3
//3
//3

// 2. Explain why it happens.
//output
//var is function-scoped, not block-scoped. The loop creates only one shared variable


// 3. Fix the code using let.

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100);
}

// 4. Fix it without changing var.

for (var i = 0; i < 3; i++) {
    (function (j) {
        setTimeout(() => {
            console.log(j);
        }, 100);
    })(i);
}