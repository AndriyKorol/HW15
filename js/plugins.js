const id = 1;
const http = new Http();
const httpNew = new HttpNew();

// http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// fetch
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then(res => res.json())
//   .then(data => console.log(data));
//

httpNew.get("https://jsonplaceholder.typicode.com/users/1")
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });


httpNew.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'foo',
  body: 'bar',
  userId: 1
})
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });



// Получаем пост по id
// http.get(`https://jsonplaceholder.typicode.com/posts/${id}`, function (err, res) {
//   const response = JSON.parse(res);
//   console.log(res);
//   // Получаем пользователя по id
//   http.get(`https://jsonplaceholder.typicode.com/users/${response["userId"]}`, function (err, res) {
//     console.log(res);
//   });
// });

// const promise = new Promise(function(resolve, reject) {
//   const num = Math.floor(Math.random() * 10);
//
//   if (num >= 5) {
//     resolve(num);
//   } else {
//     reject("Error: num less 5: " + num);
//   }
// });
//
// const promise2 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("promise2")
//   }, 2000);
// });
//
//
// function promise3(value) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("promise3: " + value);
//     }, 2000);
//   })
// }
//
//
// Promise.all([
//   promise,
//   promise2,
//   promise3()
// ])
//   .then(function (data) {
//     let resultPromise1 = data[0];
//     let resultPromise2 = data[1];
//     let resultPromise3 = data[2];
//
//     console.log(resultPromise1, resultPromise2, resultPromise3);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// promise
//   .then(data => promise2)
//   .then(updatedData => promise3(updatedData))
//   .then(promise3Value => {
//     console.log(promise3Value);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });



// promise
//   .then(function (data) {
//     console.log("promise result: " + data);
//     return promise2;
//   })
//   .then(function (updatedData) {
//     console.log("then #2", updatedData);
//     return promise3(updatedData);
//   })
//   .then(function (promise3Value) {
//     console.log(promise3Value);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });




























