$(document).ready(function() {
    let initialScore = 20;
    let initialSecretNumber = Math.floor(Math.random() * 20) + 1;

    const $againButton = $('.again');
    const $messageElement = $('.message');
    const $numberElement = $('.number');
    const $guessInput = $('.guess');
    const $scoreElement = $('.score');

    function restoreInitialConditions() {

        $scoreElement.text(initialScore);

        $messageElement.text('Start guessing...');

        $numberElement.text('?');
        $numberElement.css({
            'background-color': '#222',
            'width': '15rem'
        });
        $guessInput.val('');

        console.log("ok")
    }

    $againButton.on('click', restoreInitialConditions);
});