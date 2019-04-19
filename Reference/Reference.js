class Panel {
  constructor(panel) {
    //{}
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
    this.panelButtons = panel.querySelector('.panel-buttons');
    this.panelBtnOpen = panel.querySelector('.panel-btn-open');
    this.panelBtnClose = panel.querySelector('.panel-btn-close');
    this.panelContent = panel.querySelector('.panel-content');

    // Invokes immediately so only happens once.
    // this.panelButtons.addEventListener('click', this.togglePanel())

    // this context says it's the target of the click not the object we want.
    // this.panelButtons.addEventListener('click', this.togglePanel)

    // Arrow functions don't bind the the this context normally
    // Invoke the function this time because it's inside of an anonymous function
    // this.panelButtons.addEventListener('click', () => this.togglePanel())

    this.panelButtons.addEventListener('click', this.togglePanel.bind(this));
  }

  togglePanel() {
    console.log(this.panelBtnOpen.classList);
    this.panelBtnOpen.classList.toggle('hide-btn');
    this.panelBtnClose.classList.toggle('hide-btn');
    this.panelContent.classList.toggle('toggle-on');
  }
}

//panels is selecting any .panel whose parent is .accordion
const panels = document
  .querySelectorAll('.accordion .panel')
  //iterating over these elements and returning a new Panel object
  .forEach(panel => new Panel(panel));
