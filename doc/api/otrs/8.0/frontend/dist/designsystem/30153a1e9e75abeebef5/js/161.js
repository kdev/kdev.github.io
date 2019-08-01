(window.webpackJsonp=window.webpackJsonp||[]).push([[161,58,239],{"+3YS":function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},"+bRE":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},IZlg:function(e,t,i){"use strict";i.r(t);var n=i("nxTg"),a=i.n(n),o=(i("W1QL"),i("K/PF"),i("t91x"),i("3DBk"),i("e2Kn"),i("me7x")),s={name:"ChatVideo",components:{ChatConversation:function(){return i.e(226).then(i.bind(null,"4DBq"))},AudioVolume:function(){return i.e(70).then(i.bind(null,"ZqpL"))},VideoMute:function(){return i.e(73).then(i.bind(null,"iMOA"))},AudioMute:function(){return i.e(69).then(i.bind(null,"TOBL"))},CallEnd:function(){return i.e(71).then(i.bind(null,"iSMn"))},VideoExpand:function(){return i.e(72).then(i.bind(null,"iAEM"))},CommonAvatarExternal:function(){return i.e(53).then(i.bind(null,"62pd"))},CommonDialog:function(){return i.e(11).then(i.bind(null,"CqLK"))}},props:{authenticated:{type:Boolean},chatData:{type:Object},integrationConfig:{type:Object},noAnswerThreshold:{type:Number},publicUserId:{type:String,default:""},isAudioCall:{type:Boolean,default:!1},isInvited:{type:Boolean,default:!1},primaryColor:{type:String}},data:function(){return{config:null,stream:null,signalReceiveIntervalId:null,signalReceiveIntervalDelay:4e3,statusMessage:"",requesterConnection:null,iceSendingIntervalId:null,iceSendingIntervalDelay:2e3,iceCandidates:[],isAudioMuted:!1,isVideoMuted:this.isAudioCall,isTargetAudioMuted:!1,isTargetVideoMuted:this.isAudioCall,audioVolume:1,callActive:!1,popupModalTitle:"End active call",popupModalText:"This action will end your active call. Do you want to continue?",popupModalYes:"Yes",popupModalNo:"No",popupModalOkCallback:function(){},expanded:!1,isBeingDestroyed:!1}},computed:{popupModalId:function(){return"popupModal-".concat(this._uid)},chatStatus:function(){return this.chatData.Status}},watch:{authenticated:function(){this.leaveSend(),this.destroy()},chatStatus:function(e){"active"!==e&&this.$emit("end")},audioVolume:function(e){this.$refs.targetVideo.volume=e}},beforeDestroy:function(){this.isBeingDestroyed=!0,this.leaveSend(),this.destroy()},mounted:function(){this.videoChatConfigFetch()},methods:{showPopupModal:function(){this.$refs.popupModal.open()},back:function(){var e=this;this.popupModalOkCallback=function(){e.$emit("back"),e.$refs.popupModal.close()},this.showPopupModal()},expand:function(e){this.expanded=e},change:function(){this.$emit("change")},closed:function(){var e=this;this.popupModalOkCallback=function(){e.$emit("closed"),e.$refs.popupModal.close()},this.showPopupModal()},close:function(){var e=this;this.popupModalOkCallback=function(){e.$emit("close"),e.$refs.popupModal.close()},this.showPopupModal()},videoChatConfigFetch:function(){var e=this,t="public/chat/video/config";this.authenticated||(t="public/chat/".concat(this.publicUserId,"/video/config")),this.clientSendRequest({Path:t,Method:"get",Query:{ChatID:this.chatData.ChatID}}).then(function(t){e.config=t.Body;var i="VideoChatInvite";e.isInvited&&(i+="Accept");var n={ChatID:e.config.ChatID,TargetID:e.config.TargetID,TargetType:e.config.TargetType,SignalKey:i,SignalValue:e.isAudioCall?4:1};e.initVideo(n),e.$nextTick(function(){e.$test.setFlag("Chat::Video::Config::Fetch")})}).catch(function(t){e.$log.error(t),e.$bus.$emit("showToastMessage",{id:"fetchVideoChatConfigError",text:"Error while fetching video chat config.",variant:"danger",persistent:!1})})},initVideo:function(e){var t=this;o.a.hasGetUserMedia()?(this.statusMessage="Requesting media stream...",navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then(function(i){t.stream=i,t.isAudioCall&&(t.stream.getVideoTracks()[0].enabled=!1),t.$refs.requesterVideo.srcObject=t.stream,o.a.hasRtcPeerConnection()?(t.setupPeerConnection(t.stream),t.isInvited?t.statusMessage="Accepting the invitation...":t.statusMessage="Waiting for other party to respond...",t.signalSend(e)):t.$bus.$emit("showToastMessage",{id:"missingWebRtcError",text:"Missing WebRTC support.",variant:"danger",persistent:!1})}).catch(function(){t.$bus.$emit("showToastMessage",{id:"missingMediaPermissionError",text:"Please allow this page to use your video and audio stream.",variant:"warning",persistent:!1})})):this.$bus.$emit("showToastMessage",{id:"missingWebRTC",text:"Missing WebRTC support.",variant:"danger",persistent:!1})},signalSend:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.ChatID||e.TargetID||e.TargetType||e.SignalKey||e.SignalValue){var n="public/chat/video/signal";this.authenticated||(n="public/chat/".concat(this.publicUserId,"/video/signal")),this.clientSendRequest({Path:n,Method:"post",Body:{ChatID:e.ChatID,TargetID:e.TargetID,TargetType:e.TargetType,SignalKey:e.SignalKey,SignalValue:JSON.stringify(e.SignalValue)}},{xhr:i}).then(function(){t.setSignalReceiveInterval(),t.$test.setFlag("Chat::Video::SignalSend::".concat(e.SignalKey))}).catch(function(e){t.$log.error(e),t.$bus.$emit("showToastMessage",{id:"sendSignalErrorMessage",text:"Error occurred while sending video chat signal.",variant:"danger",persistent:!1})})}},setSignalReceiveInterval:function(){this.signalReceiveIntervalId||this.isBeingDestroyed||(this.signalReceiveIntervalId=setInterval(this.signalReceive,this.signalReceiveIntervalDelay),window.addEventListener("beforeunload",this.clearSignalReceiveInterval))},clearSignalReceiveInterval:function(){this.signalReceiveIntervalId&&(clearInterval(this.signalReceiveIntervalId),this.signalReceiveIntervalId=null,window.removeEventListener("beforeunload",this.clearSignalReceiveInterval))},signalReceive:function(){var e=this,t="public/chat/video/signal";this.authenticated||(t="public/chat/".concat(this.publicUserId,"/video/signal")),this.clientSendRequest({Path:t,Method:"get",Query:{ChatID:this.chatData.ChatID}}).then(function(t){Object.values(t.Body).forEach(function(t){switch(t.SignalValue=JSON.parse(t.SignalValue),t.SignalKey){case"VideoChatInviteAccept":e.inviteAccept(t);break;case"VideoChatOffer":e.offerReceive(t);break;case"VideoChatAnswer":e.answerReceive(t);break;case"VideoChatCandidate":e.candidateReceive(t);break;case"VideoChatAudioMute":e.audioMute(t);break;case"VideoChatVideoMute":e.videoMute(t);break;case"VideoChatLeave":e.leaveReceive()}e.$test.setFlag("Chat::Video::SignalReceive::".concat(t.SignalKey))})}).catch(function(t){e.$log.error(t),e.$bus.$emit("showToastMessage",{id:"receiveSignalErrorMessage",text:"Error occurred while receiving video chat signal.",variant:"danger",persistent:!1})})},inviteAccept:function(e){var t;1===e.SignalValue||4===e.SignalValue?(4===e.SignalValue&&(e.SignalValue=1),this.$log.debug("ChatVideo","User has accepted the invitation."),this.offerSend(e)):(2===e.SignalValue?t="User has declined your invitation.":3===e.SignalValue&&(t="Target user's browser does not support video and audio calling."),this.$log.debug("ChatVideo","User has declined the invitation."),this.endCall(),this.$bus.$emit("showToastMessage",{id:"invitationError",text:t,variant:"warning",persistent:!1}))},setupPeerConnection:function(){var e=this;this.requesterConnection=new window.RTCPeerConnection(this.config.TURNServers),this.$log.debug("ChatVideo","Set up RTC peer connection.",this.config.TURNServers),this.requesterConnection.addStream(this.stream),this.requesterConnection.ontrack=function(t){var i=a()(t.streams,1);e.$refs.targetVideo.srcObject=i[0],e.statusMessage="Connection established!",e.$test.setFlag("Chat::Video::StreamAdded")},this.requesterConnection.onicecandidate=function(t){t.candidate&&e.iceCandidates.push(t.candidate)},this.requesterConnection.oniceconnectionstatechange=function(){"connected"===e.requesterConnection.iceConnectionState?(e.clearIceSendingInterval(),e.statusMessage=""):"failed"===e.requesterConnection.iceConnectionState&&(e.$bus.$emit("showToastMessage",{id:"connectionError",text:"Attempt to connect was unsuccessful. Please try again.",variant:"warning",persistent:!1}),e.endCall())}},setIceSendingInterval:function(){this.iceSendingIntervalId||this.isBeingDestroyed||(this.iceSendingIntervalId=setInterval(this.candidatesSend,this.iceSendingIntervalDelay),window.addEventListener("beforeunload",this.clearIceSendingInterval))},clearIceSendingInterval:function(){this.iceSendingIntervalId&&(clearInterval(this.iceSendingIntervalId),this.iceSendingIntervalId=null,window.removeEventListener("beforeunload",this.clearIceSendingInterval))},stopReceiving:function(){this.statusMessage="",this.clearIceSendingInterval(),this.clearSignalReceiveInterval(),this.requesterConnection.close(),this.requesterConnection.onicecandidate=null,this.requesterConnection.ontrack=null,this.stream.getTracks().forEach(function(e){return e.stop()})},offerReceive:function(e){var t=this;this.requesterConnection.setRemoteDescription(new window.RTCSessionDescription(e.SignalValue)),this.$log.debug("ChatVideo","Offer received from the user.",e.SignalValue),this.requesterConnection.createAnswer(function(i){var n=t.directionSwitch(e);t.statusMessage="Connecting, please wait...",t.requesterConnection.setLocalDescription(i),n.SignalKey="VideoChatAnswer",n.SignalValue=i,t.signalSend(n),t.$log.debug("ChatVideo","Answer sent to the user.",i)},function(e){t.$log.error(e)}),this.startCall()},offerSend:function(e){var t=this;this.statusMessage="Connecting, please wait...",this.requesterConnection.createOffer(function(i){var n=t.directionSwitch(e);n.SignalKey="VideoChatOffer",n.SignalValue=i,t.signalSend(n),t.$log.debug("ChatVideo","Offer sent to the user.",i),t.requesterConnection.setLocalDescription(i)},function(e){t.$log.error(e)}),this.startCall()},startCall:function(){this.setIceSendingInterval(),this.callActive=!0,window.addEventListener("beforeunload",this.leaveSendViaXhr)},answerReceive:function(e){this.requesterConnection.setRemoteDescription(new window.RTCSessionDescription(e.SignalValue)),this.$log.debug("ChatVideo","Answer received from the user.",e.SignalValue)},directionSwitch:function(e){var t;if(e&&(e.RequesterID||e.RequesterType||e.TargetID||e.TargetType))return t=e.RequesterID,e.RequesterID=e.TargetID,e.TargetID=t,t=e.RequesterType,e.RequesterType=e.TargetType,e.TargetType=t,e},candidatesSend:function(){if(this.iceCandidates.length>0){var e={ChatID:this.config.ChatID,TargetID:this.config.TargetID,TargetType:this.config.TargetType,SignalKey:"VideoChatCandidate",SignalValue:this.iceCandidates};this.signalSend(e),this.$log.debug("ChatVideo","Candidates sent to the user.",this.iceCandidates),this.iceCandidates=[]}},candidateReceive:function(e){var t=this;Object.values(e.SignalValue).forEach(function(e){t.requesterConnection.addIceCandidate(new window.RTCIceCandidate(e)),t.$log.debug("ChatVideo","Candidate received from the user.",e)})},audioMute:function(e){2===parseInt(e.SignalValue,10)?this.isTargetAudioMuted=!0:this.isTargetAudioMuted=!1},videoMute:function(e){2===parseInt(e.SignalValue,10)?this.isTargetVideoMuted=!0:this.isTargetVideoMuted=!1},leaveReceive:function(){this.$bus.$emit("showToastMessage",{id:"leaveReceive",text:"User has left the call.",variant:"warning",persistent:!1}),this.endCall()},leaveSendViaXhr:function(){this.leaveSend(!0),this.destroy()},leaveSend:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.callActive){var t={ChatID:this.config.ChatID,TargetID:this.config.TargetID,TargetType:this.config.TargetType,SignalKey:"VideoChatLeave",SignalValue:1};this.signalSend(t,e),this.$log.debug("ChatVideo","Leave signal sent to the user.")}},endCall:function(){this.destroy(),this.$emit("end")},destroy:function(){this.stopReceiving(),this.requesterConnection.close(),this.callActive=!1,window.removeEventListener("beforeunload",this.leaveSendViaXhr)},hangup:function(){this.leaveSend(),this.endCall()},muteVideo:function(e){this.isVideoMuted=e;var t=this.stream.getVideoTracks();t[0]&&(t[0].enabled=!e);var i={ChatID:this.config.ChatID,TargetID:this.config.TargetID,TargetType:this.config.TargetType,SignalKey:"VideoChatVideoMute",SignalValue:e?2:1};this.signalSend(i),this.$log.debug("ChatVideo","Video mute signal sent to the user.",e)},muteAudio:function(e){this.isAudioMuted=e;var t=this.stream.getAudioTracks();t[0]&&(t[0].enabled=!e);var i={ChatID:this.config.ChatID,TargetID:this.config.TargetID,TargetType:this.config.TargetType,SignalKey:"VideoChatAudioMute",SignalValue:e?2:1};this.signalSend(i),this.$log.debug("ChatVideo","Audio mute signal sent to the user.",e)}}},r=i("psIG"),c=Object(r.a)(s,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-col",{staticClass:"row px-0 mx-0 mb-3 shadow Chat__VideoContainer",attrs:{cols:"12"}},[i("b-col",{staticClass:"px-0",attrs:{md:"7"}},[i("div",{staticClass:"Chat__Video",class:{"Chat--BackgroundGradient":e.isTargetVideoMuted,"Chat--BackgroundBlack":!e.isTargetVideoMuted,"Chat__Video--Expanded":e.expanded}},[i("video",{directives:[{name:"show",rawName:"v-show",value:!e.isTargetVideoMuted,expression:"!isTargetVideoMuted"}],ref:"targetVideo",staticClass:"position-relative Chat__VideoMain",attrs:{autoplay:""}}),e._v(" "),i("video",{directives:[{name:"show",rawName:"v-show",value:!e.isVideoMuted,expression:"!isVideoMuted"}],ref:"requesterVideo",staticClass:"position-absolute shadow-sm Chat__VideoSmall",attrs:{autoplay:"",muted:""},domProps:{muted:!0}}),e._v(" "),e.statusMessage?i("div",{staticClass:"text-center Chat__StatusMessage",class:{"Chat--InvertedText":e.isTargetVideoMuted}},[i("p",[e._v(e._s(e._f("translate")(e.statusMessage)))])]):e._e(),e._v(" "),e.config&&e.isTargetVideoMuted?[i("div",{staticClass:"pt-5 Form__Avatar"},[i("CommonAvatarExternal",{staticClass:"mx-auto",attrs:{title:e.config.TargetName,"user-type":"agent"}})],1),e._v(" "),i("div",{staticClass:"mx-auto text-center"},[i("h3",{staticClass:"mt-2 mb-0"},[e._v("\n                        "+e._s(e.config.TargetName)+"\n                    ")])])]:e._e(),e._v(" "),e.stream?[i("AudioVolume",{attrs:{disabled:e.isTargetAudioMuted},model:{value:e.audioVolume,callback:function(t){e.audioVolume=t},expression:"audioVolume"}}),e._v(" "),i("VideoMute",{attrs:{muted:e.isVideoMuted},on:{mute:e.muteVideo}}),e._v(" "),i("AudioMute",{on:{mute:e.muteAudio}}),e._v(" "),i("CallEnd",{on:{end:e.hangup}}),e._v(" "),i("VideoExpand",{on:{expand:e.expand}})]:e._e()],2)]),e._v(" "),i("ChatConversation",{attrs:{authenticated:e.authenticated,"chat-data":e.chatData,"public-user-id":e.publicUserId,"no-answer-threshold":e.noAnswerThreshold,"primary-color":e.primaryColor,"chat-conversation-text":e.integrationConfig&&e.integrationConfig.chatConversationText,"chat-removed-text":e.integrationConfig&&e.integrationConfig.chatRemovedText,"chat-close-text":e.integrationConfig&&e.integrationConfig.chatCloseText,"chat-closed-text":e.integrationConfig&&e.integrationConfig.chatClosedText,"chat-next-steps-text":e.integrationConfig&&e.integrationConfig.chatNextStepsText,"no-answer-text":e.integrationConfig&&e.integrationConfig.noAnswerText,"create-ticket-text":e.integrationConfig&&e.integrationConfig.createTicketText,"request-pending-text":e.integrationConfig&&e.integrationConfig.requestPendingText,"try-again-later-text":e.integrationConfig&&e.integrationConfig.tryAgainLaterText,"chat-request-text":e.integrationConfig&&e.integrationConfig.chatRequestText,"chat-request-accept-text":e.integrationConfig&&e.integrationConfig.chatRequestAcceptText,"close-modal-title":e.integrationConfig&&e.integrationConfig.closeModalTitle,"close-modal-text":e.integrationConfig&&e.integrationConfig.closeModalText,"close-modal-yes":e.integrationConfig&&e.integrationConfig.closeModalYes,"close-modal-no":e.integrationConfig&&e.integrationConfig.closeModalNo,"write-message-text":e.integrationConfig&&e.integrationConfig.writeMessageText,"is-popup":""},on:{back:e.back,change:e.change,closed:e.closed,close:e.close}}),e._v(" "),i("CommonDialog",{ref:"popupModal",attrs:{id:e.popupModalId,title:e._f("translate")(e.popupModalTitle),"footer-class":"pull-right",lazy:""},scopedSlots:e._u([{key:"footer",fn:function(){return[i("CommonLink",{staticClass:"btn btn-primary Button Button--Secondary",style:{"border-color":e.primaryColor?e.primaryColor:null,"background-color":e.primaryColor?"#fff":null,color:"#000"},on:{click:function(t){return e.$refs.popupModal.close()}}},[e._v("\n                "+e._s(e._f("translate")(e.popupModalNo))+"\n            ")]),e._v(" "),i("CommonLink",{staticClass:"btn btn-primary Button Button--Primary",style:{"border-color":e.primaryColor?e.primaryColor:null,"background-color":e.primaryColor?e.primaryColor:null,color:"#fff"},on:{click:e.popupModalOkCallback}},[e._v("\n                "+e._s(e._f("translate")(e.popupModalYes))+"\n            ")])]},proxy:!0}])},[e._v("\n        "+e._s(e._f("translate")(e.popupModalText))+"\n        ")])],1)},[],!1,null,null,null);t.default=c.exports},S411:function(e,t){e.exports=function(e,t){var i=[],n=!0,a=!1,o=void 0;try{for(var s,r=e[Symbol.iterator]();!(n=(s=r.next()).done)&&(i.push(s.value),!t||i.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==r.return||r.return()}finally{if(a)throw o}}return i}},me7x:function(e,t,i){"use strict";var n=i("jHfC"),a=i.n(n),o=function(){return!(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)},s=function(){return!!navigator.mediaDevices},r=function(){return!!window.RTCPeerConnection};t.a={hasWebRtc:function(){return("firefox"===a.a.webrtcDetectedBrowser||"chrome"===a.a.webrtcDetectedBrowser)&&!(a.a.webrtcDetectedVersion<a.a.webrtcMinimumVersion)&&o()&&s()&&r()},hasGetUserMedia:o,hasMediaDevices:s,hasRtcPeerConnection:r}},nxTg:function(e,t,i){var n=i("+3YS"),a=i("S411"),o=i("+bRE");e.exports=function(e,t){return n(e)||a(e,t)||o()}}}]);