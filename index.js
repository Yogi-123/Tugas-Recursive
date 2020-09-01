// recursive angka faktorial
function factorial (angka) {
    if (angka ==1) {
        return 1;
    } else {
        return angka * factorial (angka -1)
    }

}

console.log(factorial(4)) 

// recursive deret angka genap
// function even (n) {
//     if((n == 0) || (n == 1)) {
//         console.log(0) 
//     } else if(n%2 == 0) {
//          even (n-2)
//          console.log(q)
//     } else {
//         even (n-2)
//          console.log(n-1)
//     }
//  }
function baruGenap (n) {
    if (n == 0) {
        console.log (0)
    } else {
        baruGenap (n-1)
        if (n%2 == 0) {
            console.log(n)
        }
        
    }
}
 
 console.log(baruGenap(5))
   



// recursive function
function fx (n) {
    if (n == 1) {
        return 3;
    } else {
        return fx (n-1)*2
    }
}