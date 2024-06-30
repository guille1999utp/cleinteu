"use client"
import { Authentication } from "@/src/components/auth/components/Authentication";
import { useParams } from 'next/navigation';

export default function Home() {
  const router = useParams();
  const { id } = router;

    return (
      <>
        <Authentication id={id}/>
      </>
    );
  }