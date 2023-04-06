let man = {
    Name: 'Magomed',
    Surname: 'Ayubov',
    Height: 179,
    Password1: 095,
    Login1: 'Yo',
    study: function(){
        let Login = prompt('Text your login')
        let Password = prompt('And your Password')
        if(Login == this.Login1 && Password == this.Password1){
            console.log(`Welcome ${this.Surname} ${this.Login1}!`)
        }else{
            console.log('Wrong Login or Password')
        }
    }
}
man.Adress = 'Subri Kishievoy 3'
console.log()
man.study()