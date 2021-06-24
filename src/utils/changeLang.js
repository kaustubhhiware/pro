const changeLang = (lang, nextLang) => {


  document.getElementById('lang-name-text').innerHTML = lang.Name;

  // update next lang button
  document.getElementById('langemoji').innerHTML = nextLang.Emoji;
}

export default changeLang;