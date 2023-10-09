"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[75547],{636933:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-f72f188c","path":"/devices/SMART-SMOKE10.html","title":"Alecto SMART-SMOKE10 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Alecto SMART-SMOKE10 control via MQTT","description":"Integrate your Alecto SMART-SMOKE10 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-06-14T22:06:16.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Smoke state (enum)","slug":"smoke-state-enum","link":"#smoke-state-enum","children":[]},{"level":3,"title":"Battery state (enum)","slug":"battery-state-enum","link":"#battery-state-enum","children":[]},{"level":3,"title":"Checking result (enum)","slug":"checking-result-enum","link":"#checking-result-enum","children":[]},{"level":3,"title":"Smoke value (numeric)","slug":"smoke-value-numeric","link":"#smoke-value-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Lifecycle (binary)","slug":"lifecycle-binary","link":"#lifecycle-binary","children":[]},{"level":3,"title":"Self checking (binary)","slug":"self-checking-binary","link":"#self-checking-binary","children":[]},{"level":3,"title":"Silence (binary)","slug":"silence-binary","link":"#silence-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1696874639000},"filePathRelative":"devices/SMART-SMOKE10.md"}')},318457:(e,t,i)=>{i.r(t),i.d(t,{default:()=>k});var a=i(166252);const l=(0,a._)("h1",{id:"alecto-smart-smoke10",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#alecto-smart-smoke10","aria-hidden":"true"},"#"),(0,a.Uk)(" Alecto SMART-SMOKE10")],-1),o=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),n=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"SMART-SMOKE10")],-1),c=(0,a._)("td",null,"Vendor",-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Smoke detector")],-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"smoke_state, battery_state, checking_result, smoke_value, battery, lifecycle, self_checking, silence, linkquality")],-1),r=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SMART-SMOKE10.jpg",alt:"Alecto SMART-SMOKE10"})])],-1),u=(0,a._)("h2",{id:"notes",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,a.Uk)(" Notes")],-1),h=(0,a._)("h3",{id:"pairing",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,a.Uk)(" Pairing")],-1),p=(0,a._)("p",null,"Press the test button 3 times (until the red LED stays on). After this the device will reset and try to join a network.",-1),b=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="smoke-state-enum" tabindex="-1"><a class="header-anchor" href="#smoke-state-enum" aria-hidden="true">#</a> Smoke state (enum)</h3><p>Value can be found in the published state on the <code>smoke_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>alarm</code>, <code>normal</code>.</p><h3 id="battery-state-enum" tabindex="-1"><a class="header-anchor" href="#battery-state-enum" aria-hidden="true">#</a> Battery state (enum)</h3><p>Value can be found in the published state on the <code>battery_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>low</code>, <code>middle</code>, <code>high</code>.</p><h3 id="checking-result-enum" tabindex="-1"><a class="header-anchor" href="#checking-result-enum" aria-hidden="true">#</a> Checking result (enum)</h3><p>Value can be found in the published state on the <code>checking_result</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>checking</code>, <code>check_success</code>, <code>check_failure</code>, <code>others</code>.</p><h3 id="smoke-value-numeric" tabindex="-1"><a class="header-anchor" href="#smoke-value-numeric" aria-hidden="true">#</a> Smoke value (numeric)</h3><p>Value can be found in the published state on the <code>smoke_value</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="lifecycle-binary" tabindex="-1"><a class="header-anchor" href="#lifecycle-binary" aria-hidden="true">#</a> Lifecycle (binary)</h3><p>Value can be found in the published state on the <code>lifecycle</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> lifecycle is ON, if <code>false</code> OFF.</p><h3 id="self-checking-binary" tabindex="-1"><a class="header-anchor" href="#self-checking-binary" aria-hidden="true">#</a> Self checking (binary)</h3><p>Value can be found in the published state on the <code>self_checking</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;self_checking&quot;: NEW_VALUE}</code>. If value equals <code>true</code> self checking is ON, if <code>false</code> OFF.</p><h3 id="silence-binary" tabindex="-1"><a class="header-anchor" href="#silence-binary" aria-hidden="true">#</a> Silence (binary)</h3><p>Value can be found in the published state on the <code>silence</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;silence&quot;: NEW_VALUE}</code>. If value equals <code>true</code> silence is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',19),m={},k=(0,i(983744).Z)(m,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),l,(0,a._)("table",null,[o,(0,a._)("tbody",null,[n,(0,a._)("tr",null,[c,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=Alecto"},{default:(0,a.w5)((()=>[(0,a.Uk)("Alecto")])),_:1})])]),s,d,r])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,h,p,(0,a.kq)(" Notes END: Do not edit below this line "),b])}]])}}]);