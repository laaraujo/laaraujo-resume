// const setTheme = theme => document.documentElement.className = theme
const setTheme = theme => {
    document.documentElement.className = theme
    document.cookie = `theme=${theme}`;
}

const showResume = () => {
    let resume = document.getElementById("resume")
    let overview = document.getElementById("overview")
    resume.style.display = 'block'
    overview.style.display = 'none'
}

const showOverview = () => {
    let resume = document.getElementById("resume")
    let overview = document.getElementById("overview")
    resume.style.display = 'none'
    overview.style.display = 'block'
}

const getCookie = cookieName => {
    let cookie = {};
    document.cookie.split(';').forEach(function (el) {
        let [key, value] = el.split('=');
        cookie[key.trim()] = value;
    })
    return cookie[cookieName];
}

setTheme(getCookie('theme'))