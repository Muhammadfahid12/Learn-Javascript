//there are different types of error in js
//syntax error,type error,runtime error,logical error

// Catch & Return
// When an error is thrown, it stops execution and returns 
// execution to the line where the error is caught.
//if a value may be undefined,null,then we write it 'try & catch ' method  
//  try{
//     return getvalue()
//  }
//  catch(error){
//     console.log('Message=',error.message)
//     console.log('Description=',error.description)
//     console.log("Stack Trace=",error.stack)
//  }
// finally{
//     console.log("This is guaranteed to be executed")
//}
//Syntax Errors

//try/catch/finally can catch execptions but not syntax errors

//Throw am exception

function getMarks(num1, num2) {
    try {
        if (num1 + num2===100) {
            throw {
                error: "low marks",
                message: 'You are failed',
            }

        }
        else if (num1_num2>100) {
            console.log('You have passed exam successfully')

        }
    } catch (e) {
        console.log('error=', e.message)
        console.log('StackTrace=', e.stack)

    }

}
getMarks(75,25)