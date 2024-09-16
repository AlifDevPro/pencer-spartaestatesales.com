import Style from "./conctactDetail.module.scss";

//icons
import { IoIosCall } from "react-icons/io";
import { LuMail } from "react-icons/lu";

export default function ContactDetails({ varient, lebel }: { varient: String, lebel: String }) {
  return (
    <div className={Style.contactDetail}>
      <h2>{lebel}</h2>
      <div>
        {varient === "call" ? (
          <>
            <IoIosCall color="#FC6A00" />
            <p>423-497-2750</p>
          </>
        ) : (
          <>
            <LuMail color="#FC6A00" /> <p>info@5starestateliquidations.com</p>
          </>
        )}
      </div>
    </div>
  );
}
