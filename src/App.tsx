import WebApp from "@twa-dev/sdk";
import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
//import { useTonConnect } from "./hooks/useTonConnect";
import { useEffect, useState } from "react";

function App() {
  //const { connected } = useTonConnect();
  const [isMiniApp, setIsMiniApp] = useState(false);
  const [loginData, setLoginData] = useState(false);

  useEffect(() => {
    //console.log("WebApp:", WebApp);
    if (WebApp.initData) {
      setIsMiniApp(true);
      //const initData = WebApp.initData;
      const initDataParsed = WebApp.initDataUnsafe;

      if (initDataParsed && initDataParsed.user?.username) {
        WebApp.showAlert(initDataParsed.user.username);

        setLoginData(true);
        // 发送登录信息到后端
        // fetch("/api/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(user),
        // })
        //   .then((response) => response.json())
        //   .then((data) => {
        //     console.log("Login info sent:", data);
        //   })
        //   .catch((error) => {
        //     console.error("Error sending login info:", error);
        //   });
      }
    } else {
      //console.log("WebApp:", WebApp);
    }
  }, []);

  return (
    <div className="App">
      <div className="Container">
        {isMiniApp ? (
          loginData ? (
            <div>
              <h1>Welcome</h1>
              <TonConnectButton />
            </div>
          ) : (
            <div>Loading...</div>
          )
        ) : (
          <div>
            <h1>Please open this app in Telegram</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
