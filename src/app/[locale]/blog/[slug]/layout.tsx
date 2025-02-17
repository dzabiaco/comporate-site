import Footer from "@/src/app/components/Footer";
import Header from "@/src/app/components/Header";

export default function SlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
}