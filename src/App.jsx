import ClockList from "./components/clock-list"
import LocalClock from "./components/local-clock"
import useClock from "./hooks/useCLock"

function App() {
  const { clock:local } = useClock()
  const { clock:est }=  useClock('EST')
  const { clock:pst } = useClock( 'PST')
  const { clock:edt } = useClock( 'EDT')
  const { clock: pakistan } = useClock('UTC', 5 * 60)
  const { clock: british } = useClock('BST')
  const { clock: mst } = useClock('MST')
  console.log('Local UTC', local.date);
  console.log('Local EST', est.date);
  console.log('Local PST', pst.date);
  console.log('Pakistan', pakistan.date);
  console.log('EDT', edt.date);
  console.log('MST', mst.date);
  return (
    <div>
      <LocalClock />
      <ClockList />
    </div>
  )
}
export default App
