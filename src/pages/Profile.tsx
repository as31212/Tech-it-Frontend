import { useSelector, UseSelector } from "react-redux";
import { reduxStoreInterface } from "../interfaces/reduxStoreInterface";

const Profile: React.FC = () =>{
    const userData = useSelector((state: reduxStoreInterface)=> state.userData);

    return(
        <>
        
        </>
    );
}

export default Profile;