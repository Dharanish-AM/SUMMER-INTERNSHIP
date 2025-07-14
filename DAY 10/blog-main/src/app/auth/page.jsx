useEffect(() => {
  const fetchPairCode = async () => {
    try {
      const response = await generateCode(user._id);
      const code = response.code;
      const expiresAt = response.expiresAt;
      setPairCode(code);
      setExpiresAt(expiresAt);
    } catch (error) {
      console.error("Error fetching pair code:", error);
    }
  };
  fetchPairCode();
}, [user]);

useEffect(() => {
  const interval = setInterval(() => {
    if (expiresAt) {
      const msLeft = new Date(expiresAt) - new Date();
      const seconds = Math.floor(msLeft / 1000);

      if (seconds <= 0) {
        setPairCode(null);
        setExpiresAt(null);
        setCountdown('');
      } else if (seconds < 60) {
        setCountdown(`Expires in: ${seconds}s`);
      } else {
        setCountdown(`Expires in: ${Math.floor(seconds / 60)}m`);
      }
    }
  }, 1000);
  return () => clearInterval(interval);
}, [expiresAt, pairCode]);
