// TASK1
// let birthday = new Date("05-23-2006");
// setInterval(() => {
//     let now = new Date();
//     let between = now - birthday;
//     let year = Math.trunc(between / (1000 * 60 * 60 * 24 * 365));
//     let day = Math.trunc((between / (1000 * 60 * 60 * 24)) % 365);
//     let hour = Math.trunc((between / (1000 * 60 * 60)) % 24);
//     let minute = Math.trunc((between / (1000 * 60)) % 60);
//     let second = Math.trunc(between / 1000) % 60;
//     console.clear();
//     const colors = ['#124076', '#7F9F80', '#F9E897', '#FFC374', '#5F5D9C','#6196A6','#FF407D'];
//     let randomColor = colors[Math.floor(Math.random() * colors.length)];
//     console.log(`%c${year} il ${day} gün ${hour} saat ${minute} dəqiqə ${second} saniyə`, `color: ${randomColor}`);
// }, 1000);



// TASK2
// let telebeler = [
//     {
//         name: "Ceyran",
//         surname: "Oruclu",
//         hobbies: "Gitar çalmaq",
//         mark: 95
//     },
//     {
//         name: "Ramil",
//         surname: "Məhərrəmov",
//         hobbies: "Piano çalmaq",
//         mark: 94
//     },
//     {
//         name: "Əlövsət",
//         surname: "Əlövsətov",
//         hobbies: "Peçenyə yemək",
//         mark: 50
//     },
//     {
//         name: "Niyaməddin",
//         surname: "Niyaməddinov",
//         hobbies: "Yatmaq",
//         mark: 68
//     },
// ];
// let searchName = prompt("Tələbənin adını daxil edin:");
// let ad = telebeler.find(student => student.name.toLowerCase === searchName.toLowerCase);
// if (ad) {
//     console.log("Ad: " + ad.name);
//     console.log("Soyad: " + ad.surname);
//     console.log("Hobilər: " + ad.hobbies);
//     console.log("Qiymət: " + ad.mark);
// } else {
//     console.log("%c" + searchName + " %cadlı tələbə yoxdur!", "color: red;", "");
// }






