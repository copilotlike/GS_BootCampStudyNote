import React from 'react';

function Comment(props) {
    return (
        <div className='comment'>
            <Userinfo user={props.author}/>

            <div className='comment-text'>
                {props.text}
            </div>
            <div className='comment-date'>
                {FormData(props.date)}
            </div>
        </div>
    );
}

export default Comment;


// avatar 추출
// <img className='avatar'
//     src={props.author.avatarUrl}
//     alt={props.author.name}
// />
function Avatar(props) {
    return (
        <img className='avatar'
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    )
}

//userinfo 추출
/* <div className='user-info'>
    <Avatar user={props.author} />
    <div className='user-info-name'>
        {props.author.name}
    </div>
</div> */

function Userinfo(props) {
    return (
        <div className='user-info'>
            <Avatar user={props.user} />
            <div className='user-info-name'>
                {props.user.name}
            </div>
        </div>
    );  
}