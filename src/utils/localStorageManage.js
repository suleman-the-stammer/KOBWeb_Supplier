const getUser = ()=>{
    try{
        const u = localStorage.getItem("madrasaUserData");
        if(u){
            return JSON.parse(u);
        } else {
            return null;
        }
    } catch(err){
        console.log("Unable to get user", err);
        return null;
    }
}

const setUser = (user)=>{
    try{
        localStorage.setItem("madrasaUserData", JSON.stringify(user));
    } catch(err){
        console.log("Unable to set user", err);
        return null;
    }
}

const getToken = ()=>{
    try{
        const t = localStorage.getItem("madrasaToken");
        if(t){
            return t;
        } else {
            return null;
        }
    } catch(err){
        console.log("Unable to get token", err);
        return null;
    }
}

const setToken = (token)=>{
    try{
        localStorage.setItem("madrasaToken", token);
    } catch(err){
        console.log("Unable to set token", err);
        return null;
    }
}

const clearStorage = ()=>{
    localStorage.clear();
}

const localStorageManager = {
    getToken,
    setToken,
    getUser,
    setUser,
    clearStorage,
}

export default localStorageManager;