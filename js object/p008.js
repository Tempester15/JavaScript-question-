function showClock() {
    setInterval(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-GB'); // "HH:MM:SS"
      console.log(timeStr);
    }, 1000);
  }
  
  showClock();
 // Console updates every second like:
  