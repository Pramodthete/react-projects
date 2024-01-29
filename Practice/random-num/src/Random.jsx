
function Random(){

    let num= Math.random() * 100;


    return <h2 style={{'background-color':'#776691'}}>
        Random Number is : {Math.round(num)}
    </h2>
}

export default Random;