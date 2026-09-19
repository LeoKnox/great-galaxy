import { createContext, useContext, useState } from "react";

const CharacterMenuContext = createContext(null);

export function CharacterMenuProvider({ children }) {
  const [playerMenu, setPlayerMenu] = useState([]);

  return (
    <CharacterMenuContext.Provider value={{ playerMenu, setPlayerMenu }}>
      {children}
    </CharacterMenuContext.Provider>
  );
}

export function useCharacterMenuContext() {
  return useContext(CharacterMenuContext);
}
