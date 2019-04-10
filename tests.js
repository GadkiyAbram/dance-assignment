describe("Научить эльфа делать простые движения", function() {
	it("поднять стакан левой рукой", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		leftHandUp(elf).then((elf) => {
			expect(elf.stance[0]).toEqual(1);
			done();
		})
	});

	it("аккуратно опустить левую руку со стаканом", function (done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		leftHandDown(elf).then((elf) => {

			expect(elf.stance[0]).toEqual(0);
			done();
		})
	})

	it("поднять закуску правой рукой", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		rightHandUp(elf).then((elf) => {
			expect(elf.stance[1]).toEqual(1);
			done();
		})
	});

	it("поднять левую руку и согнуть левую ногу", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		leftHandUpleftLegIn(elf).then((elf) => {
			expect(elf.stance[1]).toEqual(1);
			expect(elf.stance[2]).toEqual(1);
			done();
		})
	});

});

describe("увидя Цитрин, повторить два раза драйв: обе руки поднимают стаканы вверх, затем опускают", function () {
	let elf = {
		danceSpeed: 10,
		stance: [0, 0, 0, 0],
	}
	let gem = allGems.indexOf("Цитрин");

	it("поднять обе руки вверх и опустить x1 раз", function (done) {

		showCitrin(elf, gem).then((elf) => {
			expect(elf.stance[0]).toEqual(1);
			expect(elf.stance[1]).toEqual(1);
			done();
		})
		bothHandsDown(elf).then((elf) => {
			expect(elf.stance[0]).toEqual(0);
			expect(elf.stance[1]).toEqual(0);
			done();
		})
	});

	it ("поднять обе руки вверх и опустить x2 раз", function (done) {
		showCitrin(elf, gem).then((elf) => {
			expect(elf.stance[0]).toEqual(1);
			expect(elf.stance[1]).toEqual(1);
			done();
		})
		bothHandsDown(elf).then((elf) => {
			expect(elf.stance[0]).toEqual(0);
			expect(elf.stance[1]).toEqual(0);
			done();
		})
	});
});

describe("Увидя Аметист сделать волну", function () {
	let elf = {
		danceSpeed: 10,
		stance: [0, 0, 0, 0],
	}
	let testCases = [
		{sZ: elf.stance[0], sO: 1},
		{sZ: elf.stance[1], sO: 1},
		{sZ: elf.stance[0], sO: 0},
		{sZ: elf.stance[1], sO: 0},
	];
	let gem = allGems.indexOf("Аметист");
	it ("Левая рука поднимается, правая рука поднимается, левая рука опускается, правая рука опускается", function (done) {
		showAmetist(elf, gem).then((elf) => {
			testCases.forEach(test => {
				expect(testCases.sZ).toEqual(testCases.sO);
			})
			done();
		})
	});
});

describe("Заметив кварц пройти проверку трезвости, пьяный прыжок", function () {
	let elf = {
		danceSpeed: 10,
		stance: [0, 0, 1, 1],
	}
	let testCases = [
		{sZ: elf.stance[2], sO: 0},
		{sZ: elf.stance[3], sO: 0},
		{sZ: elf.stance[2], sO: 1},
		{sZ: elf.stance[3], sO: 1},
	];
	let gem = allGems.indexOf("Кварц");
	it ("одновременно обе ноги собираются, затем одновременно выставляются (стакан на голове)", function (done) {
		showQuartz(elf, gem).then((elf) => {
			testCases.forEach(test => {
				expect(testCases.sZ).toEqual(testCases.sO);
			})
			done();
		})
	});
});

describe("Альмандин заставляет произнести тост", function () {
	let elf = {
		danceSpeed: 10,
		stance: [0, 0, 0, 0],
	}
	let testCases = [
		{sZ: elf.stance[1], sO: 1},
		{sZ: elf.stance[3], sO: 1},
	];
	let gem = allGems.indexOf("Альмандин");
	it ("Одновременно левая рука со стаканом поднимается и левая нога выставляется для устойчивости", function (done) {
		showAlmandin(elf, gem).then((elf) => {
			testCases.forEach(test => {
				expect(testCases.sZ).toEqual(testCases.sO);
			})
			done();
		})
	});
});

describe("Родолит заставляет всех замолчать пока произносится тост", function () {
	let elf = {
		danceSpeed: 10,
		stance: [0, 0, 0, 0],
	}
	let testCases = [
		{sZ: elf.stance[0], sO: 1},
		{sZ: elf.stance[2], sO: 1},
	];
	let gem = allGems.indexOf("Родолит");
	it ("Одновременно правая рука без стакана поднимается и правая нога выставляется", function (done) {
		showRodolit(elf, gem).then((elf) => {
			testCases.forEach(test => {
				expect(testCases.sZ).toEqual(testCases.sO);
			})
			done();
		})
	});
});





