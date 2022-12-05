// pages/index.js
import { useState } from "react";
import Home from "../components/Home";
import Result from "../components/Result";
import Loading from "../components/Loading";
const Index = () => {
  const [submit, setSubmit] = useState(false);
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  const [jobInput, setJobInput] = useState("");
  const [pdfText, setPdfText] = useState("");

  return (
    <div>
      {loading ? (
        <Loading />
      ) : submit ? (
        <Result
          result={result}
          setResult={setResult}
          loading={loading}
          setLoading={setLoading}
          setSubmit={setSubmit}
          jobInput={jobInput}
          setJobInput={setJobInput}
          submit={submit}
        />
      ) : (
        <Home
          submit={submit}
          setSubmit={setSubmit}
          result={result}
          setResult={setResult}
          loading={loading}
          setLoading={setLoading}
          jobInput={jobInput}
          setJobInput={setJobInput}
          pdfText={pdfText}
          setPdfText={setPdfText}
        />
      )}
    </div>
  );
};

export default Index;
