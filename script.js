const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // remove active states
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // add active to clicked tab + matching content
    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.add("active");
  });
});
