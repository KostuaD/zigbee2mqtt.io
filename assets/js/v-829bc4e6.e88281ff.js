"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[61669],{728139:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-829bc4e6","path":"/devices/SJCGQ11LM.html","title":"Xiaomi SJCGQ11LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Xiaomi SJCGQ11LM control via MQTT","description":"Integrate your Xiaomi SJCGQ11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-02-01T14:45:54.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Battery","slug":"battery","link":"#battery","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Water leak (binary)","slug":"water-leak-binary","link":"#water-leak-binary","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Device temperature (numeric)","slug":"device-temperature-numeric","link":"#device-temperature-numeric","children":[]},{"level":3,"title":"Power outage count (numeric)","slug":"power-outage-count-numeric","link":"#power-outage-count-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1696874639000},"filePathRelative":"devices/SJCGQ11LM.md"}')},366832:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var a=i(166252);const r=(0,a._)("h1",{id:"xiaomi-sjcgq11lm",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#xiaomi-sjcgq11lm","aria-hidden":"true"},"#"),(0,a.Uk)(" Xiaomi SJCGQ11LM")],-1),o=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),n=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"SJCGQ11LM")],-1),l=(0,a._)("td",null,"Vendor",-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Aqara water leak sensor")],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"battery, water_leak, battery_low, voltage, device_temperature, power_outage_count, linkquality")],-1),u=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SJCGQ11LM.jpg",alt:"Xiaomi SJCGQ11LM"})])],-1),s=(0,a.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="battery" tabindex="-1"><a class="header-anchor" href="#battery" aria-hidden="true">#</a> Battery</h3><p>Usees CR2032 battery.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press and hold the reset button by pressing hard on the top of the device (water drop logo) for +- 5 seconds (until the blue light inside the device, under the water drop starts blinking). After this the device will automatically join.</p>',5),h=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),p=(0,a.uE)('<ul><li><code>device_temperature_calibration</code>: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="water-leak-binary" tabindex="-1"><a class="header-anchor" href="#water-leak-binary" aria-hidden="true">#</a> Water leak (binary)</h3><p>Indicates whether the device detected a water leak. Value can be found in the published state on the <code>water_leak</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> water leak is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric" aria-hidden="true">#</a> Device temperature (numeric)</h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="power-outage-count-numeric" tabindex="-1"><a class="header-anchor" href="#power-outage-count-numeric" aria-hidden="true">#</a> Power outage count (numeric)</h3><p>Number of power outages. Value can be found in the published state on the <code>power_outage_count</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',16),b={},m=(0,i(983744).Z)(b,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),r,(0,a._)("table",null,[o,(0,a._)("tbody",null,[n,(0,a._)("tr",null,[l,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=Xiaomi"},{default:(0,a.w5)((()=>[(0,a.Uk)("Xiaomi")])),_:1})])]),d,c,u])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),s,(0,a.kq)(" Notes END: Do not edit below this line "),h,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);