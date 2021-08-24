//nomor 1 user github
const userGithub = fetch(
"https://api.github.com/users/TERIOLARANGAN"
)
.then((response) => response.json())
.then(
(data) => {
console.log(data);

document.getElementById("muncul1").innerHTML += `<table>
<tr>
<th>Gambar</th>
<th>Nama</th>
<th>location</th>
<th>follower</th>
<th>following</th>
</tr>
<tr>
<th> <img src="${data.avatar_url}" /> </th>
<th>${data.name}</th>
<th>${data.location}</th>
<th>${data.bio}</th>
<th>${data.following}</th>
</tr>
</table>`
});

//nomor 2 get bendera
//berbeda dengan biasanya, kita dalam kasus ini akan melakukan async dengan membuat function
//juga agar lebih pendek codingnya  kita akan persiapkan  beberapa variabel diantaranya:
//variabel 1 yaitu variabel untuk mewakili DOM pada file html kita
let bendera = document.getElementById("muncul2");
//variabel 2 yaitu variabel untuk fetch API dari internet
let API = "https://restcountries.eu/rest/v2/all";

//mulai membuat funsi untuk async dan awaite. dan variabel API akan menjadi parameter untuk funsi async yang kita beri nama function getBendera
async function getBendera(API){
//membuat variabel untuk persiapan get data atau mengakses json atau object dari web yang di fetch
let data = await fetch (API, {method: "GET"});
data = await data.json();
console.log(data);

    for (let i=0; i<data.length; i++){
//panggil DOM yang telah kita buatkan variabelnya di atas
bendera.innerHTML += `<table>
<tr>
<th> <img src="${data[i].flag}" /> </th>
<th>${data[i].name}</th>
</tr>
</table>`
    } //penutup for looping
} //penutup function getBendera
getBendera(API)