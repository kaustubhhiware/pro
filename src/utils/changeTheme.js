const changeTheme = (newThemeName, newButtonText) => {

  document.getElementById('superset').className = newThemeName;

  document.getElementById('themer').innerHTML = newButtonText;
}

export default changeTheme;