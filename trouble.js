var refreshSpeed=1; // seconds

function makeBackground()
{
    console.log('initTrouble');

    var color = [
        "#000000",
        "#eb242b",
        "#f2e921",
        "#f59119",
    ];
    
    $('#background').empty();

    for (var i = 0; i < 150; i++)
    {
        var n=Math.floor(Math.random()*color.length);
        var elem='<div class="square" style="background:'+color[n]+'">&nbsp;</div>'
        $('#background').append(elem);
    }
}

function initTrouble()
{
    makeBackground();
    window.setInterval(makeBackground, refreshSpeed*1000);
}

$(document).ready(initTrouble);