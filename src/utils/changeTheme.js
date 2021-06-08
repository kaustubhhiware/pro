const changeTheme = (newThemeName, newButtonText) => {

  document.getElementById('superset').className = newThemeName;

  document.getElementById('themoji').innerHTML = newButtonText;
}

export default changeTheme;