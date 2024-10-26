import { useDispatch } from "react-redux"
import { login } from "../redux/slices/userDataSlice";

const useRetrieveUser = () =>{
    const dispatch = useDispatch();
    const retrieveUser = ()=>{
        const localUserData = localStorage.getItem("userData");
        if(localUserData){
            dispatch(login(JSON.parse(localUserData)));
        }
    }

    return {retrieveUser}
}

export default useRetrieveUser;