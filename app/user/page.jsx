"use client"
import { Box } from "@mui/material";
import Image from "next/image";
import UserIcon from "@/src/assets/icons/userIcon.png";
import { useSession } from 'next-auth/react';
import { Navbar } from '@/src/components/global/components/auth/nabvar';

function User() {

    const { data: session, status } = useSession();

    return (
      <>
        <Navbar />
        <Box
          component="div"
          className="flex flex-col lg:flex-row items-center justify-around "
          style={{ height: "calc(100vh - 100px)" }}
        >
          <div class="flex items-center space-x-3 rtl:space-x-reverse">
            <div class="flex-shrink-0">
              <Image
                className="w-16 h-16 rounded-full"
                src={UserIcon}
                alt="Neil image"
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-xl font-semibold text-gray-900 truncate">{session?.user?.name}</p>
              <p class="text-base text-gray-500 truncate">{session?.user?.email}</p>
            </div>
            <div class="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-2 rounded-full">
              <span class="w-4 h-4 me-3 bg-red-500 rounded-full"></span>
              <p className="text-md">Pendiente</p>
            </div>
          </div>
        </Box>
      </>
    );
}


export default User;