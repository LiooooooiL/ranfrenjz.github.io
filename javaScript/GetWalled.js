function EatAWall(){
    fetch('https://ipinfo.io?token=0126320920f585')
    .then(response => response.json())
    .then(data => {
        if (data.country === 'CN') {
            window.location.href = 'https://ranfrenjz.github.io/comic.html';
        }
    })
    .catch(error => {
        console.error('Error fetching geolocation data:', error);
    });
}
EatAWall()
