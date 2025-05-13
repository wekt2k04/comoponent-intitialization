function ModeToogler() {
    let darkModeOn = true
    const darkMode = <h1>darkMode is on !</h1>
    const lightMode = <h1>lightMode is on !</h1>

    function HandleClick() {
        darkModeOn = !darkModeOn
        if (darkModeOn === true) console.log(darkMode)
        else console.log(lightMode)
    }

    return(
        <div>
            {darkModeOn ? darkMode : lightMode}
            <p>Now switching... {HandleClick()}</p>
            {darkModeOn ? darkMode : lightMode}
        </div>
    );

}

export default ModeToogler ;