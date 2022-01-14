import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";
const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "yty",
      company: "samsung",
      theme: "light",
      title: "Software Engineer",
      email: "yty0643@naver.com",
      message: "go for it",
      fileName: "taeyoung",
      fileURL: null,
    },
    {
      id: "2",
      name: "yty2",
      company: "samsung",
      theme: "dark",
      title: "Software Engineer",
      email: "yty0643@naver.com",
      message: "go for it",
      fileName: "taeyoung",
      fileURL: null,
    },
    {
      id: "3",
      name: "yty3",
      company: "samsung",
      theme: "colorful",
      title: "Software Engineer",
      email: "yty0643@naver.com",
      message: "go for it",
      fileName: "taeyoung",
      fileURL: null,
    },
  ]);
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};
export default Maker;
