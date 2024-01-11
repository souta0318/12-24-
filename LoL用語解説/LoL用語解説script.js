document.addEventListener('DOMContentLoaded', function () {
  var contentArea = document.getElementById('contentArea');

  sections.forEach(section => {
      var sectionEl = document.createElement('section');
      sectionEl.id = section.title; // セクションにIDを追加
      sectionEl.innerHTML = `<h1>${section.title}</h1>`;
      section.items.forEach(item => {
          var button = document.createElement('button');
          button.className = 'accordion';
          button.innerHTML = item.title;
          var panel = document.createElement('div');
          panel.className = 'panel';
          panel.innerHTML = `<h4>${item.description}</h4>`;
          sectionEl.appendChild(button);
          sectionEl.appendChild(panel);
      });
      contentArea.appendChild(sectionEl);
  });

  var acc = document.getElementsByClassName("accordion");
  for (var i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
          } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
          }
      });
  }

  // スムーズスクロールのためのコード
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});
