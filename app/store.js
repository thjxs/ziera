module.exports = function(state, emitter) {
  function render() {
    emitter.emit('render');
  }
  emitter.on('visible', v => {
    state.visible = v;
    render();
  });
};
