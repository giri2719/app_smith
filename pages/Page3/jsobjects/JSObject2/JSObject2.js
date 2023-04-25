export default {
	
	async logStatus () {
		let logInfo
		try{
			logInfo=	await loginstatus.run()
		
		}
	catch(err){
		storeValue("err",err)
		if(!err.err){
			navigateTo("Page1")
		}
	}
	}
}