import React, {useState} from 'react'
import "./videoSidebar.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
import ReplyIcon from '@mui/icons-material/Reply';

function VideoSidebar({likes, messages, shares}) {

  const[liked, setLiked] = useState(false)

  function handdleLike(){
    setLiked(!liked)


  }
  return (
    <div className='videoSidebar'>
        <div 
        className='videoSidebar__options'
        onClick={handdleLike}
        >
          {liked ? <FavoriteIcon fontSize='large'/> : <FavoriteBorderIcon fontSize='large' />}
          
          <p>{liked ? likes + 1 : likes}</p>
        </div>
        <div className='videoSidebar__options'>
          <ChatIcon fontSize='large'/>
          <p>{messages}</p>
        </div>
        <div className='videoSidebar__options'>
          <ReplyIcon fontSize='large'/>
          <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSidebar