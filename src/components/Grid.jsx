export default function Grid(props) {
  const {gameOver} = props;
  console.log(gameOver)
  return (
    <>
      <div className="grid grid-cols-3 m-auto w-fit">
        {props.grid.map((element) => (
          <div key={element.id} className="relative group">
            <div className="absolute transition duration-500 opacity-75 -inset-1 bg-gradient-to-r from-slate-950 via-red-600 to-stone-700 blur group-hover:opacity-100"></div>
            <button
              onClick={() => props.handlePlay(element.id)}
              className="relative w-24 h-24 transition duration-500 bg-slate-950 hover:bg-slate-800"
            >
              {element.text}
            </button>
          </div>
        ))}
      </div>
      {gameOver && gameOver != "Draw" ? <div style={{display:"flex", justifyContent: "center", color: "white"}}> Last winner is {gameOver}</div> : <div style={{display:"flex", justifyContent: "center", color: "white"}}> Draw </div>}
    </>
  );
}
