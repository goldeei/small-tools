import { useState } from "react";

import { Button } from "../../../Buttons";

function ThemeControl() {
  const [isTheme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme")
  );

  function changeTheme() {
    let newThemeSettings = {
      deviceTheme: false,
      theme: isTheme === "light" ? "dark" : "light",
    };
    document.documentElement?.setAttribute(
      "data-theme",
      newThemeSettings.theme
    );
    localStorage.setItem("theme", JSON.stringify(newThemeSettings));
    setTheme(newThemeSettings.theme);
  }

  return (
    <Button onClick={() => changeTheme()}>
      {isTheme === "light" ? <span>Dark</span> : <span>Light</span>}
    </Button>
  );
}

export default ThemeControl;
