import "./index.css";
import LanguageSelect from "@/components/language-select";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="h-screen flex flex-col items-center w-full py-14">
        <div className="h-full flex flex-col justify-around min-w-96">
          <div className="flex-grow-[1] flex justify-end">
            <LanguageSelect></LanguageSelect>
          </div>
          <div className="flex-grow-[9]">{children}</div>
        </div>
      </main>
    </>
  );
}
