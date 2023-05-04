import { useState } from 'react';

const Header = ({ theme, setTheme }) => {
    const handleTheme = () => {
        (theme === "dark") ? setTheme("light") : setTheme("dark")
    }
    let btnText = (theme === "dark") ? "Light" : "Dark"
    return (
        <header>
            <div className="container header-container">
                <div className="col col-1">
                    <h1>devfinder</h1>
                </div>
                <div className="col col-2">
                    <button onClick={handleTheme}>{btnText}</button>
                </div>
            </div>
        </header>
    )
}

export default Header