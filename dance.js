let allElves = ['Амариэ', 'Амдир', 'Амрас', 'Амрод', 'Амрот', 'Анайрэ', 'Ангрод', 'Аргон', 'Аредэль', 'Арвен', 'Аэгнор', 'Белег', 'Воронвэ', 'Галадон', 'Галадриэль', 'Галатиль', 'Галдор из Гаваней', 'Галдор из Гондолина', 'Галион', 'Гвиндор', 'Гилдор Инглорион', 'Гил-Галад (Эрейнион)', 'Гимли', 'Глорфиндел', 'Даэрон', 'Дэнетор', 'Дуилин', 'Идриль', 'Имин', 'Иминиэ', 'Ингвион', 'Ингвэ', 'Инглор', 'Индис', 'Иримэ', 'Карантир', 'Квеннар и-Онотимо', 'Келеборн', 'Келебриан', 'Келебримбор', 'Келегорм', 'Кирдан', 'Куруфин', 'Леголас из Гондолина', 'Леголас из Лихолесья', 'Линдир', 'Лютиэн Тинувиэль', 'Маблунг', 'Маглор', 'Махтан', 'Маэглин', 'Маэдрос', 'Мириэль Сериндэ', 'Митреллас', 'Неллас', 'Нерданэль', 'Нимлот', 'Нимродэль', 'Ольвэ', 'Ородрет', 'Орофер', 'Орофин', 'Пенголод', 'Пенлод', 'Рог', 'Румил из Лориэна', 'Румил из Тириона', 'Салгант', 'Саэрос', 'Тата', 'Татиэ', 'Тингол', 'Трандуил', 'Тургон', 'Феанор', 'Финарфин', 'Финвэ', 'Финдис', 'Финдуилас', 'Финголфин', 'Фингон', 'Финрод Фелагунд', 'Халдир', 'Эарвен', 'Эгалмот', 'Эктелион', 'Элеммакил', 'Эленвэ', 'Элу Тингол (Эльвэ)', 'Эльмо', 'Энелиэ', 'Энель', 'Энердил', 'Элладан и Элрохир', 'Элронд', 'Эльдалотэ', 'Эол', 'Эрестор'];
let allGems = ['Алмаз', 'Хризолит', 'Эвклаз', 'Корунд', 'Рубин', 'Сапфир', 'Тааффеит', 'Берилл', 'Аквамарин', 'Изумруд', 'Гелиодор', 'Морганит', 'Хризоберилл', 'Александрит', 'Шпинель', 'Гранаты', 'Демантоид', 'Цаворит', 'Спессартин', 'Пироп', 'Родолит', 'Альмандин', 'Кварц', 'Аметист', 'Цитрин', 'Горный хрусталь', 'Дымчатый кварц', 'Празиолит', 'Аметрин', 'Розовый кварц', 'Турмалин', 'Верделит', 'Индиголит', 'Параиба', 'Опал благородный', 'Опал огненный', 'Топаз', 'Танзанит', 'Циркон', 'Гиацинт', 'Андалузит'];


// здесь реализуйте фигуры, команды

// Движение - это функция, которая принимает в качестве аргумента эльфа
// а возвращает Promise, который будет выполнен тогда, когда эльф выполнит
// указанное движение. Успешно выполненное движение должно зарезолвится снова
// в этого же эльфа с обновленной пастурой.

// let elvesPromises = new Array();
// elvesPromises.push(
//     leftHandUp(elf),
//     leftHandDown(elf),
//     rightHandUp(elf),
//     rightHandDown(elf),
//     leftLegIn(elf),
//     leftLegOut(elf),
//     rightLegIn(elf),
//     rightLegOut(elf),
//     bothHandsUp(elf),
//     bothHandsDown(elf),
//     bothLegsIn(elf),
//     bothLegsOut(elf)
// );

function leftHandUp(elf) {
    return new Promise((resolve) => {
        setTimeout(() => {
            elf.stance = [1, elf.stance[1], elf.stance[2], elf.stance[3]];
            resolve(elf);
        }, elf.danceSpeed);
    });
}

function leftHandDown(elf) {
    return new Promise((resolve) => {
        setTimeout(() => {
            elf.stance = [0, elf.stance[1], elf.stance[2], elf.stance[3]];
            resolve(elf);
        }, elf.danceSpeed);
    });
}

function rightHandUp(elf) {
    return new Promise((resolve) => {
        setTimeout(() => {
            elf.stance = [elf.stance[0], 1, elf.stance[2], elf.stance[3]];
            resolve(elf);
        }, elf.danceSpeed);
    });
}

function rightHandDown(elf) {
    return new Promise((resolve) => {
        setTimeout(() => {
            elf.stance = [elf.stance[0], 0, elf.stance[2], elf.stance[3]];
            resolve(elf);
        }, elf.danceSpeed);
    });
}

function leftHandUpLeftLegIn(elf){
    let initialStance = elf.stance;
    let finalStance = elf.stance;

    return Promise.all([leftHandUp(elf), leftLegIn(elf)]).then(values => {
        values.forEach((elf) => {
            for (let i = 0; i < elf.stance.length; i++) {
                if (elf.stance[i] != initialStance[i]) {
                    finalStance[i] = elf.stance[i];
                }
            }
        });
        elf.stance = finalStance;
        return elf;
    });
}

function bothHandsDown(elf) {
    let initialStance = elf.stance;
    let finalStance = elf.stance;

    return Promise.all([leftHandDown(elf), rightHandDown(elf)]).then(values => {
        values.forEach((elf) => {
            for (let i = 0; i < elf.stance.length; i++) {
                if (elf.stance[i] != initialStance[i]) {
                    finalStance[i] = elf.stance[i];
                }
            }
        });
        elf.stance = finalStance;
        return elf;
    });
}

function bothHandsUp(elf) {
    let initialStance = elf.stance;
    let finalStance = elf.stance;

    return Promise.all([leftHandUp(elf), rightHandUp(elf)]).then(values => {
        values.forEach((elf) => {
            for (let i = 0; i < elf.stance.length; i++) {
                if (elf.stance[i] != initialStance[i]) {
                    finalStance[i] = elf.stance[i];
                }
            }
        });
        elf.stance = finalStance;
        return elf;
    });
}

function leftLegIn(elf){
    return new Promise((resolve => {
        setTimeout(() => {
            elf.stance = [elf.stance[0], elf.stance[1], 1, elf.stance[3]];
            resolve(elf);
        }, elf.danceSpeed);
    }));
}

function leftLegOut(elf){
    return new Promise((resolve => {
        setTimeout(() => {
            elf.stance = [elf.stance[0], elf.stance[1], 0, elf.stance[3]];
            resolve(elf);
        }, elf.danceSpeed);
    }));
}

function rightLegIn(elf){
    return new Promise((resolve => {
        setTimeout(() => {
            elf.stance = [elf.stance[0], elf.stance[1], elf.stance[2], 1];
            resolve(elf);
        }, elf.danceSpeed);
    }));
}

function rightLegOut(elf){
    return new Promise((resolve => {
        setTimeout(() => {
            elf.stance = [elf.stance[0], elf.stance[1], elf.stance[2], 0];
            resolve(elf);
        }, elf.danceSpeed);
    }));
}

function bothLegsOut(elf) {
    let initialStance = elf.stance;
    let finalStance = elf.stance;

    return Promise.all([leftLegOut(elf), rightLegOut(elf)]).then(values => {
        values.forEach((elf) => {
            for (let i = 0; i < elf.stance.length; i++){
                if (elf.stance[i] != initialStance[i]){
                    finalStance[i] = elf.stance[i];
                }
            }
        });
        elf.stance = finalStance;
        return elf;
    })
}

function bothLegsIn(elf) {
    let initialStance = elf.stance;
    let finalStance = elf.stance;

    return Promise.all([leftLegIn(elf), rightLegIn(elf)]).then(values => {
        values.forEach((elf) => {
            for (let i = 0; i < elf.stance.length; i++){
                if (elf.stance[i] != initialStance[i]){
                    finalStance[i] = elf.stance[i];
                }
            }
        });
        elf.stance = finalStance;
        return elf;
    });
}

function rightHandDownLeftLegOutLeftHandUp(elf){
    let initialStance = elf.stance;
    let finalStance = elf.stance;

    return Promise.all([rightHandDown(elf), leftLegOut(elf), leftHandUp(elf)]).then(values => {
        values.forEach((elf) => {
            for (let i = 0; i < elf.stance.length; i++){
                if (elf.stance[i] != initialStance[i]){
                    finalStance[i] = elf.stance[i];
                }
            }
        });
        elf.stance = finalStance;
        return elf;
    });
}

//EXTRA
function arraysCompare(array, arrays){
    let resultArr = [0, 0, 0, 0];
    arrays.forEach((arr) => {                        //[0, 0, 1, 0]  finArray

        for (let i = 0; i < arr.length; i++) {       //[0, 0, 1, 0]  arr1

            if (arr[i] != array[i]) {                //[0, 0, 0, 1]  arr2
                resultArr[i] = arr[i];               //[0, 0, 0, 0]  array
            }
        }
    })
    return resultArr;
}

function citrin(elf) {
    return new Promise((resolve => {
        setTimeout(() => {
            bothHandsUp(elf).then(bothHandsDown).then(() => {
                bothHandsUp(elf).then(bothHandsDown);
            });
            resolve(elf);
        }, elf.danceSpeed);
    }));
}

function ametist(elf) {
    return new Promise((resolve => {
        setTimeout(() => {
            leftHandUp(elf).then(rightHandUp).
            then(leftHandDown).then(rightHandDown).
            then(rightHandDown);
            resolve(elf);
        }, elf.danceSpeed);

    }));
}

function quartz(elf) {
    return new Promise((resolve => {
        setTimeout(() => {
            leftLegIn(elf);
            rightLegIn(elf).then(() => {
                leftLegOut(elf);
                rightLegOut(elf);
            });
            resolve(elf);
        }, elf.danceSpeed);
    }));
}

function almandin(elf) {
    elf.stance = [elf.stance[0], elf.stance[1], 1, elf.stance[3]];
    return new Promise((resolve => {
        setTimeout(() => {
            leftHandUp(elf);
            leftLegOut(elf);
            resolve(elf);
        }, elf.danceSpeed);
    }));
}

function rodolit(elf) {
    elf.stance = [0, 0, 0, 1];
    return new Promise((resolve => {
        setTimeout(() => {
            rightHandUp(elf);
            rightLegOut(elf);
            resolve(elf);
        }, elf.danceSpeed);
    }));
}

function pirop(elf) {

    let initialStance = elf.stance;
    let finalStance = elf.stance;
    let finalfinalStance = elf.stance;

    return new Promise((resolve => {
        setTimeout(() => {
            return Promise.all([bothLegsIn(elf), bothHandsUp(elf)])
                .then((data) => {
                    data.forEach((elf) => {
                        for (let i = 0; i < elf.stance.length; i++){
                            if (elf.stance[i] != initialStance[i]){
                                finalStance[i] = elf.stance[i];
                            }
                        }
                        elf.stance = finalStance;
                        console.log("finalStance: " + finalStance);
                    });
                }).then(() => {
                    return Promise.all([bothLegsOut(elf), bothHandsDown(elf)])
                        .then((data) => {
                            data.forEach((elf) => {
                                for (let i = 0; i < elf.stance.length; i++){
                                    if (elf.stance[i] != finalStance[i]){
                                        finalfinalStance[i] = elf.stance[i];
                                    }
                                }
                                elf.stance = finalfinalStance;
                                console.log("finalfinalStance: " + finalfinalStance);
                                resolve(elf);
                                // return elf;
                            });
                        })
                });
            // resolve(elf);
        }, elf.danceSpeed);
    }));
}

// function pirop(elf) {
//     return new Promise((resolve => {
//         setTimeout(() => {
//             bothLegsIn(elf);
//             bothHandsUp(elf).then(() => {
//                 bothLegsOut(elf);
//                 bothHandsDown(elf);
//             });
//             resolve(elf);
//         }, elf.danceSpeed);
//     }));
// }

// function pirop(elf) {
//     return new Promise((resolve => {
//         setTimeout(() => {
//             return Promise.all([bothLegsIn(elf), bothHandsUp(elf)])
//                 .then(() => {
//                     return Promise.all([bothLegsOut(elf), bothHandsDown(elf)]);
//                     resolve(elf);
//                 });
//             resolve(elf);
//         }, elf.danceSpeed);
//     }));
// }

function spessartin(elf) {
    elf.stance = [0, 0, 1, 1];
    return new Promise((resolve => {
        setTimeout(() => {
            leftLegOut(elf).then(() => {            //0
                leftHandUp(elf).then(() => {        //1
                    rightHandUp(elf).then(() => {   //1
                        rightLegOut(elf);                     //0
                    });
                });
            });
            resolve(elf);
        }, elf.danceSpeed);
    }))
}

function startPosition(elf) {
    return new Promise((resolve => {
        setTimeout(() => {
            elf.stance = [0, 0, 0, 0];
            resolve(elf);
        }, elf.danceSpeed);
    }));
}

function endPosition(elf) {
    elf.stance = [1, 1, elf.stance[2], elf.stance[3]];
    return new Promise((resolve => {
        setTimeout(() => {
            bothHandsDown(elf);
            bothLegsOut(elf);
            resolve(elf);
        }, elf.danceSpeed);
    }));
}

function defaultMoves(elf) {
    startPosition(elf);
    return new Promise((resolve => {
        setTimeout(() => {
            leftHandUp(elf).then(leftHandDown);
            resolve(elf);
        }, elf.danceSpeed);
    }));
}

function cirkon(elf) {
    return new Promise((resolve => {
        setTimeout(() => {
            resolve(elf);
        }, dance[0]);
    }));
}

function tanzanit(elf) {
    return new Promise((resolve => {
        setTimeout(() => {
            elf.danceSpeed = elf.danceSpeed / 2;
            resolve(elf);
        }, elf.danceSpeed);
    }));
}

function topaz(elf) {
    return new Promise((resolve => {
        setTimeout(() => {
            elf.danceSpeed = elf.danceSpeed * 2;
            resolve(elf);
        }, elf.danceSpeed);
    }));
}

function oneByOneRightHandUp(elf) {
    var promise = Promise.resolve(elf);
    elves.forEach(elf => {
        promise = promise.then(() => rightHandUp(elf));
    });
    return promise;
}

function oneByOneLeftHandUp(elf) {
    var promise = Promise.resolve(elf);
    elves.forEach(elf => {
        promise = promise.then(() => leftHandUp(elf));
    });
    return promise;
}

function verdelit(elf) {
    return new Promise((resolve => {
        setTimeout(() => {
            rightLegIn(elf).then(() => {
                rightHandDown(elf).then(() => {
                    leftHandDown(elf).then(() => {
                        leftLegIn(elf);
                    });
                });
            });
            resolve(elf);
        }, elf.danceSpeed);
    }))
}

function taaffeit(elf) {
    return new Promise((resolve => {
        setTimeout(() => {
            leftHandDown(elf).then(leftLegIn);
            resolve(elf);
        }, elf.danceSpeed);
    }))
}

function sapfir(elf) {
    return new Promise((resolve => {
        setTimeout(() => {
            rightHandDown(elf).then(rightLegIn);
            resolve(elf);
        }, elf.danceSpeed);
    }))
}

// Эта функция принимает в качестве аргумента эльфа и драгоценность, которая
// сейчас демонстрируется всем эльфам. Здесь нужно дать команду эльфу выполнить
// какую-то фигуру или команду и вернуть Promise

function displayGemToElf(elf, gem) {
    // if (gem == elf.favouriteGems[elf.favouriteGems.indexOf(gem)]){
    //     return bothHandsUp(elf);
    // }
    // if (gem == elf.dislikedGems[elf.dislikedGems.indexOf(gem)]){
    //     return bothHandsDown(elf);
    // }
    switch (gem) {
        case elf.favouriteGems[elf.favouriteGems.indexOf(gem)]:
            return bothHandsUp(elf);
        case elf.dislikedGems[elf.dislikedGems.indexOf(gem)]:
            return bothHandsDown(elf);
        case "Танзанит":
            return tanzanit(elf);
        case "Шпинель":
            return oneByOneLeftHandUp(elf).then(() => {
            }).then(() => oneByOneRightHandUp(elf)).then(() => bothHandsDown(elf));
        // .then(() => defaultMoves(elf));
        case "Тааффеит":
            return taaffeit(elf);
        case "Сапфир":
            return sapfir(elf);
        case "Топаз":
            return topaz(elf);
        case "Циркон":
            return cirkon(elf);
        case "Андалузит":
            return startPosition(elf);
        case "Аметист":
            return ametist(elf);
        case "Цитрин":
            return citrin(elf);
        case "Кварц":
            return quartz(elf);
        case "Альмандин":
            return almandin(elf);
        case "Родолит":
            return rodolit(elf);
        case "Пироп":
            return pirop(elf);
        case "Спессартин":
            return spessartin(elf);
        case "Верделит":
            return verdelit(elf);
        case "Гиацинт":
            // return;
            return endPosition(elf);
        default:
            startPosition(elf);
            return defaultMoves(elf);
    }
}


// Эта функция принимает в качестве аргумента танец всех эльфов - массив их Promis'ов,
// и драгоценность, которая сейчас демонстрируется всем эльфам.
// Возвращает также танец всех эльфов - массив их Promis'ов
function continueDance(elvesPromises, gem) {
    switch (gem){
        case "Параиба":
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(elf);
                }, elf.danceSpeed);
            });
        default:
            return elvesPromises.map((elfPromise) => {
                return elfPromise.then(elf => {
                    return displayGemToElf(elf, gem)
                })
            })
    }
}