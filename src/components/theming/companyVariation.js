import React from "react";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export let Parallax
export let CompanyName
export let CompanyAvatar

if (process.env.REACT_APP_COMPANY && process.env.REACT_APP_COMPANY==="Deloitte"){
  const Cover = require("../../img/Deloitte_world.jpg")
  const Company = require("../../img/Deloitte.png")
  const logo = require("../../img/ROI.png")
  const iconLink = document.querySelector("link[rel~='icon']");
  iconLink.href = `${process.env.PUBLIC_URL}/ROI.ico`
  Parallax = styled(Paper)(({ theme }) => ({
    m: 1,
    width: "100%",
    height: 500,
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    backgroundImage: `url(${Cover})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
  }));


  const CompanyImg = styled(Box,)(({ theme }) => ({
    width: "500px",
    height: "auto",
  }));



  CompanyName = () => {
    return <CompanyImg component="img" src={Company}/>
  }

  CompanyAvatar = (props) => {
    return <Avatar {...props} src= {logo}/>
  }
}
else{
  const Cover = require("../../img/Klabs_cover.jpg")
  const Company = require("../../img/Klabs_company.png")
  const logo = require("../../img/logo2.png")
  Parallax = styled(Paper)(({ theme }) => ({
    m: 1,
    width: "100%",
    height: 500,
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    backgroundImage: `url(${Cover})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
  }));


  const CompanyImg = styled(Box,)(({ theme }) => ({
    width: "300px",
    height: "auto",
    margin: "5px 15px",
  }));



  CompanyName = () => {
    return <CompanyImg component="img" src={Company}/>
  }

  CompanyAvatar = (props) => {
    return <Avatar {...props} src= {logo} style={{background:"white"}}/>
  }
}