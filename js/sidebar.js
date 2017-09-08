// <ul id="sidebar" data-spy="affix" class="col-lg-3 col-md-4 col-sm-4 col-xs-12 pull-left list-unstyled sidebar">
//   <li>
//     <div class="header">
//       <h1><a class="active name" href="index.html">Leanne Abraham</a></h1>
//       <p>cartographer &#9679; student &#9679; bread enthusiast</p>
//     </div>
//   <li class="sidenav"><a href="portfolio.html">portfolio</a></li>
//   <li class="sidenav"><a href="resume.html">resume</a></li>
//   <li class="sidenav"><a href="madminiatlas.html">a critical madison food atlas</a></li>
//   </li>
// </div>
// </ul>

window.onload = createSidebar()

function createSidebar(){
  d3.csv("/data/projects.csv", function(data) {
    console.log(data);
  });
};


// var acc = document.getElementsByClassName("sidebar");
// var i;
//
// var sidebar = d3.select(#sidebar).append
//
// for (i = 0; i < acc.length; i++) {
//   acc[i].onclick = function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight){
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   }
// }
