import ButtonRedirect from "@/app/components/ButtonRedirect";
import Link from "next/link";
import { redirect } from "next/navigation";

const isAuth = true;
export default function Home() {
  if (!isAuth) {
    redirect("login");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
      </ul>
      <ButtonRedirect />
    </main>
  );
}
