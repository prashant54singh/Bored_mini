$(document).ready(function () {
    
    var API_KEY = "AIzaSyBDogwTo168qXtrTxQm0XpwmsqmTI8cE24"
        var video =" "
        var videos =$("#videos")
        $("#form").submit(function(event){
            event.preventDefault()
            var search=$("#search").val()
            videoSearch(API_KEY,search)
        })
    
        function videoSearch(key,search,maxResults=4){
            $.get("https://www.googleapis.com/youtube/v3/search?key="+ key + "&type=video&part=snippet&maxResults="+maxResults + "&q=" + search,function(data){console.log(data)
            
        data.items.forEach(item => {
            video =`
            <iframe width="280px" height="180px" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
            
           
           ` 
           $("#videos").append(video)
        });
        
        } )
        }
    })
    
    


const randomActivityBtn = document.getElementById('randomActivityBtn')
randomActivityBtn.addEventListener('click', getRandomActivity)

function getRandomActivity() {
    fetch('http://www.boredapi.com/api/activity')
        .then(response => response.json())
        .then(data => {
            document.getElementById(
                'activityMessage'
            ).innerHTML = `✨<span class="activityGlam">&nbsp;${data.activity}&nbsp;</span>✨`
            document.getElementById(
                'activitymsg2'
            ).innerHTML = `✨Participants:<span class="activityGlam">&nbsp;${data.participants}&nbsp;</span>✨`
            displayImages();
            document.getElementById('search').value = data.activity;
            document.getElementById('searchSubmit').click();
            document.getElementById('upwards').style.width = "50%";

        })

}

function displayImages() {
    const galleries = document.getElementsByClassName('gallery')
    const numOfImages = 10
    let randomIndex = Math.floor(Math.random() * numOfImages) + 1

    for (let gallery of galleries) {
        if (gallery.classList.contains('topGallery')) {
            gallery.classList.add('topGalleryImage')
        } else if (gallery.classList.contains('bottomGallery')) {
            gallery.classList.add('bottomGalleryImage')
        }

        gallery.style.backgroundImage = `url('./images/image-${randomIndex}.gif')`
    }
}


function moveLeftFunc() {
    document.getElementById("move-left").style.width = "54%";
    document.getElementById("right-container").style.display = "block";
}

 
function searchDropdown() {
    let activityname = document.getElementById('search').value = document.getElementById('selection').value;
    // console.log(activityname);
    fetch('http://www.boredapi.com/api/activity?type=' + activityname)
        .then(response => response.json())
        .then(data => {
            document.getElementById(
                'activityMessage'
            ).innerHTML = `✨<span class="activityGlam">&nbsp;${data.activity}&nbsp;</span>✨`
            document.getElementById(
                'activitymsg2'
            ).innerHTML = `✨Participants:<span class="activityGlam">&nbsp;${data.participants}&nbsp;</span>✨`
            displayImages();

    console.log(data.activity);
    document.getElementById("move-left").style.width = "54%";
    document.getElementById("right-container").style.display = "block";
    document.getElementById('search').value = data.activity;
    document.getElementById('searchSubmit').click();
    document.getElementById('upwards').style.width = "50%";

})
};