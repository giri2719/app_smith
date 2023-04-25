export default {
	async logIn () {
	const responseLogIn= await login.run()
	if(responseLogIn.token){
		storeValue("token",responseLogIn)
		navigateTo("Page3")
	}
		else{
			showAlert("Invalid Credentials")
		}
	}
}

