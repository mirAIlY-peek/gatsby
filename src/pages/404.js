import * as React from "react";
import { Link } from "gatsby";

const pageStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f8f8f8",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const cardStyles = {
  background: "white",
  padding: "48px 64px",
  borderRadius: "12px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  maxWidth: "400px",
};

const emojiStyles = {
  fontSize: "64px",
  marginBottom: "16px",
};

const headingStyles = {
  marginBottom: "8px",
  fontSize: "28px",
  color: "#333",
};

const paragraphStyles = {
  color: "#666",
  marginBottom: "24px",
};

const buttonStyles = {
  padding: "12px 24px",
  backgroundColor: "black",
  color: "white",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "bold",
};


const NotFoundPage = () => {
  return (
      <main style={pageStyles}>
        <div style={cardStyles}>
          <div style={emojiStyles}>😕</div>
          <h1 style={headingStyles}>Упс! Страница не найдена</h1>
          <p style={paragraphStyles}>
            Такой страницы нет. Возможно, вы ошиблись в адресе.
          </p>
          <Link to="/" style={buttonStyles}>
            Вернуться на главную
          </Link>
        </div>
      </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>404 — Страница не найдена</title>;
