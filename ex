import { useState } from "react";
import styles from "../styles/home.module.css";
import File from "./File";

export default function Hero({ submit, setSubmit, result, setResult }) {
  const [jobInput, setJobInput] = useState("");
  const [pdfText, setPdfText] = useState("");
  // console.log(pdfText);

  const handleDisplayResults = () => {
    setSubmit(true);
  };

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ job: jobInput, pdfText: pdfText }),
    });
    const data = await response.json();
    setResult(data.result);
    console.log(data.result);
    setJobInput("");
  }
  return (
    <div>
      <main className={styles.main}>
        {/* <h3>Name my pet</h3> */}
        <h1 className={styles.heading}>
          Craft a winning cover letter in minutes with our easy-to-use
          generator.
        </h1>
        <div className={styles.innerBody}>
          <File pdfText={pdfText} setPdfText={setPdfText} />
          <div className={styles.formSubmit}>
            <form onSubmit={onSubmit}>
              <p>What job are you applying to?</p>
              <input
                style={{ border: "2px solid #8A8888" }}
                className={styles.input}
                type="text"
                value={jobInput}
                onChange={(event) => setJobInput(event.target.value)}
              />
              <button
                className={styles.button}
                type="submit"
                onClick={handleDisplayResults}
              >
                Generate!
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
