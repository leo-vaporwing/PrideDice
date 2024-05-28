Hooks.once('diceSoNiceReady', (dice3d) => {
	// Bi Pride
	dice3d.addSystem({id: "bi-pride", name: "Bi Pride"}, false);
	dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/pride-dice/bi-pride/bi_d4.glb",
		system: "bi-pride"
	});
	dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/pride-dice/bi-pride/bi_d6.glb",
		system: "bi-pride"
	});
	dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/pride-dice/bi-pride/bi_d8.glb",
		system: "bi-pride"
	});
	dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/pride-dice/bi-pride/bi_d20.glb",
		system: "bi-pride"
	});
	// Trans dice
	dice3d.addSystem({id: "trans-pride", name: "Trans Pride"}, false);
	dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/pride-dice/trans-pride/trans_d4.glb",
		system: "trans-pride"
	});
	dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/pride-dice/trans-pride/trans_d6.glb",
		system: "trans-pride"
	});
	dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/pride-dice/trans-pride/trans_d8.glb",
		system: "trans-pride"
	});		
	dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/pride-dice/trans-pride/trans_d20.glb",
		system: "trans-pride"
	});
});