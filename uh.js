// no 1 
function cetakFunction(a){

    return `hallo nama saya ` + a

    }
    console.log("soal no 1")
    console.log(cetakFunction( "pajri"))
    
// no 2

function myFunction(a,b){
   
    return hasil = a + b;
}
let a = 20;
let b = 7;
let output = myFunction(a,b);
console.log("soal no 2");
console.log(output);

//soal 3

const hello = () =>{
    return a = "halo semua";

}
let our = hello()
console.log("soal no 3");
console.log(our);

// soal no 4

let obj = {
    nama : "john",
    umur : 20,
    bahasa : "indonesia"
}
console.log("soal no 4");
console.log(obj.bahasa);

//soal no 5
let daftar = ["john doe","laki-laki","baca buku",1992]
let objdaftar = {
    nama : daftar[0],
    gender : daftar [1],
    hobi : daftar[2],
    tahunLahir : daftar[3],


}
console.log("soal no 5")
console.log(objdaftar)

// no 6

let buah = [
    {
nama : "nanas",
warna : "kuning",
adaBiji : "tidak ada biji",
harga : 9000,
    },
    {
        nama : "jeruk",
        warna : "orange",
        adaBiji : "ada",
        harga : 6000,
            
    }, 
    {
        nama : "semangka",     
        warna : "hijau dan merah",
        adaBiji : "ada",
        harga : 10000,
     },
     {
        nama : "pisang",
     warna : "kuning",
     adaBiji : "tidak ada biji",
     harga : 11000,
  },
]
let filterBuah = buah.filter ((buah) => buah.adaBiji === "tidak ada biji");
console.log("soal no 6");


