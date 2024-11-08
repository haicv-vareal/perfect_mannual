$(document).ready(function() {
  const apiURL4 = "https://api.gakumado.mynavi.jp/api/gmd/article_bases?tags[]=新入生完全マニュアル2025ガクラボとは"

$.getJSON(apiURL4)
  .done(function (data) {
    const shuffledArticles = data.sort(() => 0.5 - Math.random());

    let articles = '';

    shuffledArticles.forEach(function (article, index) {
      if (index >= 4) return;
      articles += `
        <li>
          <a href="https://gakumado.mynavi.jp/gmd/articles/${article.id}">
            <div class="is-home__gakuabo-img">
              <img src="${article.image_path}" alt="">
            </div>
            <p class="is-home__gakuabo-tx nsj">${article.title}</p>
          </a>
        </li>
      `;
    });

    $('.is-home__gakuabo ul').html(articles);
  })
  .fail(function (jqXHR, textStatus, errorThrown) {
    console.error('Error fetching articles from apiURL4:', textStatus, errorThrown);
  });




const apiURL2 = 'https://api.gakumado.mynavi.jp/api/gmd/article_bases?tags[]=新入生完全マニュアル2025プレゼント';

$.getJSON(apiURL2)
  .done(function (data) {
    const shuffledArticles = data.sort(() => 0.5 - Math.random());

    let articles = '';
    shuffledArticles.forEach(function (article, index) {
      if (index >= 8) return;
      articles += `
        <div class="article">
          <p class="ico-new"></p>
          <a href="https://gakumado.mynavi.jp/gmd/articles/${article.id}">
            <div class="is-home__present-img">
              <div class="img-inner">
                <img src="${article.image_path}" alt="">
              </div>
            </div>
            <h3>${article.title}</h3>
          </a>
        </div>
      `;
    });

    $('.is-home__present ul').html(articles);

    $('.is-home__present .ico-new').each(function (i) {
      $(this).attr('id', 'num' + (i + 1));
    });

    do {
      $(".is-home__present ul").children("div.article:lt(4)").wrapAll('<li></li>')
    } while ($(".is-home__present ul").children("div.article").length);

    $('.is-home__present ul').slick({
      autoplay: true,
      dots: false,
      autoplaySpeed: 4000,
      swipeToSlide: true,
      slidesToShow: 1,
      arrows: true,
      centerMode: true, 
      centerPadding: '14vw', 
      focusOnSelect: true,
      prevArrow: '<div class="slide-arrow prev-arrow"><img src="./assets/img/common/ico-arrow-left.png"/></div>',
      nextArrow: '<div class="slide-arrow next-arrow"><img src="./assets/img/common/ico-arrow-right.png"/></div>',
      responsive: [{
    
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '8vw'
        },
        
      }]
    })
  })
  .fail(function (jqXHR, textStatus, errorThrown) {
    console.error('Error fetching articles:', textStatus, errorThrown);
  });


const apiURL3 = "https://api.gakumado.mynavi.jp/api/gmd/article_bases?tags[]=春からの君に伝えたいこと2025"

$.getJSON(apiURL3)
  .done(function (data) {
    const shuffledArticles = data.sort(() => 0.5 - Math.random());

    let articles = '';

    shuffledArticles.forEach(function (article, index) {
      if (index >= 12) return;
      articles += `
          <div class="article">
            <a href="https://gakumado.mynavi.jp/gmd/articles/${article.id}">
              <div class="is-home__message-img">
                <div class="img-inner">
                  <img src="${article.image_path}" alt="">
                </div>
              </div>
              <p>${article.title}</p>
            </a>
          </div>
        `;
    });

    $('.is-home__message ul').html(articles);

    do {
      $(".is-home__message ul").children("div.article:lt(4)").wrapAll('<li></li>')
    } while ($(".is-home__message ul").children("div.article").length);

    $('.is-home__message ul').slick({
      autoplay: true,
      dots: false,
      autoplaySpeed: 4000,
      swipeToSlide: true,
      slidesToShow: 1,
      arrows: true,
      centerMode: true, 
      centerPadding: '14vw', 
      focusOnSelect: true,
      prevArrow: '<div class="slide-arrow prev-arrow"><img src="./assets/img/common/ico-arrow-left.png"/></div>',
      nextArrow: '<div class="slide-arrow next-arrow"><img src="./assets/img/common/ico-arrow-right.png"/></div>',
      responsive: [{
    
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '8vw'
        },
      }]
    })
  })
  .fail(function (jqXHR, textStatus, errorThrown) {
    console.error('Error fetching articles:', textStatus, errorThrown);
  });

const apiURL = 'https://api.gakumado.mynavi.jp/api/gmd/article_bases?tags[]=新入生完全マニュアル2025お役立ち情報';

$.getJSON(apiURL)
  .done(function (data) {
    const shuffledArticles = data.sort(() => 0.5 - Math.random());

    let articles = '';
    shuffledArticles.forEach(function (article, index) {
      if (index >= 4) return;
      articles += `
            <li class="article">
              <p class="ico"></p>
              <a href="https://gakumado.mynavi.jp/gmd/articles/${article.id}">
                <div class="is-home__useful-img">
                  <div class="img-inner">
                    <img src="${article.image_path}" alt="${article.title}">
                  </div>
                </div>
                <p>${article.title}</p>
                <p class="is-home__useful-more">
                  <span>もっと読む</span>
                </p>
                <p class="is-home__useful-pr">PR</p>
              </a>
            </li>`;
    });

    $(".is-home__useful ul").html(articles);

    $('.is-home__useful .ico').each(function (i) {
      $(this).attr('id', 'num' + (i + 1));
    });

    $('.is-home__useful ul').slick({
      autoplay: true,
      dots: true,
      autoplaySpeed: 4000,
      swipeToSlide: true,
      slidesToShow: 1,
      arrows: true,
      centerMode: true, 
      centerPadding: '26vw', 
      focusOnSelect: true,
      prevArrow: '<div class="slide-arrow prev-arrow"><img src="./assets/img/common/ico-arrow-left.png"/></div>',
      nextArrow: '<div class="slide-arrow next-arrow"><img src="./assets/img/common/ico-arrow-right.png"/></div>',
      responsive: [{
    
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '11vw'
        },
    
      }]
    });
  })
  .fail(function (jqXHR, textStatus, errorThrown) {
    console.error('Error fetching articles from apiURL:', textStatus, errorThrown);
  });

})

