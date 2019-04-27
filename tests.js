// jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

describe("Научить эльфа делать простые движения:", function() {
	it("поднять левую руку", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		leftHandUp(elf).then((elf) => {
			expect(elf.stance[0]).toEqual(1);
			done();
		})
	});

	it("опустить левую руку", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		leftHandDown(elf).then((elf) => {
			expect(elf.stance[0]).toEqual(0);
			done();
		})
	})

	it("поднять правую руку", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		rightHandUp(elf).then((elf) => {
			expect(elf.stance[1]).toEqual(1);
			done();
		})
	});

	it("опустить правую руку", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 1, 0, 0],
		}

		rightHandDown(elf).then((elf) => {
			expect(elf.stance[1]).toEqual(0);
			done();
		})
	});

	it("выгнуть левую ногу", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		leftLegIn(elf).then((elf) => {
			expect(elf.stance[2]).toEqual(1);
			done();
		})
	});

	it("вогнуть левую ногу", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		leftLegIn(elf).then((elf) => {
			expect(elf.stance[2]).toEqual(1);
			done();
		})
	})

	it("выгнуть правую ногу", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 1],
		}

		rightLegOut(elf).then((elf) => {
			expect(elf.stance[3]).toEqual(0);
			done();
		})
	});

	it("вогнуть правую ногу", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		rightLegIn(elf).then((elf) => {
			expect(elf.stance[3]).toEqual(1);
			done();
		})
	});
});

describe("Научить эльфа делать чуть менее простые движения:", function() {

	it("поднять обе руки", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		bothHandsUp(elf).then((elf) => {
			expect(elf.stance).toEqual([1, 1, 0, 0]);
			done();
		});
	});

	it("а потом опутить обе руки", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [1, 1, 0, 0],
		}

		bothHandsDown(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		});
	});

	it("вогнуть обе ноги", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		bothLegsIn(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 1, 1]);
			done();
		});
	});

	it("а потом выгнуть обе ноги", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 1, 1],
		}

		bothLegsOut(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		});
	});

	it("а еще поприветствовать левой рукой и вогнуть левую ногу", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		leftHandUpLeftLegIn(elf).then((elf) => {
			expect(elf.stance).toEqual([1, 0, 1, 0]);
			done();
		});
	});

	it("а потом опустить правую руку, выгнуть левую ногу и поднять левую руку", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 1, 1, 0],
		}

		rightHandDownLeftLegOutLeftHandUp(elf).then((elf) => {
			expect(elf.stance).toEqual([1, 0, 0, 0]);
			done();
		});
	});

});

describe("Проверить реакцию эльфа на камни:", function() {

	it("на любимый камень поднять обе руки", function(done) {
		let gem = "Алмаз";
		let elf = {
			favouriteGems: ["Алмаз"],
			dislikedGems: ["Цитрин"],
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		displayGemToElf(elf, gem).then(() => {
			expect(elf.stance).toEqual([1, 1, 0, 0]);
			done();
		});
	});

	it("на нелюбимый камень опустить обе руки", function(done) {

		let gem = "Цитрин";
		let elf = {
			favouriteGems: ["Алмаз"],
			dislikedGems: ["Цитрин"],
			danceSpeed: 10,
			stance: [1, 1, 0, 0],
		}

		displayGemToElf(elf, gem).then(() => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		});
	});

	it("пироп: сразу ноги собираются, руки поднимаются, затем ноги выставляются, руки опускаются", function (done) {

		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		};

		pirop(elf);

		setTimeout(() => {
			expect(elf.stance).toEqual([1, 1, 1, 1]);
		}, 15);

		setTimeout(() => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		}, 30);
	});

	it("аметист: левая рука поднимается, правая рука поднимается, левая рука опускается, правая рука опускается", function (done) {

		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		};

		ametist(elf);

		setTimeout(() => {		//left hand up -> 1, 1
			expect(elf.stance).toEqual([1, 0, 0, 0]);
			console.log(elf.stance);
		}, 22);

		setTimeout(() => {		//right hand up -> 1
			expect(elf.stance).toEqual([1, 1, 0, 0]);
			console.log(elf.stance);
		}, 33);

		setTimeout(() => {		//left hand down -> 0
			expect(elf.stance).toEqual([0, 1, 0, 0]);
			console.log(elf.stance);
		}, 44);

		setTimeout(() => {		//right hand down -> 0
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			console.log(elf.stance);
			done();
		}, 60);
	});

	it("цитрин: обе руки поднимаются вверх, затем опускаются. Повторить два раза", function (done) {

		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 1, 1],
		};

		citrin(elf);

		setTimeout(() => {		//both hands up -> 1, 1
			expect(elf.stance).toEqual([1, 1, 1, 1]);
		}, 26);

		setTimeout(() => {		//both hands down -> 0, 0
			expect(elf.stance).toEqual([0, 0, 1, 1]);
		}, 36);

		setTimeout(() => {		//both hands up -> 1, 1
			expect(elf.stance).toEqual([1, 1, 1, 1]);
		}, 52);

		setTimeout(() => {		//both hands down -> 0, 0
			expect(elf.stance).toEqual([0, 0, 1, 1]);
			done();
		}, 60);
	});

	it("спессартин: вертушка: последовательно левая нога выставляется, левая рука поднимается, правая рука поднимается, правая ногда выставляется", function (done) {

		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 1, 1],
		};

		spessartin(elf);

		setTimeout(() => {		//left leg -> 0
			expect(elf.stance).toEqual([0, 0, 0, 1]);
		}, 25);

		setTimeout(() => {		//left hand -> 1
			expect(elf.stance).toEqual([1, 0, 0, 1]);
		}, 34);

		setTimeout(() => {		//right hand -> 1
			expect(elf.stance).toEqual([1, 1, 0, 1]);
		}, 46);

		setTimeout(() => {		//left leg -> 0
			expect(elf.stance).toEqual([1, 1, 0, 0]);
			done();
		}, 58);
	});

	it("кварц: сразу ноги собираются, затем ноги выставляются", function (done) {

		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		};

		quartz(elf);

		setTimeout(() => {
			expect(elf.stance).toEqual([0, 0, 1, 1]);
			console.log(elf.stance);
		}, 15);

		setTimeout(() => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			console.log(elf.stance);
			done();
		}, 30);
	});

	it("Альмандин: одновременно левая рука поднимается и левая нога выставляется", function (done) {

		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 1, 1],		//[1, 0, 0, 1]
		};

		almandin(elf).then((elf) => {
			expect(elf.stance).toEqual([1, 0, 0, 1]);
			done();
		});

	});
});

describe("Протестировать функцию arraysCompare:", function() {
	it("скомбинировать массивы", function() {

		let array = [0, 0, 0, 0];
		let arrays = [[0, 0, 1, 0], [0, 0, 0, 1]];
		let arr = [0, 0, 0, 0];
		let expectedArray = [0, 0, 1, 1];

		expect(arraysCompare(array, arrays, arr)).toEqual(expectedArray);
	});
});