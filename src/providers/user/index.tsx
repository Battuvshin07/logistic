import { User } from "@/api/user";
import { useRequest } from "ahooks";
import { createContext, PropsWithChildren, useContext } from "react";
import { user as userApi } from "@/api";

export type UserContext = {
  setToken: (token: string | null) => void;
  user: User | null;
  loading: boolean;
};
const userContext = createContext<UserContext>({} as any);

export function useUser() {
  return useContext(userContext);
}
export default function UserProvider({ children }: PropsWithChildren) {
  const {
    data: user,
    loading,
    run: setToken,
  } = useRequest(
    async (token: string | null) => {
      if (!token) {
        localStorage.removeItem("token");
        return;
      }
      const res = await userApi.info(token);
      if (!res.ok) throw res.error;
      localStorage.setItem("token", token);
      return res.data;
    },
    {
      defaultParams: [localStorage.getItem("token")],
      onError: () => {
        localStorage.removeItem("token");
      },
    }
  );

  return (
    <userContext.Provider value={{ setToken, user: user || null, loading }}>
      {children}
    </userContext.Provider>
  );
}
