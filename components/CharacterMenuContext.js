import { createContext, useContext, useState } from "react";

const CharacterMenuContext = createContext(null);

export function CharacterMenuProvider({ name }) {
  const [playerMenu, setPlayerMenu] = useState([]);

  return (
    <CharacterMenuContext.Provider value={{ playerMenu, setPlayerMenu }}>
      {name}
    </CharacterMenuContext.Provider>
  );
}

export function useCharacterMenuContext() {
  return useContext(CharacterMenuContext);
}
