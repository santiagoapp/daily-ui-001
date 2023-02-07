export const getAutorization = async (token: string) => {
  return await fetch("https://daily-ui-001.herokuapp.com/auth-endpoint", {
    method: "GET",
    headers: {
      "x-access-token": token,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem("user-token", token);
        return { canAccess: true, token };
      } else {
        localStorage.clear();
        return { canAccess: false };
      }
    })
    .catch((error) => {
      console.log(error);
      localStorage.clear();
      return { canAccess: false };
    });
};

type LoginProps = {
  email: string;
  password: string;
};

export const login = async ({ email, password }: LoginProps) => {
  localStorage.clear();
  const headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  return await fetch("https://daily-ui-001.herokuapp.com/login", {
    method: "POST",
    headers: headersList,
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json().then((data) => {
          localStorage.setItem("user-token", data.token);
          return data;
        });
      }
      return false;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};

type RegisterProps = {
  fullname: string;
  email: string;
  password: string;
};

export const register = async ({
  fullname,
  email,
  password,
}: RegisterProps) => {
  const headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  return await fetch("https://daily-ui-001.herokuapp.com/register", {
    method: "POST",
    headers: headersList,
    body: JSON.stringify({
      fullname,
      email,
      password,
    }),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json().then((data) => {
          return data;
        });
      }
      return false;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};
