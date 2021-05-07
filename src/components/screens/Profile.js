import React, { useEffect, useState, useContext } from 'react';
import {UserContext} from '../../App';

const Profile = () => {
    const [mypics, setPics] = useState([])
    const {state,dispatch} = useContext(UserContext);
    useEffect(() => {
        fetch('/mypost', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+localStorage.getItem("jwt")
            }
        }).then(res => res.json())
        .then(result => {
            console.log(result)
            setPics(result.data)
        })
    }, [])
    return(
        <div style={{maxWidth:"550px", margin:"0px auto"}}>
            <div style={{display:"flex", justifyContent:"space-around", margin:"18px 0px", borderBottom:"1px solid grey"}}>
                <div>
                    <img style={{ width: "160px", height: "160px", borderRadius: "80px  " }}
                        src="https://images.unsplash.com/photo-1616273552294-ae0e1224aaad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=382&q=80"></img>
                </div>
                <div>
                    <h4>{state?state.name:"loading"}</h4>
                    <div style={{display:"flex", justifyContent:"space-between", width:"108%"}}>
                        <h6>40 posts</h6>
                        <h6>40 followers</h6>
                        <h6>40 following</h6>
                    </div>
                </div>
            </div>
            <div className="gallery">
                {
                    mypics.map(item => {
                        return (
                            <img key={item._id} className="item" src={item.photo} alt={item.title} />           
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Profile;