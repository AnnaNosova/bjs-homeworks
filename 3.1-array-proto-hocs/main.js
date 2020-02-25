'use strict'

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    //sleep(500);
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    if(arr1.length != arr2.length) {
        return false;
    }
    else {
        return arr1.every((value, index) => value === arr2[index]);
    }
}


function memorize(fn, limit) {
    let results = [];

    return function() {
      const args = Array.from(arguments);
      console.log(`массив: ${args}`);

      let result = results.find(value => { 
        return compareArrays(value.args, args);
      });

      if (result) {
        console.log(`результат вычислений (взят из архива): ${result.result}`);
        return result.result;
      } else {
        console.log(`вычисляю...`);
        let sum = fn(...args);
        results.push(
        {
            args: args,
            result: sum,
        }); 
        
        if (results.length > limit) {
          results = resuls.slice((results.length - limit));
        }

        console.log(`результат вычислений: ${sum}`);
        return sum;
      }
    }
}

function testCase(variant) {
  const testArr = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];

  console.time("testCase");
  for (let i = 7; i > 0; i--) {
      testArr.forEach(item => variant(...item));
  }
  console.timeEnd("testCase");

}


const mSum = memorize(sum, 3);

testCase(mSum);
//Without sleep(500) - testCase: 20.2119140625ms
//With sleep(500) - testCase: 1523.958984375ms

testCase(sum);
//Without sleep(500) -  testCase: 0.158203125ms
//With sleep(500) - testCase: 17535.8671875ms



//console.log(compareArrays([8, 9], [6])); // false, разные значения
//console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
//console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
//console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
//console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true