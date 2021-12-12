const sidebarButton = document.getElementById('department-sidebar-button')
const sidebar = document.querySelector('aside')


sidebarButton.addEventListener('click', function() {
    const isSidebarInvisible = sidebar.style.left == '100%'
    console.log(sidebar.style.left)
    if (isSidebarInvisible) {
        sidebar.style.removeProperty('left')
        sidebar.style.setProperty('right', '0')
    } else {
        sidebar.style.removeProperty('right')
        sidebar.style.setProperty('left', '100%')
    }
})