function MyButton3(){
    function handleClick(){
        alert('You clickes me!');
    }
    return(
        <button onClick={handleClick}>
            Click me
        </button>
    );
}
export default  function MyApp(){
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton3 />
        </div>
    )
}