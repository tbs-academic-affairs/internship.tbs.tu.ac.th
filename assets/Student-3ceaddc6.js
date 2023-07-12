import{u as Xu,a as Yu,r as Tn,o as Ju,f as Zu,b as ze,d as He,e as _,t as bn,n as In,w as ge,v as Ie,g as Fi,h as Us,F as Fs,i as Vs}from"./index-0d162664.js";import{S as Vi}from"./sweetalert2.all-2aa414ca.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},el=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ta={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(d=64)),s.push(n[l],n[h],n[d],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ea(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):el(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw new tl;const d=i<<2|a>>4;if(s.push(d),u!==64){const m=a<<4&240|u>>2;if(s.push(m),h!==64){const w=u<<6&192|h;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nl=function(t){const e=ea(t);return ta.encodeByteArray(e,!0)},Bn=function(t){return nl(t).replace(/\./g,"")},sl=function(t){try{return ta.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=()=>rl().__FIREBASE_DEFAULTS__,ol=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},al=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sl(t[1]);return e&&JSON.parse(e)},Pr=()=>{try{return il()||ol()||al()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cl=t=>{var e,n;return(n=(e=Pr())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},na=t=>{const e=cl(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ul=()=>{var t;return(t=Pr())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Bn(JSON.stringify(n)),Bn(JSON.stringify(o)),a].join(".")}function hl(){var t;const e=(t=Pr())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dl(){try{return typeof indexedDB=="object"}catch{return!1}}function fl(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl="FirebaseError";class st extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=pl,Object.setPrototypeOf(this,st.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ra.prototype.create)}}class ra{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?ml(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new st(r,a,s)}}function ml(t,e){return t.replace(gl,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const gl=/\{\$([^}]+)}/g;function ir(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Bi(i)&&Bi(o)){if(!ir(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Bi(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t){return t&&t._delegate?t._delegate:t}class pt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ll;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wl(e))try{this.getOrInitializeService({instanceIdentifier:Ge})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ge){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ge){return this.instances.has(e)}getOptions(e=Ge){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:vl(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ge){return this.component?this.component.multipleInstances?e:Ge:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vl(t){return t===Ge?void 0:t}function wl(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yl(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(O||(O={}));const El={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},Tl=O.INFO,bl={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},Il=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=bl[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ia{constructor(e){this.name=e,this._logLevel=Tl,this._logHandler=Il,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?El[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const Sl=(t,e)=>e.some(n=>t instanceof n);let $i,qi;function Cl(){return $i||($i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Al(){return qi||(qi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oa=new WeakMap,or=new WeakMap,aa=new WeakMap,Bs=new WeakMap,Ur=new WeakMap;function Dl(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Oe(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&oa.set(n,t)}).catch(()=>{}),Ur.set(e,t),e}function kl(t){if(or.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});or.set(t,e)}let ar={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return or.get(t);if(e==="objectStoreNames")return t.objectStoreNames||aa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Oe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rl(t){ar=t(ar)}function Nl(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call($s(this),e,...n);return aa.set(s,e.sort?e.sort():[e]),Oe(s)}:Al().includes(t)?function(...e){return t.apply($s(this),e),Oe(oa.get(this))}:function(...e){return Oe(t.apply($s(this),e))}}function xl(t){return typeof t=="function"?Nl(t):(t instanceof IDBTransaction&&kl(t),Sl(t,Cl())?new Proxy(t,ar):t)}function Oe(t){if(t instanceof IDBRequest)return Dl(t);if(Bs.has(t))return Bs.get(t);const e=xl(t);return e!==t&&(Bs.set(t,e),Ur.set(e,t)),e}const $s=t=>Ur.get(t);function Ol(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Oe(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Oe(o.result),c.oldVersion,c.newVersion,Oe(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Ll=["get","getKey","getAll","getAllKeys","count"],Ml=["put","add","delete","clear"],qs=new Map;function ji(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qs.get(e))return qs.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Ml.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Ll.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return qs.set(e,i),i}Rl(t=>({...t,get:(e,n,s)=>ji(e,n)||t.get(e,n,s),has:(e,n)=>!!ji(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ul(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ul(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cr="@firebase/app",zi="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new ia("@firebase/app"),Fl="@firebase/app-compat",Vl="@firebase/analytics-compat",Bl="@firebase/analytics",$l="@firebase/app-check-compat",ql="@firebase/app-check",jl="@firebase/auth",zl="@firebase/auth-compat",Hl="@firebase/database",Gl="@firebase/database-compat",Kl="@firebase/functions",Wl="@firebase/functions-compat",Ql="@firebase/installations",Xl="@firebase/installations-compat",Yl="@firebase/messaging",Jl="@firebase/messaging-compat",Zl="@firebase/performance",eh="@firebase/performance-compat",th="@firebase/remote-config",nh="@firebase/remote-config-compat",sh="@firebase/storage",rh="@firebase/storage-compat",ih="@firebase/firestore",oh="@firebase/firestore-compat",ah="firebase",ch="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="[DEFAULT]",uh={[cr]:"fire-core",[Fl]:"fire-core-compat",[Bl]:"fire-analytics",[Vl]:"fire-analytics-compat",[ql]:"fire-app-check",[$l]:"fire-app-check-compat",[jl]:"fire-auth",[zl]:"fire-auth-compat",[Hl]:"fire-rtdb",[Gl]:"fire-rtdb-compat",[Kl]:"fire-fn",[Wl]:"fire-fn-compat",[Ql]:"fire-iid",[Xl]:"fire-iid-compat",[Yl]:"fire-fcm",[Jl]:"fire-fcm-compat",[Zl]:"fire-perf",[eh]:"fire-perf-compat",[th]:"fire-rc",[nh]:"fire-rc-compat",[sh]:"fire-gcs",[rh]:"fire-gcs-compat",[ih]:"fire-fst",[oh]:"fire-fst-compat","fire-js":"fire-js",[ah]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new Map,lr=new Map;function lh(t,e){try{t.container.addComponent(e)}catch(n){Ze.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jt(t){const e=t.name;if(lr.has(e))return Ze.debug(`There were multiple attempts to register component ${e}.`),!1;lr.set(e,t);for(const n of $n.values())lh(n,t);return!0}function ca(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Le=new ra("app","Firebase",hh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Le.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=ch;function la(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ur,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Le.create("bad-app-name",{appName:String(r)});if(n||(n=ul()),!n)throw Le.create("no-options");const i=$n.get(r);if(i){if(ir(n,i.options)&&ir(s,i.config))return i;throw Le.create("duplicate-app",{appName:r})}const o=new _l(r);for(const c of lr.values())o.addComponent(c);const a=new dh(n,s,o);return $n.set(r,a),a}function ha(t=ur){const e=$n.get(t);if(!e&&t===ur)return la();if(!e)throw Le.create("no-app",{appName:t});return e}function Me(t,e,n){var s;let r=(s=uh[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ze.warn(a.join(" "));return}jt(new pt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="firebase-heartbeat-database",ph=1,zt="firebase-heartbeat-store";let js=null;function da(){return js||(js=Ol(fh,ph,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zt)}}}).catch(t=>{throw Le.create("idb-open",{originalErrorMessage:t.message})})),js}async function mh(t){try{return(await da()).transaction(zt).objectStore(zt).get(fa(t))}catch(e){if(e instanceof st)Ze.warn(e.message);else{const n=Le.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ze.warn(n.message)}}}async function Hi(t,e){try{const s=(await da()).transaction(zt,"readwrite");return await s.objectStore(zt).put(e,fa(t)),s.done}catch(n){if(n instanceof st)Ze.warn(n.message);else{const s=Le.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ze.warn(s.message)}}}function fa(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=1024,yh=30*24*60*60*1e3;class vh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _h(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Gi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=yh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gi(),{heartbeatsToSend:n,unsentEntries:s}=wh(this._heartbeatsCache.heartbeats),r=Bn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Gi(){return new Date().toISOString().substring(0,10)}function wh(t,e=gh){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ki(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ki(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _h{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dl()?fl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await mh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Hi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Hi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ki(t){return Bn(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(t){jt(new pt("platform-logger",e=>new Pl(e),"PRIVATE")),jt(new pt("heartbeat",e=>new vh(e),"PRIVATE")),Me(cr,zi,t),Me(cr,zi,"esm2017"),Me("fire-js","")}Eh("");var Th=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T,Fr=Fr||{},C=Th||self;function qn(){}function is(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function nn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function bh(t){return Object.prototype.hasOwnProperty.call(t,zs)&&t[zs]||(t[zs]=++Ih)}var zs="closure_uid_"+(1e9*Math.random()>>>0),Ih=0;function Sh(t,e,n){return t.call.apply(t.bind,arguments)}function Ch(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function se(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?se=Sh:se=Ch,se.apply(null,arguments)}function Sn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function J(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function $e(){this.s=this.s,this.o=this.o}var Ah=0;$e.prototype.s=!1;$e.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Ah!=0)&&bh(this)};$e.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const pa=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Vr(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Wi(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(is(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function re(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var Dh=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{C.addEventListener("test",qn,e),C.removeEventListener("test",qn,e)}catch{}return t}();function jn(t){return/^[\s\xa0]*$/.test(t)}var Qi=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Hs(t,e){return t<e?-1:t>e?1:0}function os(){var t=C.navigator;return t&&(t=t.userAgent)?t:""}function ve(t){return os().indexOf(t)!=-1}function Br(t){return Br[" "](t),t}Br[" "]=qn;function kh(t){var e=xh;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Rh=ve("Opera"),mt=ve("Trident")||ve("MSIE"),ma=ve("Edge"),hr=ma||mt,ga=ve("Gecko")&&!(os().toLowerCase().indexOf("webkit")!=-1&&!ve("Edge"))&&!(ve("Trident")||ve("MSIE"))&&!ve("Edge"),Nh=os().toLowerCase().indexOf("webkit")!=-1&&!ve("Edge");function ya(){var t=C.document;return t?t.documentMode:void 0}var zn;e:{var Gs="",Ks=function(){var t=os();if(ga)return/rv:([^\);]+)(\)|;)/.exec(t);if(ma)return/Edge\/([\d\.]+)/.exec(t);if(mt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Nh)return/WebKit\/(\S+)/.exec(t);if(Rh)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ks&&(Gs=Ks?Ks[1]:""),mt){var Ws=ya();if(Ws!=null&&Ws>parseFloat(Gs)){zn=String(Ws);break e}}zn=Gs}var xh={};function Oh(){return kh(function(){let t=0;const e=Qi(String(zn)).split("."),n=Qi("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Hs(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Hs(r[2].length==0,i[2].length==0)||Hs(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var dr;if(C.document&&mt){var Xi=ya();dr=Xi||parseInt(zn,10)||void 0}else dr=void 0;var Lh=dr;function Ht(t,e){if(re.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ga){e:{try{Br(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Mh[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ht.X.h.call(this)}}J(Ht,re);var Mh={2:"touch",3:"pen",4:"mouse"};Ht.prototype.h=function(){Ht.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var sn="closure_listenable_"+(1e6*Math.random()|0),Ph=0;function Uh(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++Ph,this.ba=this.ea=!1}function as(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function $r(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function va(t){const e={};for(const n in t)e[n]=t[n];return e}const Yi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wa(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Yi.length;i++)n=Yi[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function cs(t){this.src=t,this.g={},this.h=0}cs.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=pr(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Uh(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function fr(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=pa(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(as(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function pr(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var qr="closure_lm_"+(1e6*Math.random()|0),Qs={};function _a(t,e,n,s,r){if(s&&s.once)return Ta(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)_a(t,e[i],n,s,r);return null}return n=Hr(n),t&&t[sn]?t.N(e,n,nn(s)?!!s.capture:!!s,r):Ea(t,e,n,!1,s,r)}function Ea(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=nn(r)?!!r.capture:!!r,a=zr(t);if(a||(t[qr]=a=new cs(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Fh(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Dh||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Ia(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Fh(){function t(n){return e.call(t.src,t.listener,n)}const e=Vh;return t}function Ta(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ta(t,e[i],n,s,r);return null}return n=Hr(n),t&&t[sn]?t.O(e,n,nn(s)?!!s.capture:!!s,r):Ea(t,e,n,!0,s,r)}function ba(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)ba(t,e[i],n,s,r);else s=nn(s)?!!s.capture:!!s,n=Hr(n),t&&t[sn]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=pr(i,n,s,r),-1<n&&(as(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=zr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=pr(e,n,s,r)),(n=-1<t?e[t]:null)&&jr(n))}function jr(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[sn])fr(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ia(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=zr(e))?(fr(n,t),n.h==0&&(n.src=null,e[qr]=null)):as(t)}}}function Ia(t){return t in Qs?Qs[t]:Qs[t]="on"+t}function Vh(t,e){if(t.ba)t=!0;else{e=new Ht(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&jr(t),t=n.call(s,e)}return t}function zr(t){return t=t[qr],t instanceof cs?t:null}var Xs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hr(t){return typeof t=="function"?t:(t[Xs]||(t[Xs]=function(e){return t.handleEvent(e)}),t[Xs])}function Q(){$e.call(this),this.i=new cs(this),this.P=this,this.I=null}J(Q,$e);Q.prototype[sn]=!0;Q.prototype.removeEventListener=function(t,e,n,s){ba(this,t,e,n,s)};function Y(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new re(e,t);else if(e instanceof re)e.target=e.target||t;else{var r=e;e=new re(s,t),wa(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Cn(o,s,!0,e)&&r}if(o=e.g=t,r=Cn(o,s,!0,e)&&r,r=Cn(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Cn(o,s,!1,e)&&r}Q.prototype.M=function(){if(Q.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)as(n[s]);delete t.g[e],t.h--}}this.I=null};Q.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Q.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Cn(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&fr(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Gr=C.JSON.stringify;function Bh(){var t=Aa;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class $h{constructor(){this.h=this.g=null}add(e,n){const s=Sa.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Sa=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new qh,t=>t.reset());class qh{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function jh(t){C.setTimeout(()=>{throw t},0)}function Ca(t,e){mr||zh(),gr||(mr(),gr=!0),Aa.add(t,e)}var mr;function zh(){var t=C.Promise.resolve(void 0);mr=function(){t.then(Hh)}}var gr=!1,Aa=new $h;function Hh(){for(var t;t=Bh();){try{t.h.call(t.g)}catch(n){jh(n)}var e=Sa;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}gr=!1}function us(t,e){Q.call(this),this.h=t||1,this.g=e||C,this.j=se(this.lb,this),this.l=Date.now()}J(us,Q);T=us.prototype;T.ca=!1;T.R=null;T.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Y(this,"tick"),this.ca&&(Kr(this),this.start()))}};T.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Kr(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}T.M=function(){us.X.M.call(this),Kr(this),delete this.g};function Wr(t,e,n){if(typeof t=="function")n&&(t=se(t,n));else if(t&&typeof t.handleEvent=="function")t=se(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:C.setTimeout(t,e||0)}function Da(t){t.g=Wr(()=>{t.g=null,t.i&&(t.i=!1,Da(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Gh extends $e{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Da(this)}M(){super.M(),this.g&&(C.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gt(t){$e.call(this),this.h=t,this.g={}}J(Gt,$e);var Ji=[];function ka(t,e,n,s){Array.isArray(n)||(n&&(Ji[0]=n.toString()),n=Ji);for(var r=0;r<n.length;r++){var i=_a(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Ra(t){$r(t.g,function(e,n){this.g.hasOwnProperty(n)&&jr(e)},t),t.g={}}Gt.prototype.M=function(){Gt.X.M.call(this),Ra(this)};Gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ls(){this.g=!0}ls.prototype.Aa=function(){this.g=!1};function Kh(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Wh(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ht(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Xh(t,n)+(s?" "+s:"")})}function Qh(t,e){t.info(function(){return"TIMEOUT: "+e})}ls.prototype.info=function(){};function Xh(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Gr(n)}catch{return e}}var rt={},Zi=null;function hs(){return Zi=Zi||new Q}rt.Pa="serverreachability";function Na(t){re.call(this,rt.Pa,t)}J(Na,re);function Kt(t){const e=hs();Y(e,new Na(e))}rt.STAT_EVENT="statevent";function xa(t,e){re.call(this,rt.STAT_EVENT,t),this.stat=e}J(xa,re);function ae(t){const e=hs();Y(e,new xa(e,t))}rt.Qa="timingevent";function Oa(t,e){re.call(this,rt.Qa,t),this.size=e}J(Oa,re);function rn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return C.setTimeout(function(){t()},e)}var ds={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},La={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Qr(){}Qr.prototype.h=null;function eo(t){return t.h||(t.h=t.i())}function Ma(){}var on={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Xr(){re.call(this,"d")}J(Xr,re);function Yr(){re.call(this,"c")}J(Yr,re);var yr;function fs(){}J(fs,Qr);fs.prototype.g=function(){return new XMLHttpRequest};fs.prototype.i=function(){return{}};yr=new fs;function an(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Gt(this),this.O=Yh,t=hr?125:void 0,this.T=new us(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Pa}function Pa(){this.i=null,this.g="",this.h=!1}var Yh=45e3,vr={},Hn={};T=an.prototype;T.setTimeout=function(t){this.O=t};function wr(t,e,n){t.K=1,t.v=ms(Ae(e)),t.s=n,t.P=!0,Ua(t,null)}function Ua(t,e){t.F=Date.now(),cn(t),t.A=Ae(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Ha(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Pa,t.g=dc(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Gh(se(t.La,t,t.g),t.N)),ka(t.S,t.g,"readystatechange",t.ib),e=t.H?va(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Kt(),Kh(t.j,t.u,t.A,t.m,t.U,t.s)}T.ib=function(t){t=t.target;const e=this.L;e&&Se(t)==3?e.l():this.La(t)};T.La=function(t){try{if(t==this.g)e:{const l=Se(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||hr||this.g&&(this.h.h||this.g.fa()||ro(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Kt(3):Kt(2)),ps(this);var n=this.g.aa();this.Y=n;t:if(Fa(this)){var s=ro(this.g);t="";var r=s.length,i=Se(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ke(this),Ut(this);var o="";break t}this.h.i=new C.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Wh(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!jn(a)){var u=a;break t}}u=null}if(n=u)ht(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,_r(this,n);else{this.i=!1,this.o=3,ae(12),Ke(this),Ut(this);break e}}this.P?(Va(this,l,o),hr&&this.i&&l==3&&(ka(this.S,this.T,"tick",this.hb),this.T.start())):(ht(this.j,this.m,o,null),_r(this,o)),l==4&&Ke(this),this.i&&!this.I&&(l==4?cc(this.l,this):(this.i=!1,cn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ae(12)):(this.o=0,ae(13)),Ke(this),Ut(this)}}}catch{}finally{}};function Fa(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Va(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=Jh(t,n),r==Hn){e==4&&(t.o=4,ae(14),s=!1),ht(t.j,t.m,null,"[Incomplete Response]");break}else if(r==vr){t.o=4,ae(15),ht(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ht(t.j,t.m,r,null),_r(t,r);Fa(t)&&r!=Hn&&r!=vr&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ae(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ri(e),e.K=!0,ae(11))):(ht(t.j,t.m,n,"[Invalid Chunked Response]"),Ke(t),Ut(t))}T.hb=function(){if(this.g){var t=Se(this.g),e=this.g.fa();this.C<e.length&&(ps(this),Va(this,t,e),this.i&&t!=4&&cn(this))}};function Jh(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Hn:(n=Number(e.substring(n,s)),isNaN(n)?vr:(s+=1,s+n>e.length?Hn:(e=e.substr(s,n),t.C=s+n,e)))}T.cancel=function(){this.I=!0,Ke(this)};function cn(t){t.V=Date.now()+t.O,Ba(t,t.O)}function Ba(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=rn(se(t.gb,t),e)}function ps(t){t.B&&(C.clearTimeout(t.B),t.B=null)}T.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Qh(this.j,this.A),this.K!=2&&(Kt(),ae(17)),Ke(this),this.o=2,Ut(this)):Ba(this,this.V-t)};function Ut(t){t.l.G==0||t.I||cc(t.l,t)}function Ke(t){ps(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Kr(t.T),Ra(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function _r(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Er(n.h,t))){if(!t.J&&Er(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Wn(n),vs(n);else break e;si(n),ae(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=rn(se(n.cb,n),6e3));if(1>=Wa(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else We(n,11)}else if((t.J||n.g==t)&&Wn(n),!jn(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const w=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var i=s.h;i.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Jr(i,i.h),i.h=null))}if(s.D){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,V(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=hc(s,s.H?s.ka:null,s.V),o.J){Qa(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ps(a),cn(a)),s.g=o}else oc(s);0<n.i.length&&ws(n)}else u[0]!="stop"&&u[0]!="close"||We(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?We(n,7):ni(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Kt(4)}catch{}}function Zh(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(is(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function ed(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(is(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function $a(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(is(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ed(t),s=Zh(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var qa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function td(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Xe(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Xe){this.h=e!==void 0?e:t.h,Gn(this,t.j),this.s=t.s,this.g=t.g,Kn(this,t.m),this.l=t.l,e=t.i;var n=new Wt;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),to(this,n),this.o=t.o}else t&&(n=String(t).match(qa))?(this.h=!!e,Gn(this,n[1]||"",!0),this.s=Lt(n[2]||""),this.g=Lt(n[3]||"",!0),Kn(this,n[4]),this.l=Lt(n[5]||"",!0),to(this,n[6]||"",!0),this.o=Lt(n[7]||"")):(this.h=!!e,this.i=new Wt(null,this.h))}Xe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Mt(e,no,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Mt(e,no,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Mt(n,n.charAt(0)=="/"?rd:sd,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Mt(n,od)),t.join("")};function Ae(t){return new Xe(t)}function Gn(t,e,n){t.j=n?Lt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Kn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function to(t,e,n){e instanceof Wt?(t.i=e,ad(t.i,t.h)):(n||(e=Mt(e,id)),t.i=new Wt(e,t.h))}function V(t,e,n){t.i.set(e,n)}function ms(t){return V(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Lt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Mt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,nd),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nd(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var no=/[#\/\?@]/g,sd=/[#\?:]/g,rd=/[#\?]/g,id=/[#\?@]/g,od=/#/g;function Wt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function qe(t){t.g||(t.g=new Map,t.h=0,t.i&&td(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}T=Wt.prototype;T.add=function(t,e){qe(this),this.i=null,t=It(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ja(t,e){qe(t),e=It(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function za(t,e){return qe(t),e=It(t,e),t.g.has(e)}T.forEach=function(t,e){qe(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};T.oa=function(){qe(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};T.W=function(t){qe(this);let e=[];if(typeof t=="string")za(this,t)&&(e=e.concat(this.g.get(It(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};T.set=function(t,e){return qe(this),this.i=null,t=It(this,t),za(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};T.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Ha(t,e,n){ja(t,e),0<n.length&&(t.i=null,t.g.set(It(t,e),Vr(n)),t.h+=n.length)}T.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function It(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ad(t,e){e&&!t.j&&(qe(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(ja(this,s),Ha(this,r,n))},t)),t.j=e}var cd=class{constructor(e,n){this.h=e,this.g=n}};function Ga(t){this.l=t||ud,C.PerformanceNavigationTiming?(t=C.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(C.g&&C.g.Ga&&C.g.Ga()&&C.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ud=10;function Ka(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Wa(t){return t.h?1:t.g?t.g.size:0}function Er(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Jr(t,e){t.g?t.g.add(e):t.h=e}function Qa(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ga.prototype.cancel=function(){if(this.i=Xa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Xa(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Vr(t.i)}function Zr(){}Zr.prototype.stringify=function(t){return C.JSON.stringify(t,void 0)};Zr.prototype.parse=function(t){return C.JSON.parse(t,void 0)};function ld(){this.g=new Zr}function hd(t,e,n){const s=n||"";try{$a(t,function(r,i){let o=r;nn(r)&&(o=Gr(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function dd(t,e){const n=new ls;if(C.Image){const s=new Image;s.onload=Sn(An,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Sn(An,n,s,"TestLoadImage: error",!1,e),s.onabort=Sn(An,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Sn(An,n,s,"TestLoadImage: timeout",!1,e),C.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function An(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function un(t){this.l=t.ac||null,this.j=t.jb||!1}J(un,Qr);un.prototype.g=function(){return new gs(this.l,this.j)};un.prototype.i=function(t){return function(){return t}}({});function gs(t,e){Q.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ei,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}J(gs,Q);var ei=0;T=gs.prototype;T.open=function(t,e){if(this.readyState!=ei)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Qt(this)};T.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||C).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};T.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ln(this)),this.readyState=ei};T.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Qt(this)),this.g&&(this.readyState=3,Qt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof C.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ya(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Ya(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}T.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ln(this):Qt(this),this.readyState==3&&Ya(this)}};T.Va=function(t){this.g&&(this.response=this.responseText=t,ln(this))};T.Ua=function(t){this.g&&(this.response=t,ln(this))};T.ga=function(){this.g&&ln(this)};function ln(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Qt(t)}T.setRequestHeader=function(t,e){this.v.append(t,e)};T.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};T.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Qt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(gs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var fd=C.JSON.parse;function $(t){Q.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ja,this.K=this.L=!1}J($,Q);var Ja="",pd=/^https?$/i,md=["POST","PUT"];T=$.prototype;T.Ka=function(t){this.L=t};T.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():yr.g(),this.C=this.u?eo(this.u):eo(yr),this.g.onreadystatechange=se(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){so(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=C.FormData&&t instanceof C.FormData,!(0<=pa(md,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{tc(this),0<this.B&&((this.K=gd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=se(this.qa,this)):this.A=Wr(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){so(this,i)}};function gd(t){return mt&&Oh()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}T.qa=function(){typeof Fr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Y(this,"timeout"),this.abort(8))};function so(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Za(t),ys(t)}function Za(t){t.D||(t.D=!0,Y(t,"complete"),Y(t,"error"))}T.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Y(this,"complete"),Y(this,"abort"),ys(this))};T.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ys(this,!0)),$.X.M.call(this)};T.Ha=function(){this.s||(this.F||this.v||this.l?ec(this):this.fb())};T.fb=function(){ec(this)};function ec(t){if(t.h&&typeof Fr<"u"&&(!t.C[1]||Se(t)!=4||t.aa()!=2)){if(t.v&&Se(t)==4)Wr(t.Ha,0,t);else if(Y(t,"readystatechange"),Se(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(qa)[1]||null;if(!r&&C.self&&C.self.location){var i=C.self.location.protocol;r=i.substr(0,i.length-1)}s=!pd.test(r?r.toLowerCase():"")}n=s}if(n)Y(t,"complete"),Y(t,"success");else{t.m=6;try{var o=2<Se(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Za(t)}}finally{ys(t)}}}}function ys(t,e){if(t.g){tc(t);const n=t.g,s=t.C[0]?qn:null;t.g=null,t.C=null,e||Y(t,"ready");try{n.onreadystatechange=s}catch{}}}function tc(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(C.clearTimeout(t.A),t.A=null)}function Se(t){return t.g?t.g.readyState:0}T.aa=function(){try{return 2<Se(this)?this.g.status:-1}catch{return-1}};T.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};T.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),fd(e)}};function ro(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ja:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}T.Ea=function(){return this.m};T.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function nc(t){let e="";return $r(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ti(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=nc(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):V(t,e,n))}function xt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function sc(t){this.Ca=0,this.i=[],this.j=new ls,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=xt("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=xt("baseRetryDelayMs",5e3,t),this.bb=xt("retryDelaySeedMs",1e4,t),this.$a=xt("forwardChannelMaxRetries",2,t),this.ta=xt("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ga(t&&t.concurrentRequestLimit),this.Fa=new ld,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}T=sc.prototype;T.ma=8;T.G=1;function ni(t){if(rc(t),t.G==3){var e=t.U++,n=Ae(t.F);V(n,"SID",t.I),V(n,"RID",e),V(n,"TYPE","terminate"),hn(t,n),e=new an(t,t.j,e,void 0),e.K=2,e.v=ms(Ae(n)),n=!1,C.navigator&&C.navigator.sendBeacon&&(n=C.navigator.sendBeacon(e.v.toString(),"")),!n&&C.Image&&(new Image().src=e.v,n=!0),n||(e.g=dc(e.l,null),e.g.da(e.v)),e.F=Date.now(),cn(e)}lc(t)}function vs(t){t.g&&(ri(t),t.g.cancel(),t.g=null)}function rc(t){vs(t),t.u&&(C.clearTimeout(t.u),t.u=null),Wn(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&C.clearTimeout(t.m),t.m=null)}function ws(t){Ka(t.h)||t.m||(t.m=!0,Ca(t.Ja,t),t.C=0)}function yd(t,e){return Wa(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=rn(se(t.Ja,t,e),uc(t,t.C)),t.C++,!0)}T.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new an(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=va(i),wa(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ic(this,r,e),n=Ae(this.F),V(n,"RID",t),V(n,"CVER",22),this.D&&V(n,"X-HTTP-Session-Id",this.D),hn(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(nc(i)))+"&"+e:this.o&&ti(n,this.o,i)),Jr(this.h,r),this.Ya&&V(n,"TYPE","init"),this.O?(V(n,"$req",e),V(n,"SID","null"),r.Z=!0,wr(r,n,null)):wr(r,n,e),this.G=2}}else this.G==3&&(t?io(this,t):this.i.length==0||Ka(this.h)||io(this))};function io(t,e){var n;e?n=e.m:n=t.U++;const s=Ae(t.F);V(s,"SID",t.I),V(s,"RID",n),V(s,"AID",t.T),hn(t,s),t.o&&t.s&&ti(s,t.o,t.s),n=new an(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=ic(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Jr(t.h,n),wr(n,s,e)}function hn(t,e){t.ia&&$r(t.ia,function(n,s){V(e,s,n)}),t.l&&$a({},function(n,s){V(e,s,n)})}function ic(t,e,n){n=Math.min(t.i.length,n);var s=t.l?se(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{hd(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function oc(t){t.g||t.u||(t.Z=1,Ca(t.Ia,t),t.A=0)}function si(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=rn(se(t.Ia,t),uc(t,t.A)),t.A++,!0)}T.Ia=function(){if(this.u=null,ac(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=rn(se(this.eb,this),t)}};T.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ae(10),vs(this),ac(this))};function ri(t){t.B!=null&&(C.clearTimeout(t.B),t.B=null)}function ac(t){t.g=new an(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Ae(t.sa);V(e,"RID","rpc"),V(e,"SID",t.I),V(e,"CI",t.L?"0":"1"),V(e,"AID",t.T),V(e,"TYPE","xmlhttp"),hn(t,e),t.o&&t.s&&ti(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ms(Ae(e)),n.s=null,n.P=!0,Ua(n,t)}T.cb=function(){this.v!=null&&(this.v=null,vs(this),si(this),ae(19))};function Wn(t){t.v!=null&&(C.clearTimeout(t.v),t.v=null)}function cc(t,e){var n=null;if(t.g==e){Wn(t),ri(t),t.g=null;var s=2}else if(Er(t.h,e))n=e.D,Qa(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=hs(),Y(s,new Oa(s,n)),ws(t)}else oc(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&yd(t,e)||s==2&&si(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:We(t,5);break;case 4:We(t,10);break;case 3:We(t,6);break;default:We(t,2)}}}function uc(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function We(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=se(t.kb,t);n||(n=new Xe("//www.google.com/images/cleardot.gif"),C.location&&C.location.protocol=="http"||Gn(n,"https"),ms(n)),dd(n.toString(),s)}else ae(2);t.G=0,t.l&&t.l.va(e),lc(t),rc(t)}T.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ae(2)):(this.j.info("Failed to ping google.com"),ae(1))};function lc(t){if(t.G=0,t.la=[],t.l){const e=Xa(t.h);(e.length!=0||t.i.length!=0)&&(Wi(t.la,e),Wi(t.la,t.i),t.h.i.length=0,Vr(t.i),t.i.length=0),t.l.ua()}}function hc(t,e,n){var s=n instanceof Xe?Ae(n):new Xe(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Kn(s,s.m);else{var r=C.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Xe(null,void 0);s&&Gn(i,s),e&&(i.g=e),r&&Kn(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&V(s,n,e),V(s,"VER",t.ma),hn(t,s),s}function dc(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new $(new un({jb:!0})):new $(t.ra),e.Ka(t.H),e}function fc(){}T=fc.prototype;T.xa=function(){};T.wa=function(){};T.va=function(){};T.ua=function(){};T.Ra=function(){};function Qn(){if(mt&&!(10<=Number(Lh)))throw Error("Environmental error: no available transport.")}Qn.prototype.g=function(t,e){return new pe(t,e)};function pe(t,e){Q.call(this),this.g=new sc(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!jn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!jn(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new St(this)}J(pe,Q);pe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ae(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=hc(t,null,t.V),ws(t)};pe.prototype.close=function(){ni(this.g)};pe.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Gr(t),t=n);e.i.push(new cd(e.ab++,t)),e.G==3&&ws(e)};pe.prototype.M=function(){this.g.l=null,delete this.j,ni(this.g),delete this.g,pe.X.M.call(this)};function pc(t){Xr.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}J(pc,Xr);function mc(){Yr.call(this),this.status=1}J(mc,Yr);function St(t){this.g=t}J(St,fc);St.prototype.xa=function(){Y(this.g,"a")};St.prototype.wa=function(t){Y(this.g,new pc(t))};St.prototype.va=function(t){Y(this.g,new mc)};St.prototype.ua=function(){Y(this.g,"b")};Qn.prototype.createWebChannel=Qn.prototype.g;pe.prototype.send=pe.prototype.u;pe.prototype.open=pe.prototype.m;pe.prototype.close=pe.prototype.close;ds.NO_ERROR=0;ds.TIMEOUT=8;ds.HTTP_ERROR=6;La.COMPLETE="complete";Ma.EventType=on;on.OPEN="a";on.CLOSE="b";on.ERROR="c";on.MESSAGE="d";Q.prototype.listen=Q.prototype.N;$.prototype.listenOnce=$.prototype.O;$.prototype.getLastError=$.prototype.Oa;$.prototype.getLastErrorCode=$.prototype.Ea;$.prototype.getStatus=$.prototype.aa;$.prototype.getResponseJson=$.prototype.Sa;$.prototype.getResponseText=$.prototype.fa;$.prototype.send=$.prototype.da;$.prototype.setWithCredentials=$.prototype.Ka;var vd=function(){return new Qn},wd=function(){return hs()},Ys=ds,_d=La,Ed=rt,oo={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Td=un,Dn=Ma,bd=$;const ao="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ee.UNAUTHENTICATED=new ee(null),ee.GOOGLE_CREDENTIALS=new ee("google-credentials-uid"),ee.FIRST_PARTY=new ee("first-party-uid"),ee.MOCK_USER=new ee("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ct="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et=new ia("@firebase/firestore");function co(){return et.logLevel}function b(t,...e){if(et.logLevel<=O.DEBUG){const n=e.map(ii);et.debug(`Firestore (${Ct}): ${t}`,...n)}}function De(t,...e){if(et.logLevel<=O.ERROR){const n=e.map(ii);et.error(`Firestore (${Ct}): ${t}`,...n)}}function Xn(t,...e){if(et.logLevel<=O.WARN){const n=e.map(ii);et.warn(`Firestore (${Ct}): ${t}`,...n)}}function ii(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t="Unexpected state"){const e=`FIRESTORE (${Ct}) INTERNAL ASSERTION FAILED: `+t;throw De(e),new Error(e)}function U(t,e){t||S()}function D(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends st{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Id{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ee.UNAUTHENTICATED))}shutdown(){}}class Sd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Cd{constructor(e){this.t=e,this.currentUser=ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Pe;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Pe,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Pe)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(U(typeof s.accessToken=="string"),new gc(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return U(e===null||typeof e=="string"),new ee(e)}}class Ad{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=ee.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Dd{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new Ad(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Rd{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(U(typeof n.token=="string"),this.T=n.token,new kd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Nd(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function L(t,e){return t<e?-1:t>e?1:0}function gt(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new E(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new E(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new E(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return H.fromMillis(Date.now())}static fromDate(e){return H.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new H(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?L(this.nanoseconds,e.nanoseconds):L(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.timestamp=e}static fromTimestamp(e){return new A(e)}static min(){return new A(new H(0,0))}static max(){return new A(new H(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n,s){n===void 0?n=0:n>e.length&&S(),s===void 0?s=e.length-n:s>e.length-n&&S(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Xt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Xt?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class P extends Xt{construct(e,n,s){return new P(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new E(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new P(n)}static emptyPath(){return new P([])}}const xd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ne extends Xt{construct(e,n,s){return new ne(e,n,s)}static isValidIdentifier(e){return xd.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ne.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ne(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new E(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new E(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new E(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new E(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ne(n)}static emptyPath(){return new ne([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(P.fromString(e))}static fromName(e){return new I(P.fromString(e).popFirst(5))}static empty(){return new I(P.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&P.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return P.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new P(e.slice()))}}function Od(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=A.fromTimestamp(s===1e9?new H(n+1,0):new H(n,s));return new Fe(r,I.empty(),e)}function Ld(t){return new Fe(t.readTime,t.key,-1)}class Fe{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Fe(A.min(),I.empty(),-1)}static max(){return new Fe(A.max(),I.empty(),-1)}}function Md(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=I.comparator(t.documentKey,e.documentKey),n!==0?n:L(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ud{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(t){if(t.code!==f.FAILED_PRECONDITION||t.message!==Pd)throw t;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new g((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):g.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):g.reject(n)}static resolve(e){return new g((n,s)=>{n(e)})}static reject(e){return new g((n,s)=>{s(e)})}static waitFor(e){return new g((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=g.resolve(!1);for(const s of e)n=n.next(r=>r?g.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new g((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new g((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function fn(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}oi.ct=-1;function _s(t){return t==null}function Yn(t){return t===0&&1/t==-1/0}function Fd(t){return typeof t=="number"&&Number.isInteger(t)&&!Yn(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function it(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,n){this.comparator=e,this.root=n||X.EMPTY}insert(e,n){return new K(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,X.BLACK,null,null))}remove(e){return new K(this.comparator,this.root.remove(e,this.comparator).copy(null,null,X.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new kn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new kn(this.root,e,this.comparator,!1)}getReverseIterator(){return new kn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new kn(this.root,e,this.comparator,!0)}}class kn{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class X{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??X.RED,this.left=r??X.EMPTY,this.right=i??X.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new X(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return X.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return X.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,X.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,X.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const e=this.left.check();if(e!==this.right.check())throw S();return e+(this.isRed()?0:1)}}X.EMPTY=null,X.RED=!0,X.BLACK=!1;X.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(t,e,n,s,r){return this}insert(t,e,n){return new X(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.comparator=e,this.data=new K(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new lo(this.data.getIterator())}getIteratorFrom(e){return new lo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof G)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new G(this.comparator);return n.data=e,n}}class lo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.fields=e,e.sort(ne.comparator)}static empty(){return new le([])}unionWith(e){let n=new G(ne.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new le(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gt(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Vd("Invalid base64 string: "+r):r}}(e);return new ie(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new ie(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return L(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ie.EMPTY_BYTE_STRING=new ie("");const Bd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ve(t){if(U(!!t),typeof t=="string"){let e=0;const n=Bd.exec(t);if(U(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:j(t.seconds),nanos:j(t.nanos)}}function j(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yt(t){return typeof t=="string"?ie.fromBase64String(t):ie.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _c(t){const e=t.mapValue.fields.__previous_value__;return wc(e)?_c(e):e}function Yt(t){const e=Ve(t.mapValue.fields.__local_write_time__.timestampValue);return new H(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Jt{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Jt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Jt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function tt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wc(t)?4:qd(t)?9007199254740991:10:S()}function Te(t,e){if(t===e)return!0;const n=tt(t);if(n!==tt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Yt(t).isEqual(Yt(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Ve(s.timestampValue),o=Ve(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return yt(s.bytesValue).isEqual(yt(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return j(s.geoPointValue.latitude)===j(r.geoPointValue.latitude)&&j(s.geoPointValue.longitude)===j(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return j(s.integerValue)===j(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=j(s.doubleValue),o=j(r.doubleValue);return i===o?Yn(i)===Yn(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return gt(t.arrayValue.values||[],e.arrayValue.values||[],Te);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(uo(i)!==uo(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Te(i[a],o[a])))return!1;return!0}(t,e);default:return S()}}function Zt(t,e){return(t.values||[]).find(n=>Te(n,e))!==void 0}function vt(t,e){if(t===e)return 0;const n=tt(t),s=tt(e);if(n!==s)return L(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return L(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=j(r.integerValue||r.doubleValue),a=j(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ho(t.timestampValue,e.timestampValue);case 4:return ho(Yt(t),Yt(e));case 5:return L(t.stringValue,e.stringValue);case 6:return function(r,i){const o=yt(r),a=yt(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=L(o[c],a[c]);if(u!==0)return u}return L(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=L(j(r.latitude),j(i.latitude));return o!==0?o:L(j(r.longitude),j(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=vt(o[c],a[c]);if(u)return u}return L(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Rn.mapValue&&i===Rn.mapValue)return 0;if(r===Rn.mapValue)return 1;if(i===Rn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=L(a[l],u[l]);if(h!==0)return h;const d=vt(o[a[l]],c[u[l]]);if(d!==0)return d}return L(a.length,u.length)}(t.mapValue,e.mapValue);default:throw S()}}function ho(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return L(t,e);const n=Ve(t),s=Ve(e),r=L(n.seconds,s.seconds);return r!==0?r:L(n.nanos,s.nanos)}function wt(t){return Tr(t)}function Tr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Ve(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?yt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,I.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Tr(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Tr(s.fields[a])}`;return i+"}"}(t.mapValue):S();var e,n}function fo(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function br(t){return!!t&&"integerValue"in t}function ai(t){return!!t&&"arrayValue"in t}function po(t){return!!t&&"nullValue"in t}function mo(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pn(t){return!!t&&"mapValue"in t}function Ft(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return it(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ft(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ft(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qd(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.value=e}static empty(){return new ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Pn(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ft(n)}setAll(e){let n=ne.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Ft(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Pn(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Te(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Pn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){it(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ue(Ft(this.value))}}function Ec(t){const e=[];return it(t.fields,(n,s)=>{const r=new ne([n]);if(Pn(s)){const i=Ec(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new le(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new te(e,0,A.min(),A.min(),A.min(),ue.empty(),0)}static newFoundDocument(e,n,s,r){return new te(e,1,n,A.min(),s,r,0)}static newNoDocument(e,n){return new te(e,2,n,A.min(),A.min(),ue.empty(),0)}static newUnknownDocument(e,n){return new te(e,3,n,A.min(),A.min(),ue.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(A.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=A.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n){this.position=e,this.inclusive=n}}function go(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=I.comparator(I.fromName(o.referenceValue),n.key):s=vt(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function yo(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Te(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n="asc"){this.field=e,this.dir=n}}function jd(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{}class z extends Tc{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Hd(e,n,s):n==="array-contains"?new Wd(e,s):n==="in"?new Qd(e,s):n==="not-in"?new Xd(e,s):n==="array-contains-any"?new Yd(e,s):new z(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Gd(e,s):new Kd(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vt(n,this.value)):n!==null&&tt(this.value)===tt(n)&&this.matchesComparison(vt(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return S()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ye extends Tc{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new ye(e,n)}matches(e){return bc(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function bc(t){return t.op==="and"}function Ic(t){return zd(t)&&bc(t)}function zd(t){for(const e of t.filters)if(e instanceof ye)return!1;return!0}function Ir(t){if(t instanceof z)return t.field.canonicalString()+t.op.toString()+wt(t.value);if(Ic(t))return t.filters.map(e=>Ir(e)).join(",");{const e=t.filters.map(n=>Ir(n)).join(",");return`${t.op}(${e})`}}function Sc(t,e){return t instanceof z?function(n,s){return s instanceof z&&n.op===s.op&&n.field.isEqual(s.field)&&Te(n.value,s.value)}(t,e):t instanceof ye?function(n,s){return s instanceof ye&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Sc(i,s.filters[o]),!0):!1}(t,e):void S()}function Cc(t){return t instanceof z?function(e){return`${e.field.canonicalString()} ${e.op} ${wt(e.value)}`}(t):t instanceof ye?function(e){return e.op.toString()+" {"+e.getFilters().map(Cc).join(" ,")+"}"}(t):"Filter"}class Hd extends z{constructor(e,n,s){super(e,n,s),this.key=I.fromName(s.referenceValue)}matches(e){const n=I.comparator(e.key,this.key);return this.matchesComparison(n)}}class Gd extends z{constructor(e,n){super(e,"in",n),this.keys=Ac("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Kd extends z{constructor(e,n){super(e,"not-in",n),this.keys=Ac("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ac(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>I.fromName(s.referenceValue))}class Wd extends z{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ai(n)&&Zt(n.arrayValue,this.value)}}class Qd extends z{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zt(this.value.arrayValue,n)}}class Xd extends z{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Zt(this.value.arrayValue,n)}}class Yd extends z{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ai(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Zt(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function vo(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Jd(t,e,n,s,r,i,o)}function ci(t){const e=D(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Ir(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),_s(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>wt(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>wt(s)).join(",")),e.ft=n}return e.ft}function ui(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!jd(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Sc(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!yo(t.startAt,e.startAt)&&yo(t.endAt,e.endAt)}function Sr(t){return I.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Zd(t,e,n,s,r,i,o,a){return new pn(t,e,n,s,r,i,o,a)}function Dc(t){return new pn(t)}function wo(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kc(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function li(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Rc(t){return t.collectionGroup!==null}function dt(t){const e=D(t);if(e.dt===null){e.dt=[];const n=li(e),s=kc(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Vt(n)),e.dt.push(new Vt(ne.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Vt(ne.keyField(),i))}}}return e.dt}function ke(t){const e=D(t);if(!e.wt)if(e.limitType==="F")e.wt=vo(e.path,e.collectionGroup,dt(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of dt(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Vt(i.field,o))}const s=e.endAt?new Jn(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Jn(e.startAt.position,e.startAt.inclusive):null;e.wt=vo(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function Cr(t,e){e.getFirstInequalityField(),li(t);const n=t.filters.concat([e]);return new pn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ar(t,e,n){return new pn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Es(t,e){return ui(ke(t),ke(e))&&t.limitType===e.limitType}function Nc(t){return`${ci(ke(t))}|lt:${t.limitType}`}function Dr(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Cc(s)).join(", ")}]`),_s(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>wt(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>wt(s)).join(",")),`Target(${n})`}(ke(t))}; limitType=${t.limitType})`}function Ts(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):I.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of dt(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=go(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,dt(n),s)||n.endAt&&!function(r,i,o){const a=go(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,dt(n),s))}(t,e)}function ef(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xc(t){return(e,n)=>{let s=!1;for(const r of dt(t)){const i=tf(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function tf(t,e,n){const s=t.field.isKeyField()?I.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?vt(a,c):S()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return S()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){it(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return vc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf=new K(I.comparator);function Re(){return nf}const Oc=new K(I.comparator);function Pt(...t){let e=Oc;for(const n of t)e=e.insert(n.key,n);return e}function Lc(t){let e=Oc;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Qe(){return Bt()}function Mc(){return Bt()}function Bt(){return new At(t=>t.toString(),(t,e)=>t.isEqual(e))}const sf=new K(I.comparator),rf=new G(I.comparator);function N(...t){let e=rf;for(const n of t)e=e.add(n);return e}const of=new G(L);function Pc(){return of}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yn(e)?"-0":e}}function Fc(t){return{integerValue:""+t}}function af(t,e){return Fd(e)?Fc(e):Uc(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this._=void 0}}function cf(t,e,n){return t instanceof Zn?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof en?Bc(t,e):t instanceof tn?$c(t,e):function(s,r){const i=Vc(s,r),o=_o(i)+_o(s._t);return br(i)&&br(s._t)?Fc(o):Uc(s.serializer,o)}(t,e)}function uf(t,e,n){return t instanceof en?Bc(t,e):t instanceof tn?$c(t,e):n}function Vc(t,e){return t instanceof es?br(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Zn extends bs{}class en extends bs{constructor(e){super(),this.elements=e}}function Bc(t,e){const n=qc(e);for(const s of t.elements)n.some(r=>Te(r,s))||n.push(s);return{arrayValue:{values:n}}}class tn extends bs{constructor(e){super(),this.elements=e}}function $c(t,e){let n=qc(e);for(const s of t.elements)n=n.filter(r=>!Te(r,s));return{arrayValue:{values:n}}}class es extends bs{constructor(e,n){super(),this.serializer=e,this._t=n}}function _o(t){return j(t.integerValue||t.doubleValue)}function qc(t){return ai(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function lf(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof en&&s instanceof en||n instanceof tn&&s instanceof tn?gt(n.elements,s.elements,Te):n instanceof es&&s instanceof es?Te(n._t,s._t):n instanceof Zn&&s instanceof Zn}(t.transform,e.transform)}class hf{constructor(e,n){this.version=e,this.transformResults=n}}class _e{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _e}static exists(e){return new _e(void 0,e)}static updateTime(e){return new _e(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Un(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Is{}function jc(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Hc(t.key,_e.none()):new mn(t.key,t.data,_e.none());{const n=t.data,s=ue.empty();let r=new G(ne.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new je(t.key,s,new le(r.toArray()),_e.none())}}function df(t,e,n){t instanceof mn?function(s,r,i){const o=s.value.clone(),a=To(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof je?function(s,r,i){if(!Un(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=To(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(zc(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function $t(t,e,n,s){return t instanceof mn?function(r,i,o,a){if(!Un(r.precondition,i))return o;const c=r.value.clone(),u=bo(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof je?function(r,i,o,a){if(!Un(r.precondition,i))return o;const c=bo(r.fieldTransforms,a,i),u=i.data;return u.setAll(zc(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return Un(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function ff(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Vc(s.transform,r||null);i!=null&&(n===null&&(n=ue.empty()),n.set(s.field,i))}return n||null}function Eo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&gt(n,s,(r,i)=>lf(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class mn extends Is{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class je extends Is{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function zc(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function To(t,e,n){const s=new Map;U(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,uf(o,a,n[r]))}return s}function bo(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,cf(i,o,e))}return s}class Hc extends Is{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pf extends Is{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&df(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=$t(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=$t(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Mc();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=jc(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(A.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),N())}isEqual(e){return this.batchId===e.batchId&&gt(this.mutations,e.mutations,(n,s)=>Eo(n,s))&&gt(this.baseMutations,e.baseMutations,(n,s)=>Eo(n,s))}}class hi{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){U(e.mutations.length===s.length);let r=sf;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new hi(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q,x;function vf(t){switch(t){default:return S();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Gc(t){if(t===void 0)return De("GRPC error has no .code"),f.UNKNOWN;switch(t){case q.OK:return f.OK;case q.CANCELLED:return f.CANCELLED;case q.UNKNOWN:return f.UNKNOWN;case q.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case q.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case q.INTERNAL:return f.INTERNAL;case q.UNAVAILABLE:return f.UNAVAILABLE;case q.UNAUTHENTICATED:return f.UNAUTHENTICATED;case q.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case q.NOT_FOUND:return f.NOT_FOUND;case q.ALREADY_EXISTS:return f.ALREADY_EXISTS;case q.PERMISSION_DENIED:return f.PERMISSION_DENIED;case q.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case q.ABORTED:return f.ABORTED;case q.OUT_OF_RANGE:return f.OUT_OF_RANGE;case q.UNIMPLEMENTED:return f.UNIMPLEMENTED;case q.DATA_LOSS:return f.DATA_LOSS;default:return S()}}(x=q||(q={}))[x.OK=0]="OK",x[x.CANCELLED=1]="CANCELLED",x[x.UNKNOWN=2]="UNKNOWN",x[x.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",x[x.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",x[x.NOT_FOUND=5]="NOT_FOUND",x[x.ALREADY_EXISTS=6]="ALREADY_EXISTS",x[x.PERMISSION_DENIED=7]="PERMISSION_DENIED",x[x.UNAUTHENTICATED=16]="UNAUTHENTICATED",x[x.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",x[x.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",x[x.ABORTED=10]="ABORTED",x[x.OUT_OF_RANGE=11]="OUT_OF_RANGE",x[x.UNIMPLEMENTED=12]="UNIMPLEMENTED",x[x.INTERNAL=13]="INTERNAL",x[x.UNAVAILABLE=14]="UNAVAILABLE",x[x.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Nn}static getOrCreateInstance(){return Nn===null&&(Nn=new di),Nn}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Nn=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,gn.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ss(A.min(),r,Pc(),Re(),N())}}class gn{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new gn(s,n,N(),N(),N())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Kc{constructor(e,n){this.targetId=e,this.Et=n}}class Wc{constructor(e,n,s=ie.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Io{constructor(){this.At=0,this.Rt=Co(),this.vt=ie.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=N(),n=N(),s=N();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:S()}}),new gn(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=Co()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class wf{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Re(),this.qt=So(),this.Ut=new G(L)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:S()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.Wt(r)&&n(r)})}Jt(e){var n;const s=e.targetId,r=e.Et.count,i=this.Yt(s);if(i){const o=i.target;if(Sr(o))if(r===0){const a=new I(o.path);this.Qt(s,a,te.newNoDocument(a,A.min()))}else U(r===1);else{const a=this.Zt(s);a!==r&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=di.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Sr(a.target)){const c=new I(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,te.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=N();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new Ss(e,n,this.Ut,this.Lt,s);return this.Lt=Re(),this.qt=So(),this.Ut=new G(L),r}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Io,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new G(L),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||b("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Io),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function So(){return new K(I.comparator)}function Co(){return new K(I.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ef=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Tf=(()=>({and:"AND",or:"OR"}))();class bf{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ts(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qc(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function If(t,e){return ts(t,e.toTimestamp())}function Ee(t){return U(!!t),A.fromTimestamp(function(e){const n=Ve(e);return new H(n.seconds,n.nanos)}(t))}function fi(t,e){return function(n){return new P(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Xc(t){const e=P.fromString(t);return U(eu(e)),e}function kr(t,e){return fi(t.databaseId,e.path)}function Js(t,e){const n=Xc(e);if(n.get(1)!==t.databaseId.projectId)throw new E(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new E(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new I(Yc(n))}function Rr(t,e){return fi(t.databaseId,e)}function Sf(t){const e=Xc(t);return e.length===4?P.emptyPath():Yc(e)}function Nr(t){return new P(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Yc(t){return U(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ao(t,e,n){return{name:kr(t,e),fields:n.value.mapValue.fields}}function Cf(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:S()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(U(u===void 0||typeof u=="string"),ie.fromBase64String(u||"")):(U(u===void 0||u instanceof Uint8Array),ie.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:Gc(c.code);return new E(u,c.message||"")}(o);n=new Wc(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Js(t,s.document.name),i=Ee(s.document.updateTime),o=s.document.createTime?Ee(s.document.createTime):A.min(),a=new ue({mapValue:{fields:s.document.fields}}),c=te.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new Fn(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Js(t,s.document),i=s.readTime?Ee(s.readTime):A.min(),o=te.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Fn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Js(t,s.document),i=s.removedTargetIds||[];n=new Fn([],i,r,null)}else{if(!("filter"in e))return S();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new yf(r),o=s.targetId;n=new Kc(o,i)}}return n}function Af(t,e){let n;if(e instanceof mn)n={update:Ao(t,e.key,e.value)};else if(e instanceof Hc)n={delete:kr(t,e.key)};else if(e instanceof je)n={update:Ao(t,e.key,e.data),updateMask:Pf(e.fieldMask)};else{if(!(e instanceof pf))return S();n={verify:kr(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Zn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof en)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof tn)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof es)return{fieldPath:i.field.canonicalString(),increment:o._t};throw S()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:If(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:S()}(t,e.precondition)),n}function Df(t,e){return t&&t.length>0?(U(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Ee(s.updateTime):Ee(r);return i.isEqual(A.min())&&(i=Ee(r)),new hf(i,s.transformResults||[])}(n,e))):[]}function kf(t,e){return{documents:[Rr(t,e.path)]}}function Rf(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Rr(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Rr(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Zc(ye.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:ct(l.field),direction:Of(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.useProto3Json||_s(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Nf(t){let e=Sf(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){U(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=Jc(l);return h instanceof ye&&Ic(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Vt(ut(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,_s(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Jn(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Jn(d,h)}(n.endAt)),Zd(e,r,o,i,a,"F",c,u)}function xf(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return S()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Jc(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ut(e.unaryFilter.field);return z.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ut(e.unaryFilter.field);return z.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ut(e.unaryFilter.field);return z.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ut(e.unaryFilter.field);return z.create(i,"!=",{nullValue:"NULL_VALUE"});default:return S()}}(t):t.fieldFilter!==void 0?function(e){return z.create(ut(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ye.create(e.compositeFilter.filters.map(n=>Jc(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return S()}}(e.compositeFilter.op))}(t):S()}function Of(t){return _f[t]}function Lf(t){return Ef[t]}function Mf(t){return Tf[t]}function ct(t){return{fieldPath:t.canonicalString()}}function ut(t){return ne.fromServerFormat(t.fieldPath)}function Zc(t){return t instanceof z?function(e){if(e.op==="=="){if(mo(e.value))return{unaryFilter:{field:ct(e.field),op:"IS_NAN"}};if(po(e.value))return{unaryFilter:{field:ct(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(mo(e.value))return{unaryFilter:{field:ct(e.field),op:"IS_NOT_NAN"}};if(po(e.value))return{unaryFilter:{field:ct(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ct(e.field),op:Lf(e.op),value:e.value}}}(t):t instanceof ye?function(e){const n=e.getFilters().map(s=>Zc(s));return n.length===1?n[0]:{compositeFilter:{op:Mf(e.op),filters:n}}}(t):S()}function Pf(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function eu(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n,s,r,i=A.min(),o=A.min(),a=ie.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ye(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ye(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ye(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e){this.se=e}}function Ff(t){const e=Nf({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ar(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(){this.He=new Bf}addToCollectionParentIndex(e,n){return this.He.add(n),g.resolve()}getCollectionParents(e,n){return g.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return g.resolve()}deleteFieldIndex(e,n){return g.resolve()}getDocumentsMatchingTarget(e,n){return g.resolve(null)}getIndexType(e,n){return g.resolve(0)}getFieldIndexes(e,n){return g.resolve([])}getNextCollectionGroupToUpdate(e){return g.resolve(null)}getMinOffset(e,n){return g.resolve(Fe.min())}getMinOffsetFromCollectionGroup(e,n){return g.resolve(Fe.min())}updateCollectionGroup(e,n,s){return g.resolve()}updateIndexEntries(e,n){return g.resolve()}}class Bf{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new G(P.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new G(P.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new _t(0)}static bn(){return new _t(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(){this.changes=new At(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,te.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?g.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&$t(s.mutation,r,le.empty(),H.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,N()).next(()=>s))}getLocalViewOfDocuments(e,n,s=N()){const r=Qe();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Pt();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Qe();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,N()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Re();const o=Bt(),a=Bt();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof je)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),$t(l.mutation,u,l.mutation.getFieldMask(),H.now())):o.set(u.key,le.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new qf(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Bt();let r=new K((o,a)=>o-a),i=N();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||le.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||N()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Mc();l.forEach(d=>{if(!i.has(d)){const m=jc(n.get(d),s.get(d));m!==null&&h.set(d,m),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return g.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return I.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Rc(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):g.resolve(Qe());let a=-1,c=i;return o.next(u=>g.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?g.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,N())).next(l=>({batchId:a,changes:Lc(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new I(n)).next(s=>{let r=Pt();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Pt();return this.indexManager.getCollectionParents(e,r).next(o=>g.forEach(o,a=>{const c=function(u,l){return new pn(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,te.newInvalidDocument(u)))});let o=Pt();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&$t(u.mutation,c,le.empty(),H.now()),Ts(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return g.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ee(s.createTime)}),g.resolve()}getNamedQuery(e,n){return g.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:Ff(s.bundledQuery),readTime:Ee(s.readTime)}}(n)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(){this.overlays=new K(I.comparator),this.ts=new Map}getOverlay(e,n){return g.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Qe();return g.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.re(e,n,i)}),g.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ts.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(s)),g.resolve()}getOverlaysForCollection(e,n,s){const r=Qe(),i=n.length+1,o=new I(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return g.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new K((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Qe(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Qe(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return g.resolve(a)}re(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(s.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new gf(n,s));let i=this.ts.get(n);i===void 0&&(i=N(),this.ts.set(n,i)),this.ts.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.es=new G(W.ns),this.ss=new G(W.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new W(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new W(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new I(new P([])),s=new W(n,e),r=new W(n,e+1),i=[];return this.ss.forEachInRange([s,r],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new I(new P([])),s=new W(n,e),r=new W(n,e+1);let i=N();return this.ss.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new W(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class W{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return I.comparator(e.key,n.key)||L(e.ds,n.ds)}static rs(e,n){return L(e.ds,n.ds)||I.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new G(W.ns)}checkEmpty(e){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mf(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new W(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(e,n){return g.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ys(s),i=r<0?0:r;return g.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new W(n,0),r=new W(n,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([s,r],o=>{const a=this.gs(o.ds);i.push(a)}),g.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new G(L);return n.forEach(r=>{const i=new W(r,0),o=new W(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{s=s.add(a.ds)})}),g.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;I.isDocumentKey(i)||(i=i.child(""));const o=new W(new I(i),0);let a=new G(L);return this._s.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.ds)),!0)},o),g.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const r=this.gs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){U(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return g.forEach(n.mutations,r=>{const i=new W(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new W(n,0),r=this._s.firstAfterOrEqual(s);return g.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,g.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e){this.Ts=e,this.docs=new K(I.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return g.resolve(s?s.document.mutableCopy():te.newInvalidDocument(n))}getEntries(e,n){let s=Re();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():te.newInvalidDocument(r))}),g.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Re();const o=n.path,a=new I(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Md(Ld(l),s)<=0||(r.has(l.key)||Ts(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return g.resolve(i)}getAllFromCollectionGroup(e,n,s,r){S()}Es(e,n){return g.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Wf(this)}getSize(e){return g.resolve(this.size)}}class Wf extends $f{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(s)}),g.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e){this.persistence=e,this.As=new At(n=>ci(n),ui),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.Rs=0,this.vs=new pi,this.targetCount=0,this.bs=_t.vn()}forEachTarget(e,n){return this.As.forEach((s,r)=>n(r)),g.resolve()}getLastRemoteSnapshotVersion(e){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return g.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),g.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new _t(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,g.resolve()}updateTargetData(e,n){return this.Sn(n),g.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),g.waitFor(i).next(()=>r)}getTargetCount(e){return g.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return g.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),g.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),g.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),g.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return g.resolve(s)}containsKey(e,n){return g.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new oi(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new Qf(this),this.indexManager=new Vf,this.remoteDocumentCache=function(s){return new Kf(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new Uf(n),this.xs=new zf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Hf,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new Gf(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){b("MemoryPersistence","Starting transaction:",e);const r=new Yf(this.Vs.next());return this.referenceDelegate.Ns(),s(r).next(i=>this.referenceDelegate.ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return g.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class Yf extends Ud{constructor(e){super(),this.currentSequenceNumber=e}}class mi{constructor(e){this.persistence=e,this.$s=new pi,this.Ms=null}static Fs(e){return new mi(e)}get Bs(){if(this.Ms)return this.Ms;throw S()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),g.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),g.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),g.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Bs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Bs,s=>{const r=I.fromPath(s);return this.Ls(e,r).next(i=>{i||n.removeEntry(r,A.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return g.or([()=>g.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=r}static Di(e,n){let s=N(),r=N();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new gi(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ni(e,n).next(i=>i||this.ki(e,n,r,s)).next(i=>i||this.Oi(e,n))}Ni(e,n){if(wo(n))return g.resolve(null);let s=ke(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Ar(n,null,"F"),s=ke(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=N(...i);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.$i(n,a);return this.Mi(n,u,o,c.readTime)?this.Ni(e,Ar(n,null,"F")):this.Fi(e,u,n,c)}))})))}ki(e,n,s,r){return wo(n)||r.isEqual(A.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(i=>{const o=this.$i(n,i);return this.Mi(n,o,s,r)?this.Oi(e,n):(co()<=O.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Dr(n)),this.Fi(e,o,n,Od(r,-1)))})}$i(e,n){let s=new G(xc(e));return n.forEach((r,i)=>{Ts(e,i)&&(s=s.add(i))}),s}Mi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return co()<=O.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",Dr(n)),this.xi.getDocumentsMatchingQuery(e,n,Fe.min())}Fi(e,n,s,r){return this.xi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,n,s,r){this.persistence=e,this.Bi=n,this.serializer=r,this.Li=new K(L),this.qi=new At(i=>ci(i),ui),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jf(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function ep(t,e,n,s){return new Zf(t,e,n,s)}async function tu(t,e){const n=D(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=N();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function tp(t,e){const n=D(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=g.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(w=>{const v=c.docVersions.get(m);U(v!==null),w.version.compareTo(v)<0&&(l.applyToRemoteDocument(w,c),w.isValidDocument()&&(w.setReadTime(c.commitVersion),u.addEntry(w)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=N();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function nu(t){const e=D(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function np(t,e){const n=D(t),s=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(i,l.addedDocuments,h)));let m=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(ie.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):l.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(l.resumeToken,s)),r=r.insert(h,m),function(w,v,p){return w.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(d,m,l)&&a.push(n.Ds.updateTargetData(i,m))});let c=Re(),u=N();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(sp(i,o,e.documentUpdates).next(l=>{c=l.zi,u=l.ji})),!s.isEqual(A.min())){const l=n.Ds.getLastRemoteSnapshotVersion(i).next(h=>n.Ds.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return g.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Li=r,i))}function sp(t,e,n){let s=N(),r=N();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Re();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(A.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):b("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{zi:o,ji:r}})}function rp(t,e){const n=D(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function ip(t,e){const n=D(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ds.getTargetData(s,e).next(i=>i?(r=i,g.resolve(r)):n.Ds.allocateTargetId(s).next(o=>(r=new Ye(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Li.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function xr(t,e,n){const s=D(t),r=s.Li.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!fn(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(r.target)}function Do(t,e,n){const s=D(t);let r=A.min(),i=N();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=D(a),h=l.qi.get(u);return h!==void 0?g.resolve(l.Li.get(h)):l.Ds.getTargetData(c,u)}(s,o,ke(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?r:A.min(),n?i:N())).next(a=>(op(s,ef(e),a),{documents:a,Wi:i})))}function op(t,e,n){let s=t.Ui.get(e)||A.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ui.set(e,s)}class ko{constructor(){this.activeTargetIds=Pc()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ap{constructor(){this.Br=new ko,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new ko,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xn=null;function Zs(){return xn===null?xn=268435456+Math.round(2147483648*Math.random()):xn++,"0x"+xn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z="WebChannelConnection";class hp extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,r,i){const o=Zs(),a=this.ao(e,n);b("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.ho(c,r,i),this.lo(e,a,c,s).then(u=>(b("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Xn("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ct,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=up[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){const i=Zs();return new Promise((o,a)=>{const c=new bd;c.setWithCredentials(!0),c.listenOnce(_d.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ys.NO_ERROR:const l=c.getResponseJson();b(Z,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case Ys.TIMEOUT:b(Z,`RPC '${e}' ${i} timed out`),a(new E(f.DEADLINE_EXCEEDED,"Request time out"));break;case Ys.HTTP_ERROR:const h=c.getStatus();if(b(Z,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const w=function(v){const p=v.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(p)>=0?p:f.UNKNOWN}(m.status);a(new E(w,m.message))}else a(new E(f.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new E(f.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{b(Z,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);b(Z,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}wo(e,n,s){const r=Zs(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vd(),a=wd(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new Td({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");b(Z,`Creating RPC '${e}' stream ${r}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,d=!1;const m=new lp({Wr:v=>{d?b(Z,`Not sending because RPC '${e}' stream ${r} is closed:`,v):(h||(b(Z,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),b(Z,`RPC '${e}' stream ${r} sending:`,v),l.send(v))},Hr:()=>l.close()}),w=(v,p,k)=>{v.listen(p,y=>{try{k(y)}catch(R){setTimeout(()=>{throw R},0)}})};return w(l,Dn.EventType.OPEN,()=>{d||b(Z,`RPC '${e}' stream ${r} transport opened.`)}),w(l,Dn.EventType.CLOSE,()=>{d||(d=!0,b(Z,`RPC '${e}' stream ${r} transport closed`),m.so())}),w(l,Dn.EventType.ERROR,v=>{d||(d=!0,Xn(Z,`RPC '${e}' stream ${r} transport errored:`,v),m.so(new E(f.UNAVAILABLE,"The operation could not be completed")))}),w(l,Dn.EventType.MESSAGE,v=>{var p;if(!d){const k=v.data[0];U(!!k);const y=k,R=y.error||((p=y[0])===null||p===void 0?void 0:p.error);if(R){b(Z,`RPC '${e}' stream ${r} received error:`,R);const M=R.status;let me=function(Nt){const Ne=q[Nt];if(Ne!==void 0)return Gc(Ne)}(M),be=R.message;me===void 0&&(me=f.INTERNAL,be="Unknown error status: "+M+" with message "+R.message),d=!0,m.so(new E(me,be)),l.close()}else b(Z,`RPC '${e}' stream ${r} received:`,k),m.io(k)}}),w(a,Ed.STAT_EVENT,v=>{v.stat===oo.PROXY?b(Z,`RPC '${e}' stream ${r} detected buffering proxy`):v.stat===oo.NOPROXY&&b(Z,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{m.no()},0),m}}function er(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(t){return new bf(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&b("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,s,r,i,o,a,c){this.Ws=e,this.bo=s,this.Po=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new su(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(De(n.toString()),De("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.Ko(s,r)},s=>{e(()=>{const r=new E(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(r)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{s(()=>this.Go(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dp extends ru{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=Cf(this.serializer,e),s=function(r){if(!("targetChange"in r))return A.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?A.min():i.readTime?Ee(i.readTime):A.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=Nr(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;return o=Sr(a)?{documents:kf(r,a)}:{query:Rf(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Qc(r,i.resumeToken):i.snapshotVersion.compareTo(A.min())>0&&(o.readTime=ts(r,i.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=xf(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=Nr(this.serializer),n.removeTarget=e,this.Fo(n)}}class fp extends ru{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(U(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=Df(e.writeResults,e.commitTime),s=Ee(e.commitTime);return this.listener.Zo(s,n)}return U(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Nr(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Af(this.serializer,s))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new E(f.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new E(f.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(f.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class mp{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(De(n),this.ru=!1):b("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{s.enqueueAndForget(async()=>{ot(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=D(a);c.du.add(4),await yn(c),c.mu.set("Unknown"),c.du.delete(4),await As(c)}(this))})}),this.mu=new mp(s,r)}}async function As(t){if(ot(t))for(const e of t.wu)await e(!0)}async function yn(t){for(const e of t.wu)await e(!1)}function iu(t,e){const n=D(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),wi(n)?vi(n):Dt(n).No()&&yi(n,e))}function ou(t,e){const n=D(t),s=Dt(n);n.fu.delete(e),s.No()&&au(n,e),n.fu.size===0&&(s.No()?s.$o():ot(n)&&n.mu.set("Unknown"))}function yi(t,e){t.gu.Ot(e.targetId),Dt(t).jo(e)}function au(t,e){t.gu.Ot(e),Dt(t).Wo(e)}function vi(t){t.gu=new wf({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Dt(t).start(),t.mu.ou()}function wi(t){return ot(t)&&!Dt(t).xo()&&t.fu.size>0}function ot(t){return D(t).du.size===0}function cu(t){t.gu=void 0}async function yp(t){t.fu.forEach((e,n)=>{yi(t,e)})}async function vp(t,e){cu(t),wi(t)?(t.mu.au(e),vi(t)):t.mu.set("Unknown")}async function wp(t,e,n){if(t.mu.set("Online"),e instanceof Wc&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){b("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ns(t,s)}else if(e instanceof Fn?t.gu.Kt(e):e instanceof Kc?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(A.min()))try{const s=await nu(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.fu.get(c);u&&r.fu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.fu.get(a);if(!c)return;r.fu.set(a,c.withResumeToken(ie.EMPTY_BYTE_STRING,c.snapshotVersion)),au(r,a);const u=new Ye(c.target,a,1,c.sequenceNumber);yi(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){b("RemoteStore","Failed to raise snapshot:",s),await ns(t,s)}}async function ns(t,e,n){if(!fn(e))throw e;t.du.add(1),await yn(t),t.mu.set("Offline"),n||(n=()=>nu(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await As(t)})}function uu(t,e){return e().catch(n=>ns(t,n,e))}async function Ds(t){const e=D(t),n=Be(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;_p(e);)try{const r=await rp(e.localStore,s);if(r===null){e.lu.length===0&&n.$o();break}s=r.batchId,Ep(e,r)}catch(r){await ns(e,r)}lu(e)&&hu(e)}function _p(t){return ot(t)&&t.lu.length<10}function Ep(t,e){t.lu.push(e);const n=Be(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function lu(t){return ot(t)&&!Be(t).xo()&&t.lu.length>0}function hu(t){Be(t).start()}async function Tp(t){Be(t).tu()}async function bp(t){const e=Be(t);for(const n of t.lu)e.Yo(n.mutations)}async function Ip(t,e,n){const s=t.lu.shift(),r=hi.from(s,e,n);await uu(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ds(t)}async function Sp(t,e){e&&Be(t).Jo&&await async function(n,s){if(r=s.code,vf(r)&&r!==f.ABORTED){const i=n.lu.shift();Be(n).Oo(),await uu(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ds(n)}var r}(t,e),lu(t)&&hu(t)}async function No(t,e){const n=D(t);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const s=ot(n);n.du.add(3),await yn(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await As(n)}async function Cp(t,e){const n=D(t);e?(n.du.delete(2),await As(n)):e||(n.du.add(2),await yn(n),n.mu.set("Unknown"))}function Dt(t){return t.yu||(t.yu=function(e,n,s){const r=D(e);return r.nu(),new dp(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:yp.bind(null,t),Zr:vp.bind(null,t),zo:wp.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),wi(t)?vi(t):t.mu.set("Unknown")):(await t.yu.stop(),cu(t))})),t.yu}function Be(t){return t.pu||(t.pu=function(e,n,s){const r=D(e);return r.nu(),new fp(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:Tp.bind(null,t),Zr:Sp.bind(null,t),Xo:bp.bind(null,t),Zo:Ip.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Ds(t)):(await t.pu.stop(),t.lu.length>0&&(b("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Pe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new _i(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ei(t,e){if(De("AsyncQueue",`${e}: ${t}`),fn(t))return new E(f.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.comparator=e?(n,s)=>e(n,s)||I.comparator(n.key,s.key):(n,s)=>I.comparator(n.key,s.key),this.keyedMap=Pt(),this.sortedSet=new K(this.comparator)}static emptySet(e){return new ft(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ft;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(){this.Iu=new K(I.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):S():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Et{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Et(e,n,ft.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Es(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(){this.Eu=void 0,this.listeners=[]}}class Dp{constructor(){this.queries=new At(e=>Nc(e),Es),this.onlineState="Unknown",this.Au=new Set}}async function kp(t,e){const n=D(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Ap),r)try{i.Eu=await n.onListen(s)}catch(o){const a=Ei(o,`Initialization of query '${Dr(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Ru(n.onlineState),i.Eu&&e.vu(i.Eu)&&Ti(n)}async function Rp(t,e){const n=D(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Np(t,e){const n=D(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Eu=r}}s&&Ti(n)}function xp(t,e,n){const s=D(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Ti(t){t.Au.forEach(e=>{e.next()})}class Op{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Et(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Et.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e){this.key=e}}class fu{constructor(e){this.key=e}}class Lp{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=N(),this.mutatedKeys=N(),this.Ku=xc(e),this.Gu=new ft(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new xo,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),m=Ts(this.query,h)?h:null,w=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let p=!1;d&&m?d.data.isEqual(m.data)?w!==v&&(s.track({type:3,doc:m}),p=!0):this.Wu(d,m)||(s.track({type:2,doc:m}),p=!0,(c&&this.Ku(m,c)>0||u&&this.Ku(m,u)<0)&&(a=!0)):!d&&m?(s.track({type:0,doc:m}),p=!0):d&&!m&&(s.track({type:1,doc:d}),p=!0,(c||u)&&(a=!0)),p&&(m?(o=o.add(m),i=v?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Gu:o,ju:s,Mi:a,mutatedKeys:i}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort((u,l)=>function(h,d){const m=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return m(h)-m(d)}(u.type,l.type)||this.Ku(u.doc,l.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Et(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new xo,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=N(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new fu(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new du(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=N();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Et.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Mp{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Pp{constructor(e){this.key=e,this.ec=!1}}class Up{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new At(a=>Nc(a),Es),this.ic=new Map,this.rc=new Set,this.oc=new K(I.comparator),this.uc=new Map,this.cc=new pi,this.ac={},this.hc=new Map,this.lc=_t.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function Fp(t,e){const n=Wp(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await ip(n.localStore,ke(e));n.isPrimaryClient&&iu(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Vp(n,e,s,a==="current",o.resumeToken)}return r}async function Vp(t,e,n,s,r){t.dc=(h,d,m)=>async function(w,v,p,k){let y=v.view.zu(p);y.Mi&&(y=await Do(w.localStore,v.query,!1).then(({documents:me})=>v.view.zu(me,y)));const R=k&&k.targetChanges.get(v.targetId),M=v.view.applyChanges(y,w.isPrimaryClient,R);return Lo(w,v.targetId,M.Yu),M.snapshot}(t,h,d,m);const i=await Do(t.localStore,e,!0),o=new Lp(e,i.Wi),a=o.zu(i.documents),c=gn.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);Lo(t,n,u.Yu);const l=new Mp(e,n,o);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function Bp(t,e){const n=D(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!Es(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await xr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),ou(n.remoteStore,s.targetId),Or(n,s.targetId)}).catch(dn)):(Or(n,s.targetId),await xr(n.localStore,s.targetId,!0))}async function $p(t,e,n){const s=Qp(t);try{const r=await function(i,o){const a=D(i),c=H.now(),u=o.reduce((d,m)=>d.add(m.key),N());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=Re(),w=N();return a.Ki.getEntries(d,u).next(v=>{m=v,m.forEach((p,k)=>{k.isValidDocument()||(w=w.add(p))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(v=>{l=v;const p=[];for(const k of o){const y=ff(k,l.get(k.key).overlayedDocument);y!=null&&p.push(new je(k.key,y,Ec(y.value.mapValue),_e.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,p,o)}).next(v=>{h=v;const p=v.applyToLocalDocumentSet(l,w);return a.documentOverlayCache.saveOverlays(d,v.batchId,p)})}).then(()=>({batchId:h.batchId,changes:Lc(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new K(L)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await vn(s,r.changes),await Ds(s.remoteStore)}catch(r){const i=Ei(r,"Failed to persist write");n.reject(i)}}async function pu(t,e){const n=D(t);try{const s=await np(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(U(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?U(o.ec):r.removedDocuments.size>0&&(U(o.ec),o.ec=!1))}),await vn(n,s,e)}catch(s){await dn(s)}}function Oo(t,e,n){const s=D(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=D(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Ru(o)&&(c=!0)}),c&&Ti(a)}(s.eventManager,e),r.length&&s.nc.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function qp(t,e,n){const s=D(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new K(I.comparator);o=o.insert(i,te.newNoDocument(i,A.min()));const a=N().add(i),c=new Ss(A.min(),new Map,new G(L),o,a);await pu(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),bi(s)}else await xr(s.localStore,e,!1).then(()=>Or(s,e,n)).catch(dn)}async function jp(t,e){const n=D(t),s=e.batch.batchId;try{const r=await tp(n.localStore,e);gu(n,s,null),mu(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await vn(n,r)}catch(r){await dn(r)}}async function zp(t,e,n){const s=D(t);try{const r=await function(i,o){const a=D(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(U(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);gu(s,e,n),mu(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await vn(s,r)}catch(r){await dn(r)}}function mu(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function gu(t,e,n){const s=D(t);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function Or(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||yu(t,s)})}function yu(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(ou(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),bi(t))}function Lo(t,e,n){for(const s of n)s instanceof du?(t.cc.addReference(s.key,e),Hp(t,s)):s instanceof fu?(b("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||yu(t,s.key)):S()}function Hp(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(b("SyncEngine","New document in limbo: "+n),t.rc.add(s),bi(t))}function bi(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new I(P.fromString(e)),s=t.lc.next();t.uc.set(s,new Pp(n)),t.oc=t.oc.insert(n,s),iu(t.remoteStore,new Ye(ke(Dc(n.path)),s,2,oi.ct))}}async function vn(t,e,n){const s=D(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=gi.Di(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.nc.zo(r),await async function(a,c){const u=D(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>g.forEach(c,h=>g.forEach(h.Vi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>g.forEach(h.Si,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!fn(l))throw l;b("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Li.get(h),m=d.snapshotVersion,w=d.withLastLimboFreeSnapshotVersion(m);u.Li=u.Li.insert(h,w)}}}(s.localStore,i))}async function Gp(t,e){const n=D(t);if(!n.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const s=await tu(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new E(f.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await vn(n,s.Qi)}}function Kp(t,e){const n=D(t),s=n.uc.get(e);if(s&&s.ec)return N().add(s.key);{let r=N();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function Wp(t){const e=D(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=pu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Kp.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qp.bind(null,e),e.nc.zo=Np.bind(null,e.eventManager),e.nc.wc=xp.bind(null,e.eventManager),e}function Qp(t){const e=D(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jp.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zp.bind(null,e),e}class Mo{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Cs(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return ep(this.persistence,new Jf,e.initialUser,this.serializer)}createPersistence(e){return new Xf(mi.Fs,this.serializer)}createSharedClientState(e){return new ap}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Xp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Oo(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gp.bind(null,this.syncEngine),await Cp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Dp}createDatastore(e){const n=Cs(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new hp(r));var r;return function(i,o,a,c){return new pp(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Oo(this.syncEngine,a,0),o=Ro.D()?new Ro:new cp,new gp(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new Up(s,r,i,o,a,c);return u&&(l.fc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=D(e);b("RemoteStore","RemoteStore shutting down."),n.du.add(5),await yn(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):De("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=ee.UNAUTHENTICATED,this.clientId=yc.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{b("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(b("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ei(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function tr(t,e){t.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await tu(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Po(t,e){t.asyncQueue.verifyOperationInProgress();const n=await em(t);b("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>No(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>No(e.remoteStore,i)),t._onlineComponents=e}function Zp(t){return t.name==="FirebaseError"?t.code===f.FAILED_PRECONDITION||t.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function em(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await tr(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Zp(n))throw n;Xn("Error using user provided cache. Falling back to memory cache: "+n),await tr(t,new Mo)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await tr(t,new Mo);return t._offlineComponents}async function vu(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await Po(t,t._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await Po(t,new Xp))),t._onlineComponents}function tm(t){return vu(t).then(e=>e.syncEngine)}async function nm(t){const e=await vu(t),n=e.eventManager;return n.onListen=Fp.bind(null,e.syncEngine),n.onUnlisten=Bp.bind(null,e.syncEngine),n}function sm(t,e,n={}){const s=new Pe;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Yp({next:h=>{i.enqueueAndForget(()=>Rp(r,l)),h.fromCache&&a.source==="server"?c.reject(new E(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Op(o,u,{includeMetadataChanges:!0,xu:!0});return kp(r,l)}(await nm(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t,e,n){if(!n)throw new E(f.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rm(t,e,n,s){if(e===!0&&s===!0)throw new E(f.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Fo(t){if(!I.isDocumentKey(t))throw new E(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vo(t){if(I.isDocumentKey(t))throw new E(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ks(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":S()}function Tt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ks(t);throw new E(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new E(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new E(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,rm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new E(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bo(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Id;switch(n.type){case"firstParty":return new Dd(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new E(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Uo.get(e);n&&(b("ComponentProvider","Removing Datastore"),Uo.delete(e),n.terminate())}(this),Promise.resolve()}}function im(t,e,n,s={}){var r;const i=(t=Tt(t,Rs))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Xn("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=ee.MOCK_USER;else{o=sa(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new E(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ee(c)}t._authCredentials=new Sd(new gc(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ue(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new de(this.firestore,e,this._key)}}class kt{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new kt(this.firestore,e,this._query)}}class Ue extends kt{constructor(e,n,s){super(e,n,Dc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new de(this.firestore,null,new I(e))}withConverter(e){return new Ue(this.firestore,e,this._path)}}function $o(t,e,...n){if(t=fe(t),wu("collection","path",e),t instanceof Rs){const s=P.fromString(e,...n);return Vo(s),new Ue(t,null,s)}{if(!(t instanceof de||t instanceof Ue))throw new E(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(P.fromString(e,...n));return Vo(s),new Ue(t.firestore,null,s)}}function om(t,e,...n){if(t=fe(t),arguments.length===1&&(e=yc.A()),wu("doc","path",e),t instanceof Rs){const s=P.fromString(e,...n);return Fo(s),new de(t,null,new I(s))}{if(!(t instanceof de||t instanceof Ue))throw new E(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(P.fromString(e,...n));return Fo(s),new de(t.firestore,t instanceof Ue?t.converter:null,new I(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new su(this,"async_queue_retry"),this.qc=()=>{const n=er();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=er();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=er();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Pe;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!fn(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw De("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const r=_i.createAndSchedule(this,e,n,s,i=>this.Qc(i));return this.$c.push(r),r}Uc(){this.Mc&&S()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Ns extends Rs{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new am,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Eu(this),this._firestoreClient.terminate()}}function cm(t,e){const n=typeof t=="object"?t:ha(),s=typeof t=="string"?t:e||"(default)",r=ca(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=na("firestore");i&&im(r,...i)}return r}function _u(t){return t._firestoreClient||Eu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Eu(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,u){return new $d(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new Jp(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bt(ie.fromBase64String(e))}catch(n){throw new E(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bt(ie.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new E(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new E(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new E(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return L(this._lat,e._lat)||L(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um=/^__.*__$/;class lm{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new je(e,this.data,this.fieldMask,n,this.fieldTransforms):new mn(e,this.data,n,this.fieldTransforms)}}class Tu{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new je(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function bu(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class Ci{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Ci(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.ea(e),r}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return ss(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(bu(this.Yc)&&um.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class hm{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Cs(e)}ua(e,n,s,r=!1){return new Ci({Yc:e,methodName:n,oa:s,path:ne.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ai(t){const e=t._freezeSettings(),n=Cs(t._databaseId);return new hm(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dm(t,e,n,s,r,i={}){const o=t.ua(i.merge||i.mergeFields?2:0,e,n,r);Di("Data must be an object, but it was:",o,s);const a=Iu(s,o);let c,u;if(i.merge)c=new le(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=Lr(e,h,n);if(!o.contains(d))throw new E(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Cu(l,d)||l.push(d)}c=new le(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new lm(new ue(a),c,u)}class Os extends Ii{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Os}}function fm(t,e,n,s){const r=t.ua(1,e,n);Di("Data must be an object, but it was:",r,s);const i=[],o=ue.empty();it(s,(c,u)=>{const l=ki(e,c,n);u=fe(u);const h=r.na(l);if(u instanceof Os)i.push(l);else{const d=wn(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new le(i);return new Tu(o,a,r.fieldTransforms)}function pm(t,e,n,s,r,i){const o=t.ua(1,e,n),a=[Lr(e,s,n)],c=[r];if(i.length%2!=0)throw new E(f.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Lr(e,i[d])),c.push(i[d+1]);const u=[],l=ue.empty();for(let d=a.length-1;d>=0;--d)if(!Cu(u,a[d])){const m=a[d];let w=c[d];w=fe(w);const v=o.na(m);if(w instanceof Os)u.push(m);else{const p=wn(w,v);p!=null&&(u.push(m),l.set(m,p))}}const h=new le(u);return new Tu(l,h,o.fieldTransforms)}function mm(t,e,n,s=!1){return wn(n,t.ua(s?4:3,e))}function wn(t,e){if(Su(t=fe(t)))return Di("Unsupported field value:",e,t),Iu(t,e);if(t instanceof Ii)return function(n,s){if(!bu(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=wn(o,s.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=fe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return af(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=H.fromDate(n);return{timestampValue:ts(s.serializer,r)}}if(n instanceof H){const r=new H(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ts(s.serializer,r)}}if(n instanceof Si)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof bt)return{bytesValue:Qc(s.serializer,n._byteString)};if(n instanceof de){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:fi(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${ks(n)}`)}(t,e)}function Iu(t,e){const n={};return vc(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):it(t,(s,r)=>{const i=wn(r,e.Xc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Su(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof H||t instanceof Si||t instanceof bt||t instanceof de||t instanceof Ii)}function Di(t,e,n){if(!Su(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ks(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function Lr(t,e,n){if((e=fe(e))instanceof xs)return e._internalPath;if(typeof e=="string")return ki(t,e);throw ss("Field path arguments must be of type string or ",t,!1,void 0,n)}const gm=new RegExp("[~\\*/\\[\\]]");function ki(t,e,n){if(e.search(gm)>=0)throw ss(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xs(...e.split("."))._internalPath}catch{throw ss(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ss(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new E(f.INVALID_ARGUMENT,a+t+c)}function Cu(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new de(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ym(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ri("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ym extends Au{data(){return super.data()}}function Ri(t,e){return typeof e=="string"?ki(t,e):e instanceof xs?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new E(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ni{}class wm extends Ni{}function qo(t,e,...n){let s=[];e instanceof Ni&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof xi).length,o=r.filter(a=>a instanceof Ls).length;if(i>1||i>0&&o>0)throw new E(f.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Ls extends wm{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Ls(e,n,s)}_apply(e){const n=this._parse(e);return Du(e._query,n),new kt(e.firestore,e.converter,Cr(e._query,n))}_parse(e){const n=Ai(e.firestore);return function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new E(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Ho(l,u);const d=[];for(const m of l)d.push(zo(a,r,m));h={arrayValue:{values:d}}}else h=zo(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Ho(l,u),h=mm(o,i,l,u==="in"||u==="not-in");return z.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function jo(t,e,n){const s=e,r=Ri("where",t);return Ls._create(r,s,n)}class xi extends Ni{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new xi(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:ye.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Du(i,a),i=Cr(i,a)}(e._query,n),new kt(e.firestore,e.converter,Cr(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function zo(t,e,n){if(typeof(n=fe(n))=="string"){if(n==="")throw new E(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Rc(e)&&n.indexOf("/")!==-1)throw new E(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(P.fromString(n));if(!I.isDocumentKey(s))throw new E(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return fo(t,new I(s))}if(n instanceof de)return fo(t,n._key);throw new E(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ks(n)}.`)}function Ho(t,e){if(!Array.isArray(t)||t.length===0)throw new E(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Du(t,e){if(e.isInequality()){const s=li(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new E(f.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=kc(t);i!==null&&_m(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new E(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new E(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function _m(t,e,n){if(!n.isEqual(e))throw new E(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Em{convertValue(e,n="none"){switch(tt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return j(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw S()}}convertObject(e,n){const s={};return it(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Si(j(e.latitude),j(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=_c(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Yt(e));default:return null}}convertTimestamp(e){const n=Ve(e);return new H(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=P.fromString(e);U(eu(s));const r=new Jt(s.get(1),s.get(3)),i=new I(s.popFirst(5));return r.isEqual(n)||De(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bm extends Au{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Vn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Ri("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Vn extends bm{data(e={}){return super.data(e)}}class Im{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new On(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Vn(this._firestore,this._userDataWriter,s.key,s,new On(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new E(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Vn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new On(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Vn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new On(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:Sm(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Sm(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return S()}}class Cm extends Em{constructor(e){super(),this.firestore=e}convertBytes(e){return new bt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new de(this.firestore,null,n)}}function Go(t){t=Tt(t,kt);const e=Tt(t.firestore,Ns),n=_u(e),s=new Cm(e);return vm(t._query),sm(n,t._query).then(r=>new Im(e,s,t,r))}function Am(t,e,n,...s){t=Tt(t,de);const r=Tt(t.firestore,Ns),i=Ai(r);let o;return o=typeof(e=fe(e))=="string"||e instanceof xs?pm(i,"updateDoc",t._key,e,n,s):fm(i,"updateDoc",t._key,e),ku(r,[o.toMutation(t._key,_e.exists(!0))])}function Dm(t,e){const n=Tt(t.firestore,Ns),s=om(t),r=Tm(t.converter,e);return ku(n,[dm(Ai(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,_e.exists(!1))]).then(()=>s)}function ku(t,e){return function(n,s){const r=new Pe;return n.asyncQueue.enqueueAndForget(async()=>$p(await tm(n),s,r)),r.promise}(_u(t),e)}(function(t,e=!0){(function(n){Ct=n})(ua),jt(new pt("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Ns(new Cd(n.getProvider("auth-internal")),new Rd(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new E(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jt(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Me(ao,"3.10.0",t),Me(ao,"3.10.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru="firebasestorage.googleapis.com",Nu="storageBucket",km=2*60*1e3,Rm=10*60*1e3,Nm=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B extends st{constructor(e,n,s=0){super(nr(e),`Firebase Storage: ${n} (${nr(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,B.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return nr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var F;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(F||(F={}));function nr(t){return"storage/"+t}function Oi(){const t="An unknown error occurred, please check the error payload for server response.";return new B(F.UNKNOWN,t)}function xm(t){return new B(F.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Om(t){return new B(F.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Lm(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new B(F.UNAUTHENTICATED,t)}function Mm(){return new B(F.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Pm(t){return new B(F.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function xu(){return new B(F.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ou(){return new B(F.CANCELED,"User canceled the upload/download.")}function Um(t){return new B(F.INVALID_URL,"Invalid URL '"+t+"'.")}function Fm(t){return new B(F.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Vm(){return new B(F.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Nu+"' property when initializing the app?")}function Lu(){return new B(F.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Bm(){return new B(F.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function $m(){return new B(F.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function qm(t){return new B(F.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Mr(t){return new B(F.INVALID_ARGUMENT,t)}function Mu(){return new B(F.APP_DELETED,"The Firebase app was deleted.")}function jm(t){return new B(F.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function qt(t,e){return new B(F.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ot(t){throw new B(F.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=he.makeFromUrl(e,n)}catch{return new he(e,"")}if(s.path==="")return s;throw Fm(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(M){M.path_=decodeURIComponent(M.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),w={bucket:1,path:3},v=n===Ru?"(?:storage.googleapis.com|storage.cloud.google.com)":n,p="([^?#]*)",k=new RegExp(`^https?://${v}/${r}/${p}`,"i"),R=[{regex:a,indices:c,postModify:i},{regex:m,indices:w,postModify:u},{regex:k,indices:{bucket:1,path:2},postModify:u}];for(let M=0;M<R.length;M++){const me=R[M],be=me.regex.exec(e);if(be){const Nt=be[me.indices.bucket];let Ne=be[me.indices.path];Ne||(Ne=""),s=new he(Nt,Ne),me.postModify(s);break}}if(s==null)throw Um(e);return s}}class zm{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...p){u||(u=!0,e.apply(null,p))}function h(p){r=setTimeout(()=>{r=null,t(m,c())},p)}function d(){i&&clearTimeout(i)}function m(p,...k){if(u){d();return}if(p){d(),l.call(null,p,...k);return}if(c()||o){d(),l.call(null,p,...k);return}s<64&&(s*=2);let R;a===1?(a=2,R=0):R=(s+Math.random())*1e3,h(R)}let w=!1;function v(p){w||(w=!0,d(),!u&&(r!==null?(p||(a=2),clearTimeout(r),h(0)):p||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function Gm(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t){return t!==void 0}function Wm(t){return typeof t=="function"}function Qm(t){return typeof t=="object"&&!Array.isArray(t)}function Ms(t){return typeof t=="string"||t instanceof String}function Ko(t){return Li()&&t instanceof Blob}function Li(){return typeof Blob<"u"&&!hl()}function Wo(t,e,n,s){if(s<e)throw Mr(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Mr(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Pu(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Je||(Je={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n,s,r,i,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,w)=>{this.resolve_=m,this.reject_=w,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Ln(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Je.NO_ERROR,c=i.getStatus();if(!a||Uu(c,this.additionalRetryCodes_)&&this.retry){const l=i.getErrorCode()===Je.ABORT;s(!1,new Ln(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new Ln(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Km(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Oi();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Mu():Ou();o(c)}else{const c=xu();o(c)}};this.canceled_?n(!1,new Ln(!1,null,!0)):this.backoffId_=Hm(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Gm(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ln{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Ym(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Jm(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Zm(t,e){e&&(t["X-Firebase-GMPID"]=e)}function eg(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function tg(t,e,n,s,r,i,o=!0){const a=Pu(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return Zm(u,e),Ym(u,n),Jm(u,i),eg(u,s),new Xm(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function sg(...t){const e=ng();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Li())return new Blob(t);throw new B(F.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function rg(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(t){if(typeof atob>"u")throw qm("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class sr{constructor(e,n){this.data=e,this.contentType=n||null}}function og(t,e){switch(t){case we.RAW:return new sr(Fu(e));case we.BASE64:case we.BASE64URL:return new sr(Vu(t,e));case we.DATA_URL:return new sr(cg(e),ug(e))}throw Oi()}function Fu(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function ag(t){let e;try{e=decodeURIComponent(t)}catch{throw qt(we.DATA_URL,"Malformed data URL.")}return Fu(e)}function Vu(t,e){switch(t){case we.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw qt(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case we.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw qt(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ig(e)}catch(r){throw r.message.includes("polyfill")?r:qt(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Bu{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw qt(we.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=lg(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function cg(t){const e=new Bu(t);return e.base64?Vu(we.BASE64,e.rest):ag(e.rest)}function ug(t){return new Bu(t).contentType}function lg(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){let s=0,r="";Ko(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ko(this.data_)){const s=this.data_,r=rg(s,e,n);return r===null?null:new xe(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new xe(s,!0)}}static getBlob(...e){if(Li()){const n=e.map(s=>s instanceof xe?s.data_:s);return new xe(sg.apply(null,n))}else{const n=e.map(o=>Ms(o)?og(we.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new xe(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(t){let e;try{e=JSON.parse(t)}catch{return null}return Qm(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function dg(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function qu(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t,e){return e}class oe{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||fg}}let Mn=null;function pg(t){return!Ms(t)||t.length<2?t:qu(t)}function ju(){if(Mn)return Mn;const t=[];t.push(new oe("bucket")),t.push(new oe("generation")),t.push(new oe("metageneration")),t.push(new oe("name","fullPath",!0));function e(i,o){return pg(o)}const n=new oe("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new oe("size");return r.xform=s,t.push(r),t.push(new oe("timeCreated")),t.push(new oe("updated")),t.push(new oe("md5Hash",null,!0)),t.push(new oe("cacheControl",null,!0)),t.push(new oe("contentDisposition",null,!0)),t.push(new oe("contentEncoding",null,!0)),t.push(new oe("contentLanguage",null,!0)),t.push(new oe("contentType",null,!0)),t.push(new oe("metadata","customMetadata",!0)),Mn=t,Mn}function mg(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new he(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function gg(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return mg(s,t),s}function zu(t,e,n){const s=$u(e);return s===null?null:gg(t,s,n)}function yg(t,e,n,s){const r=$u(e);if(r===null||!Ms(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),m=_n(d,n,s),w=Pu({alt:"media",token:u});return m+w})[0]}function Hu(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Rt{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(t){if(!t)throw Oi()}function Mi(t,e){function n(s,r){const i=zu(t,r,e);return Ce(i!==null),i}return n}function vg(t,e){function n(s,r){const i=zu(t,r,e);return Ce(i!==null),yg(i,r,t.host,t._protocol)}return n}function En(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Mm():r=Lm():n.getStatus()===402?r=Om(t.bucket):n.getStatus()===403?r=Pm(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function Gu(t){const e=En(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=xm(t.path)),i.serverResponse=r.serverResponse,i}return n}function wg(t,e,n){const s=e.fullServerUrl(),r=_n(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Rt(r,i,Mi(t,n),o);return a.errorHandler=Gu(e),a}function _g(t,e,n){const s=e.fullServerUrl(),r=_n(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Rt(r,i,vg(t,n),o);return a.errorHandler=Gu(e),a}function Eg(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Ku(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=Eg(null,e)),s}function Tg(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let R="";for(let M=0;M<2;M++)R=R+Math.random().toString().slice(2);return R}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=Ku(e,s,r),l=Hu(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",m=xe.getBlob(h,s,d);if(m===null)throw Lu();const w={name:u.fullPath},v=_n(i,t.host,t._protocol),p="POST",k=t.maxUploadRetryTime,y=new Rt(v,p,Mi(t,n),k);return y.urlParams=w,y.headers=o,y.body=m.uploadData(),y.errorHandler=En(e),y}class rs{constructor(e,n,s,r){this.current=e,this.total=n,this.finalized=!!s,this.metadata=r||null}}function Pi(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Ce(!1)}return Ce(!!n&&(e||["active"]).indexOf(n)!==-1),n}function bg(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o=Ku(e,s,r),a={name:o.fullPath},c=_n(i,t.host,t._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Hu(o,n),d=t.maxUploadRetryTime;function m(v){Pi(v);let p;try{p=v.getResponseHeader("X-Goog-Upload-URL")}catch{Ce(!1)}return Ce(Ms(p)),p}const w=new Rt(c,u,m,d);return w.urlParams=a,w.headers=l,w.body=h,w.errorHandler=En(e),w}function Ig(t,e,n,s){const r={"X-Goog-Upload-Command":"query"};function i(u){const l=Pi(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Ce(!1)}h||Ce(!1);const d=Number(h);return Ce(!isNaN(d)),new rs(d,s.size(),l==="final")}const o="POST",a=t.maxUploadRetryTime,c=new Rt(n,o,i,a);return c.headers=r,c.errorHandler=En(e),c}const Qo=256*1024;function Sg(t,e,n,s,r,i,o,a){const c=new rs(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw Bm();const u=c.total-c.current;let l=u;r>0&&(l=Math.min(l,r));const h=c.current,d=h+l;let m="";l===0?m="finalize":u===l?m="upload, finalize":m="upload";const w={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${c.current}`},v=s.slice(h,d);if(v===null)throw Lu();function p(M,me){const be=Pi(M,["active","final"]),Nt=c.current+l,Ne=s.size();let Ps;return be==="final"?Ps=Mi(e,i)(M,me):Ps=null,new rs(Nt,Ne,be==="final",Ps)}const k="POST",y=e.maxUploadRetryTime,R=new Rt(n,k,p,y);return R.headers=w,R.body=v.uploadData(),R.progressCallback=a||null,R.errorHandler=En(t),R}const ce={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function rr(t){switch(t){case"running":case"pausing":case"canceling":return ce.RUNNING;case"paused":return ce.PAUSED;case"success":return ce.SUCCESS;case"canceled":return ce.CANCELED;case"error":return ce.ERROR;default:return ce.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,n,s){if(Wm(e)||n!=null||s!=null)this.next=e,this.error=n??void 0,this.complete=s??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class Ag{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Je.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Je.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Je.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw Ot("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ot("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ot("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ot("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ot("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Dg extends Ag{initXhr(){this.xhr_.responseType="text"}}function lt(){return new Dg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=ju(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(F.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Uu(r.status,[]))if(i)r=xu();else{this.sleepTime=Math.max(this.sleepTime*2,Nm),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(F.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=bg(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,lt,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const r=Ig(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,lt,n,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Qo*this._chunkMultiplier,n=new rs(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=Sg(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,lt,r,i,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Qo*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=wg(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,lt,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=Tg(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,lt,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Ou(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=rr(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,r){const i=new Cg(n||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(rr(this._state)){case ce.SUCCESS:at(this._resolve.bind(null,this.snapshot))();break;case ce.CANCELED:case ce.ERROR:const n=this._reject;at(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(rr(this._state)){case ce.RUNNING:case ce.PAUSED:e.next&&at(e.next.bind(e,this.snapshot))();break;case ce.SUCCESS:e.complete&&at(e.complete.bind(e))();break;case ce.CANCELED:case ce.ERROR:e.error&&at(e.error.bind(e,this._error))();break;default:e.error&&at(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n){this._service=e,n instanceof he?this._location=n:this._location=he.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new nt(e,n)}get root(){const e=new he(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qu(this._location.path)}get storage(){return this._service}get parent(){const e=hg(this._location.path);if(e===null)return null;const n=new he(this._location.bucket,e);return new nt(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw jm(e)}}function Rg(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new kg(t,new xe(e),n)}function Ng(t){t._throwIfRoot("getDownloadURL");const e=_g(t.storage,t._location,ju());return t.storage.makeRequestWithTokens(e,lt).then(n=>{if(n===null)throw $m();return n})}function xg(t,e){const n=dg(t._location.path,e),s=new he(t._location.bucket,n);return new nt(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(t){return/^[A-Za-z]+:\/\//.test(t)}function Lg(t,e){return new nt(t,e)}function Wu(t,e){if(t instanceof Ui){const n=t;if(n._bucket==null)throw Vm();const s=new nt(n,n._bucket);return e!=null?Wu(s,e):s}else return e!==void 0?xg(t,e):t}function Mg(t,e){if(e&&Og(e)){if(t instanceof Ui)return Lg(t,e);throw Mr("To use ref(service, url), the first argument must be a Storage instance.")}else return Wu(t,e)}function Xo(t,e){const n=e==null?void 0:e[Nu];return n==null?null:he.makeFromBucketSpec(n,t)}function Pg(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:sa(r,t.app.options.projectId))}class Ui{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Ru,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=km,this._maxUploadRetryTime=Rm,this._requests=new Set,r!=null?this._bucket=he.makeFromBucketSpec(r,this._host):this._bucket=Xo(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=he.makeFromBucketSpec(this._url,e):this._bucket=Xo(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Wo("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Wo("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new nt(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new zm(Mu());{const o=tg(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Yo="@firebase/storage",Jo="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="storage";function Ug(t,e,n){return t=fe(t),Rg(t,e,n)}function Fg(t){return t=fe(t),Ng(t)}function Vg(t,e){return t=fe(t),Mg(t,e)}function Bg(t=ha(),e){t=fe(t);const s=ca(t,Qu).getImmediate({identifier:e}),r=na("storage");return r&&$g(s,...r),s}function $g(t,e,n,s={}){Pg(t,e,n,s)}function qg(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Ui(n,s,r,e,ua)}function jg(){jt(new pt(Qu,qg,"PUBLIC").setMultipleInstances(!0)),Me(Yo,Jo,""),Me(Yo,Jo,"esm2017")}jg();var zg="firebase",Hg="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Me(zg,Hg,"app");const Gg={apiKey:"AIzaSyC2e781MfxbjhQtQlOKSBRm8PWbeZreoUg",authDomain:"tbs-internship-system-test.firebaseapp.com",databaseURL:"https://tbs-internship-system-test-default-rtdb.firebaseio.com",projectId:"tbs-internship-system-test",storageBucket:"tbs-internship-system-test.appspot.com",messagingSenderId:"174854270627",appId:"1:174854270627:web:93e715cb07b7a365cf5916",measurementId:"G-MR3Z6RZZX4"},Kg=la(Gg),Zo=cm(Kg),Wg={class:"grow mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6"},Qg={class:"text-[32px] font-medium"},Xg={class:"mt-4 border rounded"},Yg={class:"flex flex-wrap -mb-px text-sm font-medium text-center",role:"tablist"},Jg={role:"presentation"},Zg={role:"presentation"},ey={class:"grid grid-cols-12 gap-2 items-center"},ty=_("span",{class:"col-span-12 lg:col-span-2"},"ชื่อบริษัท :",-1),ny={class:"grid grid-cols-12 gap-2 items-center"},sy=_("span",{class:"col-span-12 lg:col-span-2"},"ตำแหน่ง :",-1),ry={class:"grid grid-cols-12 gap-2 items-center"},iy=_("span",{class:"col-span-12 lg:col-span-2"},"ระยะเวลาที่เข้ารับการฝึกงาน :",-1),oy=_("span",{class:"col-span-12 lg:col-span-2 text-center"},"ถึง",-1),ay=_("span",{class:"text-[20px] mt-4"},"ข้อมูลผู้ประสานงานของบริษัท",-1),cy={class:"grid grid-cols-12 gap-2 items-center"},uy=_("span",{class:"col-span-12 lg:col-span-2"},"ชื่อ นามสกุล :",-1),ly={class:"grid grid-cols-12 gap-2 items-center"},hy=_("span",{class:"col-span-12 lg:col-span-2"},"ตำแหน่ง :",-1),dy={class:"grid grid-cols-12 gap-2 items-center"},fy=_("span",{class:"col-span-12 lg:col-span-2"},"เบอร์โทรศัพท์ :",-1),py={class:"grid grid-cols-12 gap-2 items-center"},my=_("span",{class:"col-span-12 lg:col-span-2"},"E-mail :",-1),gy={class:"grid grid-cols-12 gap-2 items-center"},yy=_("span",{class:"col-span-12 lg:col-span-2"},"เอกสารตอบรับ (pdf) :",-1),vy=_("button",{type:"reset",class:"w-[132px] h-[46px] rounded bg-[#ACB0B8] text-white"}," Cancel ",-1),wy=_("button",{type:"submit",class:"w-[132px] h-[46px] rounded bg-[#3694ED] text-white"}," Save ",-1),_y={class:"grid grid-cols-12 gap-2 items-center"},Ey=_("span",{class:"col-span-12 lg:col-span-2"},"ชื่อบริษัท (ลำดับที่ 1) :",-1),Ty={class:"grid grid-cols-12 gap-2 items-center"},by=_("span",{class:"col-span-12 lg:col-span-2"},"สถานะปัจจุบัน :",-1),Iy=["value"],Sy={class:"grid grid-cols-12 gap-2 items-center"},Cy=_("span",{class:"col-span-12 lg:col-span-2"},"ชื่อบริษัท (ลำดับที่ 2) :",-1),Ay={class:"grid grid-cols-12 gap-2 items-center"},Dy=_("span",{class:"col-span-12 lg:col-span-2"},"สถานะปัจจุบัน :",-1),ky=["value"],Ry={class:"grid grid-cols-12 gap-2 items-center"},Ny=_("span",{class:"col-span-12 lg:col-span-2"},"ชื่อบริษัท (ลำดับที่ 3) :",-1),xy={class:"grid grid-cols-12 gap-2 items-center"},Oy=_("span",{class:"col-span-12 lg:col-span-2"},"สถานะปัจจุบัน :",-1),Ly=["value"],My=_("div",{class:"flex justify-center gap-4 mt-6"},[_("button",{type:"reset",class:"w-[132px] h-[46px] rounded bg-[#ACB0B8] text-white"}," Cancle "),_("button",{type:"submit",class:"w-[132px] h-[46px] rounded bg-[#3694ED] text-white"}," Save ")],-1),Vy={__name:"Student",setup(t){const e=Xu(),n=Yu(),s=n.getters.getAuth,r=Bg(),i=Tn(null),o=Tn("ฟอร์มข้อมูลนักศึกษาฝึกงาน"),a=Tn(new Date),c=Tn({tab1:{confirmed_company:"",confirmed_role:"",start_date:"",end_date:"",company_coname:"",company_coRole:"",company_cotel:"",company_coemail:"",sNameT:s.student.sNameT||"-",slNameT:s.student.slNameT||"-",stU_ID:s.student.stU_ID||"-",company_file:""},tab2:{company1:"",company1_status:"-",company2:"",company2_status:"-",company3:"",company3_status:"-"},companyStatusOptions:[{value:"-",label:"-"},{value:"Pending Interview",label:"Pending Interview"},{value:"Pending Confirm",label:"Pending Confirm"}],intern_status:!1}),u=async()=>{const v=$o(Zo,"student_info"),p=qo(v,jo("stU_ID","==",s.student.stU_ID)),k=await Go(p);if(!k.empty){const y=k.docs[0].data();c.value={...c.value,tab1:{confirmed_company:y.confirmed_company||"",confirmed_role:y.confirmed_role||"",start_date:new Date(y.start_date.seconds*1e3)||"",end_date:new Date(y.end_date.seconds*1e3)||"",company_coname:y.company_coname||"",company_coRole:y.company_coRole||"",company_cotel:y.company_cotel||"",company_coemail:y.company_coemail||"",sNameT:s.student.sNameT||"-",slNameT:s.student.slNameT||"-",stU_ID:s.student.stU_ID||"-"},tab2:{company1:y.company1||"",company1_status:y.company1_status||"-",company2:y.company2||"",company2_status:y.company2_status||"-",company3:y.company3||"",company3_status:y.company3_status||"-"},intern_status:y.intern_status||!1}}},l=async()=>{const v=$o(Zo,"student_info"),p=qo(v,jo("stU_ID","==",s.student.stU_ID)),k=await Go(p),y={...c.value.tab1,...c.value.tab2,intern_status:c.value.intern_status};if(k.empty)await Dm(v,y);else{const R=k.docs[0];await Am(R.ref,y)}Vi.fire({title:"บันทึกข้อมูลสำเร็จ",text:"ข้อมูลของคุณถูกบันทึกเรียบร้อยแล้ว",icon:"success",confirmButtonText:"ตกลง",confirmButtonColor:"#28a745"})},h=v=>{v.preventDefault(),c.value.intern_status=!0,l()},d=v=>{v.preventDefault(),c.value.intern_status=!1,l()},m=async()=>{(await Vi.fire({title:"ยืนยันการลบข้อมูล",text:"คุณต้องการลบข้อมูลทั้งหมดใช่หรือไม่?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Confirm"})).isConfirmed&&(c.value={...c.value,tab1:{confirmed_company:"",confirmed_role:"",start_date:"",end_date:"",company_coname:"",company_coRole:"",company_cotel:"",company_coemail:"",sNameT:s.student.sNameT||"-",slNameT:s.student.slNameT||"-",stU_ID:s.student.stU_ID||"-"},tab2:{company1:"",company1_status:"-",company2:"",company2_status:"-",company3:"",company3_status:"-"},intern_status:!1},l())},w=async v=>{const p=v.target;p&&p.files&&(i.value=p.files[0]);const k=i.value,y=Vg(r,`student/${s.student.stU_ID}/${k.name}`),R=Ug(y,k);R.on("state_changed",M=>{M.bytesTransferred/M.totalBytes*100},M=>{},()=>{Fg(R.snapshot.ref).then(M=>{c.value.tab1.company_file=M})})};return Ju(()=>{const v=n.getters.getAuth.username,p=n.getters.getAuth.role;v&&p==="student"?u():e.push({name:"Index"})}),(v,p)=>{const k=Zu("VueDatePicker");return ze(),He("div",Wg,[_("span",Qg,bn(o.value),1),_("div",Xg,[_("ul",Yg,[_("li",Jg,[_("button",{class:In(["inline-block p-4 border",`${o.value==="ฟอร์มข้อมูลนักศึกษาฝึกงาน"?"bg-gray-50":""}`]),type:"button",role:"tab",onClick:p[0]||(p[0]=()=>{o.value="ฟอร์มข้อมูลนักศึกษาฝึกงาน"})}," สำหรับนักศึกษาที่มีสถานที่ฝึกงานรองรับ ",2)]),_("li",Zg,[_("button",{class:In(["inline-block p-4 border",`${o.value==="ข้อมูลนักศึกษาฝึกงาน"?"bg-gray-50":""}`]),type:"button",role:"tab",onClick:p[1]||(p[1]=()=>{o.value="ข้อมูลนักศึกษาฝึกงาน"})}," สำหรับนักศึกษาที่ติดต่อเข้ารับการฝึกงานด้วยตนเอง ",2)])])]),_("div",null,[_("div",{class:In(`${o.value!=="ฟอร์มข้อมูลนักศึกษาฝึกงาน"&&"hidden"} p-8 shadow`),role:"tabpanel"},[_("form",{onSubmit:h,class:"grid grid-cols-1 gap-4"},[_("div",ey,[ty,ge(_("input",{"onUpdate:modelValue":p[2]||(p[2]=y=>c.value.tab1.confirmed_company=y),type:"text",class:"col-span-12 lg:col-span-4 border rounded p-2",required:""},null,512),[[Ie,c.value.tab1.confirmed_company]])]),_("div",ny,[sy,ge(_("input",{"onUpdate:modelValue":p[3]||(p[3]=y=>c.value.tab1.confirmed_role=y),type:"text",class:"col-span-12 lg:col-span-4 border rounded p-2",required:""},null,512),[[Ie,c.value.tab1.confirmed_role]])]),_("div",ry,[iy,Fi(k,{modelValue:c.value.tab1.start_date,"onUpdate:modelValue":p[4]||(p[4]=y=>c.value.tab1.start_date=y),"enable-time-picker":!1,"min-date":a.value,"auto-apply":!0,locale:"th",class:"col-span-12 lg:col-span-3",required:""},null,8,["modelValue","min-date"]),oy,Fi(k,{modelValue:c.value.tab1.end_date,"onUpdate:modelValue":p[5]||(p[5]=y=>c.value.tab1.end_date=y),"enable-time-picker":!1,"min-date":a.value,"auto-apply":!0,locale:"th",class:"col-span-12 lg:col-span-3",required:""},null,8,["modelValue","min-date"])]),ay,_("div",cy,[uy,ge(_("input",{"onUpdate:modelValue":p[6]||(p[6]=y=>c.value.tab1.company_coname=y),type:"text",class:"col-span-12 lg:col-span-4 border rounded p-2",required:""},null,512),[[Ie,c.value.tab1.company_coname]])]),_("div",ly,[hy,ge(_("input",{"onUpdate:modelValue":p[7]||(p[7]=y=>c.value.tab1.company_coRole=y),type:"text",class:"col-span-12 lg:col-span-4 border rounded p-2",required:""},null,512),[[Ie,c.value.tab1.company_coRole]])]),_("div",dy,[fy,ge(_("input",{"onUpdate:modelValue":p[8]||(p[8]=y=>c.value.tab1.company_cotel=y),type:"text",class:"col-span-12 lg:col-span-4 border rounded p-2",required:""},null,512),[[Ie,c.value.tab1.company_cotel]])]),_("div",py,[my,ge(_("input",{"onUpdate:modelValue":p[9]||(p[9]=y=>c.value.tab1.company_coemail=y),type:"email",class:"col-span-12 lg:col-span-4 border rounded p-2",required:""},null,512),[[Ie,c.value.tab1.company_coemail]])]),_("div",gy,[yy,_("input",{type:"file",class:"col-span-12 lg:col-span-4 border rounded p-2",accept:"application/pdf",onChange:p[10]||(p[10]=y=>w(y)),ref_key:"file",ref:i},null,544)]),_("div",{class:"flex justify-center gap-4 mt-6"},[_("button",{type:"button",class:"w-[132px] h-[46px] rounded bg-[#ED3537] text-white",onClick:m}," Clear "),vy,wy])],32)],2),_("div",{class:In(`${o.value!=="ข้อมูลนักศึกษาฝึกงาน"&&"hidden"} p-8 shadow`),role:"tabpanel"},[_("form",{onSubmit:d,class:"grid grid-cols-1 gap-4"},[_("div",_y,[Ey,ge(_("input",{"onUpdate:modelValue":p[11]||(p[11]=y=>c.value.tab2.company1=y),type:"text",class:"col-span-12 lg:col-span-4 border rounded p-2",required:""},null,512),[[Ie,c.value.tab2.company1]])]),_("div",Ty,[by,ge(_("select",{"onUpdate:modelValue":p[12]||(p[12]=y=>c.value.tab2.company1_status=y),class:"col-span-12 lg:col-span-4 border rounded p-2",required:""},[(ze(!0),He(Fs,null,Vs(c.value.companyStatusOptions,(y,R)=>(ze(),He("option",{value:y.value,key:R},bn(y.label),9,Iy))),128))],512),[[Us,c.value.tab2.company1_status]])]),_("div",Sy,[Cy,ge(_("input",{"onUpdate:modelValue":p[13]||(p[13]=y=>c.value.tab2.company2=y),type:"text",class:"col-span-12 lg:col-span-4 border rounded p-2",required:""},null,512),[[Ie,c.value.tab2.company2]])]),_("div",Ay,[Dy,ge(_("select",{"onUpdate:modelValue":p[14]||(p[14]=y=>c.value.tab2.company2_status=y),class:"col-span-12 lg:col-span-4 border rounded p-2",required:""},[(ze(!0),He(Fs,null,Vs(c.value.companyStatusOptions,(y,R)=>(ze(),He("option",{value:y.value,key:R},bn(y.label),9,ky))),128))],512),[[Us,c.value.tab2.company2_status]])]),_("div",Ry,[Ny,ge(_("input",{"onUpdate:modelValue":p[15]||(p[15]=y=>c.value.tab2.company3=y),type:"text",class:"col-span-12 lg:col-span-4 border rounded p-2",required:""},null,512),[[Ie,c.value.tab2.company3]])]),_("div",xy,[Oy,ge(_("select",{"onUpdate:modelValue":p[16]||(p[16]=y=>c.value.tab2.company3_status=y),class:"col-span-12 lg:col-span-4 border rounded p-2",required:""},[(ze(!0),He(Fs,null,Vs(c.value.companyStatusOptions,(y,R)=>(ze(),He("option",{value:y.value,key:R},bn(y.label),9,Ly))),128))],512),[[Us,c.value.tab2.company3_status]])]),My],32)],2)])])}}};export{Vy as default};
