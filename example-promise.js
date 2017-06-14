function getTempCallback(location, callback) {
  callback(undefined, 78);
  callback('city not found');
}

getTempCallback('San Francisco', function (err, temp) {
  // Problem: annoying to have to hard code cases everytime
  // Problem: success and error can both be called...
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

// Promises handle these
function getTempPromise(location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject('City not found');
      resolve(79);

    }, 1000);
  });
}

// on the Promise object returned by getTempPromise, we give (success, failure)
// params. These are only called once per promise
getTempPromise('San Francisco').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise failure', err);
});


// Challenge
function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('Invalid number');
    }
  });
}

addPromise(1,2).then(function (sum) {
  console.log('sum is: ', sum);
}, function (err) {
  console.log(err);
})

addPromise(1,'yo').then(function (sum) {
  console.log('sum is:', sum);
}, function (err) {
  console.log(err);
})
