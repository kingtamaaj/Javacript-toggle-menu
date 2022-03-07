const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const sidebarToggleBtn = document.querySelector('.sidebar-toggle');

sidebarToggleBtn.addEventListener('click', function(){
    console.log(sidebar.classList);

    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function() {
    console.log(closeBtn.classList);

    sidebar.classList.remove('show-sidebar');
});