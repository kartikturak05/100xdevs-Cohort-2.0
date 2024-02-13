import { useState } from 'react'
import {RecoilRoot,useRecoilValue,useRecoilState} from "recoil"
import { jobsAtom, messagingAtom, networkAtom ,notificationAtom, totalNotificationCountSelector} from './atom'


function App() {
  return <RecoilRoot>
    <MainApp></MainApp>
  </RecoilRoot>
}

function MainApp(){
  const notificationCount = useRecoilValue(notificationAtom);
  const networkCount = useRecoilValue(networkAtom);  
  const[ messageCount,setMessagingAtomCount] = useRecoilState(messagingAtom);  //useSetRecoil return only function to update value
  const jobsCount = useRecoilValue(jobsAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationCountSelector)

  return (
   <div>
      <button>Home</button>
      <button>My Network {networkCount>=100 ? "99+" : networkCount}</button>
      <button>Jobs {jobsCount}</button>
      <button>Messaging {messageCount}</button>
      <button>Notification {notificationCount}</button>
      <button onClick={()=>{
        setMessagingAtomCount(c=> c+1)
      }}>Me {totalNotificationCount}</button>
   </div>
  )
}

export default App
