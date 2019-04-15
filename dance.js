let allElves = ['Амариэ', 'Амдир', 'Амрас', 'Амрод', 'Амрот', 'Анайрэ', 'Ангрод', 'Аргон', 'Аредэль', 'Арвен', 'Аэгнор', 'Белег', 'Воронвэ', 'Галадон', 'Галадриэль', 'Галатиль', 'Галдор из Гаваней', 'Галдор из Гондолина', 'Галион', 'Гвиндор', 'Гилдор Инглорион', 'Гил-Галад (Эрейнион)', 'Гимли', 'Глорфиндел', 'Даэрон', 'Дэнетор', 'Дуилин', 'Идриль', 'Имин', 'Иминиэ', 'Ингвион', 'Ингвэ', 'Инглор', 'Индис', 'Иримэ', 'Карантир', 'Квеннар и-Онотимо', 'Келеборн', 'Келебриан', 'Келебримбор', 'Келегорм', 'Кирдан', 'Куруфин', 'Леголас из Гондолина', 'Леголас из Лихолесья', 'Линдир', 'Лютиэн Тинувиэль', 'Маблунг', 'Маглор', 'Махтан', 'Маэглин', 'Маэдрос', 'Мириэль Сериндэ', 'Митреллас', 'Неллас', 'Нерданэль', 'Нимлот', 'Нимродэль', 'Ольвэ', 'Ородрет', 'Орофер', 'Орофин', 'Пенголод', 'Пенлод', 'Рог', 'Румил из Лориэна', 'Румил из Тириона', 'Салгант', 'Саэрос', 'Тата', 'Татиэ', 'Тингол', 'Трандуил', 'Тургон', 'Феанор', 'Финарфин', 'Финвэ', 'Финдис', 'Финдуилас', 'Финголфин', 'Фингон', 'Финрод Фелагунд', 'Халдир', 'Эарвен', 'Эгалмот', 'Эктелион', 'Элеммакил', 'Эленвэ', 'Элу Тингол (Эльвэ)', 'Эльмо', 'Энелиэ', 'Энель', 'Энердил', 'Элладан и Элрохир', 'Элронд', 'Эльдалотэ', 'Эол', 'Эрестор'];
let allGems = ['Алмаз', 'Хризолит', 'Эвклаз', 'Корунд', 'Рубин', 'Сапфир', 'Тааффеит', 'Берилл', 'Аквамарин', 'Изумруд', 'Гелиодор', 'Морганит', 'Хризоберилл', 'Александрит', 'Шпинель', 'Гранаты', 'Демантоид', 'Цаворит', 'Спессартин', 'Пироп', 'Родолит', 'Альмандин', 'Кварц', 'Аметист', 'Цитрин', 'Горный хрусталь', 'Дымчатый кварц', 'Празиолит', 'Аметрин', 'Розовый кварц', 'Турмалин', 'Верделит', 'Индиголит', 'Параиба', 'Опал благородный', 'Опал огненный', 'Топаз', 'Танзанит', 'Циркон', 'Гиацинт', 'Андалузит'];


// здесь реализуйте фигуры, команды

// Движение - это функция, которая принимает в качестве аргумента эльфа
// а возвращает Promise, который будет выполнен тогда, когда эльф выполнит
// указанное движение. Успешно выполненное движение должно зарезолвится снова
// в этого же эльфа с обновленной пастурой.

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

function bothHandsDown(elf) {
    return new Promise((resolve => {
        setTimeout(() => {
            leftHandDown(elf);
            rightHandDown(elf);
            resolve(elf);
        }, elf.danceSpeed);
    }));
}

function bothHandsUp(elf) {
    return new Promise((resolve => {
        setTimeout(() => {
            leftHandUp(elf);
            rightHandUp(elf);
            resolve(elf);
        }, elf.danceSpeed);
    }));
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
    return new Promise((resolve => {
        setTimeout(() => {
            leftLegOut(elf);
            rightLegOut(elf);
            resolve(elf);
        }, elf.danceSpeed);
    }));
}

function bothLegsIn(elf) {
    return new Promise((resolve => {
        setTimeout(() => {
            leftLegIn(elf);
            rightLegIn(elf);
            resolve(elf);
        }, elf.danceSpeed);
    }));
}

function showCitrin(elf) {
    return new Promise((resolve => {
        setTimeout(() => {
            bothHandsUp(elf).then(bothHandsDown).then(() => {
                bothHandsUp(elf).then(bothHandsDown);
            });
            resolve(elf);
        }, elf.danceSpeed);
    }));
}

function showAmetist(elf) {
    return new Promise((resolve => {
        setTimeout(() => {
            leftHandUp(elf).then(rightHandUp).
            then(leftHandDown).then(rightHandDown).
            then(rightHandDown);
            resolve(elf);
        }, elf.danceSpeed);

    }));
}

function showQuartz(elf) {
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

function showAlmandin(elf) {
    if (elf.stance[2] != 1){
        elf.stance[2] = 1;
    }
    if (elf.stance[0] != 0){
        elf.stance[0] = 0;
    }
    return new Promise((resolve => {
        setTimeout(() => {
            leftHandUp(elf);
            leftLegOut(elf);
            resolve(elf);
        }, elf.danceSpeed);
    }));
}

function showRodolit(elf) {
    elf.stance = [0, 0, 0, 1];
    return new Promise((resolve => {
        setTimeout(() => {
            rightHandUp(elf);
            rightLegOut(elf);
            resolve(elf);
        }, elf.danceSpeed);
    }));
}

function showPirop(elf) {
    elf.stance = [0, 0, 0, 0];
    return new Promise((resolve => {
        setTimeout(() => {
            leftLegIn(elf);
            rightLegIn(elf);
            leftHandUp((elf));
            rightHandUp(elf).then(() => {
                leftLegOut(elf);
                rightLegOut(elf);
                leftHandDown(elf);
                rightHandDown(elf);
            });
            resolve(elf);
        }, elf.danceSpeed);
    }));
}

function showSpessartin(elf) {
    elf.stance = [0, 0, 1, 1];
    return new Promise((resolve => {
        setTimeout(() => {
            leftLegOut(elf).then(() => {
                leftHandUp(elf).then(() => {
                    rightHandUp(elf).then(() => {
                        rightLegOut(elf);
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
    }))
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

function dickDefault(elf) {
    return new Promise((resolve => {
        setTimeout(() => {
            elf.stance = [elf.stance[0], elf.stance[1], elf.stance[2], elf.stance[3], 0];
            resolve(elf);
        }, elf.danceSpeed);
    }));
}

function dickRight(elf) {
    return new Promise((resolve => {
        setTimeout(() => {
            elf.stance = [elf.stance[0], elf.stance[1], elf.stance[2], elf.stance[3], 2];
            resolve(elf);
        }, elf.danceSpeed);
    }));
}

function dickLeft(elf) {
    return new Promise((resolve => {
        setTimeout(() => {
            elf.stance = [elf.stance[0], elf.stance[1], elf.stance[2], elf.stance[3], 1];
            resolve(elf);
        }, elf.danceSpeed);
    }));
}

function dickMoves(elf) {
    return new Promise((resolve => {
        setTimeout(() => {
            dickLeft(elf).then(() => {
                dickRight(elf).then(() => {
                    dickDefault(elf);
                });
            });
            resolve(elf);
        }, elf.danceSpeed);
    }));
}




// Эта функция принимает в качестве аргумента эльфа и драгоценность, которая
// сейчас демонстрируется всем эльфам. Здесь нужно дать команду эльфу выполнить
// какую-то фигуру или команду и вернуть Promise
function displayGemToElf(elf, gem) {
    switch (gem) {
        case elf.favouriteGems[elf.favouriteGems.indexOf(gem)]:
            return bothHandsUp(elf);
        case "Андалузит":
            return startPosition(elf);
            // break;
        case "Аметист":
            return showAmetist(elf);
            // break;
        case "Цитрин":
            return showCitrin(elf);
            // break;
        case "Кварц":
            return showQuartz(elf);
            // break;
        case "Альмандин":
            return showAlmandin(elf);
            // break;
        case "Родолит":
            return showRodolit(elf);
            // break;
        case "Пироп":
            return showPirop(elf);
            // break;
        case "Спессартин":
            return showSpessartin(elf);
            // break;
        default:
            startPosition(elf);
            return dickMoves(elf);
            //break;
    }
}


// Эта функция принимает в качестве аргумента танец всех эльфов - массив их Promis'ов,
// и драгоценность, которая сейчас демонстрируется всем эльфам.
// Возвращает также танец всех эльфов - массив их Promis'ов
function continueDance(elvesPromises, gem) {
    return elvesPromises.map((elfPromise) => {
        return elfPromise.then(elf => {
            return displayGemToElf(elf, gem)
        })
    })
}
