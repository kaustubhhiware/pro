const changeTheme = (theme, nextTheme) => {

  document.getElementById('superset').className = theme.Name;

  // change current theme colors
  document.documentElement.style.setProperty('--background-color', theme.Colors.BG);
  document.documentElement.style.setProperty('--text-color', theme.Colors.Text);
  document.documentElement.style.setProperty('--shadow-color', theme.Colors.Shadow);

  // update themer
  document.documentElement.style.setProperty('--next-background-color', nextTheme.Colors.BG);
  document.documentElement.style.setProperty('--next-text-color', nextTheme.Colors.Text);
  document.documentElement.style.setProperty('--next-shadow-color', nextTheme.Colors.Shadow);
  document.getElementById('themoji').innerHTML = nextTheme.Emoji;
}

export default changeTheme;