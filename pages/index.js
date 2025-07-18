import { useState } from "react";

function Home() {
  const [liked, setLiked] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img
        src={liked ? "/heart_open.png" : "/heart_closed.png"}
        alt={liked ? "Coração aberto" : "Coração fechado"}
        style={{
          cursor: "pointer",
          width: "33vw",
          height: "auto",
          maxWidth: "100%",
          maxHeight: "80vh",
        }}
        onClick={() => setLiked(!liked)}
      />
      <div
        style={{
          marginTop: "2rem",
          maxWidth: "33vw",
          textAlign: "center",
          fontFamily: "'Times New Roman', Times, serif",
          fontSize: "1.5rem",
          fontStyle: "italic",
          color: "#333",
          background: "#fff8f0",
          borderRadius: "12px",
          padding: "1.5rem",
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        }}
      >
        Minha graça,
        <br />
        Aqui tens meu coração.
        <br />
        Se o quiseres matar, bem o podes:
        <br />
        Olha que estás dentro dele,
        <br />
        Se o matas, também morres.
      </div>
    </div>
  );
}

export default Home;
