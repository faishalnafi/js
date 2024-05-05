//Ini adalah program master da dasar belajar javascript
//Dibuat oleh faishalnafi;
//Tahun 2024 05 05;

//let;
let nama = "budi budiman";
console.log(nama);
nama = "ucup surucup"; //repalce data tidak perlu menampilkan tipe variabel
console.log(nama);

//var;
var namadepan = "ucup";
console.log(namadepan);
namadepan = "budi";
console.log(namadepan);

let namafull = "budi";
{
    let namafull = "surucup";
    console.log(namafull); //let tergantung dari scopnya
}
console.log(namafull);

var namatengah = "budiman";
{
    var namatengah = "ucup";
    console.log(namatengah); //var scop global mengambil data terbaru
}
console.log(namatengah);