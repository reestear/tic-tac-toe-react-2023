import { useEffect, useState } from "react";
import MainLayout from "./layouts/MainLayout";
// import Zagruzka from "./components/Zagruzka";
import Grid from "./components/Grid";

function App() {
  const [grid, setGrid] = useState([
    { id: 1, text: "" },
    { id: 2, text: "" },
    { id: 3, text: "" },
    { id: 4, text: "" },
    { id: 5, text: "" },
    { id: 6, text: "" },
    { id: 7, text: "" },
    { id: 8, text: "" },
    { id: 9, text: "" },
  ]);
  const [user, setUser] = useState(true);
  const [gameOver, setGameOver] = useState(null);
  
  function clearGrid(){
    setGameOver(user ? "Zero" : "Cross");
    setUser(true);
    setGrid([
      { id: 1, text: "" },
      { id: 2, text: "" },
      { id: 3, text: "" },
      { id: 4, text: "" },
      { id: 5, text: "" },
      { id: 6, text: "" },
      { id: 7, text: "" },
      { id: 8, text: "" },
      { id: 9, text: "" },
    ]);
  }

  function isDraw(){
    let count = 0;
    for(let i = 0; i < 9; i++){
      if(grid[i].text != "") count++;
    }

    if(count == 9) return true;
    return false;
  }

  function checkWin(){
    // console.log("checkwin")
    // console.log(grid);

    for(let i = 0; i < 9; i += 3){
      if(grid[i].text != "" && grid[i].text == grid[i + 1].text && grid[i + 1].text == grid[i + 2].text){
        clearGrid();
      }
    }
    for(let i = 0; i < 3; i++){
      if(grid[i].text != "" && grid[i].text == grid[i + 3].text && grid[i + 3].text == grid[i + 6].text){
        clearGrid();
      }
    }
    if(grid[0].text != "" && grid[0].text == grid[4].text && grid[4].text == grid[8].text) {
      clearGrid();
    }
    else if(grid[2].text != "" && grid[2].text == grid[4].text && grid[4].text == grid[6].text) {
      clearGrid();
    }
    else if(isDraw()){
      setGameOver("Draw");
      setUser(true);
      setGrid([
        { id: 1, text: "" },
        { id: 2, text: "" },
        { id: 3, text: "" },
        { id: 4, text: "" },
        { id: 5, text: "" },
        { id: 6, text: "" },
        { id: 7, text: "" },
        { id: 8, text: "" },
        { id: 9, text: "" },
      ]);
    }
    
  }

  function handlePlay(elementID) {
    //NO NO push splice pop shift unshift
    //OK map forEach slice  filter find some
    const newGrid = grid.map((item) => {
      if (item.id === elementID && !item.text) {
        return { ...item, text: user ? "X" : "O" };
      } else return item;
    });
    setUser(!user);
    setGrid(newGrid);
    // checkWin();
  }
  checkWin();

  // console.log(grid);
  // if (!user) {
  //   return (
  //     <MainLayout>
  //       <Zagruzka />
  //     </MainLayout>
  //   );
  // }

  return (
    <MainLayout>
      <Grid grid={grid} gameOver={gameOver} handlePlay={handlePlay} />
    </MainLayout>
  );
}

export default App;
