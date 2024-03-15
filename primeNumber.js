const checkPrime = (value) => {
  result = 0;

  for (let i = 2; i <= 100; i++) {

    if (value % i == 0) {

      result++;
    }
  }

  if (result == 1) {

    console.log(value, "is prime Number");
  } else {
    console.log(value, "is not prime number");
  }
};
checkPrime(1112);
