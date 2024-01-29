
function Hello(){

    let num=10;
    let passion='trading';

    //both function working

    // function fullName(){
    //     return 'Pramod Thete';
    // }
    let fullName=()=>{
        return 'Pramod Thete';
    }

    return <p>
        My Favourite Number is {num}, and My full name is {fullName()} <br />
        I love {passion}
    </p>
}
export default Hello;