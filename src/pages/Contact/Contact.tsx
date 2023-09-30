import React from "react";
import JoinInvitation from "./components/JoinInvitation";
import CommonQuestions from "./components/CommonQuestions";
import CollaborationInvitation from "./components/CollaborationInvitation";
import { makeStyles } from "tss-react/mui";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";

const Contact = () => {
  const { classes } = useStyles();

  return (
    <>
      <Header />
      <main className={classes.contactScreen}>
        <JoinInvitation />
        <CommonQuestions />
        <CollaborationInvitation />
      </main>
      <Footer />
    </>
  );
};

const useStyles = makeStyles()((theme) => ({
  contactScreen: {
    display: "flex",
    flexDirection: "column",
    gap: 144,
    margin: "144px 0",
  },
}));

export default Contact;
