import { User } from "@/api/user";
import { useRequest } from "ahooks";
import { createContext, PropsWithChildren, useContext } from "react";
import { user as userApi } from "@/api";

export type * as Error from "./error";

export type UserContext = {
  user: User | null;
  loading: boolean;
  setToken: (token?: string | null) => void;
};
const userContext = createContext<UserContext>({} as any);

export function useUser() {
  return useContext(userContext);
}
export default function UserProvider({ children }: PropsWithChildren) {
  const {
    data: user,
    loading,
    run,
  } = useRequest(
    async () => {
      const token = localStorage.getItem("token");
      if (!token) return null;
      return await userApi.info(token);
    },
    {
      onError: (e) => {
        console.error(e);
        localStorage.removeItem("token");
      },
    }
  );
  const setToken = (token?: string | null) => {
    if (!token) return localStorage.removeItem("token");
    localStorage.setItem("token", token);
    run();
  };

  return (
    <userContext.Provider value={{ user: user || null, loading, setToken }}>
      {children}
    </userContext.Provider>
  );
}
