// 1.Obyekt yarat!
let objects = {
    name: "Ceyran",
    surname: "Oruclu",
    age: 17,
};

// 2. Array içində çoxlu obyektler yarat!
// 3. Telebeler obyektində bir neçə telebe əlavə et!
let telebeler = [
    {
        name: "Ceyran",
        surname: "Oruclu",
        hobbies: "Gitar çalmaq",
        mark: 95
    },
    {
        name: "Ramil",
        surname: "Məhərrəmov",
        hobbies: "Piano çalmaq",
        mark: 94
    },
    {
        name: "Əlövsət",
        surname: "Əlövsətov",
        hobbies: "Peçenyə yemək",
        mark: 50
    },
    {
        name: "Niyaməddin",
        surname: "Niyaməddinov",
        hobbies: "Yatmaq",
        mark: 68
    },

];


// 4.Students arrayinin qiymət ortalamasını çıxart!
let sum = 0;
for (let i = 0; i < telebeler.length; i++) {
    sum += telebeler[i].mark;
}
let ortalama = sum / telebeler.length;
console.log("Tələbələrin qiymət ortalaması:", ortalama);


// 5.Qiymeti 90-dan az olan telebeleri Ad ve Soyadi ile birlikde ekrana cixardib onlara xeberdarliq edin!
telebeler.find(telebeler => {
    if (telebeler.mark < 90) {
        console.log(`${telebeler.name} ${telebeler.surname} - ${telebeler.mark} `)
    }
})
