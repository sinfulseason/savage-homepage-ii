let tab = 0;
const tabs = document.getElementsByClassName('links');

const setFocusedTab = (t) => {
  const selectedTab = document.getElementsByClassName('selected-tab')[0];
  if (selectedTab) {
    selectedTab.classList.remove('selected-tab');
  }
  tabs[t].classList.add('selected-tab');
}

window.addEventListener('load', () => {
  setFocusedTab(tab);
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Tab') {
    if (event.shiftKey) {
      tab = (tab - 1) % tabs.length;
    } else {
      tab = (tab + 1) % tabs.length;
    }

    setFocusedTab(tab);
    console.log(tabs[tab].children[0]);
    tabs[tab].children[0].focus();
  }
})