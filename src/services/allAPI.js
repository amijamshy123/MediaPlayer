import Category from "../components/Category"
import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"

//  add component upload video  -store video http://localhost:3000/videos

export const uploadVideoAPI =async (video)=>
{
    // send response to add component 
    return await commonAPI("POST",`${SERVER_URL}/videos`,video)
}
// get video api called by view component
export const getAllVideosAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/videos`,"")
}
// store watch history by videoCard to http://localhost:3000/history
export const saveHistoryAPI = async (videoDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}
  
// get history to watch component to http://localhost:3000/history
 export const getHistoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
 }
// remove history to watch component
export const removeHistoryAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}
// remove video by videocard
   export const removeVideoAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/videos/${videoId}`,{})
   }

//    save category to category component
 export const addCatagoryAPI = async (catagoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,catagoryDetails)
 }


 //    get category to category component
 export const getCategoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
 }
//  remove category api
  export const removeCategoryAPI = async (CategoryId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/categories/${CategoryId}`,{})
  }
//   get single video api
         export const getAVideoAPI =async (videoId)=>{
            return await commonAPI("GET",`${SERVER_URL}/videos/${videoId}`,"")
         }

    // updateCategory api
    export const updateCategoryAPI = async (CategoryId,updatedCatogoryDetails)=>{
        return await commonAPI("PUT",`${SERVER_URL}/categories/${CategoryId}`,updatedCatogoryDetails)
    }
    //   get SingleCategory api
    export const getSingleCategoryAPI = async (categoryId)=>{
        return await commonAPI("GET",`${SERVER_URL}/categories/${categoryId}`,"")
     }
        
        