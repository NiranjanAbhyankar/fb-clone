import React from 'react'
import Story from '../Story/Story';
import "./StoryReel.css"
 

function StoryReel() {
    return (
        <div className = "storyReel">
            <Story
                image= "https://bi.im-g.pl/im/0b/a2/18/z25829387V,las--zdjecie-ilustracyjne---Od-3-kwietnia-obowiazu.jpg"
                profileSrc="https://i.imgflip.com/48f4vv.jpg"
                title="Saad Maan"
            />
            <Story
                image= "https://images.all-free-download.com/images/graphicthumb/natural_scenery_02_hd_picture_166112.jpg"
                profileSrc="https://img.etimg.com/thumb/width-1200,height-900,imgsize-222096,resizemode-1,msid-72033342/magazines/panache/sachin-tendulkar-revealed-how-tech-helped-team-india-plan-better-in-2002.jpg"
                title="Sachin Tendulkar"
            />
            <Story
                image="https://www.itl.cat/pngfile/big/0-2232_free-download-hd-nature-wallpapers-for-mobile-home.jpg"
                profileSrc="https://static.wikia.nocookie.net/nickelodeon/images/4/4f/John_Cena_image.jpg"
                title="John Cena"
            />
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXxBoNPmSenKISBaxelfp6vfoAJrf9xoCRw&usqp=CAU"
                profileSrc="https://hi-static.z-dn.net/files/d6e/9c96e174407dbe4e49301a20cfc0c7b4.jpg"
                title="Jethalal Gada"
            />
            <Story
                image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPAcApbGrXFK3yMvyE5mQ6jaNZJE6L2VuWQ&usqp=CAU"
                profileSrc="https://pbs.twimg.com/media/D_Q3oPUVUAALqfi.jpg"
                title="Raju Bhai"
            />

            
        </div>
    )
}

export default StoryReel
