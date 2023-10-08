document.addEventListener('DOMContentLoaded', () => {
    const getActivityBtn = document.getElementById('getActivityBtn');
    const activityDisplay = document.getElementById('activityDisplay');

    getActivityBtn.addEventListener('click', () => {
        fetch('http://www.boredapi.com/api/activity/')
            .then((response) => response.json())
            .then((data) => {
                activityDisplay.innerText = data.activity;
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                activityDisplay.innerText = 'An error occurred. Please try again later.';
            });
    });
});
