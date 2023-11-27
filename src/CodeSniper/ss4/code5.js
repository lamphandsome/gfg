function counter(){
    let like = 10;
    return(
        <div>
            <button
            onClick={() => {
                like++;
                console.log(like);
            }}>
                like
            </button>
            <h1>{like}</h1>
            <h1>{like}</h1>
            <h1>{like}</h1>
        </div>
    );
}