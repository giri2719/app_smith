export default {
	async signUp () {
		if(Input1.text===createPassword.text){
		const responseSignUp= await signup.run()
	  if(responseSignUp.token){
		storeValue("token",responseSignUp.token)
		navigateTo("Page3")
	  }
			else{
				showAlert(responseSignUp)
			}
		}
	else{
		showAlert("Password Is Not Match")
	}
	}
}