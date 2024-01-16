import React, { useEffect, useState } from 'react'
import { createContext } from "react";
import { useSession } from 'next-auth/react';
import DefaultContextInterface from '@/interfaces/default.interface';
import User from '@/database/entities/user';
import { ROLE_PT_BR } from '@/types/roles';
export const DefaultContext = createContext<DefaultContextInterface>({} as any)

export default function DefaultProvider({ children }: any) {
  const { data: session } = useSession();
  let userSession: any = session;
  const [user, setuser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (userSession && userSession.token) {
        setuser({
          name: userSession?.token?.name,
          role: userSession?.token?.role as any,
          email: userSession?.token?.email,
          id: userSession?.token?.id,
          created_at: userSession?.token?.created_at,
        });
      }
    };
    fetchData();
  }, [userSession]);










  return (
    <DefaultContext.Provider value={{
      user,
    }}>
      {children}


    </DefaultContext.Provider>
  );
}