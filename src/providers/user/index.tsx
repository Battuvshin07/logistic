import { User } from "@/api/user";
import { useRequest } from "ahooks";
import { createContext, PropsWithChildren, useContext } from "react";
import { user as userApi } from "@/api";

export type UserContext = {
  user: User | null;
  loading: boolean;
};
const userContext = createContext<UserContext>({} as any);

export function useUser() {
  return useContext(userContext);
}
export default function UserProvider({ children }: PropsWithChildren) {
  const { data: user, loading } = useRequest(userApi.info, {
    onError: () => {
      localStorage.removeItem("token");
    },
  });

  return (
    <userContext.Provider value={{ user: user || null, loading }}>
      {children}
    </userContext.Provider>
  );
}
