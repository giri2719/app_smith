export default {
	
	async logStatus () {
		let logInfo
		try{
			logInfo=	await loginstatus.run()
			if(logInfo?.userLoggedIn){
			navigateTo("Page3")
		}
		}
	catch(err){
		
	}
	}
}