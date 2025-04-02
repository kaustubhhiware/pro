const changeLang = (lang, nextLang) => {


  document.getElementById('lang-name-text').innerHTML = lang.Name;

  // update next lang tooltip
  document.getElementById('next-lang-emoji').innerHTML = nextLang.Emoji;
}

export default changeLang;