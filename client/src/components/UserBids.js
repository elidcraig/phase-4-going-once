import React, {useEffect} from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { currentUserState } from '../state/CurrentUserState'

function UserBids() {

  const userId = useRecoilValue(currentUserState)

  useEffect(() => {
    fetch(`/dashboard`)
        .then(res => res.json())
        .then(console.log)
  }, [])



  return (
    <div>


    </div>
  )
}

export default UserBids