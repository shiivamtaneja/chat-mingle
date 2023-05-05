import React from 'react'

const MessageDate = ({ messageDate }) => {
    let hours = messageDate[3] % 12
    hours = hours ? hours : 12;
    return (
        <span>{messageDate[0]}/{messageDate[1]}/{messageDate[2]} {hours}:{messageDate[4]} {messageDate[5]}</span>
    )
}

export default MessageDate