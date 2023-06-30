//API NOTIFICATION MESSAGES:

export const api_notification_msg={
    loading:{
        title:'Loading...',
        message:'Data is being loaded please wait'
    },
    success:{
        title:'Success',
        message:'Data is successfully loaded'
    },
    responseFailure:{
        title:'Error',
        message:'An error occured while response from the server please try again later'
    },
    requestFailure:{
        title:'Error',
        message:'An error occured while parsing request data'
    },
    networkError:{
        title:'Erro',
        message:'Unable to connect with the server. please check internet connectivity.'
    }

}

//API SERVICE CALL:

//need service call:{url:'/',method:'POST/GET/PUT/DELETE', params: true/false,query: true/false}
export const service_urls={
    userSignup:{url:'/signup',method:'POST',contentType:'application/json'},
    
    userLogin:{url:'/login',method:'POST'},
    uploadFile:{url:'/file/upload',method:'POST',contentType:'multipart/form-data'},
    createBurger:{url:'/create',method:'POST',contentType:'application/json'},
    getAllBurger:{url:'/posts',method:'GET',params:true},
     getBurgerById:{url:'/post',method:'GET',query:true},
    updateBurger:{url:'/update',method:'PUT', query:true},
    deleteBurger:{url:'/delete',method:'DELETE', query:true},
    orderedBurger:{url:'/order',method:'POST', query:true},
    getBurger:{url:'/get-order',method:'GET', query:true},
    getBurgerWithCustomerDetail:{url:'/get-order-customer',method:'GET'},

    // newComment:{url:'/comment/new',method:'POST'},
    // getAllComments:{url:'/comments',method:'GET',query:true},
    // deleteComment:{url:'/comment/delete',method:'DELETE',query:true},
    // editComment:{url:'/comment/edit',method:'PUT',query:true},
    
    // newConversation:{url:'/message_user',method:'POST'},
    // getConversation:{url:'/message_get_user',method:'GET',query:true},
    // getUserById:{url:'/get_user',method:'GET',query:true},
    // getMessages:{url:'/get_messages',method:'GET',query:true},
    // postMessages:{url:'/post_messages',method:'POST',contentType:'application/json'},
    // getAllUser:{url:'/get_all_user',method:'GET'},
}