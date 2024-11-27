
const useStringMutation = ()=>{

    const uppercaseFirstChar = (string:string)=>{
        return string[0].toUpperCase() + string.slice(1);
    }

    const upperCaseFirstCharAll = (string:string)=>{
       let stringArray = string.split(" ");
       let completeStringArray = stringArray.map(el=>uppercaseFirstChar(el));
       return completeStringArray.join(" ");
    }

    return {upperCaseFirstCharAll};
}

export default useStringMutation;