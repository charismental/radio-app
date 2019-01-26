<template>
    <div id="speaker-container">
        <div id="img-container">
            <ul id="speaker-list">
                <li>Alistair Begg
                    <img src="./assets/AlistairBeggAvatar.jpm" alt="Alistair Begg">
                    <div id="times">12:30am, 3:00pm</div>
                </li>
                <li>Alexander Scourby
                    <img src="./assets/alexander-scourby2.jpg" alt="Alexander Scourby">
                    <div id="times"></div>
                </li>
                <li>Chuck Missler
                    <img src="./assets/chuck.png" alt="Chuck Missler">
                    <div id="times"></div>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<style>
#speaker-container {
    display: block;
    grid-area: e;
}
#img-container {
    display:flex;
    margin: 10, 10, auto;
    padding: 2px;
    justify-content: left;
}
#speaker-list {
    scroll-behavior: smooth;
    overflow:hidden;
    clear: left;
}
#speaker-list li {
    max-height: 50px;
    width: auto;

}
#speaker-list li img {
    max-height: 40px;
    justify-items: left;
    margin-top: 2px;
    border-radius: 6px;
    border: 2px solid black;
    padding: 2px;
}
#times {
    float: right;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: bold;
}
</style>
