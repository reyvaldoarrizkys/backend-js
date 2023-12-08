// TODO 3: Import fruits dari data/fruits.js
const fruits = require('../models/fruits');

// TODO 4: Refaktorisasi variabel ke ES6 variable

// TODO 5: Buat method index
const index = () => {
    console.log('Method index - Menampilkan Buah');
    fruits.forEach((fruit) => {
        console.log(fruit);
    });
};

// TODO 6: Buat method store
const store = (name) => {
    console.log(`Method Store - Menambahkan buah ${name}`);
    fruits.push(name);
    fruits.forEach((fruit) => {
        console.log(fruit);
    });
};

// TODO 7: Buat method update
const update = (position, name) => {
    console.log(`Method Update - Update data ${position} Menjadi ${name}`);
    if (fruits[position]) {
        fruits[position] = name;
        fruits.forEach((fruit) => {
            console.log(fruit);
        });
    } else {
        console.log('Posisi tidak valid');
    }
};

// TODO 8: Buat method destroy
const destroy = (position) => {
    console.log(`Method Destroy - Menghapus Data ${position}`);
    if (fruits[position]) {
        fruits.splice(position, 1);
        fruits.forEach((fruit) => {
            console.log(fruit);
        });
    } else {
        console.log('Posisi tidak valid');
    }
};

// TODO 9: Ekspor semua method menggunakan CommonJS
module.exports = { index, store, update, destroy };