import React, { useEffect } from "react";
import CRMLayout from "../../pages/shared/CRMLayout";
import { useSelector, useDispatch } from "react-redux";
import { setCRMId } from "../../store/menuSlice";
import Navbar from "@components/Navbar/Navbar";
import Sidebar from "@components/Sidebar/Sidebar";


const id = 0;
const index = () => {
  //const dispatch = useDispatch();
 // const { CRMMenuId } = useSelector((state) => state.menuReducer);
 // useEffect(() => {
 //   dispatch(setCRMId(id));
 // }, []);
  return (
    <div>
      <Navbar />
      <Sidebar/>
    </div>
  );
};

export default index;
