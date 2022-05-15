window.onload = () => {
    document.body.innerHTML = `
        <header>
            <a id="head-logo"><img src="/img/head-logo.png" height="50vw"></a>
            <div id="head-nav">
                <ul id="head-nav-ul">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/project">Project</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
            </div>
        </header>
        ${document.body.innerHTML}
        <footer>
            <p>&copy; 2022 Quaestio</p>
        </footer>`
    }