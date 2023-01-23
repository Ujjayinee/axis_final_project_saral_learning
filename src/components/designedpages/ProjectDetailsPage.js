import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function ProjectDetailsPage(){

    const stakeholderId = sessionStorage.getItem('stakeholderId');
    
    
    const [stakeholder,setStakeholder] = useState({});
    

    console.log(stakeholderId);
    async function getDetails(){
        await axios
        .get("http://localhost:8189/stakeholder/"+stakeholderId[0].toString())
        .then((response)=>{
            // console.log(response.data);
            setStakeholder(response.data);          
        });
        console.log(stakeholder);
    }
    // console.log(empId);
    useEffect(()=>{
        getDetails();
    }, []);


    return(
        <div>           
        <div>
            <div >
                <h1><b>Stakeholder Details</b></h1>
                

                <p>Stakeholder Id : {stakeholder.stakeholderId} </p>
                <p>Name : {stakeholder.stakeholderName}</p>
                <p>Mobile No: {stakeholder.stakeholderMobileNo}</p>
                <p>Email Id: {stakeholder.stakeholderEmail}</p>
            </div>
        </div>
</div>
    )
}
export default ProjectDetailsPage;