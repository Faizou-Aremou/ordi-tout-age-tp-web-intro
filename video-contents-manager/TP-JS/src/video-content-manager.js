let videos = ["https://www.youtube.com/embed/nEET5FsCf40",
    "https://www.youtube.com/embed/g9u6KleX7iU",
    "https://www.youtube.com/embed/xj-YlOQxaJM",
    "https://www.youtube.com/embed/YKseSCYwoc4",
    "https://www.youtube.com/embed/tS6lTKoaOKA",
    "https://www.youtube.com/embed/dcN9QXxmRqk",
    "https://www.youtube.com/embed/uE3UPEK26U0",
    "https://www.youtube.com/embed/XUPINAP3WAw",
    "https://www.youtube.com/embed/r5OEIY7oz6I",
    "https://www.youtube.com/embed/RyM5V0azRhA",
    "https://www.youtube.com/embed/Fkd9TWUtFm0",
    "https://www.youtube.com/embed/hjcX_IHd4uE"
];

let isCollapse = false;

function display_videos() {
    let results = document.getElementById("results");
    results.innerHTML = "";
    for (let i = 0; i < videos.length; i++) {
        results.innerHTML += '<div class="video-content-manager_videos-results_video card "><iframe class="video-content-manager_videos-results_video_frame " src=' + videos[i] + '></iframe><div class="video-content-manager_videos-results_video_details "><h4><b>Video #' + i + '</b></h4><p>No additional infos</p></div></div>';
    }
}

function addVideo() {
    let address = document.getElementById("addVideoField");
    hlink = address.value;
    const words = hlink.split('=');
    videos.splice(0, 0, "https://www.youtube.com/embed/" + words[1]);
    address.value = "Url";
    display_videos();
}

function collapseNavbar() {
    isCollapse = !isCollapse;
    const navbarElement = document.getElementById("video-content-manager_navbar");
    isCollapse ? navbarElement.style.visibility = "collapse" : navbarElement.style.visibility = "visible";
}
display_videos();