import { useEffect, useState } from "react"
import { db } from "../firebase"
import { Link } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore"

const GetData = () => {
    const [getData, setGetData] = useState([])
    const getallData = async () => {
        const data = await getDocs(collection(db, "My Profile"))
        setGetData(data.docs.map((myDoc) => ({...myDoc.data(),id: myDoc.id})))
    }
    console.log(getData)
    useEffect(() => {
        getallData()  
    },[])
    const deletData = async (id) => {
        await deleteDoc(doc(db,  "My Profile",id))
        alert("Data has been deleted")
        window.location.reload()
    }
  return (
    <div>
    {getData.map((data) => (
        <section key={data.id}>
            <p>name: {data.name}</p>
            <p>email: {data.email}</p>
            <p>bio: {data.bio}</p>
            <Link to={`/edit/${data.id}`}>
            <button>Edit</button>

            </Link>
            <button onClick={() =>{
                deletData(data.id)
            }

            }
            >Delet</button>
            <hr />
        </section>
    ))}
    </div>
  )
}

export default GetData
