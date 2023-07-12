import{s as f,e as b,f as x,h as w,t as D}from"./firebaseConfig-a4cec573.js";import{a as I,l as N,u as S,r as i,o as T,f as _,b as l,d as p,e as s,g as r,j as m,t as o,m as g,n as k}from"./index-69c1460d.js";import"./sweetalert2.all-4767c2d4.js";const P={class:"grow mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6"},R=s("div",{class:"flex justify-between items-center"},[s("span",{class:"text-[32px] font-medium"},"ข้อมูลนักศึกษา")],-1),$={class:"my-2"},U=s("button",{type:"button",class:"border bg-gray-100 px-3 py-2 rounded"}," ย้อนกลับ ",-1),B={class:"grid grid-cols-1 gap-4 mt-6"},C={class:"p-6 shadow grid grid-cols-12"},j={class:"border-b col-span-full pb-6 mb-10 flex justify-between"},F={class:"col-span-full"},M={class:"grid grid-cols-1"},V=s("span",{class:"text-[20px] font-medium"},"นักศึกษามีที่ฝึกงานรองรับแล้ว",-1),q={class:"grid grid-cols-12 gap-2 items-center"},A=s("span",{class:"col-span-12 lg:col-span-2"},"ชื่อบริษัท :",-1),E={class:"col-span-12 lg:col-span-4 p-2"},Y={class:"grid grid-cols-12 gap-2 items-center"},z=s("span",{class:"col-span-12 lg:col-span-2"},"ตำแหน่ง :",-1),G={class:"col-span-12 lg:col-span-4 p-2"},H={class:"grid grid-cols-12 gap-2 items-center"},J=s("span",{class:"col-span-12 lg:col-span-2"},"ระยะเวลาที่เข้ารับการฝึกงาน :",-1),K={class:"col-span-12 lg:col-span-10 flex gap-2"},L=s("span",null,"-",-1),O=s("span",{class:"font-medium mt-4"},"ข้อมูลผู้ประสานงาน",-1),Q={class:"grid grid-cols-12 gap-2 items-center"},W=s("span",{class:"col-span-12 lg:col-span-2"},"ชื่อ นามสกุล :",-1),X={class:"col-span-12 lg:col-span-4 p-2"},Z={class:"grid grid-cols-12 gap-2 items-center"},ss=s("span",{class:"col-span-12 lg:col-span-2"},"ตำแหน่ง :",-1),as={class:"col-span-12 lg:col-span-4 p-2"},ts={class:"grid grid-cols-12 gap-2 items-center"},os=s("span",{class:"col-span-12 lg:col-span-2"},"เบอร์โทรศัพท์ :",-1),ns={class:"col-span-12 lg:col-span-4 p-2"},es={class:"grid grid-cols-12 gap-2 items-center"},cs=s("span",{class:"col-span-12 lg:col-span-2"},"E-mail :",-1),ls={class:"col-span-12 lg:col-span-4 p-2"},ps={class:"grid grid-cols-12 gap-2 items-center"},ds=s("span",{class:"col-span-12 lg:col-span-2"},"เอกสารตอบรับ :",-1),is={key:0,class:"col-span-12 lg:col-span-4 p-2"},_s=["href"],rs={key:1,class:"col-span-12 lg:col-span-4 p-2"},ms={class:"col-span-full mt-10"},gs={class:"grid grid-cols-1"},us=s("span",{class:"text-[20px] font-medium"},"นักศึกษาติดต่อเข้าฝึกงานด้วยตนเอง",-1),hs={class:"grid grid-cols-12 gap-2 items-center"},ys=s("span",{class:"col-span-12 lg:col-span-2"},"ชื่อบริษัท (ลำดับที่ 1) :",-1),vs={class:"col-span-12 lg:col-span-4 p-2"},fs={class:"grid grid-cols-12 gap-2 items-center"},bs=s("span",{class:"col-span-12 lg:col-span-2"},"สถานะปัจจุบัน :",-1),xs={class:"col-span-12 lg:col-span-4 p-2"},ws={class:"grid grid-cols-12 gap-2 items-center"},Ds=s("span",{class:"col-span-12 lg:col-span-2"},"ชื่อบริษัท (ลำดับที่ 2) :",-1),Is={class:"col-span-12 lg:col-span-4 p-2"},Ns={class:"grid grid-cols-12 gap-2 items-center"},Ss=s("span",{class:"col-span-12 lg:col-span-2"},"สถานะปัจจุบัน :",-1),Ts={class:"col-span-12 lg:col-span-4 p-2"},ks={class:"grid grid-cols-12 gap-2 items-center"},Ps=s("span",{class:"col-span-12 lg:col-span-2"},"ชื่อบริษัท (ลำดับที่ 3) :",-1),Rs={class:"col-span-12 lg:col-span-4 p-2"},$s={class:"grid grid-cols-12 gap-2 items-center"},Us=s("span",{class:"col-span-12 lg:col-span-2"},"สถานะปัจจุบัน :",-1),Bs={class:"col-span-12 lg:col-span-4 p-2"},Vs={__name:"Detail",setup(Cs){const d=I(),u=N(),h=S(),y=u.params.studentId;i(new Date);const a=i({stU_ID:"",sNameT:"",slNameT:"",tab1:{confirmed_company:"",confirmed_role:"",start_date:new Date,end_date:new Date,company_coname:"",company_coRole:"",company_cotel:"",company_coemail:"",company_file:""},tab2:{company1:"",company1_status:"Pending Interview",company2:"",company2_status:"Pending Interview",company3:"",company3_status:"Pending Interview"},intern_status:!1}),v=async()=>{const n=f(b,"student_info"),e=x(n,w("stU_ID","==",y)),c=await D(e);if(c.empty)console.log("No document found with the specified stU_ID");else{const t=c.docs[0].data();console.log("Fetched data:",t),a.value={...a.value,stU_ID:t.stU_ID||"",sNameT:t.sNameT||"",slNameT:t.slNameT||"",tab1:{confirmed_company:t.confirmed_company||"",confirmed_role:t.confirmed_role||"",start_date:new Date(t.start_date.seconds*1e3)||"",end_date:new Date(t.end_date.seconds*1e3)||"",company_coname:t.company_coname||"",company_coRole:t.company_coRole||"",company_cotel:t.company_cotel||"",company_coemail:t.company_coemail||"",company_file:t.company_file||""},tab2:{company1:t.company1||"",company1_status:t.company1_status||"Pending Interview",company2:t.company2||"",company2_status:t.company2_status||"Pending Interview",company3:t.company3||"",company3_status:t.company3_status||"Pending Interview"},intern_status:t.intern_status||!1}}};return T(()=>{console.log("student mounted");const n=d.getters.getAuth.username,e=d.getters.getAuth.role;n&&e==="admin"?v():h.push({name:"Index"})}),(n,e)=>{const c=_("router-link"),t=_("Button");return l(),p("div",P,[R,s("div",$,[r(c,{to:"/admin/student"},{default:m(()=>[U]),_:1})]),s("div",B,[s("div",C,[s("div",j,[s("span",null,o(a.value.sNameT)+" "+o(a.value.slNameT)+" ("+o(a.value.stU_ID)+")",1),s("div",null,[g(" Status : "),s("span",{class:k(`${a.value.intern_status?"text-green-500":"text-yellow-500"}`)},o(a.value.intern_status?"Confirm":"Pending Confirm"),3)])]),s("div",F,[s("div",M,[V,s("div",q,[A,s("span",E,o(a.value.tab1.confirmed_company),1)]),s("div",Y,[z,s("span",G,o(a.value.tab1.confirmed_role),1)]),s("div",H,[J,s("div",K,[s("span",null,o(`${(a.value.tab1.start_date.getMonth()+1).toString().padStart(2,"0")}/${a.value.tab1.start_date.getDate().toString().padStart(2,"0")}/${a.value.tab1.start_date.getFullYear()}`),1),L,s("span",null,o(`${(a.value.tab1.end_date.getMonth()+1).toString().padStart(2,"0")}/${a.value.tab1.end_date.getDate().toString().padStart(2,"0")}/${a.value.tab1.end_date.getFullYear()}`),1)])]),O,s("div",Q,[W,s("span",X,o(a.value.tab1.company_coname),1)]),s("div",Z,[ss,s("span",as,o(a.value.tab1.company_coRole),1)]),s("div",ts,[os,s("span",ns,o(a.value.tab1.company_cotel),1)]),s("div",es,[cs,s("span",ls,o(a.value.tab1.company_coemail),1)]),s("div",ps,[ds,a.value.tab1.company_file?(l(),p("div",is,[s("a",{href:a.value.tab1.company_file,download:"",target:"_blank"},[r(t,{type:"button",class:"border rounded-md px-3 py-1 shadow"},{default:m(()=>[g(" Download ")]),_:1})],8,_s)])):(l(),p("div",rs,"-"))])])]),s("div",ms,[s("div",gs,[us,s("div",hs,[ys,s("span",vs,o(a.value.tab2.company1),1)]),s("div",fs,[bs,s("span",xs,o(a.value.tab2.company1_status),1)]),s("div",ws,[Ds,s("span",Is,o(a.value.tab2.company2),1)]),s("div",Ns,[Ss,s("span",Ts,o(a.value.tab2.company2_status),1)]),s("div",ks,[Ps,s("span",Rs,o(a.value.tab2.company3),1)]),s("div",$s,[Us,s("span",Bs,o(a.value.tab2.company3_status),1)])])])])])])}}};export{Vs as default};
