let gemSpeedShow = 2000;

let dance = [
    [gemSpeedShow, allGems[1]],     //Хризолит
    [gemSpeedShow, allGems[40]],    //Андалузит
    [gemSpeedShow, allGems[19]],    //Пироп
    [gemSpeedShow, allGems[24]],    //Цитрин
    [gemSpeedShow, allGems[14]],    //Шпинель
    [gemSpeedShow, allGems[2]],     //Эвклаз
    [gemSpeedShow, allGems[18]],    //Спессартин
    [gemSpeedShow, allGems[37]],    //Танзанит
    [gemSpeedShow, allGems[20]],    //Родолит
    [gemSpeedShow, allGems[21]],    //Альмандин
    [gemSpeedShow, allGems[6]],     //Тааффеит
    [gemSpeedShow, allGems[5]],     //Сапфир
    [gemSpeedShow, allGems[38]],    //Циркон
    [gemSpeedShow, allGems[18]],    //Спессартин
    [gemSpeedShow, allGems[31]],    //Верделит
    [gemSpeedShow, allGems[39]],    //Гиацинт
    [gemSpeedShow, allGems[19]],    //Пироп
    [gemSpeedShow, allGems[22]],
    [gemSpeedShow, allGems[36]],
    [gemSpeedShow, allGems[0]],     //Алмаз
    [gemSpeedShow, allGems[1]],     //Хризолит
    [gemSpeedShow, allGems[23]],
    [gemSpeedShow, allGems[2]],     //Эвклаз
    [gemSpeedShow, allGems[3]],     //Корунд
    [gemSpeedShow, allGems[4]],     //Рубин
    [gemSpeedShow, allGems[0]],     //Алмаз
    [gemSpeedShow, allGems[1]],     //Хризолит
    [gemSpeedShow, allGems[2]],     //Эвклаз
    [gemSpeedShow, allGems[3]],     //Корунд
    [gemSpeedShow, allGems[4]],     //Рубин
    [gemSpeedShow, allGems[39]],    //Гиацинт
];

// let dance = [
//     [4000, allGems[40]],    //Андалузит
//     [4000, allGems[31]],    //Верделит
//     [4000, allGems[24]],    //Цитрин
//     [4000, allGems[37]],    //Танзанит
//     [4000, allGems[39]],    //Гиацинт
//     [4000, allGems[20]],    //Родолит
//     [4000, allGems[21]],    //Альмандин
//     [4000, allGems[38]],    //Циркон
//     [4000, allGems[18]],    //Спессартин
//     [4000, allGems[31]],    //Верделит
//     [4000, allGems[19]],
//     [4000, allGems[22]],
//     [4000, allGems[36]],
//     [4000, allGems[0]],     //Алмаз
//     [4000, allGems[1]],     //Хризолит
//     [4000, allGems[23]],
//     [4000, allGems[2]],     //Эвклаз
//     [4000, allGems[3]],     //Корунд
//     [4000, allGems[4]],     //Рубин
//     [4000, allGems[0]],
//     [4000, allGems[1]],
//     [4000, allGems[2]],
//     [4000, allGems[3]],
//     [4000, allGems[4]],
// ];

// Это ваша танцевальная группа
let elves = [
    {
        name: allElves[0],
        head: '(·_·)',
        danceSpeed: 200,
        stance: [0, 0, 1, 1],
        favouriteGems: [allGems[0]],        //Алмаз
        dislikedGems: [allGems[1]]          //Хризолит
    },
    {
        name: allElves[1],
        head: '(o_o)',
        danceSpeed: 200,
        stance: [0, 0, 0, 0],
        favouriteGems: [allGems[1], allGems[2]],        //Хризолит, Эвклаз
        dislikedGems: [allGems[0]]                  //Алмаз
    },
    {
        name: allElves[2],
        head: '(o_O)',
        danceSpeed: 200,
        stance: [0, 0, 0, 0],
        favouriteGems: [allGems[1]],        //Хризолит
        dislikedGems: [allGems[0]]          //Алмаз
    },
    {
        name: allElves[3],
        head: '(-_-)',
        danceSpeed: 200,
        stance: [0, 0, 0, 0],
        favouriteGems: [allGems[1]],        //Хризолит
        dislikedGems: [allGems[0]]          //Алмаз
    },
    {
        name: allElves[4],
        head: '(=_=)',
        danceSpeed: 200,
        stance: [0, 0, 0, 0],
        favouriteGems: [allGems[1]],        //Хризолит
        dislikedGems: [allGems[0]]          //Алмаз
    }
    ];

// Эта функция должна вернуть список эльфов для отрисовки
function getElves() {
    return elves;
}

// Эта функция должна вернуть танец для отрисовки
function getDance() {
    return dance;
}