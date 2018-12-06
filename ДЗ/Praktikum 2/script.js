function loadCategories(path, func) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', path, true);
  xhr.onload = function() {
    func(JSON.parse(this.responseText));
  }
  xhr.send(null);
}

function onCategoriesLoaded(categories) {
  const nav = document.querySelector('nav');
  nav.style.display = "block";
  nav.innerHTML = `<div class="main"><ul></ul></div>`;
  nav.querySelector('div').querySelector('ul').innerHTML = categories.map(cat =>`<li><a href="json/${cat.path}"><img src="img/${cat.img}"/><br>${cat.title}</a></li>`).join('');
  nav.addEventListener('click', function(e) {
    if (e.target.nodeName.toLowerCase() === "a") {
      loadCategories(e.target.getAttribute('href'), buildContent);
      e.preventDefault();
    }
    else if(e.target.nodeName.toLowerCase() === "img") {
      loadCategories(e.target.parentNode.getAttribute('href'), buildContent);
      e.preventDefault();
    }
  });
}


function buildContent(slides) {
  document.querySelector('nav').style.display = "none";
  const div = document.createElement('div');
  div.classList.add("slideshow-container");
  div.innerHTML += `<div id="back">&#8592;</div>`;
  slides.forEach(slide => {
    div.innerHTML += `<div class="Slides fade">
                          <img src="img/${slide.img}" style="width:100%">
                          <div class="text">${slide.description}</div>
                      </div>`;
  });
  div.innerHTML += `<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)">&#10095;</a>`;
  let pics = document.createElement('div');
  pics.classList.add('pics');
  let index = 1;
  slides.forEach(slide => {
    pics.innerHTML += `<span onclick="currentSlide(${index})"><img src="img/${slide.img}" class="picture"></span>`;
    index++;
  });
  div.appendChild(pics);
  document.querySelector('ul').remove();
  document.body.appendChild(div);
  showSlides(slideIndex);
  const back = document.getElementById('back');
  back.addEventListener('click', function() {
    div.remove();
    loadCategories('json/main.json', onCategoriesLoaded);
  });
}

let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("Slides");
  var pics = document.getElementsByClassName("picture");
  if (n > slides.length) {
    slideIndex = 1;
  } 
  if (n < 1) {
    slideIndex = slides.length;
  }
  slides = Array.from(slides);
  pics = Array.from(pics);
  slides.forEach(slide => slide.style.display = "none");
  pics.forEach(pic => pic.className = pic.className.replace("active", ""));
  slides[slideIndex-1].style.display = "block"; 
  pics[slideIndex-1].className += " active";
}

loadCategories('json/main.json', onCategoriesLoaded);