/*Active switching - Sidebar */
const navLinks = document.querySelectorAll('.sidebar .nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    document
      .querySelector('.sidebar .nav-link.active')
      ?.classList.remove('active');

    link.classList.add('active');
  });
});

//Current Date
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

const date = new Date();

let month = months[date.getMonth()];
let day = String(date.getDate()).padStart(2, '0');
let year = date.getFullYear();

let currentDate = `${month} ${day}, ${year}`;
document.getElementById("date").innerHTML = currentDate;

//Sidebar
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('sidebar-container');
  if (!container) return;

  fetch(`${BASE_PATH}/pages/sidebar.html`)
    .then(res => {
      if (!res.ok) throw new Error('Sidebar not found');
      return res.text();
    })
    .then(html => {
      container.innerHTML = html;

      const currentPage = document.body.dataset.page;
      const activeLink = container.querySelector(
        `.nav-link[data-page="${currentPage}"]`
      );

      if (activeLink) {
        activeLink.classList.add('active');
      }
    })
    .catch(err => console.error(err));
});

/* Progress Bar Animation */
 document.addEventListener("DOMContentLoaded", () => {
    const groups = document.querySelectorAll("#expensesChart .month-group");

    const values = Array.from(groups).map(
      group => Number(group.dataset.value)
    );

    const maxValue = Math.max(...values);

    groups.forEach(group => {
      const value = Number(group.dataset.value);
      const bar = group.querySelector(".bar");

      const percentage = (value / maxValue) * 100;
      bar.style.height = `${percentage}%`;
    });

  });
