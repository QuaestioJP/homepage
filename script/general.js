window.onload = () => {
    document.head.innerHTML = `
        <meta charset="utf-8">
        <link rel="icon" href="/img/logo.png">
        <link rel="stylesheet" href="/css/general.css">
        <link rel="stylesheet" href="/css/main.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Ubuntu:wght@400;500&display=swap" rel="stylesheet">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">`
    
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
        <div class="text">
            ${document.body.innerHTML}
        </div>
        <footer>
           <p>&copy; 2022 Quaestio</p>
        </footer>`
}