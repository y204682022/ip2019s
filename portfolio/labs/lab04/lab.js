

$(function(){

    var cards = ['./ace-of-hearts.svg',
                 './ace-of-spades.svg',
                 './ace-of-club.svg',
                 './ace-of-diamonds.svg'];

    for(var i = 0 ; i<16 ; i++){
        var r = Math.floor( (Math.random() *4) );
    


             $('#d2').append('<img class = "issue" src="' + cards[r] + '"> ' );
    }
    $('#b1').on('click',function(){

        $('.issue').hide();
        $('#d2').html('');

            for(var i = 0 ; i < 16 ; i ++){
                $('#d2').append('<img src= "./joker-card.svg">');

            }


    });
});










