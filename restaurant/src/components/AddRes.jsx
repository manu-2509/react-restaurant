import {useState} from "react"
export const AddRes=()=>{

    const [form,setForm] = useState({
        hotel_name:"",
        payments_method:"",
        cost_for_one:"",
        rating:"",
        reviews:"",
        total_votes:"",
        category:[{cat:""}],
        image:""
    })
    console.log({form})
    const formData =(e)=>{
        const {name,value}=e.target
        setForm({
            ...form,
            [name]: value
          })
    }
    const addNew =()=>{

    }

    return(
        <div>
            
                <form onSubmit={addNew}>
            <input onChange={formData} type="text" placeholder="name of restaurant" name="hotel_name" />
            <input onChange={formData} type="text" placeholder="payment_method" name="payments_method" />
            <input onChange={formData} type="text" placeholder="cost for one" name="cost_for_one" />
            <input onChange={formData} type="text" placeholder="rating" name="rating" />
            <input onChange={formData} type="text" placeholder="reviews" name="reviews" />
            <input onChange={formData} type="text" placeholder="votes" name="total_votes" />
            <input onChange={formData} type="text" placeholder="categories" name="categories" />
            <input onChange={formData} type="text" placeholder="image url" name="image" />
            <input type="submit" value="add"></input>
        </form>
        </div>
    
    )

}