const AuthErrorMessage = ({message,name})=>{
    return   <div className="flex justify-center">
    <p className="text-red-500 m-2 text-center w-72 text-sm mt-0" id={`${name}-error`} role="alert">{message}</p>
  </div>
  }
  
  export default AuthErrorMessage;
