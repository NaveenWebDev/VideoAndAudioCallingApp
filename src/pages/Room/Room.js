import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomId } = useParams();

  const myMeeting = async (ele) => {
    const appId = 1371270816;
    const serverSecret = "3263766296030e4c7904c618f12c0d82";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Naveen Sharma"
    );
    const zego = ZegoUIKitPrebuilt.create(kitToken);
    zego.joinRoom({
        container:ele,
        sharedLinks:[
            {
                name:'copyLink',
                url:`http://localhost:3000/room/${roomId}`,
            }
        ],
        scenario:{
            mode:ZegoUIKitPrebuilt.OneONoneCall
        },
        showScreenSharingButton:true,
    })
  };

  return (
    <div style={{height:"100vh"}} className="room">
        <div ref={myMeeting} className="meeting" />
    </div>
  );
};

export default Room;
