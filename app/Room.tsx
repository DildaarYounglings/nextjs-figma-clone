import { RoomProvider } from '../liveblocks.config'
import React, { ReactNode } from 'react';
import {ClientSideSuspense} from "@liveblocks/react";

export function Room({children}:{children:ReactNode}){
  return (
    <RoomProvider id="my-room" initialPresence={{}}>
        <ClientSideSuspense fallback={<div>Loading...</div>}>
            {() => children}
        </ClientSideSuspense>
    </RoomProvider>
  )
}