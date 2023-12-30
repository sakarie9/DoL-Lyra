DoLHouse.add({
	breast_variants: {
		frames: 8,
		inherit_sequence_info: true,
		variants: {
			upright: {
				translate: { x: 0, y: 0, depth: 8 },
				import: {
					filepath: "upright/breasts_upright.js",
					variable: "breasts_upright"
				}
			},
			laying: {
				width: 648,
				frames: 4,
				translate: { x: 0, y: 0, depth: 7 },
				filter: "drop-shadow(0px -12px 8px #0006)",
				magnets: {
					base: { x: 62, y: 90 }
				},
				selected_variant: "flat",
				variants: {
					flat: {},
					budding: {
						inherit_filter: true,
						spritesheet: "laying/budding.png"
					},
					tiny: { spritesheet: "laying/tiny.png" },
					small: { spritesheet: "laying/small.png" },
					pert: {
						inherit_filter: true,
						scale: { x: 1.1, y: 1.1 },
						spritesheet: "laying/small.png"
					},
					modest: {
						inherit_filter: true,
						spritesheet: "laying/medium.png"
					},
					full: {
						inherit_filter: true,
						scale: { x: 1.1, y: 1.1 },
						spritesheet: "laying/medium.png"
					},
					large: {
						inherit_filter: true,
						spritesheet: "laying/large.png"
					},
					ample: {
						inherit_filter: true,
						scale: { x: 1.1, y: 1.1 },
						spritesheet: "laying/large.png"
					},
					massive: {
						inherit_filter: true,
						spritesheet: "laying/massive.png"
					},
					huge: {
						inherit_filter: true,
						scale: { x: 1.1, y: 1.1 },
						spritesheet: "laying/massive.png"
					},
					gigantic: {
						inherit_filter: true,
						spritesheet: "laying/huge.png"
					},
					enormous: {
						inherit_filter: true,
						scale: { x: 1.1, y: 1.1 },
						spritesheet: "laying/huge.png"
					},
				}
			}
		}
	}
});
