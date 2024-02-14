"use client";
import { ClientSideSuspense } from "@liveblocks/react";

import { RoomProvider } from "@/liveblocks.config";

const Room = ({ children }: { children: React.ReactNode }) => {
  return (
    <RoomProvider
      id="fig-room"
      /**
       * initialPresence is used to initialize the presence of the current
       * user in the room.
       *
       * initialPresence: https://liveblocks.io/docs/api-reference/liveblocks-react#RoomProvider
       */
      initialPresence={{}}
    >
      <ClientSideSuspense fallback={<div>loading...</div>}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}

export default Room;