document.addEventListener("DOMContentLoaded", function () {
    const calendarBody = document.getElementById("calendarBody");
    const currentMonthElement = document.getElementById("currentMonth");
    const prevMonthButton = document.getElementById("prevMonth");
    const nextMonthButton = document.getElementById("nextMonth");

    const today = new Date();
    let currentYear = 2023;
    let currentMonth = 0; // January is 0, December is 11

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    function renderCalendar(){
        
    }

    function generateCalendar() {
        currentMonthElement.textContent = months[currentMonth] + " " + currentYear;
        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const daysInMonth = lastDay.getDate();

        let calendarHTML = '';

        for (let i = 1; i <= daysInMonth; i++) {
            calendarHTML += `<td>${i}</td>`;
        }

        calendarBody.innerHTML = '';

        for (let i = 0; i < firstDay.getDay(); i++) {
            calendarHTML = `<td class="empty"></td>` + calendarHTML;
        }

        for (let i = daysInMonth + firstDay.getDay(); i < 42; i++) {
            calendarHTML += `<td class="empty"></td>`;
        }

        calendarBody.innerHTML = calendarHTML;
    }

    generateCalendar();

    prevMonthButton.addEventListener("click", function () {
        if (currentMonth > 0) {
            currentMonth--;
        } else {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar();
        renderCalendar();
    });

    nextMonthButton.addEventListener("click", function () {
        if (currentMonth < 11) {
            currentMonth++;
        } else {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar();
         renderCalendar();
    });
    document.addEventListener("DOMContentLoaded", renderCalendar);
});
