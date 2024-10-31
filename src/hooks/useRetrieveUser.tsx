import { useDispatch } from "react-redux"
import { login } from "../redux/slices/userDataSlice";
import { loginToken } from "../redux/slices/tokenSlice";

const useRetrieveUser = () =>{
    const dispatch = useDispatch();
    const retrieveUser = ()=>{
        const localUserData = localStorage.getItem("userData");
        const localTokenData = localStorage.getItem("token");
        if(localUserData && localTokenData){
            dispatch(login(JSON.parse(localUserData)));
            dispatch(loginToken(localTokenData));
        }
    }

    return {retrieveUser}
}

export default useRetrieveUser;