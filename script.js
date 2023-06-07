let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let serifFontButton = document.querySelector('.font-button-serif');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');
let pageTheme = document.querySelector('body.page');
let articleSections = document.querySelectorAll('.blog-article');

let gridButtonViewCard = document.querySelector('.card-view-button-grid');
let listButtonViewCard = document.querySelector('.card-view-button-list');
let cardsList = document.querySelector('.cards');

listButtonViewCard.onclick = function () {

    cardsList.classList.add('list');
    gridButtonViewCard.classList.remove('active');
    listButtonViewCard.classList.add('active');
}

gridButtonViewCard.onclick = function () {

    cardsList.classList.remove('list');
    gridButtonViewCard.classList.add('active');
    listButtonViewCard.classList.remove('active');
}




for(let articleSection of articleSections){

    let moreButton = articleSection.querySelector('.more');
    moreButton.onclick = function() {

    articleSection.classList.remove('short')   

    }

}



    


darkThemeButton.onclick = function () {
    pageTheme.classList.add('dark');
    darkThemeButton.classList.add('active');
    lightThemeButton.classList.remove('active');
  };

  lightThemeButton.onclick = function () {
    document.body.classList.remove('dark');
    lightThemeButton.classList.add('active');
    darkThemeButton.classList.remove('active');
  };

  serifFontButton.onclick = function () {
    document.body.classList.add('serif');
    sansSerifFontButton.classList.remove('active');
    serifFontButton.classList.add('active');
}

sansSerifFontButton.onclick = function () {
  document.body.classList.remove('serif');
  sansSerifFontButton.classList.add('active');
  serifFontButton.classList.remove('active');
};

    