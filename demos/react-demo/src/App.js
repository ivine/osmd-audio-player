import Score from './components/Score.jsx'

function App() {
  return (
    <div className="App">
      {/* <Score file="/Love_96_Solo.xml"/> */}
      {/* <Score file={`Love ( 96' Solo)[总谱,现场版].xml`} /> */}
      <Score file={`Mojito.xml`} />
    </div>
  );
}

export default App;