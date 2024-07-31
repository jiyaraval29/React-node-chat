import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh'}}>
            <PrettyChatWindow
                projectId='2f309da6-6e0b-4782-902e-d3975c93bc76'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100'}}
            />
        </div>
    )
}

export default ChatsPage