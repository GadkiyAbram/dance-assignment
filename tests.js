describe("Научить эльфа делать простые движения:", function() {
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

	it("поднять стаканы в левой и правой руках", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		// bothHandsUp(elf).then((elf) => {
		// 	expect(elf.stance).toEqual([1, 1, 0, 0]);
		// 	done();
		// });

		bothHandsUp(elf).then((elf) => {
			expect(elf.stance[0]).toEqual(1);
			expect(elf.stance[1]).toEqual(1);
			done();

			// rightHandUp(elf).then((elf) => {
			//
			// })
		});

		// leftHandUp(elf).then(rightHandUp).then((elf) => {
		// 	expect(elf.stance[0]).toEqual(1);
		// 	expect(elf.stance[1]).toEqual(1);
		// 	done();
		// });
	});
});