class ActionProvider {
    constructor(createChatBotMessage, setStatefunc){
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStatefunc;
    }

    handleJavascriptList = () => {
        const message = this.createChatBotMessage("Fantastic, I've got the following resources for you on javascript:",
        {
            widget: 'javascriptLinks',
        });
        this.updateChatbotState(message);
    }

    updateChatbotState(message) {
        this.setState(prevState => ({
            ...prevState,
            messages: [...prevState.messages, message]
        }))
    }
}

export default ActionProvider;