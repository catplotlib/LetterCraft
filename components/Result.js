import styles from "../styles/result.module.css";
import React, { useState } from "react";
function Result({
  result,
  setResult,
  setLoading,
  setSubmit,
  jobInput,
  pdfText,
  onSubmit,
}) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setIsCopied(true);
  };
  // console.log("result", result);
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Your new CV is here!</h1>
      <div className={styles.innerBody}>{result}</div>
      <div className={styles.buttons}>
        <button
          className={styles.btn}
          onClick={() => {
            setSubmit(false);
          }}
        >
          Regenerate
        </button>
        <button className={styles.btn} onClick={handleCopy}>
          {isCopied ? "Copied!" : "CopyCV"}
        </button>
      </div>
    </div>
  );
}

export default Result;
