"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[43227],{56503:(e,l,t)=>{t.r(l),t.d(l,{data:()=>a});const a={key:"v-56b77bf9",path:"/guide/adapters/flashing/flashing_via_uniflash.html",title:"Flashing via UNIFLASH",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Instructions",slug:"instructions",children:[]}],filePathRelative:"guide/adapters/flashing/flashing_via_uniflash.md",git:{updatedTime:1637691096e3}}},99938:(e,l,t)=>{t.r(l),t.d(l,{default:()=>w});var a=t(66252),n=t(38908),i=t(99906),s=t(42722),o=t(8037);const r=(0,a.uE)('<h1 id="flashing-via-uniflash" tabindex="-1"><a class="header-anchor" href="#flashing-via-uniflash" aria-hidden="true">#</a> Flashing via UNIFLASH</h1><p>UNIFLASH can be used to flash certain Texas Instruments MCUs (e.g. CC26X2R1 and CC1352P-2). It runs on Windows, macOS and Linux.</p><p><strong>n.b.</strong> UNIFLASH sometimes needs to update the programmer firmware, and this can fail if the device is connected to a USB 3 port. If this occurs, switch to a USB 2 port.</p><p><strong>Note for flashing on Linux:</strong> Uniflash does not work well on some distributions. specifically, Fedora 31 may have some issue. Combinations that are verified to be working are:</p><ul><li><em>Ubuntu 18.4 (LTS)</em>: <ul><li>fresh install</li><li><code># sudo apt install libgconf-2-4</code></li><li><code># sudo apt install libusb-0.1-4</code></li><li>... then follow the instructions below</li></ul></li></ul><h2 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions" aria-hidden="true">#</a> Instructions</h2>',6),u=(0,a.Uk)("Download and install UNIFLASH: "),d={href:"http://www.ti.com/tool/download/UNIFLASH",target:"_blank",rel:"noopener noreferrer"},c=(0,a.Uk)("download link"),h=(0,a._)("li",null,"Plug your device",-1),m=(0,a._)("li",null,[(0,a.Uk)("Start UNIFLASH, your device will automatically be detected, press "),(0,a._)("em",null,"Start"),(0,a._)("img",{src:n,alt:"Start"})],-1),p=(0,a._)("li",null,[(0,a.Uk)("Go to "),(0,a._)("em",null,"Settings & Utilities"),(0,a.Uk)(" -> "),(0,a._)("em",null,"Manual Erase"),(0,a.Uk)(" and press "),(0,a._)("em",null,"Erase Entire Flash"),(0,a._)("img",{src:i,alt:"Erase"})],-1),f=(0,a._)("li",null,[(0,a.Uk)("Go to "),(0,a._)("em",null,"Settings & Utilities"),(0,a.Uk)(" -> "),(0,a._)("em",null,"Program Load"),(0,a.Uk)(" and select "),(0,a._)("em",null,"All Unprotected Sectors"),(0,a.Uk)(", click "),(0,a._)("em",null,"Perform Blank Check"),(0,a._)("img",{src:s,alt:"Load"})],-1),g=(0,a._)("li",null,[(0,a.Uk)("Go to "),(0,a._)("em",null,"Program"),(0,a.Uk)(" -> "),(0,a._)("em",null,"Flash Image(s)"),(0,a.Uk)(", press "),(0,a._)("em",null,"Browse"),(0,a.Uk)(' to select the firmware. Ensure that the path and file name do not contain any spaces (otherwise flashing may fail with "Error! Unable to open file ...").')],-1),U=(0,a._)("li",null,[(0,a.Uk)("Now click "),(0,a._)("em",null,"Load image"),(0,a.Uk)(" to upload the firmware "),(0,a._)("img",{src:o,alt:"Load"})],-1),_=(0,a._)("li",null,"Done!",-1),k={},w=(0,t(83744).Z)(k,[["render",function(e,l){const t=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("ol",null,[(0,a._)("li",null,[u,(0,a._)("a",d,[c,(0,a.Wm)(t)])]),h,m,p,f,g,U,_])],64)}]])},83744:(e,l)=>{l.Z=(e,l)=>{for(const[t,a]of l)e[t]=a;return e}},99906:(e,l,t)=>{e.exports=t.p+"assets/img/erase.0312ac3e.png"},8037:(e,l,t)=>{e.exports=t.p+"assets/img/load.f03e2f41.png"},42722:(e,l,t)=>{e.exports=t.p+"assets/img/sectors.57eb3039.png"},38908:(e,l,t)=>{e.exports=t.p+"assets/img/start.10278640.png"}}]);