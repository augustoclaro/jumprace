const jumprace = gamify.game("JumpRaceApp", {
    size: {
        width: 800,
        height: 300
    },
    fps: 50,
    initialState: "startState",
    canvasId: "gameCanvas"
}, []);
// jumprace.const("gameData", {
//     points: 0,
//     level: 1
// });