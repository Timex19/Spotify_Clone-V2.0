import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Dashboard from "../components/Dashboard";
import Loader from "../components/Loader";

export default function Home() {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/signin");
    },
  });

  // Loading animation...
  if (status === "loading") {
    return <Loader />;
  }

  return (
    <div className="">
      <Head>
        <title>Spotify - Dashboard</title>
        <link rel="icon" href="https://www.scdn.co/i/_global/favicon.png" />
      </Head>
      <Dashboard />
    </div>
  );
}