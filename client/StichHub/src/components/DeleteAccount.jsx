import { useState } from "react";
import axios from "../axios.js";
import { useNavigate } from "react-router-dom";

function DeleteConfirmation({ user, accountType, setIsDelete }) {
  const [confirmMessage, setConformMessage] = useState("");
  const [disable, setDisable] = useState(true);
  const navigateTo = useNavigate();

  const handleChange = (e) => {
    const message = user.result.name + ": StichHub Delete my Account.";
    if (message === e.target.value) {
      setDisable(false);
    }
    setConformMessage(e.target.value);
  };

  const deleteAccount = async () => {
    try {
      const res = (accountType === "customer")
        ? await axios.post("/userCustomer/delete", {email: user.result.email})
        : await axios.post("/userTailor/delete", {email: user.result.email});
   console.log(res.data.result);
      if(res.data.result){
        alert("Account Deleted Successfully")
        localStorage.clear();
        navigateTo("/");
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div
      className="absolute top-0 left-0 flex justify-center z-10"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.2)",
      }}
    >
      <div
        className="text-center p-5 pt-12 rounded-xl text-centre m-auto bg-white"
        style={{ witdh: "40vw", height: "50vh" }}
      >
        <strong className="text-xl m-6">
          Are you sure you want to delete your account?
        </strong>
        <p className="m-6 text-xl">
          <strong>Important Note:</strong> We will immediately delete all of
          your data from our site
        </p>
        <div>
          <label htmlFor="messgae" className="text-xl">
            To <em>verify</em> type, <strong>{"{"}Name{"}"}: StichHub Delete my
            Account.</strong>
          </label>
          <input
            type="text"
            name="verifyMessage"
            id="name"
            placeholder="Ex: Jhon Doe: Stichhub Delete my Account"
            required={true}
            value={confirmMessage}
            onChange={handleChange}
            className="my-[10px] m-auto block w-[500px] py-2 pl-[15px] bg-white border rounded-xl text-xl shadow-sm drop-shadow-lg placeholder-slate-600 text-black focus:font-medium
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                "
          />
        </div>
        <button
          disabled={disable}
          className="block bg-red-700 w-[500px] m-auto text-white py-3 px-3 rounded-lg mb-3  disabled:cursor-not-allowed cursor-pointer hover:bg-red-500 my-[10px]"
          onClick={deleteAccount}
        >
          Delete Account
        </button>
        <button
          className="bg-green-700 w-[500px] m-auto text-white py-3 px-3 rounded-lg mb-3 disabled:cursor-not-allowed cursor-pointer hover:bg-green-500 my-[10px]"
          onClick={()=>setIsDelete(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirmation;
