import React from 'react'

function Header({dark,className,children}) {
    dark = dark?"dark":"light";
    return (
        <nav className={`navbar navbar-${dark} bg-${dark}`}>
            <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">{children}</span>
            </div>
        </nav>
    )
}

export default Header
