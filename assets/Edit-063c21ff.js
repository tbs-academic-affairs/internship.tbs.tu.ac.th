import{a as y,r as _,l as V,u as D,o as q,f as g,b as U,d as k,e,w as a,v as n,g as r,j as B}from"./index-6b9654e3.js";import{s as v,d as x,b as f,r as S,J as j}from"./firebaseConfig-bb59ec2d.js";import{S as R}from"./sweetalert2.all-b80a5553.js";const C={class:"grow mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6"},A=e("div",{class:"flex justify-between items-center"},[e("span",{class:"text-[32px] font-medium"},"แก้ไขแจ้งข่าวสาร")],-1),E={class:"grid grid-cols-1 gap-4 mt-4"},I={class:"p-6 shadow grid grid-cols-12"},M={class:"grid grid-cols-12 items-center gap-4"},N=e("div",{class:"col-span-12 lg:col-span-2 text-end"},"ชื่อบริษัท :",-1),J={class:"grid grid-cols-12 items-center gap-4"},P=e("div",{class:"col-span-12 lg:col-span-2 text-end"},"คำบรรยาย :",-1),T={class:"grid grid-cols-12 items-center gap-4"},F=e("div",{class:"col-span-12 lg:col-span-2 text-end"},"ระยะเวลาฝึกงาน :",-1),z={class:"col-span-12 lg:col-span-2 flex items-center gap-4"},G=e("span",null,"-",-1),H={class:"grid grid-cols-12 items-center gap-4"},K=e("div",{class:"col-span-12 lg:col-span-2 text-end"},"ตำแหน่ง :",-1),L=e("div",{class:"col-span-12 lg:col-span-2 text-end"},"ตำแหน่ง (2):",-1),O=e("div",{class:"col-span-12 lg:col-span-2 text-end"},"ตำแหน่ง (3):",-1),Q={class:"grid grid-cols-12 gap-4"},W=e("div",{class:"col-span-12 lg:col-span-2 text-end"},"รายละเอียด :",-1),X={class:"grid grid-cols-12 items-center gap-4"},Y=e("div",{class:"col-span-12 lg:col-span-2 text-end"},"ช่องทางติดต่อบริษัท :",-1),Z={class:"flex justify-center gap-4 mt-6"},$=e("button",{type:"button",class:"w-[132px] h-[46px] rounded bg-[#ACB0B8] text-white"},"Cancle",-1),ee=e("button",{type:"submit",class:"w-[132px] h-[46px] rounded bg-[#3694ED] text-white"},"Save",-1),ae={__name:"Edit",setup(te){const p=y(),u=_(new Date),s=_({company_name:"",description:"",start_date:new Date,end_date:new Date,role1:"",role2:"",role3:"",job_description:"",company_contact:""}),h=V(),m=D(),i=h.params.newsId,w=async d=>{d.preventDefault();const t=v(x,"news"),l=f(t,i);await S(l,s.value),console.log("Document updated:",i,s.value),m.push({name:"Main"}),R.fire({title:"บันทึกข้อมูลสำเร็จ",text:"ข้อมูลของคุณถูกบันทึกเรียบร้อยแล้ว",icon:"success",confirmButtonText:"ตกลง",confirmButtonColor:"#28a745"})},b=async()=>{console.log("> fetch from news_id: ",i);const d=v(x,"news"),t=f(d,i),l=await j(t);if(l.exists()){const c=l.data();console.log("Fetched data:",c),s.value={...c,start_date:new Date(c.start_date.seconds*1e3),end_date:new Date(c.end_date.seconds*1e3)}}else console.log("No document found with the specified id.")};return q(()=>{console.log("news detail mounted");const d=p.getters.getAuth.username,t=p.getters.getAuth.role;d&&t==="admin"?b():m.push({name:"Index"})}),(d,t)=>{const l=g("VueDatePicker"),c=g("router-link");return U(),k("div",C,[A,e("div",E,[e("div",I,[e("form",{onSubmit:w,class:"col-span-12 flex flex-col gap-2"},[e("div",M,[N,a(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.value.company_name=o),type:"text",class:"col-span-12 lg:col-span-10 border rounded p-2",required:""},null,512),[[n,s.value.company_name]])]),e("div",J,[P,a(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>s.value.description=o),type:"text",class:"col-span-12 lg:col-span-10 border rounded p-2",required:""},null,512),[[n,s.value.description]])]),e("div",T,[F,r(l,{modelValue:s.value.start_date,"onUpdate:modelValue":t[2]||(t[2]=o=>s.value.start_date=o),"enable-time-picker":!1,"min-date":u.value,"auto-apply":!0,locale:"th",class:"col-span-12 lg:col-span-2",required:""},null,8,["modelValue","min-date"]),e("div",z,[G,r(l,{modelValue:s.value.end_date,"onUpdate:modelValue":t[3]||(t[3]=o=>s.value.end_date=o),"enable-time-picker":!1,"min-date":u.value,"auto-apply":!0,locale:"th",class:"col-span-12 lg:col-span-2",required:""},null,8,["modelValue","min-date"])])]),e("div",H,[K,a(e("input",{"onUpdate:modelValue":t[4]||(t[4]=o=>s.value.role1=o),type:"text",class:"col-span-12 lg:col-span-2 border rounded p-2",required:""},null,512),[[n,s.value.role1]]),L,a(e("input",{"onUpdate:modelValue":t[5]||(t[5]=o=>s.value.role2=o),type:"text",class:"col-span-12 lg:col-span-2 border rounded p-2",required:""},null,512),[[n,s.value.role2]]),O,a(e("input",{"onUpdate:modelValue":t[6]||(t[6]=o=>s.value.role3=o),type:"text",class:"col-span-12 lg:col-span-2 border rounded p-2",required:""},null,512),[[n,s.value.role3]])]),e("div",Q,[W,a(e("textarea",{"onUpdate:modelValue":t[7]||(t[7]=o=>s.value.job_description=o),class:"col-span-12 lg:col-span-10 border rounded p-2",rows:"6",required:""},null,512),[[n,s.value.job_description]])]),e("div",X,[Y,a(e("input",{"onUpdate:modelValue":t[8]||(t[8]=o=>s.value.company_contact=o),type:"text",class:"col-span-12 lg:col-span-10 border rounded p-2",required:""},null,512),[[n,s.value.company_contact]])]),e("div",Z,[r(c,{to:"/admin"},{default:B(()=>[$]),_:1}),ee])],32)])])])}}};export{ae as default};
