describe("Научить эльфа делать простые движения руками:", function() {
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

	it("поднять обе руки", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		// bothHandsUp(elf).then((elf) => {
		// 	expect(elf.stance).toEqual([1, 1, 0, 0]);
		// 	done();
		// });

		bothHandsUp(elf).then((elf) => {
			leftHandUp(elf).then((elf) => {
				expect(elf.stance[0]).toEqual(1);
				expect(elf.stance[1]).toEqual(1);
				done();
			})
		});

		// leftHandUp(elf).then(rightHandUp).then((elf) => {
		// 	expect(elf.stance[0]).toEqual(1);
		// 	expect(elf.stance[1]).toEqual(1);
		// 	done();
		// });
	});
});

describe("Научить эльфа делать простые движения ногами:", function() {
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
});

describe("Проверить реакцию эльфа на камни:", function() {
	it("увидев любимый камень, поднять обе руки", function(done) {
		let gem = "Алмаз";
		let elf = {
			favouriteGems: ["Алмаз"],
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		displayGemToElf(elf, gem).then(() => {
			expect(elf.stance).toEqual([1, 1, 0, 0]);
			done();
			//jasmine timer / mock
		});
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