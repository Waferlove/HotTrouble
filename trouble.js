function initTrouble()
{
    console.log('initTrouble');

    var color = [
        "#000000",
        "#eb242b",
        "#f2e921",
        "#f59119",
    ];

    for (var i = 0; i < 1500; i++)
    {
        var n=Math.floor(Math.random()*color.length);
        var elem='<div class="square" style="background:'+color[n]+'">&nbsp;</div>'
        $('#background').append(elem);
    }
}

$(document).ready(initTrouble);