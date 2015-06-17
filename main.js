document.addEventListener('DOMContentLoaded', function() {
	var gui = require("nw.gui");
	var win = gui.Window.get();
	var tray = new gui.Tray({ title: 'Slack', icon: 'slack.png' });
	var menu = new gui.Menu();
	var visible = true;

	menu.append(new gui.MenuItem({ label: 'Show' }));
	menu.append(new gui.MenuItem({ label: 'Hide' }));
	menu.append(new gui.MenuItem({ label: 'Quit' }));
	tray.menu = menu;

	menu.items[ 0 ].click = function() {
		win.show();
		visible = true;
	}
	menu.items[ 1 ].click = function() {
		win.hide();
		visible = false;
	}
	menu.items[ 2 ].click = function() {
		visible = false;
		win.close( true );
	}

	tray.on( 'click', function() {
		if( visible ) {
			win.hide();
			visible = false;
		} else {
			win.show();
			visible = true;
		}
	})

	win.on( 'close', function() {
		win.hide();
		visible = false;
		return true;
	})
});