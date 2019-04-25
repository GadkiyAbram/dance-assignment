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
			//jasmine timer / mock
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
			//jasmine timer / mock
		});
	});

	it("пироп: сразу ноги собираются, руки поднимаются, затем ноги выставляются, руки опускаются", function (done) {

		jasmine.clock().install();

		setTimeout(function() {
			pirop(elf);
		}, 10);

		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		jasmine.clock().tick(30);
		expect(elf.stance).toEqual([1, 1, 1, 1]);
		jasmine.clock().tick(160);
		expect(elf.stance).toEqual([0, 0, 0, 0]);
		done();
		jasmine.clock().uninstall();
	});
});

describe("Протестировать функцию arraysCompare:", function() {
	it("скомбинировать массивы", function() {

		let array = [0, 0, 0, 0];
		let arrays = [[0, 0, 1, 0], [0, 0, 0, 1]];
		let expectedArray = [0, 0, 1, 1];

		expect(arraysCompare(array, arrays)).toEqual(expectedArray);
	});
});