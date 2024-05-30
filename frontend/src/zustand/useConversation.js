import {create} from 'zustand';

const useConversation = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    messages: null,
    setmessages: (messages) => set({messages}),
}));

export default useConversation;