import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <button
        id="Insta"
        onClick={() =>
          window.open("https://www.instagram.com/tunakizilirmak/", "_blank")
        }
      >
        Instagram
      </button>
      <button
        id="Git"
        onClick={() => window.open("https://github.com/krattyy", "_blank")}
      >
        GitHub
      </button>
      <button
        id="Linkedin"
        onClick={() =>
          window.open("https://www.linkedin.com/in/tunakizilirmak/", "_blank")
        }
      >
        LinkedIn
      </button>
      <button
        id="Whatsapp"
        onClick={() => window.open("https://wa.me/905426938003", "_blank")}
      >
        WhatsApp
      </button>

      <p id="copyright">
        Copyright © Tuna Enes Kızılırmak 2023. Tüm hakları saklıdır.
      </p>
    </>
  );
}

export default Contact;
