$('.gifs').on('click', function() {
    let gif = $('.gif-link').val();
    let str = `<div class = "card1 border m-2">
        <img class="card-img-top" src="${gif}" alt="Gify">
        <div class="card-body">
            <h4 class="card-title">Git By Daks</h4>
            <span>0 Likes ❤️</span>
        </div>
     </div>`
     $('.gifs').append(str);
});
