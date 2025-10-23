const projectList = [
    {title: "가지도 않을 표를 사는 사람들", url: "https://zoo-zer0.github.io/tickets-mid/", tag: "data-visualization,interactive", img: "./img/project/ticket.png", description: "Translation: <em>Those Who Buy Tickets They Never Intend to Use</em><br><br>We investigated Korea’s secondary ticket market by reverse-engineering Ticket Bay and building a daily crawler to track listings. Our analysis uncovered how a small group of resellers dominate the market, inflating prices far beyond face value. The interactive site visualizes these patterns, letting you explore resale price gaps by game and even down to seat level.<br><br><em>Python, HTML, CSS, Javascript, D3.js</em></p>"},
    {title: "Cold Plunges for Him: When the For You Page Isn't for Me", url:"https://zoo-zer0.github.io/cold-plunges-for-him/", tag: "data-visualization,writing", img: "./img/project/cold%20plunge.jpg", description: "An analysis of 212 PubMed articles revealed that most cold therapy studies excluded women, yet this bias disappears as findings spread into health media. This project traces how advice based on male physiology gets generalized into universal wellness claims.<p><em>Python, HTML, CSS, Javascript, D3.js</em></p>"},
    {title: "The SNU Quill 82nd Edition", url: "https://snuquill-public-s3.s3.ap-northeast-2.amazonaws.com/magazine/82.pdf", tag: "writing", img: "./img/project/snuquill.png", description: "Served as Editor-in-Chief of the 82nd edition of Seoul National University’s English magazine. Oversaw reporting, editing, and design to publish stories on campus politics, culture, and international affairs."},
    {title: "The General Student Assembly votes to demand the resignation of President Yoon", url: "https://snuquill.com/article/157", tag: "writing", img: "./img/project/assembly.png", description: "Reported on Seoul National University’s historic student assembly, where thousands gathered to demand the resignation of President Yoon. The piece contextualizes the protest within Korea’s evolving student political movement."},
    {title: "2048", url: "https://2048-rho-tan.vercel.app/", tag: "builds", img: "./img/project/2048.png", description: "<em>React, Typescript, HTML, CSS</em>"}
    /*{title: "", url: "", tag: "", img: "", description: ""}*/

];
function generateCards(containerSelector, items){
    const grid = document.querySelector(containerSelector);
    grid.innerHTML = "";
    items.forEach(item=>{
        const link = document.createElement("a");
        link.href = item.url || "#";
        link.target = "_blank";
        const card = document.createElement("div");
        card.classList.add("project-card");
        card.dataset.tag = item.tag || "";
        if (item.img){
            const img = document.createElement("img");
            img.src = item.img;
            img.alt=item.title;
            card.appendChild(img);
        }
        const content = document.createElement("div");
        content.classList.add("project-content");
        const title = document.createElement("h2");
        title.textContent = item.title;
        content.appendChild(title);
        if (item.description){
            const desc = document.createElement("p");
            desc.innerHTML=item.description;
            content.appendChild(desc);
        }
        card.appendChild(content);
        link.appendChild(card);
        grid.appendChild(link); //important!! wrap the card with link and add link to grid
    })
}
generateCards(".projects .project-grid", projectList);

const tags = document.querySelectorAll(".tag");
tags.forEach(tagBtn => {
    tagBtn.addEventListener('click',()=>{
        tags.forEach(t=>t.classList.remove('active'));
        tagBtn.classList.add('active');

        const selectedTag = tagBtn.dataset.tag;
        const links = document.querySelectorAll(".project-grid a");
        links.forEach(link=>{
            const project = link.querySelector(".project-card");
            const projectTag = project.dataset.tag;
            if (selectedTag === 'all'|| projectTag.includes(selectedTag)){
                link.style.display = 'block';
            } else{
                link.style.display = 'none';
            }
        });
        
    });
});
  
  /*const tags = document.querySelectorAll('.tag');
  const projects = document.querySelectorAll('.project-grid a');

  tags.forEach(tagBtn => {
    tagBtn.addEventListener('click', () => {
      // remove active from all buttons
      tags.forEach(t => t.classList.remove('active'));
      tagBtn.classList.add('active');

      const selectedTag = tagBtn.dataset.tag;

      projects.forEach(project => {
        const projectTags = project.dataset.tags.split(',');
        if (selectedTag === 'all' || projectTags.includes(selectedTag)) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    });
  });*/
