import { useSession } from "next-auth/react";
import Dashboard from "../components/Dashboard";
import { useRouter } from "next/router";
import { useEffect } from "react";

const DashboardPage: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      // Kullanıcı oturum açmamışsa giriş sayfasına yönlendir
      router.push("/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Yükleniyor...</p>;
  }

  return <Dashboard />;
};

export default DashboardPage;
