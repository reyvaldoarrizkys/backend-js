// TODO 9: Import semua method dari FruitController dengan Object Destructuring
const { index, store, update, destroy } = require('./controller/FruitController');

// NOTES: Fungsi main tidak perlu diubah
const main = () => {
  index();
  store('Pisang');
  update(0, 'Kelapa');
  destroy(0);
};

// Jalankan Program: nodejs app.js
main();