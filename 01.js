// const age = 10;
// const totalPrice = 200;
// const userName = 'Bob';
// const message = 'Hello!';
// const isOpen = true;
// const shoudConfirm = false;

// alert('bbkvjbklnkl');

// console.log(age);
// console.log('5');

// const shouldRenew = confirm('Baybe');
// console.log(shouldRenew);

// let quantity = prompt('Количиство товара');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// let elemetWidth = '50px';
// const result = Number.parseInt(elemetWidth);
// console.log(result);

// console.log(min(0, 10));

// ------------ elce if -----------

// const stars = 6;
// let price;

// if (stars === 1) {
//   price = 20 + `$`;
// } else if (stars === 2) {
//   price = 30 + `$`;
// } else if (stars === 3) {
//   price = 40 + `$`;
// } else if (stars === 4) {
//   price = 70 + `$`;
// } else if (stars === 5) {
//   price = 120 + `$`;
// }
// else {
//   console.log (`Stars is not correct`);
// }
//   console.log(price);

// ------------------ swich ---------------

//  const stars = 6;
// let price;
// switch (stars) {
//   case 1:
//     price = 20 + `$`;
//     break;
//   case 2:
//     price = 30 + `$`;
//     break;
//   case 3:
//     price = 40 + `$`;
//     break;
//    case 4:
//     price = 70 + `$`;
//     break;
//    case 5:
//     price = 120 + `$`;
//     break;
//   default:
//     console.log(`Stars is not correct`);
// }
// console.log(price);

// const stars = 1 ;
// let price;

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20 + `$`;
//     break;
//   case 3:
//   case 4:
//     price = 30 + `$`;
//     break;
//   case 5:
//     price = 120 + `$`;
//     break;
//   default:
//     console.log(`Stars is not correct`);
// }

// console.log(price);

// -------------    Задача --------------

// const option = 4;
// let message ;

// switch (option) {
//   case 1:
//     message = `Заказ можете забрать завтра с 12:00 до 14:00`;
//     break;
//   case 2:
//     message = `Курьер приедет сегодня с 12:00 до 14:00`;
//     break;
//   case 3:
//     message = `Посылка будет отправлена сегодня.`;
//     break;
//   default: message = (`Вам перезвонит менеджер.`);
// }
//     console.log(message);

// ----------- Цикл for ----------
// for (let i = 0; i < 5; i += 1){
//   console.log(i);
// }
//   console.log(`Welcome!`);

// for (let i = 0; i <= 30; i += 3) {
//   console.log(i);
// }
// console.log(`Welcome!`);
// const minSalery = 500;
// const maxSalary = 5000;
// const employees = 4;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1){
//   const salary = Math.round(Math.random)() * (maxSalary - minSalery) + minSalery;
//   console.log (`ЗП работника ${i} - ${salary} + `$`);
// }

// const friends = [`Bob`, `Anna`, `Tim`, `Kate`,];

// console.log(friends);

// console.table(friends);

// const lastIndex = friends.length - 1;

// console.log(lastIndex);

// console.log(friends[1]);

// const playlist = {
//   name: 'Любимый плейлист',
//   tracksCount: 3,
//   tracks: ['Track-1', 'Track-2', 'Track-3'],
//   rating: 5,
// };
// console.log(playlist.name);

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorData = {
//   [inputName]: inputValue,
// }
// console.log(colorData);

// const playlist = {
//   name: "Любимый плейлист",
//   // tracksCount: 3,
//   tracks: ["Track-1", "Track-2", "Track-3"],
//   rating: 5,
//   changeName(newName) {
//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//     // this.tracksCount = this.tracks.length;
//   },
//   changeRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   }
// };
// playlist.changeName("Новое имя");
// playlist.addTrack("Новый трек-1");
// playlist.addTrack("Новый трек-2");
// playlist.changeRating("4.5");

// // console.log(playlist.name);
// console.log(playlist);
// console.log(playlist.getTrackCount());
// console.log(playlist.tracksCount);

// Object.key
// let totalFeedback = 0;

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };
// const keys = Object.keys(feedback);
// console.log(keys);
// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);
// totalFeedback += feedback[key];
// }
// console.log('totalFeedback: ', totalFeedback)

// const values = Object.values(feedback);
// console.log(values);
// for (const value of values) {
//   console.log(value);
//   totalFeedback += value;
// }
//   console.log("totalFeedback: ", totalFeedback);

//      Масив объектов
// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];
// friends[0].ratig = 5;
// friends[2].ratig = 5;

// console.table(friends);

// for (const friend of friends) {
//   console.log(friend);
//   friend.newprop = 555;

// }
//     console.table(friends);

// Ищем Друга По Имени

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];
// console.table(friends);

// const findFriendByName = function (allFriends, friendName) {;
// for (const friend of allFriends) {
//   // console.log(friends);
//   // console.log(friend.name);
//   if (friend.name === friendName) {
//     return "Yes";
//   }
// }
//     return "No!";

// }
// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Ajax"));
// console.log(findFriendByName(friends, "Bob"));

// Найти все name

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
//   { name: "Kate", online: false },
// ];
// console.table(friends);

// const getAllNames = function (allFriends) {
//   const names = [];
//   for (const friend of allFriends) {
//     // console.log(friend);
//     console.log(friend.name);
//     names.push(friend.name);
//   }
//   return names
// };
// console.log(getAllNames(friends));

// Найти всех онлайн

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
//   { name: "Kate", online: true },
// ];
// console.table(friends);

// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];
//   for (const friend of allFriends) {
//     // console.log(friend);
//     console.log(friend.online);

//     if (friend.online) {
//       // onlineFriends.push(friend);
//             onlineFriends.push(friend.name);
//     }
//   }
//   return onlineFriends;
// }
// console.log(getOnlineFriends(friends));

// Найти всех онлайн

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
//   { name: "Kate", online: true },
// ];
// console.table(friends);

// const getOfflineFriends = function (allFriends) {
//   const offlineFriends = [];

//   for (const friend of allFriends) {
//     // console.log(friend);
//     console.log(friend.online);
//     if (!friend.online) {
//       // offlineFriends.push(friend);
//       offlineFriends.push(friend.name);
//     }
//   }
//   return offlineFriends;
// };
// console.log(getOfflineFriends(friends));

// Найти всех онлайн и офлайн

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
//   { name: "Kate", online: true },
// ];
// console.table(friends);

// const getFriendsByOnlineStatus = function (allFriends) {
//   const friendsByStatus = {
//     online: [],
//     offline: [],
//   };

//   for (const friend of allFriends) {
//     if (friend.online) {
//       // friendsByStatus.online.push(friend);
//       friendsByStatus.online.push(friend.name);
//       continue;
//     }

//       // friendsByStatus.offline.push(friend);
//       friendsByStatus.offline.push(friend.name);
//     }

//   return friendsByStatus;
// };
// console.log(getFriendsByOnlineStatus(friends));

// Корзна товаров
// {name: 'apple', price: 50}
// {name: 'banana', price: 70}
// {name: 'kiwi', price: 60}
// {name: 'lemon', price: 110}

// const cart = {
//   items: [],
//   getItems() { },
//   add(product) { },
//   remove(productName) { },
//   clear() { },
//   countTotalPrice() { },
//   increaseQuantity(productName) { },
//   decreaseQuantity(productName) { },
// };
// console.table(cart.getItems());

// cart.add({name: 'apple', price: 50},);
// cart.add({ name: 'banana', price: 70 });
// cart.add({ name: 'kiwi', price: 60 });
// cart.add({ name: 'lemon', price: 110 });

// console.table(cart.getItems());

// Операция spread

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9])

// console.log(numbers);

// const numbers = [...[1, 2, 3],...[4, 5, 6],...[7, 8, 9]];
// console.log(numbers);

// const numbers = [0, 5, 10, ...[1, 2, 3], 4, 5];
// console.log(numbers);

// Поиск самой маленькой или большой температуры

// const temp = [18, 14, 12, 21, 17, 29, 24];
// console.log(Math.max(...temp));
// console.log(Math.min(...temp));

// Сшиваем несколько масивов в один через spread

// const lastWeekTemps = [1, 2, 3];
// const currentWeekTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentWeekTemps,...nextWeekTemps];

// console.log(allTemps);;

// Распыление обьектов
// Object.assign и spread

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };
// const c = { x: 10 };
// // const d = Object.assign({x:5}, a, b, c);
// const d = {...a,x:12,...b,...c,y:15}
// console.log(d)

// Деструктуризация обьекта
// Глубокая деструктуризация

// const playlist = {
//   name: "Любимый плейлист",
//   tracksCount: 3,
//   tracks: ["Track-1", "Track-2", "Track-3"],
//   rating: 5,
// };
// const {
//   name,
//   tracksCount: numberOfTrack,
//   tracks,
//   rating,
//   autor = "Mango",
// } = playlist;

// console.log(name);
// // console.log(tracksCount);
// console.log(tracks);
// console.log(rating);
// console.log(autor);
// console.log(numberOfTrack);

// console.log(playlist.name,
//   playlist.tracksCount,
//   playlist.tracks,
//   playlist.rating);

// const profile = {
//   name: 'Vladlen Danylov',
//   tag: 'vlddan',
//   location: 'Kyiv, Ukraine',
//   avatar: 'http://127.0.0.1:5500/resume/img/20200705_215439.jpg',
//   stats: {
//     folovers: 12345,
//     views: 56789,
//     likes: 98765,
//   },
// };
// const {
//   name,
//   avatar,
//   tag,
//   stats: { folovers, views, likes }
// } = profile;
// // const { folovers, views, likes } = stats;

// console.log(name, tag, avatar, folovers, views, likes);

// Деструктуризация масивов

// const rgb = [255, 100, 80];
// const [a, b, c] = rgb;
// console.log(a, b, c);

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// }
// // const rating = Object.values(authors);
// // console.log(Math.max(...rating));

// const entries = Object.entries(authors);
// console.log(entries);

// for (const entry of entries) {
//   // console.log(entry);
//   // Лучше так
//   const [name, rating] = entry;
// // Чем так
//   // const name = entry[0];
//   // const rating = entry[1];

//   console.log(name, rating);
// }

// Опирация rest (сбор)

// const profile = {
//   name: 'Vladlen Danylov',
//   tag: 'vlddan',
//   locations: 'Kyiv, Ukraine',
//   avatar: 'http://127.0.0.1:5500/resume/img/20200705_215439.jpg',
//   stats: {
//     folovers: 12345,
//     views: 56789,
//     likes: 98765,
//   },
// };
// const { tag, name, locations,...restProps } = profile;
// console.log(tag, name, locations);
// console.log(restProps);

// Паттерн [Обьект настроек]

// const showProfileInfo = function (userProfile) {
//   const {
//     name,
//     tag, avatar,
//     stats: { folovers, views, likes },
//   } = userProfile;

//   console.log(name, tag, avatar, folovers, views, likes);
// };
// const profile = {
//   name: 'Vladlen Danylov',
//   tag: 'vlddan',
//   locations: 'Kyiv, Ukraine',
//   avatar: 'http://127.0.0.1:5500/resume/img/20200705_215439.jpg',
//   stats: {
//     folovers: 12345,
//     views: 56789,
//     likes: 98765,
//   },
// };

// showProfileInfo(profile);

//      Корзна товаров

// {name: 'apple', price: 50}
// {name: 'banana', price: 70}
// {name: 'kiwi', price: 60}
// {name: 'lemon', price: 110}

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//         console.table(this.items);

//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     }
//         this.items.push(newProduct);
//     // this.items.push(product);

//   },

//   remove(productName) {
//     const { items } = this;
//     for (let i = 0; i < items.length; i += 1) {
//       console.log(items[i]);
//       const { name } = items[i];
//       if (productName === name) {
//         console.log("Нашли такой продукт:", productName);
//         console.log("Index:", i);

//         items.splice(i, 1);
//       }

//     }

//   },

//   clear() {
//     this.items = [];
// },
//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;
//     for (const {price, quantity} of items) {
//       total += price * quantity;
//     }
//     return total;

//   },
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "banana", price: 60 });
// cart.add({ name: "kiwi", price: 60 });
// cart.add({ name: "kiwi", price: 60 });
// cart.add({ name: "lemon", price: 110 });
// cart.add({ name: "lemon", price: 110 });
// cart.add({ name: "lemon", price: 110 });

// console.log('Total: ', cart.countTotalPrice());
//         console.table(cart.getItems());

// cart.remove("lemon");
// console.table(cart.getItems());

// cart.clear();
//   console.log(cart.getItems());

// console.log("Total: ",countTotalPrice())

//       Сallback Функции

// const fnA = function (message, callback) {
//   console.log(message);
//   // console.log(callback);
//   callback(100);
// };
// const fnB = function (number) {
//   console.log("Этот лог при вызове fnB", number);

// };
// fnA('qweqwe', fnB)

// Функция doMath (a, b, callback)

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// }
// // const add = function (x, y) {
// //   return x + y;
// // }
// const sub = function (x, y) {
//   return x - y;
// };

// doMath(2, 3, function (x, y) {
//   return x + y;
// });
// doMath(10, 8, sub);

// Отложенный вызов: регистрация событий

// const buttonRef = document.querySelector(`.js-button`);
// const handleButtonClick = function () {
//   console.log('Клик по кнопке' + Date.now());
// }
// buttonRef.addEventListener("click", handleButtonClick);

// Отложенный вызов: геолокация

// const onGetPositionSuccsess = function (position) {
//       console.log("Это вызов onGetPositionSuccsess");
//   console.log(position);

// };
// const onGetPositionErorr = function (erorr) {
//   console.log(erorr);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccsess,
//   onGetPositionErorr
// );

// Отложенный вызов: интервалы

// const callback = function () {
//   console.log("Через 2 сeкунды внутри колбека в таймауте");
// }
//   console.log("В коде перед таймаутом")
// setTimeout(callback, 2000)
//   console.log('В коде после таймаута');

// Фунция фильтр

// const filter = function (array, test) {
//   const filteredArray = [];
//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }
//   return filteredArray;
// }

// 1.Надо передать функцию
// 2.Функция получает елемент массива
// 3.Если елемент массива удовлетворяет функцию, то функция вернет true
// 4.Если елемент массива НЕ удовлетворяет функцию, то функция вернет false

// const callback1 = function (value) {
//   return value >= 3;
// }
// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const callback2 = function (value) {
//   return value <= 4;
// }

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);

// const fruits = [{
//   name: "apples", quantity: 200, isFrash: true},
//   {name: 'grapes', quantity: 150, isFrash: false},
//   {name: 'bananas', quantity: 100, isFrash: true},
// ];

// const getFruitsWithQuatuty = function (fruit) {
//   return fruit.quantity >= 120;
// };

// const r3 = filter(fruits, getFruitsWithQuatuty);
// console.log(r3);

//      Замыкание

// const fnA = function (parametr) {
//   const innerVariable = 'Значение внутренней переменной функции fnA';

//   const innerFunction = function () {
//     console.log(parametr);
//     console.log(innerVariable);
//   console.log("Эта вызов innerFunction");
// }
// return innerFunction;

// };

// const fnB = fnA(555);
// fnB();
// console.log(fnB)

// Поваренек

// const makeDish = function (sheffName, dish) {
//       console.log(`${sheffName} готовит ${dish}`);
// }

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish("Poly", "котлеты");
// makeDish("Poly", "супик");
// makeDish("Poly", "кофе");

// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готовит ${dish}`);
//   };
//   return makeDish;
// };

// const mango = makeSheff("Mango");
// // console.log(mango);

// mango("омлет");
// mango("пирожок");

// const poly = makeSheff("Poly");

// poly("чай");
// poly("супик");

//         REDUSE

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 0)
// console.log(total);

// Считаем общюю сумму

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };
// const totalSalary = Object.values(salary).reduce((acc, value) => acc + value
// , 0);

// console.log(totalSalary);

// Считаем общюю сумму

// const cart = [
//   { label: 'Apples', price: 100, quatity: 2 },
//   { label: 'Bananas', price: 120, quatity: 3 },
//   { label: 'Lemons', price: 70, quatity: 4 },
// ];

// const totalAmount = cart.reduce((total, {price, quatity}) => total + price * quatity
// , 0);
// console.log(totalAmount);

// Собираем все теги из твитов

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);

// console.log(allTags);

// Ведем статистику тегов

// const tagStats = allTags.reduce(
//   (acc, tag) => ({ ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 }),
//   {}
// );
// console.log(tagStats);

//      ДЗ

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];

// const calculateTotalBalance =  users.reduce(
//   (acc, user) => acc + user.balance
//   ,0

// );

// console.log(calculateTotalBalance);

// const getTotalFriendCount =
//   users.reduce((acc, friendsCount) => acc + friendsCount.friends.length, 0);

// console.log(getTotalFriendCount);

//        SORT

// const numbers = [11, 1, 12, 3, 2, 5, 4, 6, 10, 7, 8, 9];
// console.log(numbers);

// По возрастанию

// numbers.sort((currentEl, nextEl) => currentEl - nextEl);
// console.log(numbers);

// По убыванию

// numbers.sort((currentEl, nextEl) => nextEl - currentEl);
// console.log(numbers);

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// console.log(ascendingReleaseDates);

// Как сделать копию масива чтобы не сортировать оригинал

// ascSortedNumbers = [...numbers].sort((currentEl, nextEl) => currentEl - nextEl);
// console.log("ascSortedNumbers", ascSortedNumbers);

// descSortedNumbers = [...numbers].sort((currentEl, nextEl) => nextEl - currentEl);
// console.log("descSortedNumbers", descSortedNumbers);

// Кастомная сортировка сложных типов

// const players = [
//   { id: "player-1", name: "Mango", timePlayd: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayd: 470, online: true },
//   { id: "player-3", name: "Kiwi", timePlayd: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayd: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayd: 80, online: true },
// ];
// По игровому времени

// const sortedByWorstPlayers = [...players].sort(
//   (pervPlayer, nexPlayer) => nexPlayer.timePlayd - pervPlayer.timePlayd
// );
// console.log("sortedByWorstPlayers", sortedByWorstPlayers);

// const sortedByBestPlayers = [...players].sort(
//   (pervPlayer, nexPlayer) => pervPlayer.timePlayd - nexPlayer.timePlayd
// );
// console.log("sortedByBestPlayers", sortedByBestPlayers);

// Сортировка по имени

// const sortedByNamePlayers = [...players].sort(
//   (pervPlayer, nextPlayer) => {
//   const result = pervPlayer.name[0] > nextPlayer.name[0];

//     if (result)
//     { return 1;
//     } if (!result) {
//       return -1;
//     }
// });
// console.log("sortedByNamePlayers", sortedByNamePlayers);

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const alphabeticalAuthors = [...authors].sort((prevAuthor, nextAuthor) => {

//   if (prevAuthor > nextAuthor) {
//     return 1;
//   }
//   if (!prevAuthor > nextAuthor) {
//     return -1;
//   }
// });

// console.log(alphabeticalAuthors);

//           FLAT + MAP

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const tags = tweets.flatMap(t => t.tags);
// console.log(tags);

//      + Статистика

// const tagStats = tags.reduce(
//   (acc, tag) => ({ ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 }),
//   {}
// );
// console.log(tagStats);

//       Цепочка вызовов

// const numbers = [1, 5, 2, 4, 3];

// const sorted = numbers.filter(num => num > 2)
//   .map(num => num * 3)
//   .sort((a, b) => a - b);

// console.log(sorted);

// Сортирум тех кто онлайнпо рангу
// 1.Сначала фильтруем
// 2.Потом сортируем

// const players = [
//   { id: "player-1", name: "Mango", timePlayd: 310, online: false, rank: 800 },
//   { id: "player-2", name: "Poly", timePlayd: 470, online: true, rank: 600 },
//   { id: "player-3", name: "Kiwi", timePlayd: 230, online: true, rank: 100 },
//   { id: "player-4", name: "Ajax", timePlayd: 150, online: false, rank: 400 },
//   { id: "player-5", name: "Chelsey", timePlayd: 80, online: true, rank:500 },
// ];

// const sorted = players.filter(player => player.online)
//   .sort((a, b) => a.rank - b.rank);
// console.log(sorted);

// const a = [5];
// const b = a;

// console.log(a === b);

// ---------- DOM -----------

// ____ querySelector _____

// console.log(document);
// const navRef = document.querySelector('ol');
// console.log(navRef);

// const navItemRef = document.querySelector("li");
// console.log(navItemRef);

// const navItemRef = document.querySelector(".ex-text-item");
// // console.log(navItemRef);

// const navItemsRef = document.querySelectorAll(".ex-text .ex-text-item");
// // console.log(navItemsRef);

// const imegRef = document.querySelector('.photo');
// console.log("imegRef:", imegRef)


fetch("https://now.morsmusic.org/artist/384")
  .then((res) => res.json())
  .then(console.log);