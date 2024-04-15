const data_template = `{{#data}}
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

const gallery_template = ` {{#data}}
      <div class="content-gallery">
        <img class="content-img" src={{image}}></img>
        <div class="content-caption">{{caption}}</div>
      </div>
        {{/data}}`;

if (document.URL.match("gallery")) {
  const rendered = Mustache.render(gallery_template, gallery);
  document.getElementById("page").innerHTML = rendered;
} else if (document.URL.match("index")) {
  fetch(
    "https://raw.githubusercontent.com/anant-357/profile/main/content/work.json?token=GHSAT0AAAAAACQKYINTZO6AIYNXYCYUTXKGZQ46UKQ",
  ).then((res) => {
    res.json().then((data) => {
      const rendered = Mustache.render(data_template, { data });
      document.getElementById("page").innerHTML = rendered;
    });
  });
}
