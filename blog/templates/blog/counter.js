function modify_likes(val) {
    var likes = document.getElementById('likes').value;
    var new_likes = parseInt(likes,10) + val;

    if (new_likes < 0) {
        new_likes = 0;
    }

    document.getElementById('likes').value = new_likes;
    return new_likes;
}

function modify_dislikes(val) {
    var dislikes = document.getElementById('dislikes').value;
    var new_dislikes = parseInt(dislikes,10) + val;

    if (new_dislikes < 0) {
        new_dislikes = 0;
    }

    document.getElementById('dislikes').value = new_dislikes;
    return new_dislikes;
}
