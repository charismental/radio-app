<template>
    <div id="speaker-container" class="clearfix"> <!-- collapsed container -->
        <div id="img-container">
            <ul id="speaker-list"> <!-- scrollabel array loop of speakers -->
                <li> {{ speakers[0].name}}
                    <img src= {{ speakers[0].img }} alt="Alistair Begg">
                    <div id="times">{{ speakers[0].time }}</div>
                </li>
                    <!-- LOOP -->
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    speakers: [
        {name: 'Alistair Begg',
         Time: 00,
         img: './assets/AlistairBeggAvatar.jpg'},
        {name: 'Alexander Scourby', 
         Time: 00,
         img: './assets/alexander-scourby2.jpg'},
        {name: 'Jamie Buckingham',
        Time: 00,
        img: './assets/jamie.jpg'},
        {name: 'Chuck Missler',
        Time: 00,
        img: './assets/chuck.png'},
        {name: 'Derek Prince',
        Time: 00,
        img: './assets/derek.jpg'},
        {name: 'Paul Washer',
        Time: 00,
        img: './assets/paul.jpg'},
        {name: 'Curtis Dougherty',
        Time: 00,
        img: './assets/curtis.jpg'},
        {name: 'Ern Baxter',
        Time: 00},
        {name: 'John Casteel',
        Time: 00,
        img: './assets/john.jpg'},
        {name: 'Steve Schell',
        Time:00,
        img: './assets/steve_schell.jpg '}

    ]
}
</script>


<style>
#speaker-container .clearfix:after{
    content: "";
    display: table;
    clear: both;
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
