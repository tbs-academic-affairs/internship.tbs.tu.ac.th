import{s as x,t as h,d as m}from"./firebaseConfig-bb59ec2d.js";import{a as f,u as y,r as b,o as g,f as w,b as c,d as r,e as t,g as u,F as v,i as C,t as o,n as D,j as I}from"./index-6b9654e3.js";const k={class:"grow mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6"},N={class:"flex justify-between items-center"},S=t("span",{class:"text-[32px] font-medium"},"สถานะการมีที่ฝึกงานของนักศึกษา",-1),A={class:"relative overflow-x-auto mt-4"},B={class:"w-full text-sm text-left border"},F=t("thead",{class:"text-xs text-white uppercase bg-[#C2A887]"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3"},"ลำดับ"),t("th",{scope:"col",class:"px-6 py-3"},"เลขทะเบียน"),t("th",{scope:"col",class:"px-6 py-3"},"ชื่อ-นามสกุล"),t("th",{scope:"col",class:"px-6 py-3"},"Status"),t("th",{scope:"col",class:"px-6 py-3"},"Detail")])],-1),j={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap"},L={class:"px-6 py-4"},T={class:"px-6 py-4"},U={class:"px-6 py-4"},V=t("button",{type:"button",class:"border border-blue-500 rounded text-blue-500 px-3 py-2 hover:bg-blue-500 hover:text-white"}," Detail ",-1),P={__name:"Index",setup(z){const l=f(),i=y(),p=b([]);g(()=>{const a=l.getters.getAuth.username,n=l.getters.getAuth.role;a&&n==="admin"?_():i.push({name:"Index"})});const _=async()=>{const a=x(m,"student_info"),e=(await h(a)).docs.map(s=>({id:s.id,...s.data()}));console.log("Fetched student:",e),p.value=e};return(a,n)=>{const e=w("router-link");return c(),r("div",k,[t("div",N,[S,u(e,{to:"/admin/news/create"})]),t("div",A,[t("table",B,[F,t("tbody",null,[(c(!0),r(v,null,C(p.value,(s,d)=>(c(),r("tr",{key:d,class:"bg-white border-b"},[t("th",j,o(d+1),1),t("td",L,o(s.stU_ID),1),t("td",T,o(s.sNameT)+" "+o(s.slNameT),1),t("td",{class:D(`px-6 py-4 ${s.intern_status?"text-green-500":"text-yellow-500"}`)},o(s.intern_status?"Confirm":"Pending Confirm"),3),t("td",U,[u(e,{to:{name:"ListStudentId",params:{studentId:s.stU_ID}}},{default:I(()=>[V]),_:2},1032,["to"])])]))),128))])])])])}}};export{P as default};
