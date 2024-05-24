import Image from "next/image";
import avatar from "@/public/noavatar.png";

import styles from "./id.module.css";
const SingleUserpage = () => {
  return (
    <div className="flex gap-12 mt-5">
      <div className="flex-[1] p-5 rounded-md bg-[#182237] font-bold">
        <div className="w-full h-[250px] relative rounded-md overflow-hidden bg-white mb-5">
          <Image src={avatar} alt="avatar" fill />
        </div>
        Sunny mubarok
      </div>
      <div className="flex-[3] p-5 rounded-md bg-[#182237]">
        <form action="" className={`${styles.form} flex flex-col`}>
          <label>Username</label>
          <input type="text" name="username" placeholder="sunny mubarok" />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="sunnymubarok@gmail.com"
          />
          <label>Password</label>
          <input type="password" name="password" placeholder="sunny mubarok" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="+62831482xxxx" />
          <label>Address</label>
          <textarea name="adresss" id="" placeholder="karawang "></textarea>
          <label>Is admin?</label>
          <select name="isadmin" id="isadmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is active?</label>
          <select name="isadmin" id="isadmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button className="w-full p-5 border-none rounded mt-5 bg-[#008080]">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserpage;
