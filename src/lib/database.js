
import axios from "axios"
import { useState } from "react"

export async function getServersidebackend(){
    try{
    const res=await axios.get("http://127.0.0.1:4000/api/v1/brands")
    console.log(res.data.brands)
    return res.data.brands
    }
    catch(error){
      console.log('Error',error)
      return []
    }
  }
  export async function getServersidebackend1(){
    try{
const res=await axios.get("http://127.0.0.1:4000/api/v1/credentials")
console.log(res.data.credentials)
return res.data.credentials
    }
    catch(error){
console.log(error)
return[]
    }
  }
  export async function getServerSidebackend2(){
    try{
const response=await axios.get("http://127.0.0.1:4000/api/v1/products")
console.log(response.data.products)
return response.data.products
    }
    catch(error){
      console.log(error)
      return[]
    }
  }
  /*
  export async function Israelform(){
    const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [description3, setDescription3] = useState("");
  const [description4, setDescription4] = useState("");
  const[slug,setslug]=useState("")
    
        const response = await axios.post("/api/v1/israel-agritech/new", {
            name,
            description,
            description1,description2,description3,description4,
            imageurl,slug
          })
        .then((result)=>console.log(result))
        setName('')
        setDescription('')
        setImageurl('')
        
        .catch((err)=>console.log(err))
    }
  */
 