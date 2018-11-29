function loadCategories() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'main.json', true);
  xhr.onload = function() {
    onCategoriesLoaded(JSON.parse(this.responseText));
  }
  xhr.send(null);
}

function onCategoriesLoaded(categories) {
  document.querySelector('nav').style.display = "block";
  document.querySelector('nav').innerHTML = `<div class="main"><ul></ul></div>`;
  document.querySelector('nav').querySelector('div').querySelector('ul').innerHTML = categories.map(cat =>`<li><a href="${cat.path}"><img src="${cat.img}"/><br>${cat.title}</a></li>`).join('');
  document.querySelector('nav').addEventListener('click', function(e) {
    console.log(e.target.nodeName);
    console.log(e.target);
    if (e.target.nodeName.toLowerCase() === "a") {
      console.log(e.target);
      loadSubCategories(e.target.getAttribute('href'));
      e.preventDefault();
    }
    else if(e.target.nodeName.toLowerCase() === "img") {
      console.log(e.target);
      loadSubCategories(e.target.parentNode.getAttribute('href'));
      e.preventDefault();
    }
  });
}

function loadSubCategories(subcat) {
    console.log(subcat);
    let xhr = new XMLHttpRequest();
    xhr.open('GET', subcat, true);
    xhr.onload = function() {
      buildContent(JSON.parse(this.responseText));
    }
    xhr.send(null);
}

function buildContent(item) {
  document.querySelector('nav').style.display = "none";
  const div = document.createElement('div');
  div.classList.add("slideshow-container");
  div.innerHTML += `<div id="back">&#8592;</div>`;
  item.forEach(element => {
    div.innerHTML += `<div class="Slides fade">
                          <img src="${element.img}" style="width:100%">
                          <div class="text">${element.description}</div>
                      </div>`;
  });
  div.innerHTML += `<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)">&#10095;</a>`;
  let pics = document.createElement('div');
  pics.classList.add('pics');
  item.forEach(element => pics.innerHTML += `<span onclick="currentSlide(1)"><img src="${element.img}" class="picture"></span>`);
  div.appendChild(pics);
  // document.body.innerHTML = div;
  document.querySelector('ul').remove();
  document.body.appendChild(div);
  showSlides(slideIndex);
  const back = document.getElementById('back');
  back.addEventListener('click', function() {
    div.remove();
    loadCategories();
  });
}

let slideIndex = 1;
// showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Slides");
  let pics = document.getElementsByClassName("picture");
  if (n > slides.length) {
    slideIndex = 1;
  } 
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < pics.length; i++) {
      pics[i].className = pics[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  pics[slideIndex-1].className += " active";
}

loadCategories();