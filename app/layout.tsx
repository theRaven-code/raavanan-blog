import "@/styles/globals.css";
import Provider from "@/components/Provider";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Raavanan Blog",
  description: "Raavanan Blog",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Provider session={""}>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
