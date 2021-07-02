
function fbDeepLink() {
    userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location = "fb://profile/103299224504770";
    } else if (/android/i.test(userAgent)) {
        window.location = "fb://page/103299224504770";
    } else {
        window.open("https://www.facebook.com/ToToShop.Official", "_blank");
    }
}

const gallery = new Viewer(document.getElementById('images'), {
    toolbar: {
        reset: 4,
        prev: 4,
        play: {
            show: 4,
            size: 'large',
        },
        next: 4,
    },
});