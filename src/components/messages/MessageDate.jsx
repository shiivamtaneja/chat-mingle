import React from 'react'

const MessageDate = ({ messageDate }) => {
    return (
        <span>{messageDate[0]}/{messageDate[1]}/{messageDate[2]} {messageDate[3]}:{messageDate[4]} {messageDate[5]}</span>
    )
}

export default MessageDate