'use client'
import { useGetCalls } from '@/hooks/useGetCalls'
import { Call, CallRecording } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import MeetingCard from './MeetingCard';

const CallList = ({type}:{type:'ended' | 'upcoming'| 'recordings'}) => {
    const {endedCalls, upcomingCalls, callRecordings, isLoading} = useGetCalls();
    const router = useRouter();

    const [recordings,setRecordings] = useState<CallRecording[]>([]);

    const getCalls = ()=>{
        switch (type){
            case 'ended':
                return endedCalls;
            case 'recordings':
                return recordings;
            case 'upcoming':
                return upcomingCalls;
            default:
                return [];
        }
    }
    const getNoCallMessage = ()=>{
        switch (type){
            case 'ended':
                return 'No Previous Calls';
            case 'recordings':
                return 'No Recordings';
            case 'upcoming':
                return 'No Upcoming Calls';
            default:
                return '';
        }
    }

    const calls = getCalls();
    const NoCallMessage = getNoCallMessage();

  return (
    // <div className='grid gord-cols-1 gap-5 xl:grid-cols-2'>
    //     {calls && calls.length >0 ? calls.map((meeting: Call | CallRecording) =>(
    //         <MeetingCard/>
    //     )) : (
    //         <h1>{NoCallMessage}</h1>
    //     ) }
    // </div>
    <div className='grid gap-5  md:grid-cols-2 2xl:grid-cols-3'>
        <MeetingCard/>
        <MeetingCard/>
        <MeetingCard/>
        <MeetingCard/>
    </div>
  )
}

export default CallList