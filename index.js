const avatar = document.getElementById('avatar');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');

const getPromise = () => {
   axios.get('https://reqres.in/api/users/5').then(res => {
       console.log(`res` , res.data)
       avatar.src = res.data.data.avatar
       fullName.innerText = res.data.data.first_name + " " + res.data.data.last_name
       email.innerText = res.data.data.email
   }).catch(err => {
       console.log(`err` , err)
   })
};

const getAwait = async () => {
    try {
       let result = await axios.get('https://reqres.in/api/users/5')
       avatar.src = result.data.data.avatar
       fullName.innerText = result.data.data.first_name + " " + result.data.data.last_name
       email.innerText = result.data.data.email
       console.log(`success`, result.data)

    } catch (error) {
        console.log(`error` , error)
    }
    
}

getPromise()
// getAwait()
