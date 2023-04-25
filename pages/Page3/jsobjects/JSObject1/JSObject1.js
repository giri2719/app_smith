export default {
	
	myFun1 (data) {
	console.log(data)
		return data
	},
	
	async enableEdit (){
		if(Button1.text=="Edit User")
			{
					{{Input2.isDisabled=false}}
		{{Button1.text='save'}}
			}
	else{
		
			try{
				if(Input2.text!=""){
					  await edituser.run()
						await getAllUser.run()
				}
	
		{{Input2.isDisabled=true}}
		{{Button1.text='Edit User'}}
		{{Container1.isVisible=false}}
		}
		catch(err){
			showAlert("Invalid Format")
		}	
	}
	},
	disableEdit (){
		{{Input2.isDisabled=true}}
		{{Button1.text='Edit User'}}
		{{Container1.isVisible=true}}
	},
	async deleteUser (){
		await deleteuser.run()
		await getAllUser.run()
	},
	hideContainer (){
		{{Container1.isVisible=false}}
	},
	logout (){
		storeValue("token",undefined)
		navigateTo("Page1")
	}
	}
