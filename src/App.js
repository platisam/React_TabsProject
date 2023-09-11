import React, { useState, useEffect } from "react";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  return <h2>Tabs Project Setup</h2>;
}

export default App;
