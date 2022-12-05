import { useState } from "react";
import styles from "../styles/home.module.css";
import File from "./File";

export default function Hero({
  submit,
  setSubmit,
  result,
  setResult,
  loading,
  setLoading,
  jobInput,
  setJobInput,
  pdfText,
  setPdfText,
}) {
  // console.log(pdfText);

  async function onSubmit(event) {

    setLoading(true);
    event.preventDefault();
    const response = await fetch(
      `/.netlify/functions/api/generate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ job: jobInput, pdfText: pdfText }),
      }
    );
    const data = await response.json();
    setResult(data.result);
    console.log(data.result);
    setJobInput("");
    setSubmit(true);
    setLoading(false);
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
                required
                type="text"
                value={jobInput}
                onChange={(event) => setJobInput(event.target.value)}
              />
              <button className={styles.button} type="submit">
                Generate!
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
