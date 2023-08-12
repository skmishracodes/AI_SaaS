'use client'

import { useEffect } from "react"
import { Crisp } from 'crisp-sdk-web'


export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("07a1f578-3d3b-4bf3-9775-23660780629d")
    },[])

    return null
}