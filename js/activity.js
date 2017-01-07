define(["sugar-web/activity/activity",'easeljs','tweenjs','activity/game','activity/standardabacus','activity/standardabacuscolumn'], function (act) {

	// Manipulate the DOM only when it is ready.
	require(['domReady!'], function (doc) {

		// Initialize the activity.
		require(["sugar-web/env","sugar-web/datastore"], function(env,datastore) {
			act.setup();
			act.getXOColor(function (error, colors) {
				runactivity(act,doc,colors,env,datastore);
			});
		});
	});

});

function runactivity(act,doc,colors,env,datastore){
	var canvas;
	var stage;
	var g;
	var e;

	function init(){
		canvas = document.getElementById('actualcanvas');
		canvas.width = window.innerWidth; 
		canvas.height = window.innerHeight-55;
		stage = new createjs.Stage(canvas);
		stage.update();
		stage.mouseEventsEnabled = true;

		createjs.Ticker.setFPS(30);
		createjs.Ticker.addEventListener("tick", handleTick);
		function handleTick() {
			stage.update();
		}
		var g = new Game(stage,colors);
		g.init();
	}
	init();
}