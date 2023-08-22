import img from './img/the_dark_knight_rises_2012-1600x1200.jpg'
import post from './img/spiderman_latest-1920x1200 (2).jpg'
import data from './img/harry_potter_and_the_deathly_hallows_part_2-1920x1200.jpg'
import movie from './img/sherlock_holmes_2-1920x1200.jpg'
import pc from './img/assassins_creed_revelations_2012-1920x1080 (2).jpg'
import profilepic from './img/captain_america_cg-1920x1200.jpg'
const Post  = [{
    profilepicture : img,
    profilename : "Rahul",
    discription : "what a movie....!",
    postpicture : post,
    likes : "likes",
    numoflike : 0,
    dislike : false,
    comment : []
},{
    profilepicture : pc,
    profilename : "Raam",
    discription : "Great",
    postpicture : data,
    likes : "likes",
    numoflike : 0,
    dislike : false,
    comment : []

},{
    profilepicture : profilepic,
    profilename : "Raj",
    discription : "fabulous",
    postpicture : movie,
    likes : `likes` ,
    numoflike : 0,
    dislike : false,
    comment : []

}]

export default Post;