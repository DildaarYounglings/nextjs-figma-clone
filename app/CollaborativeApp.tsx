"use client";
import {useOthers} from "../liveblocks.config";
export function ColaborativeApp(){
    const others = useOthers();
    const userCount = others.length;
    return <div>There are {userCount} other user(s) online</div>
}