"use client";
import { useRouter } from "next/navigation";

export default function ButtonRedirect() {
  const router = useRouter();

  const handleNavigateToLogin = () => {
    router.push("/login");
  };
  return (
    <button onClick={handleNavigateToLogin}>Navigate to Login Page</button>
  );
}
