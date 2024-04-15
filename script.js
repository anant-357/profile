const work_template = `{{#data}}
            <div class="content-item">
              <div class="content-header">
          <div class="content-title">{{title}}</div>
          <div class="content-date">{{date}}</div>
              </div>
          <div class="content-body">{{body}}
              </div>
              <div class="content-links">
          {{#links}}
          <a class="link" href={{link}}>{{name}}</a>
          {{/links}}
              </div>
          <div class="content-footer">References: {{references}}</div>
            </div>
        {{/data}}`;

const gallery_template = ` {{#gallery}}
      <div class="content-gallery">
        <img class="content-img" src={{image}}></img>
        <div class="content-caption">{{caption}}</div>
      </div>
        {{/gallery}}`;

const home_template = `
<div class="container">
    <div class="lines" id="l-1"></div>
    <div class="lines" id="l-2"></div>
    <div class="lines" id="l-3"></div>
    <div class="lines" id="l-4"></div>
    <div class="lines" id="l-5"></div>
    <div class="lines" id="l-6"></div>
    <div class="lines" id="l-7"></div>
    <div class="lines" id="l-8"></div>
    <div class="lines" id="l-9"></div>
    <div class="lines" id="l-10"></div>
    <div class="lines" id="l-11"></div>
    <div class="lines" id="l-12"></div>
    <div class="lines" id="l-13"></div>
    <div class="lines" id="l-14"></div>
</div>
`;

if (document.URL.match("gallery")) {
  fetch(
    "https://raw.githubusercontent.com/anant-357/profile/main/content/gallery.json",
  ).then((res) => {
    res.json().then((gallery) => {
      const rendered = Mustache.render(gallery_template, { gallery });
      document.getElementById("page").innerHTML = rendered;
    });
  });
} else if (document.URL.match("index")) {
  fetch(
    "https://raw.githubusercontent.com/anant-357/profile/main/content/work.json",
  ).then((res) => {
    res.json().then((data) => {
      const rendered = Mustache.render(work_template, { data });
      document.getElementById("page").innerHTML = rendered;
    });
  });
} else {
  const rendered = Mustache.render(home_template);
  document.getElementById("page").innerHTML = rendered;
}
