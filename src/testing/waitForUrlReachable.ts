import axios from "axios";

const waitForURLReachable = async (url: string, { timeout = 60000 } = {}) => {
  const timeoutThreshold = Date.now() + timeout;

  while (true) {
    try {
      const response = await axios.get(url, { timeout: 100 });

      return response;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status) {
        return;
      }

      if (Date.now() > timeoutThreshold) {
        throw new Error(`URL ${url} not reachable after ${timeout}ms`);
      }

      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }
};

export default waitForURLReachable;
