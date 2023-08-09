// always follow PascalCasing or CamelCase

const Message = () => {
    // JSX: JavaScript XML

    const name = 'MotherFvckers./.';
    if(name){
        return <h1> Hello {name} </h1>;
    }
    return <h1> Hello World! </h1>;
}

export default Message;