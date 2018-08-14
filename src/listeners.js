class Listeners {
  constructor() {
      this.screens = ["move_screen", "port_screen"];
      this.keys = {"m":"move_screen", "p":"port_screen"};
  }
}
    this.listener = new window.keypress.Listener();
this.listener.simple_combo("m", function() {
  self.setState({move_screen_visible: !self.state.move_screen_visible});
});
this.listener.simple_combo("p", function() {
  self.setState({port_screen_visible: !self.state.port_screen_visible})
});
this.listener.simple_combo("q", function() {
  self.setState({port_screen_visible: false})
  self.setState({move_screen_visible: false})
});
  }
  
