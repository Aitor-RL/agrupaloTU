import { createRandomGroups } from './src/utils'
import './style.css'

document.getElementById('group').addEventListener('click', handlerGroup)

function handlerGroup() {
  let elements = document.getElementById('elements').value.split('\n')
  elements = elements.filter(e=>e!='')
  const groupsItems = parseInt(document.getElementById('groupsItems').value)
  const data = createRandomGroups(elements, groupsItems)
  const { inGroups, noGroups } = data
  let msg = ''
  inGroups.forEach(
    (group, i) => (msg += `Grupo ${i}: ${group.join(',')} <br/>`)
  )
  if(noGroups.length) msg += 'No están en grupo:' + noGroups.join(',')
  document.getElementById('finalGroups').innerHTML = msg
}
