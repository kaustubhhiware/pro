const changeTheme = (theme, nextTheme) => {

  // update background
  document.getElementById('superset').className = theme.Name;

  // change current theme colors
  document.documentElement.style.setProperty('--primary-color', theme.Colors.Primary);
  document.documentElement.style.setProperty('--secondary-color', theme.Colors.Secondary);
  document.documentElement.style.setProperty('--accent-color', theme.Colors.Accent);
  // update source in footer
  document.getElementById("bg-source").href = theme.Source; 

  // update browser theme-color meta tag
  document.querySelector('meta[name="theme-color"]').setAttribute('content', theme.Colors.Primary);

  // update themer button
  document.documentElement.style.setProperty('--next-primary-color', nextTheme.Colors.Primary);
  document.documentElement.style.setProperty('--next-secondary-color', nextTheme.Colors.Secondary);
  document.documentElement.style.setProperty('--next-accent-color', nextTheme.Colors.Accent);
  document.getElementById('themoji').innerHTML = nextTheme.Emoji;
}

export default changeTheme;