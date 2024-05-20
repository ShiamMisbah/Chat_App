import axios from 'axios'
import { useEffect, useState } from 'react';

const ChatPage = () => {

    const [chats, setChats] = useState([]);

    const fetchChats = async () => {
        const {data} = await axios.get("/api/chat");
        setChats(data);
        console.log(chats);
    }

    useEffect(()=>{
        fetchChats();

    },[])

    return ( 
        <div>
            {chats && chats.chatName}
        </div>
     );
}
 
export default ChatPage;