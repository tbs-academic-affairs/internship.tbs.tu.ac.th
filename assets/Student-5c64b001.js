import{u as We,a as Ke,r as G,o as Ze,f as Ye,b as O,d as P,e as u,t as X,n as W,w as x,v as I,g as _e,h as ne,F as se,i as oe}from"./index-69c1460d.js";import{S as fe}from"./sweetalert2.all-4767c2d4.js";import{g as J,_ as Je,a as Qe,b as et,c as tt,C as nt,r as me,d as st,S as ot,F as rt,i as it,s as ge,e as be,f as ye,h as Re,t as Te,u as at,j as lt}from"./firebaseConfig-a4cec573.js";/**
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
 */const Se="firebasestorage.googleapis.com",Ie="storageBucket",ct=2*60*1e3,ut=10*60*1e3,dt=1e3;/**
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
 */class b extends rt{constructor(e,n,s=0){super(re(e),`Firebase Storage: ${n} (${re(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,b.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return re(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var g;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(g||(g={}));function re(t){return"storage/"+t}function ce(){const t="An unknown error occurred, please check the error payload for server response.";return new b(g.UNKNOWN,t)}function ht(t){return new b(g.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function pt(t){return new b(g.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _t(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new b(g.UNAUTHENTICATED,t)}function ft(){return new b(g.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function mt(t){return new b(g.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Ae(){return new b(g.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ce(){return new b(g.CANCELED,"User canceled the upload/download.")}function gt(t){return new b(g.INVALID_URL,"Invalid URL '"+t+"'.")}function bt(t){return new b(g.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function yt(){return new b(g.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ie+"' property when initializing the app?")}function Ne(){return new b(g.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Rt(){return new b(g.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Tt(){return new b(g.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function wt(t){return new b(g.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function le(t){return new b(g.INVALID_ARGUMENT,t)}function Oe(){return new b(g.APP_DELETED,"The Firebase app was deleted.")}function vt(t){return new b(g.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function z(t,e){return new b(g.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function V(t){throw new b(g.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class E{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=E.makeFromUrl(e,n)}catch{return new E(e,"")}if(s.path==="")return s;throw bt(e)}static makeFromUrl(e,n){let s=null;const o="([A-Za-z0-9.\\-_]+)";function r(m){m.path.charAt(m.path.length-1)==="/"&&(m.path_=m.path_.slice(0,-1))}const a="(/(.*))?$",d=new RegExp("^gs://"+o+a,"i"),i={bucket:1,path:3};function h(m){m.path_=decodeURIComponent(m.path)}const _="v[A-Za-z0-9_]+",y=n.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",w=new RegExp(`^https?://${y}/${_}/b/${o}/o${R}`,"i"),v={bucket:1,path:3},f=n===Se?"(?:storage.googleapis.com|storage.cloud.google.com)":n,c="([^?#]*)",T=new RegExp(`^https?://${f}/${o}/${c}`,"i"),p=[{regex:d,indices:i,postModify:r},{regex:w,indices:v,postModify:h},{regex:T,indices:{bucket:1,path:2},postModify:h}];for(let m=0;m<p.length;m++){const C=p[m],B=C.regex.exec(e);if(B){const ee=B[C.indices.bucket];let H=B[C.indices.path];H||(H=""),s=new E(ee,H),C.postModify(s);break}}if(s==null)throw gt(e);return s}}class kt{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Ut(t,e,n){let s=1,o=null,r=null,a=!1,d=0;function i(){return d===2}let h=!1;function _(...c){h||(h=!0,e.apply(null,c))}function y(c){o=setTimeout(()=>{o=null,t(w,i())},c)}function R(){r&&clearTimeout(r)}function w(c,...T){if(h){R();return}if(c){R(),_.call(null,c,...T);return}if(i()||a){R(),_.call(null,c,...T);return}s<64&&(s*=2);let p;d===1?(d=2,p=0):p=(s+Math.random())*1e3,y(p)}let v=!1;function f(c){v||(v=!0,R(),!h&&(o!==null?(c||(d=2),clearTimeout(o),y(0)):c||(d=1)))}return y(0),r=setTimeout(()=>{a=!0,f(!0)},n),f}function Et(t){t(!1)}/**
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
 */function xt(t){return t!==void 0}function St(t){return typeof t=="function"}function It(t){return typeof t=="object"&&!Array.isArray(t)}function Q(t){return typeof t=="string"||t instanceof String}function we(t){return ue()&&t instanceof Blob}function ue(){return typeof Blob<"u"&&!it()}function ve(t,e,n,s){if(s<e)throw le(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw le(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function $(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Pe(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const o=e(s)+"="+e(t[s]);n=n+o+"&"}return n=n.slice(0,-1),n}/**
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
 */var D;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(D||(D={}));/**
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
 */function De(t,e){const n=t>=500&&t<600,o=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||o||r}/**
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
 */class At{constructor(e,n,s,o,r,a,d,i,h,_,y,R=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=o,this.successCodes_=r,this.additionalRetryCodes_=a,this.callback_=d,this.errorCallback_=i,this.timeout_=h,this.progressCallback_=_,this.connectionFactory_=y,this.retry=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,v)=>{this.resolve_=w,this.reject_=v,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new K(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const a=d=>{const i=d.loaded,h=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(i,h)};this.progressCallback_!==null&&r.addUploadProgressListener(a),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(a),this.pendingConnection_=null;const d=r.getErrorCode()===D.NO_ERROR,i=r.getStatus();if(!d||De(i,this.additionalRetryCodes_)&&this.retry){const _=r.getErrorCode()===D.ABORT;s(!1,new K(!1,null,_));return}const h=this.successCodes_.indexOf(i)!==-1;s(!0,new K(h,r))})},n=(s,o)=>{const r=this.resolve_,a=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const i=this.callback_(d,d.getResponse());xt(i)?r(i):r()}catch(i){a(i)}else if(d!==null){const i=ce();i.serverResponse=d.getErrorText(),this.errorCallback_?a(this.errorCallback_(d,i)):a(i)}else if(o.canceled){const i=this.appDelete_?Oe():Ce();a(i)}else{const i=Ae();a(i)}};this.canceled_?n(!1,new K(!1,null,!0)):this.backoffId_=Ut(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Et(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class K{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Ct(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Nt(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ot(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Pt(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Dt(t,e,n,s,o,r,a=!0){const d=Pe(t.urlParams),i=t.url+d,h=Object.assign({},t.headers);return Ot(h,e),Ct(h,n),Nt(h,r),Pt(h,s),new At(i,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,o,a)}/**
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
 */function Lt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Bt(...t){const e=Lt();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(ue())return new Blob(t);throw new b(g.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function qt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Ft(t){if(typeof atob>"u")throw wt("base-64");return atob(t)}/**
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
 */const S={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ie{constructor(e,n){this.data=e,this.contentType=n||null}}function Mt(t,e){switch(t){case S.RAW:return new ie(Le(e));case S.BASE64:case S.BASE64URL:return new ie(Be(t,e));case S.DATA_URL:return new ie(Vt(e),zt(e))}throw ce()}function Le(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,a=t.charCodeAt(++n);s=65536|(r&1023)<<10|a&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Ht(t){let e;try{e=decodeURIComponent(t)}catch{throw z(S.DATA_URL,"Malformed data URL.")}return Le(e)}function Be(t,e){switch(t){case S.BASE64:{const o=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(o||r)throw z(t,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case S.BASE64URL:{const o=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(o||r)throw z(t,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Ft(e)}catch(o){throw o.message.includes("polyfill")?o:z(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}class qe{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw z(S.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=$t(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Vt(t){const e=new qe(t);return e.base64?Be(S.BASE64,e.rest):Ht(e.rest)}function zt(t){return new qe(t).contentType}function $t(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class N{constructor(e,n){let s=0,o="";we(e)?(this.data_=e,s=e.size,o=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,n){if(we(this.data_)){const s=this.data_,o=qt(s,e,n);return o===null?null:new N(o)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new N(s,!0)}}static getBlob(...e){if(ue()){const n=e.map(s=>s instanceof N?s.data_:s);return new N(Bt.apply(null,n))}else{const n=e.map(a=>Q(a)?Mt(S.RAW,a).data:a.data_);let s=0;n.forEach(a=>{s+=a.byteLength});const o=new Uint8Array(s);let r=0;return n.forEach(a=>{for(let d=0;d<a.length;d++)o[r++]=a[d]}),new N(o,!0)}}uploadData(){return this.data_}}/**
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
 */function Fe(t){let e;try{e=JSON.parse(t)}catch{return null}return It(e)?e:null}/**
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
 */function jt(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Gt(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Me(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Xt(t,e){return e}class k{constructor(e,n,s,o){this.server=e,this.local=n||e,this.writable=!!s,this.xform=o||Xt}}let Z=null;function Wt(t){return!Q(t)||t.length<2?t:Me(t)}function He(){if(Z)return Z;const t=[];t.push(new k("bucket")),t.push(new k("generation")),t.push(new k("metageneration")),t.push(new k("name","fullPath",!0));function e(r,a){return Wt(a)}const n=new k("name");n.xform=e,t.push(n);function s(r,a){return a!==void 0?Number(a):a}const o=new k("size");return o.xform=s,t.push(o),t.push(new k("timeCreated")),t.push(new k("updated")),t.push(new k("md5Hash",null,!0)),t.push(new k("cacheControl",null,!0)),t.push(new k("contentDisposition",null,!0)),t.push(new k("contentEncoding",null,!0)),t.push(new k("contentLanguage",null,!0)),t.push(new k("contentType",null,!0)),t.push(new k("metadata","customMetadata",!0)),Z=t,Z}function Kt(t,e){function n(){const s=t.bucket,o=t.fullPath,r=new E(s,o);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function Zt(t,e,n){const s={};s.type="file";const o=n.length;for(let r=0;r<o;r++){const a=n[r];s[a.local]=a.xform(s,e[a.server])}return Kt(s,t),s}function Ve(t,e,n){const s=Fe(e);return s===null?null:Zt(t,s,n)}function Yt(t,e,n,s){const o=Fe(e);if(o===null||!Q(o.downloadTokens))return null;const r=o.downloadTokens;if(r.length===0)return null;const a=encodeURIComponent;return r.split(",").map(h=>{const _=t.bucket,y=t.fullPath,R="/b/"+a(_)+"/o/"+a(y),w=$(R,n,s),v=Pe({alt:"media",token:h});return w+v})[0]}function ze(t,e){const n={},s=e.length;for(let o=0;o<s;o++){const r=e[o];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class M{constructor(e,n,s,o){this.url=e,this.method=n,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function A(t){if(!t)throw ce()}function de(t,e){function n(s,o){const r=Ve(t,o,e);return A(r!==null),r}return n}function Jt(t,e){function n(s,o){const r=Ve(t,o,e);return A(r!==null),Yt(r,o,t.host,t._protocol)}return n}function j(t){function e(n,s){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=ft():o=_t():n.getStatus()===402?o=pt(t.bucket):n.getStatus()===403?o=mt(t.path):o=s,o.status=n.getStatus(),o.serverResponse=s.serverResponse,o}return e}function $e(t){const e=j(t);function n(s,o){let r=e(s,o);return s.getStatus()===404&&(r=ht(t.path)),r.serverResponse=o.serverResponse,r}return n}function Qt(t,e,n){const s=e.fullServerUrl(),o=$(s,t.host,t._protocol),r="GET",a=t.maxOperationRetryTime,d=new M(o,r,de(t,n),a);return d.errorHandler=$e(e),d}function en(t,e,n){const s=e.fullServerUrl(),o=$(s,t.host,t._protocol),r="GET",a=t.maxOperationRetryTime,d=new M(o,r,Jt(t,n),a);return d.errorHandler=$e(e),d}function tn(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function je(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=tn(null,e)),s}function nn(t,e,n,s,o){const r=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function d(){let p="";for(let m=0;m<2;m++)p=p+Math.random().toString().slice(2);return p}const i=d();a["Content-Type"]="multipart/related; boundary="+i;const h=je(e,s,o),_=ze(h,n),y="--"+i+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+_+`\r
--`+i+`\r
Content-Type: `+h.contentType+`\r
\r
`,R=`\r
--`+i+"--",w=N.getBlob(y,s,R);if(w===null)throw Ne();const v={name:h.fullPath},f=$(r,t.host,t._protocol),c="POST",T=t.maxUploadRetryTime,l=new M(f,c,de(t,n),T);return l.urlParams=v,l.headers=a,l.body=w.uploadData(),l.errorHandler=j(e),l}class Y{constructor(e,n,s,o){this.current=e,this.total=n,this.finalized=!!s,this.metadata=o||null}}function he(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{A(!1)}return A(!!n&&(e||["active"]).indexOf(n)!==-1),n}function sn(t,e,n,s,o){const r=e.bucketOnlyServerUrl(),a=je(e,s,o),d={name:a.fullPath},i=$(r,t.host,t._protocol),h="POST",_={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},y=ze(a,n),R=t.maxUploadRetryTime;function w(f){he(f);let c;try{c=f.getResponseHeader("X-Goog-Upload-URL")}catch{A(!1)}return A(Q(c)),c}const v=new M(i,h,w,R);return v.urlParams=d,v.headers=_,v.body=y,v.errorHandler=j(e),v}function on(t,e,n,s){const o={"X-Goog-Upload-Command":"query"};function r(h){const _=he(h,["active","final"]);let y=null;try{y=h.getResponseHeader("X-Goog-Upload-Size-Received")}catch{A(!1)}y||A(!1);const R=Number(y);return A(!isNaN(R)),new Y(R,s.size(),_==="final")}const a="POST",d=t.maxUploadRetryTime,i=new M(n,a,r,d);return i.headers=o,i.errorHandler=j(e),i}const ke=256*1024;function rn(t,e,n,s,o,r,a,d){const i=new Y(0,0);if(a?(i.current=a.current,i.total=a.total):(i.current=0,i.total=s.size()),s.size()!==i.total)throw Rt();const h=i.total-i.current;let _=h;o>0&&(_=Math.min(_,o));const y=i.current,R=y+_;let w="";_===0?w="finalize":h===_?w="upload, finalize":w="upload";const v={"X-Goog-Upload-Command":w,"X-Goog-Upload-Offset":`${i.current}`},f=s.slice(y,R);if(f===null)throw Ne();function c(m,C){const B=he(m,["active","final"]),ee=i.current+_,H=s.size();let te;return B==="final"?te=de(e,r)(m,C):te=null,new Y(ee,H,B==="final",te)}const T="POST",l=e.maxUploadRetryTime,p=new M(n,T,c,l);return p.headers=v,p.body=f.uploadData(),p.progressCallback=d||null,p.errorHandler=j(t),p}const U={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ae(t){switch(t){case"running":case"pausing":case"canceling":return U.RUNNING;case"paused":return U.PAUSED;case"success":return U.SUCCESS;case"canceled":return U.CANCELED;case"error":return U.ERROR;default:return U.ERROR}}/**
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
 */class an{constructor(e,n,s){if(St(e)||n!=null||s!=null)this.next=e,this.error=n??void 0,this.complete=s??void 0;else{const r=e;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
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
 */function q(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class ln{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=D.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=D.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=D.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,o){if(this.sent_)throw V("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),o!==void 0)for(const r in o)o.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,o[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw V("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw V("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw V("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw V("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class cn extends ln{initXhr(){this.xhr_.responseType="text"}}function F(){return new cn}/**
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
 */class un{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=He(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=o=>{if(this._request=void 0,this._chunkMultiplier=1,o._codeEquals(g.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const r=this.isExponentialBackoffExpired();if(De(o.status,[]))if(r)o=Ae();else{this.sleepTime=Math.max(this.sleepTime*2,dt),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=o,this._transition("error")}},this._metadataErrorHandler=o=>{this._request=void 0,o._codeEquals(g.CANCELED)?this.completeTransitions_():(this._error=o,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((o,r)=>{this._resolve=o,this._reject=r,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=sn(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),o=this._ref.storage._makeRequest(s,F,e,n);this._request=o,o.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const o=on(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(o,F,n,s);this._request=r,r.getPromise().then(a=>{a=a,this._request=void 0,this._updateProgress(a.current),this._needToFetchStatus=!1,a.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=ke*this._chunkMultiplier,n=new Y(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((o,r)=>{let a;try{a=rn(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(i){this._error=i,this._transition("error");return}const d=this._ref.storage._makeRequest(a,F,o,r,!1);this._request=d,d.getPromise().then(i=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(i.current),i.finalized?(this._metadata=i.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){ke*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=Qt(this._ref.storage,this._ref._location,this._mappings),o=this._ref.storage._makeRequest(s,F,e,n);this._request=o,o.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=nn(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),o=this._ref.storage._makeRequest(s,F,e,n);this._request=o,o.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Ce(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=ae(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,o){const r=new an(n||void 0,s||void 0,o||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(ae(this._state)){case U.SUCCESS:q(this._resolve.bind(null,this.snapshot))();break;case U.CANCELED:case U.ERROR:const n=this._reject;q(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ae(this._state)){case U.RUNNING:case U.PAUSED:e.next&&q(e.next.bind(e,this.snapshot))();break;case U.SUCCESS:e.complete&&q(e.complete.bind(e))();break;case U.CANCELED:case U.ERROR:e.error&&q(e.error.bind(e,this._error))();break;default:e.error&&q(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class L{constructor(e,n){this._service=e,n instanceof E?this._location=n:this._location=E.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new L(e,n)}get root(){const e=new E(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Me(this._location.path)}get storage(){return this._service}get parent(){const e=jt(this._location.path);if(e===null)return null;const n=new E(this._location.bucket,e);return new L(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw vt(e)}}function dn(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new un(t,new N(e),n)}function hn(t){t._throwIfRoot("getDownloadURL");const e=en(t.storage,t._location,He());return t.storage.makeRequestWithTokens(e,F).then(n=>{if(n===null)throw Tt();return n})}function pn(t,e){const n=Gt(t._location.path,e),s=new E(t._location.bucket,n);return new L(t.storage,s)}/**
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
 */function _n(t){return/^[A-Za-z]+:\/\//.test(t)}function fn(t,e){return new L(t,e)}function Ge(t,e){if(t instanceof pe){const n=t;if(n._bucket==null)throw yt();const s=new L(n,n._bucket);return e!=null?Ge(s,e):s}else return e!==void 0?pn(t,e):t}function mn(t,e){if(e&&_n(e)){if(t instanceof pe)return fn(t,e);throw le("To use ref(service, url), the first argument must be a Storage instance.")}else return Ge(t,e)}function Ue(t,e){const n=e==null?void 0:e[Ie];return n==null?null:E.makeFromBucketSpec(n,t)}function gn(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:o}=s;o&&(t._overrideAuthToken=typeof o=="string"?o:st(o,t.app.options.projectId))}class pe{constructor(e,n,s,o,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=o,this._firebaseVersion=r,this._bucket=null,this._host=Se,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ct,this._maxUploadRetryTime=ut,this._requests=new Set,o!=null?this._bucket=E.makeFromBucketSpec(o,this._host):this._bucket=Ue(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=E.makeFromBucketSpec(this._url,e):this._bucket=Ue(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ve("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ve("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new L(this,e)}_makeRequest(e,n,s,o,r=!0){if(this._deleted)return new kt(Oe());{const a=Dt(e,this._appId,s,o,n,this._firebaseVersion,r);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,n){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,o).getPromise()}}const Ee="@firebase/storage",xe="0.11.2";/**
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
 */const Xe="storage";function bn(t,e,n){return t=J(t),dn(t,e,n)}function yn(t){return t=J(t),hn(t)}function Rn(t,e){return t=J(t),mn(t,e)}function Tn(t=et(),e){t=J(t);const s=Je(t,Xe).getImmediate({identifier:e}),o=Qe("storage");return o&&wn(s,...o),s}function wn(t,e,n,s={}){gn(t,e,n,s)}function vn(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return new pe(n,s,o,e,ot)}function kn(){tt(new nt(Xe,vn,"PUBLIC").setMultipleInstances(!0)),me(Ee,xe,""),me(Ee,xe,"esm2017")}kn();const Un={class:"grow mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6"},En={class:"text-[32px] font-medium"},xn={class:"mt-4 border rounded"},Sn={class:"flex flex-wrap -mb-px text-sm font-medium text-center",role:"tablist"},In={role:"presentation"},An={role:"presentation"},Cn={class:"grid grid-cols-12 gap-2 items-center"},Nn=u("span",{class:"col-span-12 lg:col-span-2"},"ชื่อบริษัท :",-1),On={class:"grid grid-cols-12 gap-2 items-center"},Pn=u("span",{class:"col-span-12 lg:col-span-2"},"ตำแหน่ง :",-1),Dn={class:"grid grid-cols-12 gap-2 items-center"},Ln=u("span",{class:"col-span-12 lg:col-span-2"},"ระยะเวลาที่เข้ารับการฝึกงาน :",-1),Bn=u("span",{class:"col-span-12 lg:col-span-2 text-center"},"ถึง",-1),qn=u("span",{class:"text-[20px] mt-4"},"ข้อมูลผู้ประสานงานของบริษัท",-1),Fn={class:"grid grid-cols-12 gap-2 items-center"},Mn=u("span",{class:"col-span-12 lg:col-span-2"},"ชื่อ นามสกุล :",-1),Hn={class:"grid grid-cols-12 gap-2 items-center"},Vn=u("span",{class:"col-span-12 lg:col-span-2"},"ตำแหน่ง :",-1),zn={class:"grid grid-cols-12 gap-2 items-center"},$n=u("span",{class:"col-span-12 lg:col-span-2"},"เบอร์โทรศัพท์ :",-1),jn={class:"grid grid-cols-12 gap-2 items-center"},Gn=u("span",{class:"col-span-12 lg:col-span-2"},"E-mail :",-1),Xn={class:"grid grid-cols-12 gap-2 items-center"},Wn=u("span",{class:"col-span-12 lg:col-span-2"},"เอกสารตอบรับ (pdf) :",-1),Kn=u("button",{type:"reset",class:"w-[132px] h-[46px] rounded bg-[#ACB0B8] text-white"}," Cancel ",-1),Zn=u("button",{type:"submit",class:"w-[132px] h-[46px] rounded bg-[#3694ED] text-white"}," Save ",-1),Yn={class:"grid grid-cols-12 gap-2 items-center"},Jn=u("span",{class:"col-span-12 lg:col-span-2"},"ชื่อบริษัท (ลำดับที่ 1) :",-1),Qn={class:"grid grid-cols-12 gap-2 items-center"},es=u("span",{class:"col-span-12 lg:col-span-2"},"สถานะปัจจุบัน :",-1),ts=["value"],ns={class:"grid grid-cols-12 gap-2 items-center"},ss=u("span",{class:"col-span-12 lg:col-span-2"},"ชื่อบริษัท (ลำดับที่ 2) :",-1),os={class:"grid grid-cols-12 gap-2 items-center"},rs=u("span",{class:"col-span-12 lg:col-span-2"},"สถานะปัจจุบัน :",-1),is=["value"],as={class:"grid grid-cols-12 gap-2 items-center"},ls=u("span",{class:"col-span-12 lg:col-span-2"},"ชื่อบริษัท (ลำดับที่ 3) :",-1),cs={class:"grid grid-cols-12 gap-2 items-center"},us=u("span",{class:"col-span-12 lg:col-span-2"},"สถานะปัจจุบัน :",-1),ds=["value"],hs=u("div",{class:"flex justify-center gap-4 mt-6"},[u("button",{type:"reset",class:"w-[132px] h-[46px] rounded bg-[#ACB0B8] text-white"}," Cancle "),u("button",{type:"submit",class:"w-[132px] h-[46px] rounded bg-[#3694ED] text-white"}," Save ")],-1),ms={__name:"Student",setup(t){const e=We(),n=Ke(),s=n.getters.getAuth,o=Tn(),r=G(null),a=G("ฟอร์มข้อมูลนักศึกษาฝึกงาน"),d=G(new Date),i=G({tab1:{confirmed_company:"",confirmed_role:"",start_date:"",end_date:"",company_coname:"",company_coRole:"",company_cotel:"",company_coemail:"",sNameT:s.student.sNameT||"-",slNameT:s.student.slNameT||"-",stU_ID:s.student.stU_ID||"-",company_file:""},tab2:{company1:"",company1_status:"Pending Interview",company2:"",company2_status:"Pending Interview",company3:"",company3_status:"Pending Interview"},companyStatusOptions:[{value:"-",label:"-"},{value:"Pending Interview",label:"Pending Interview"},{value:"Pending Confirm",label:"Pending Confirm"}],intern_status:!1}),h=async()=>{const f=ge(be,"student_info"),c=ye(f,Re("stU_ID","==",s.student.stU_ID)),T=await Te(c);if(T.empty)console.log("No document found with the specified stU_ID");else{const l=T.docs[0].data();console.log("Fetched data:",l),i.value={...i.value,tab1:{confirmed_company:l.confirmed_company||"",confirmed_role:l.confirmed_role||"",start_date:new Date(l.start_date.seconds*1e3)||"",end_date:new Date(l.end_date.seconds*1e3)||"",company_coname:l.company_coname||"",company_coRole:l.company_coRole||"",company_cotel:l.company_cotel||"",company_coemail:l.company_coemail||"",sNameT:s.student.sNameT||"-",slNameT:s.student.slNameT||"-",stU_ID:s.student.stU_ID||"-"},tab2:{company1:l.company1||"",company1_status:l.company1_status||"-",company2:l.company2||"",company2_status:l.company2_status||"-",company3:l.company3||"",company3_status:l.company3_status||"-"},intern_status:l.intern_status||!1}}},_=async()=>{const f=ge(be,"student_info"),c=ye(f,Re("stU_ID","==",s.student.stU_ID)),T=await Te(c),l={...i.value.tab1,...i.value.tab2,intern_status:i.value.intern_status};if(console.log("data",l),T.empty){const p=await at(f,l);console.log("New document created with ID:",p.id)}else{const p=T.docs[0];await lt(p.ref,l),console.log("Existing document updated with ID:",p.id)}fe.fire({title:"บันทึกข้อมูลสำเร็จ",text:"ข้อมูลของคุณถูกบันทึกเรียบร้อยแล้ว",icon:"success",confirmButtonText:"ตกลง",confirmButtonColor:"#28a745"})},y=f=>{f.preventDefault(),console.log("submit tab1",a),i.value.intern_status=!0,_()},R=f=>{f.preventDefault(),console.log("submit tab2",a),i.value.intern_status=!1,_()},w=async()=>{(await fe.fire({title:"ยืนยันการลบข้อมูล",text:"คุณต้องการลบข้อมูลทั้งหมดใช่หรือไม่?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Confirm"})).isConfirmed&&(i.value={...i.value,tab1:{confirmed_company:"",confirmed_role:"",start_date:"",end_date:"",company_coname:"",company_coRole:"",company_cotel:"",company_coemail:"",sNameT:s.student.sNameT||"-",slNameT:s.student.slNameT||"-",stU_ID:s.student.stU_ID||"-"},tab2:{company1:"",company1_status:"Pending Interview",company2:"",company2_status:"Pending Interview",company3:"",company3_status:"Pending Interview"},intern_status:!1},_())},v=async f=>{const c=f.target;c&&c.files&&(r.value=c.files[0]);const T=r.value,l=Rn(o,`student/${s.student.stU_ID}/${T.name}`),p=bn(l,T);p.on("state_changed",m=>{const C=m.bytesTransferred/m.totalBytes*100;console.log("Upload is "+C+"% done")},m=>{console.log(m)},()=>{yn(p.snapshot.ref).then(m=>{console.log("File available at",m),i.value.tab1.company_file=m})})};return Ze(()=>{console.log("student mounted");const f=n.getters.getAuth.username,c=n.getters.getAuth.role;f&&c==="student"?h():e.push({name:"Index"})}),(f,c)=>{const T=Ye("VueDatePicker");return O(),P("div",Un,[u("span",En,X(a.value),1),u("div",xn,[u("ul",Sn,[u("li",In,[u("button",{class:W(["inline-block p-4 border",`${a.value==="ฟอร์มข้อมูลนักศึกษาฝึกงาน"?"bg-gray-50":""}`]),type:"button",role:"tab",onClick:c[0]||(c[0]=()=>{a.value="ฟอร์มข้อมูลนักศึกษาฝึกงาน"})}," สำหรับนักศึกษาที่มีสถานที่ฝึกงานรองรับ ",2)]),u("li",An,[u("button",{class:W(["inline-block p-4 border",`${a.value==="ข้อมูลนักศึกษาฝึกงาน"?"bg-gray-50":""}`]),type:"button",role:"tab",onClick:c[1]||(c[1]=()=>{a.value="ข้อมูลนักศึกษาฝึกงาน"})}," สำหรับนักศึกษาที่ติดต่อเข้ารับการฝึกงานด้วยตนเอง ",2)])])]),u("div",null,[u("div",{class:W(`${a.value!=="ฟอร์มข้อมูลนักศึกษาฝึกงาน"&&"hidden"} p-8 shadow`),role:"tabpanel"},[u("form",{onSubmit:y,class:"grid grid-cols-1 gap-4"},[u("div",Cn,[Nn,x(u("input",{"onUpdate:modelValue":c[2]||(c[2]=l=>i.value.tab1.confirmed_company=l),type:"text",class:"col-span-12 lg:col-span-4 border rounded p-2",required:""},null,512),[[I,i.value.tab1.confirmed_company]])]),u("div",On,[Pn,x(u("input",{"onUpdate:modelValue":c[3]||(c[3]=l=>i.value.tab1.confirmed_role=l),type:"text",class:"col-span-12 lg:col-span-4 border rounded p-2",required:""},null,512),[[I,i.value.tab1.confirmed_role]])]),u("div",Dn,[Ln,_e(T,{modelValue:i.value.tab1.start_date,"onUpdate:modelValue":c[4]||(c[4]=l=>i.value.tab1.start_date=l),"enable-time-picker":!1,"min-date":d.value,"auto-apply":!0,locale:"th",class:"col-span-12 lg:col-span-3",required:""},null,8,["modelValue","min-date"]),Bn,_e(T,{modelValue:i.value.tab1.end_date,"onUpdate:modelValue":c[5]||(c[5]=l=>i.value.tab1.end_date=l),"enable-time-picker":!1,"min-date":d.value,"auto-apply":!0,locale:"th",class:"col-span-12 lg:col-span-3",required:""},null,8,["modelValue","min-date"])]),qn,u("div",Fn,[Mn,x(u("input",{"onUpdate:modelValue":c[6]||(c[6]=l=>i.value.tab1.company_coname=l),type:"text",class:"col-span-12 lg:col-span-4 border rounded p-2",required:""},null,512),[[I,i.value.tab1.company_coname]])]),u("div",Hn,[Vn,x(u("input",{"onUpdate:modelValue":c[7]||(c[7]=l=>i.value.tab1.company_coRole=l),type:"text",class:"col-span-12 lg:col-span-4 border rounded p-2",required:""},null,512),[[I,i.value.tab1.company_coRole]])]),u("div",zn,[$n,x(u("input",{"onUpdate:modelValue":c[8]||(c[8]=l=>i.value.tab1.company_cotel=l),type:"text",class:"col-span-12 lg:col-span-4 border rounded p-2",required:""},null,512),[[I,i.value.tab1.company_cotel]])]),u("div",jn,[Gn,x(u("input",{"onUpdate:modelValue":c[9]||(c[9]=l=>i.value.tab1.company_coemail=l),type:"email",class:"col-span-12 lg:col-span-4 border rounded p-2",required:""},null,512),[[I,i.value.tab1.company_coemail]])]),u("div",Xn,[Wn,u("input",{type:"file",class:"col-span-12 lg:col-span-4 border rounded p-2",accept:"application/pdf",onChange:c[10]||(c[10]=l=>v(l)),ref_key:"file",ref:r},null,544)]),u("div",{class:"flex justify-center gap-4 mt-6"},[u("button",{type:"button",class:"w-[132px] h-[46px] rounded bg-[#ED3537] text-white",onClick:w}," Clear "),Kn,Zn])],32)],2),u("div",{class:W(`${a.value!=="ข้อมูลนักศึกษาฝึกงาน"&&"hidden"} p-8 shadow`),role:"tabpanel"},[u("form",{onSubmit:R,class:"grid grid-cols-1 gap-4"},[u("div",Yn,[Jn,x(u("input",{"onUpdate:modelValue":c[11]||(c[11]=l=>i.value.tab2.company1=l),type:"text",class:"col-span-12 lg:col-span-4 border rounded p-2",required:""},null,512),[[I,i.value.tab2.company1]])]),u("div",Qn,[es,x(u("select",{"onUpdate:modelValue":c[12]||(c[12]=l=>i.value.tab2.company1_status=l),class:"col-span-12 lg:col-span-4 border rounded p-2",required:""},[(O(!0),P(se,null,oe(i.value.companyStatusOptions,(l,p)=>(O(),P("option",{value:l.value,key:p},X(l.label),9,ts))),128))],512),[[ne,i.value.tab2.company1_status]])]),u("div",ns,[ss,x(u("input",{"onUpdate:modelValue":c[13]||(c[13]=l=>i.value.tab2.company2=l),type:"text",class:"col-span-12 lg:col-span-4 border rounded p-2",required:""},null,512),[[I,i.value.tab2.company2]])]),u("div",os,[rs,x(u("select",{"onUpdate:modelValue":c[14]||(c[14]=l=>i.value.tab2.company2_status=l),class:"col-span-12 lg:col-span-4 border rounded p-2",required:""},[(O(!0),P(se,null,oe(i.value.companyStatusOptions,(l,p)=>(O(),P("option",{value:l.value,key:p},X(l.label),9,is))),128))],512),[[ne,i.value.tab2.company2_status]])]),u("div",as,[ls,x(u("input",{"onUpdate:modelValue":c[15]||(c[15]=l=>i.value.tab2.company3=l),type:"text",class:"col-span-12 lg:col-span-4 border rounded p-2",required:""},null,512),[[I,i.value.tab2.company3]])]),u("div",cs,[us,x(u("select",{"onUpdate:modelValue":c[16]||(c[16]=l=>i.value.tab2.company3_status=l),class:"col-span-12 lg:col-span-4 border rounded p-2",required:""},[(O(!0),P(se,null,oe(i.value.companyStatusOptions,(l,p)=>(O(),P("option",{value:l.value,key:p},X(l.label),9,ds))),128))],512),[[ne,i.value.tab2.company3_status]])]),hs],32)],2)])])}}};export{ms as default};
