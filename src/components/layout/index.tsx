import "./index.css";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="h-screen flex flex-row justify-center items-center min-w-96">
        <div>{children}</div>
      </main>
    </>
  );
}
