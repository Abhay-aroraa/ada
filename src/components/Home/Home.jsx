import React, { useState, useCallback } from 'react'

import Offer from '../offer/offer'
import Newarrivals from '../New arrivals/Newarrivals'

import Newletter from '../Newlatter/Newletter'
import Item from '../Menitems/Item'
import Newcoll from '../Newcollection/Newcoll'
export default function Home(props) {
  return (
    <>
      <div>
        <Newarrivals />
        <Item />
        <Offer />
        <Newcoll />
        <Newletter />
      </div>
    </>
  )
}

