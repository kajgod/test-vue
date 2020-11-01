export default {
  submitForm: async (load) => {
    const host = window.location.hostname;
    const target = `http://${host}:3334/API/contact`;
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(load),
    };
    try {
      const fetchResponse = await fetch(target, settings);
      const data = await fetchResponse.json();
      return data;
    } catch (e) {
      return { errors: [e] };
    }
  },
};
