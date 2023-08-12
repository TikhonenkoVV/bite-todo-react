"use strict";(self.webpackChunkbite_todo_react=self.webpackChunkbite_todo_react||[]).push([[597],{3592:function(n,e,t){t.r(e),t.d(e,{default:function(){return Ut}});var r,i,o,a,l,c,d,s,p,u,x,h,f,g,m,b,Z,j,v,k,y,w,C,I,M,D,T,z,_,B,P,H,S,q,F,E,N,R,A,Y,O,L,V,W,U,K,$,J,G,Q,X,nn,en,tn,rn,on,an,ln,cn,dn,sn,pn,un,xn,hn,fn,gn,mn,bn,Zn,jn,vn,kn,yn=t(1413),wn=t(5987),Cn=t(7689),In=t(9434),Mn=t(2918),Dn=t(8976),Tn=t(5705),zn=t(846),_n=t(5911),Bn=t(6727),Pn=t(168),Hn=t(225),Sn=Hn.Z.p(r||(r=(0,Pn.Z)(["\n  margin-bottom: 24px;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.36px;\n  color: #fff;\n  /* color: #161616; */\n"]))),qn=Hn.Z.div(i||(i=(0,Pn.Z)(["\n  position: relative;\n  max-width: 335px;\n  padding: 24px;\n  border-radius: 8px;\n  background: #151515;\n  border: 1px solid rgba(190, 219, 176, 0.5);\n  /* background: #fcfcfc; */\n  @media (min-width: 768px) {\n    min-width: 350px;\n  }\n"]))),Fn=(0,Hn.Z)(Tn.gN)(o||(o=(0,Pn.Z)(["\n  padding: 14px 18px;\n  width: 100%;\n  height: 49px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #fff;\n  /* color: #161616; */\n  line-height: normal;\n  letter-spacing: -0.28px;\n  background: #1f1f1f;\n  border-radius: 8px;\n  border: 1px solid #bedbb0;\n  opacity: 0.4;\n  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);\n  &:hover,\n  &:focus,\n  &:active {\n    opacity: 1;\n    outline: none;\n  }\n\n  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),En=Hn.Z.button(a||(a=(0,Pn.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  width: 18px;\n  height: 18px;\n"]))),Nn=Hn.Z.button(l||(l=(0,Pn.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  height: 49px;\n  padding: 10px 0px 11px 0px;\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.28px;\n  color: #161616;\n  border-radius: 8px;\n  background: #bedbb0;\n  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    background: #9dc888;\n  }\n"]))),Rn=Hn.Z.div(c||(c=(0,Pn.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  /* background: #fff; */\n  background: #000;\n  border-radius: 6px;\n"]))),An=Hn.Z.svg(d||(d=(0,Pn.Z)(["\n  width: 14px;\n  height: 14px;\n  /* fill: #121212; */\n  fill: #fff;\n"]))),Yn=Hn.Z.svg(s||(s=(0,Pn.Z)(["\n  width: 18px;\n  height: 18px;\n  /* fill: #121212; */\n  fill: #fff;\n"]))),On=Hn.Z.p(p||(p=(0,Pn.Z)(["\n  margin-top: 6px;\n  color: #ed4337;\n  font-size: 12px;\n"]))),Ln=Hn.Z.div(u||(u=(0,Pn.Z)(["\n  margin-bottom: 24px;\n"]))),Vn=t(3329),Wn=Bn.Ry().shape({title:Bn.Z_().min(2,"Please write more than 2 symbol!").max(32,"Please write less than 32 symbols!").required("Required")}),Un=function(n){var e=n.id,t=n.boardId,r=n.isEditMode,i=n.onCloseForm,o=n.columnTitle,a=void 0===o?"":o,l=(0,In.I0)(),c=r?"Edit column":"Add column",d=r?"Edit":"Add";return(0,Vn.jsxs)(qn,{children:[(0,Vn.jsx)(En,{type:"button",onClick:i,children:(0,Vn.jsx)(Yn,{children:(0,Vn.jsx)("use",{href:"".concat(_n.Z,"#icon-x-close")})})}),(0,Vn.jsx)(Sn,{children:c}),(0,Vn.jsx)(Tn.J9,{initialValues:{title:a},validationSchema:Wn,onSubmit:function(n,o){return function(n,o){var a=n.title,c=o.resetForm;l(r?(0,zn.L9)({boardId:t,id:e,title:a}):(0,zn.Wf)({boardId:t,title:a})),c(),i()}(n,o)},children:function(n){var e=n.errors,t=n.touched;return(0,Vn.jsxs)(Tn.l0,{children:[(0,Vn.jsxs)(Ln,{children:[(0,Vn.jsx)(Fn,{id:"title",name:"title",placeholder:"Title"}),e.title&&t.title?(0,Vn.jsx)(On,{children:e.title}):null]}),(0,Vn.jsxs)(Nn,{type:"submit",children:[(0,Vn.jsx)(Rn,{children:(0,Vn.jsx)(An,{children:(0,Vn.jsx)("use",{href:"".concat(_n.Z,"#icon-plus")})})}),(0,Vn.jsx)("div",{children:d})]})]})}})]})},Kn=t(2791),$n=t(2313),Jn=t(5861),Gn=t(9439),Qn=t(4687),Xn=t.n(Qn),ne=t(5264),ee=Hn.Z.div(x||(x=(0,Pn.Z)(["\n  max-width: 335px;\n"]))),te=Hn.Z.div(h||(h=(0,Pn.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n  padding: 18px 20px 17px 20px;\n  height: 56px;\n  border-radius: 8px;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.card})),re=Hn.Z.h3(f||(f=(0,Pn.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.28px;\n  color: ",";\n"])),(function(n){return n.theme.colors.titleColor})),ie=Hn.Z.div(g||(g=(0,Pn.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 40px;\n  height: 16px;\n"]))),oe=Hn.Z.svg(m||(m=(0,Pn.Z)(["\n  width: 16px;\n  height: 16px;\n  fill: ",";\n  transition: fill ",";\n  &:hover,\n  &:focus {\n    fill: ",";\n  }\n"])),(function(n){return n.theme.colors.iconFill}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.colors.iconHover})),ae=Hn.Z.button(b||(b=(0,Pn.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),le=Hn.Z.button(Z||(Z=(0,Pn.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  height: 49px;\n  padding: 10px 0px 11px 0px;\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.28px;\n  border-radius: 8px;\n  color: ",";\n  background: ",";\n  transition: background ",";\n  &:hover,\n  &:focus {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.addButtonColor}),(function(n){return n.theme.colors.addButtonBackground}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.colors.addButtonHoverBackground})),ce=Hn.Z.div(j||(j=(0,Pn.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  background: ",";\n  border-radius: 6px;\n"])),(function(n){return n.theme.colors.buttonIconBackground})),de=Hn.Z.svg(v||(v=(0,Pn.Z)(["\n  width: 14px;\n  height: 14px;\n  fill: ",";\n"])),(function(n){return n.theme.colors.buttonIconFill})),se=t(3889),pe=Hn.Z.div(k||(k=(0,Pn.Z)(["\n  max-height: calc(100vh - 312px);\n  height: 100%;\n  min-width: 350px;\n  margin-bottom: 14px;\n  /* overflow-y: auto; */\n\n  @media (min-width: 768px) {\n    max-height: calc(100vh - 324px);\n  }\n\n  @media (min-width: 1440px) {\n    max-height: calc(100vh - 292px);\n  }\n"]))),ue=Hn.Z.ul(y||(y=(0,Pn.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-width: 335px;\n  min-height: 100%;\n"]))),xe=t(7287),he=Hn.Z.li(w||(w=(0,Pn.Z)(["\n  position: relative;\n  height: 154px;\n  width: 100%;\n  padding: 14px 24px;\n  border-radius: 8px;\n  background-color: ",";\n  overflow: hidden;\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 4px;\n    height: 100%;\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.card}),(function(n){return xe.O3[n.color]})),fe=Hn.Z.h3(C||(C=(0,Pn.Z)(["\n  margin-bottom: 8px;\n  font-size: 14px;\n  line-height: 1.5;\n  font-weight: 600;\n  color: ",";\n"])),(function(n){return n.theme.colors.cardMajorText})),ge=Hn.Z.p(I||(I=(0,Pn.Z)(["\n  width: 290px;\n  height: 2rem;\n  margin-bottom: 34px;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.3333;\n  color: ",";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n"])),(function(n){return n.theme.colors.cardMinorText})),me=Hn.Z.div(M||(M=(0,Pn.Z)(["\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  &::before {\n    content: '';\n    position: absolute;\n    top: -14px;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    z-index: 1;\n  }\n"])),(function(n){return n.theme.colors.cardDecor})),be=Hn.Z.div(D||(D=(0,Pn.Z)(["\n  display: flex;\n  gap: 14px;\n"]))),Ze=Hn.Z.p(T||(T=(0,Pn.Z)(["\n  margin-bottom: 4px;\n  font-size: 8px;\n  line-height: 1.5;\n  color: ",";\n"])),(function(n){return n.theme.colors.cardMinorText})),je=Hn.Z.p(z||(z=(0,Pn.Z)(["\n  position: relative;\n  margin-left: 16px;\n  text-transform: capitalize;\n  font-size: 10px;\n  line-height: 1.5;\n  color: ",";\n  &::before {\n    content: '';\n    position: absolute;\n    top: 1.5px;\n    left: -16px;\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.cardMajorText}),(function(n){return xe.O3[n.color]})),ve=Hn.Z.p(_||(_=(0,Pn.Z)(["\n  font-size: 10px;\n  line-height: 1.5;\n  color: ",";\n"])),(function(n){return n.theme.colors.cardMajorText})),ke=Hn.Z.div(B||(B=(0,Pn.Z)(["\n  display: flex;\n  gap: 8px;\n"]))),ye=Hn.Z.button(P||(P=(0,Pn.Z)(["\n  position: relative;\n  width: 16px;\n  height: 16px;\n  margin-left: auto;\n  margin-right: 12px;\n  color: #888888;\n  &::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 30px;\n    height: 30px;\n    transform: translate(-50%, -50%);\n    background-image: radial-gradient(circle, #bedbb070 0%, #bedbb000 70%);\n  }\n"]))),we=Hn.Z.button(H||(H=(0,Pn.Z)(["\n  width: 16px;\n  height: 16px;\n  color: #888888;\n"]))),Ce=t(8885),Ie=t(9513),Me=t.n(Ie),De=(t(8639),t(2426)),Te=t.n(De),ze=Hn.Z.div(S||(S=(0,Pn.Z)(["\n  width: 350px;\n  height: 522px;\n  background-color: #151515;\n  margin-top: 10px;\n  margin-left: 10px;\n  border-radius: 10px;\n"]))),_e=Hn.Z.button(q||(q=(0,Pn.Z)(["\n  width: 18px;\n  height: 18px;\n  margin-left: 212px;\n"]))),Be=Hn.Z.p(F||(F=(0,Pn.Z)(["\n  display: inline-block;\n  color: #ffffff;\n  font-size: 18px;\n  margin-bottom: 24px;\n  margin-top: 24px;\n  margin-left: 24px;\n"]))),Pe=Hn.Z.input(E||(E=(0,Pn.Z)(["\n  border-radius: 8px;\n  border: 1px solid #bedbb0;\n  opacity: 0.4;\n  background: #1f1f1f;\n  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);\n  margin-bottom: 10px;\n  margin-left: 20px;\n  padding: 14px 115px 14px 18px;\n  font-size: 14px;\n  border-radius: 4px;\n  color: #ffffff;\n"]))),He=Hn.Z.textarea(N||(N=(0,Pn.Z)(["\n  resize: none;\n  margin-left: 20px;\n  color: #ffffff;\n  display: flex;\n  padding: 14px 113px 122px 18px;\n  align-items: center;\n  flex-shrink: 0;\n  border-radius: 8px;\n  border: 1px solid #bedbb0;\n  opacity: 0.4;\n  background: #1f1f1f;\n  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);\n  margin-bottom: 24px;\n"]))),Se=Hn.Z.label(R||(R=(0,Pn.Z)(["\n  color: rgba(255, 255, 255, 50%);\n  font-size: 12px;\n  margin-left: 24px;\n"]))),qe=Hn.Z.button(A||(A=(0,Pn.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 24px;\n  width: 302px;\n  padding: 10px 0px 11px 0px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  background: #bedbb0;\n"]))),Fe=Hn.Z.div(Y||(Y=(0,Pn.Z)(["\n  color: #bedbb0;\n  font-family: Poppins;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.28px;\n  color: #bedbb0;\n  margin-left: 24px;\n  justify-content: left;\n  align-items: center;\n  display: flex;\n"]))),Ee=Hn.Z.div(O||(O=(0,Pn.Z)(["\n  display: flex;\n  align-items: center;\n  margin-left: 15px;\n"]))),Ne=Hn.Z.label(L||(L=(0,Pn.Z)(["\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n  cursor: pointer;\n  margin-top: 10px;\n"]))),Re=Hn.Z.input(V||(V=(0,Pn.Z)(["\n  margin-bottom: 14px;\n\n  &::before {\n    content: '';\n    display: inline-block;\n    border-radius: 50%;\n    width: ",";\n    height: ",";\n    border: "," solid\n      ",";\n    background-color: ",";\n    transition: width 0.2s ease, height 0.2s ease; /* \u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c transition */\n  }\n  &:checked::before {\n    margin-bottom: 3.2px;\n    margin-left: 1.5px;\n    background-color: ",";\n  }\n"])),(function(n){return n.checked?"10px":"14px"}),(function(n){return n.checked?"10px":"14px"}),(function(n){var e=n.checked;n.colors;return e?"1px":"0px"}),(function(n){return n.colors}),(function(n){n.checked;var e=n.color;return e}),(function(n){n.checked;var e=n.color;return e})),Ae=Hn.Z.div(W||(W=(0,Pn.Z)(["\n  width: 28px;\n  height: 28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 8px;\n  background-color: #161616;\n  border-radius: 20%;\n"]))),Ye=Hn.Z.span(U||(U=(0,Pn.Z)(["\n  color: rgba(255, 255, 255, 0.5);\n  font-family: Poppins;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: -0.24px;\n  margin-left: 24px;\n"]))),Oe=Hn.Z.div(K||(K=(0,Pn.Z)(["\n  margin-left: 24px;\n  margin-bottom: 5px;\n  color: red;\n  font-size: 12px;\n"]))),Le=Hn.Z.div($||($=(0,Pn.Z)(["\n  margin-top: -15px;\n  margin-left: 24px;\n  color: red;\n  font-size: 12px;\n"]))),Ve=Hn.Z.div(J||(J=(0,Pn.Z)(["\n  margin-top: -5px;\n  margin-left: 24px;\n  color: red;\n  font-size: 12px;\n"]))),We=["#8FA1D0","#E09CB5","#BEDBB0","#808080"],Ue=["low","medium","high","without"],Ke=(0,Hn.Z)(Me())(G||(G=(0,Pn.Z)(["\n  &.custom-datepicker {\n    .react-datepicker-wrapper & .react-datepicker__day--keyboard-selected,\n    .react-datepicker-wrapper & .react-datepicker__day--today,\n    .react-datepicker-wrapper & .react-datepicker__day--weekend {\n      background-color: red !important;\n      color: white !important;\n    }\n\n    .react-datepicker-wrapper & .react-datepicker__day--selected {\n      background-color: red;\n      color: white;\n    }\n  }\n"]))),$e=function(n){var e=n.boardId,t=n.columnId,r=n.closeModal,i=n.title,o=n.description,a=n.priority,l=n.taskId,c=n.deadline,d={title:i,description:o,priority:a},s=(0,Kn.useState)(c),p=(0,Gn.Z)(s,2),u=p[0],x=p[1],h=(0,In.I0)(),f=(0,Kn.useRef)(null),g=Bn.Ry().shape({title:Bn.Z_().required("Title is required").min(1,"Title must contain at least 3 characters").max(32,"Title must not exceed 50 characters"),description:Bn.Z_().required("Description is required").min(1,"Description must contain at least 10 characters").max(500,"Description must not exceed 500 characters"),priority:Bn.Z_().required("Please select a color"),deadline:Bn.hT().required("Please select a deadline date").min(new Date,"Deadline cannot be earlier than today")}),m=function(){var n=(0,Jn.Z)(Xn().mark((function n(i,o){var a;return Xn().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=o.resetForm,console.log(i),n.prev=2,i.deadline){n.next=6;break}return alert("!!!!!!!!"),n.abrupt("return");case 6:return n.next=8,h((0,zn.eT)((0,yn.Z)((0,yn.Z)({},i),{},{boardId:e,columnId:t,taskId:l})));case 8:a(),r(),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),console.error("Error:",n.t0);case 15:case"end":return n.stop()}}),n,null,[[2,12]])})));return function(e,t){return n.apply(this,arguments)}}(),b=(0,Tn.TA)({initialValues:d,onSubmit:m,validationSchema:g}),Z=b.values.deadline?Te()(b.values.deadline).format("D MMMM YYYY"):function(){var n=Te()(u).format("MMMM D");return(0,Vn.jsxs)("div",{children:["Today, ",n]})}(),j=u?new Date(u):null;return console.log(u),console.log(j),(0,Vn.jsxs)(ze,{children:[(0,Vn.jsx)(Be,{children:"Edit Card"}),(0,Vn.jsx)(_e,{onClick:r,children:(0,Vn.jsx)("svg",{className:"icon",width:"18",height:"18","aria-hidden":"true",role:"presentation",fill:"white",children:(0,Vn.jsx)("use",{xlinkHref:"".concat(_n.Z,"#icon-x-close")})})}),(0,Vn.jsxs)("form",{onSubmit:b.handleSubmit,children:[(0,Vn.jsx)(Pe,{type:"text",name:"title",placeholder:"Title",value:b.values.title,onChange:b.handleChange}),b.touched.title&&b.errors.title?(0,Vn.jsx)(Oe,{children:b.errors.title}):null,(0,Vn.jsx)(He,{type:"text",name:"description",placeholder:"Description",value:b.values.description,onChange:b.handleChange}),b.touched.description&&b.errors.description?(0,Vn.jsx)(Le,{children:b.errors.description}):null,(0,Vn.jsx)(Se,{children:"Label color"}),(0,Vn.jsx)("br",{}),(0,Vn.jsx)(Ee,{children:Ue.map((function(n,e){return(0,Vn.jsx)(Ne,{children:(0,Vn.jsx)(Re,{type:"radio",name:"priority",color:We[e],value:n,checked:b.values.priority===n,onChange:b.handleChange})},e)}))}),b.touched.priority&&b.errors.priority?(0,Vn.jsx)(Ve,{children:b.errors.priority}):null,(0,Vn.jsxs)(Ye,{children:["Deadline",(0,Vn.jsxs)(Fe,{children:[Z,(0,Vn.jsx)("svg",{className:"icon",width:"14",height:"14","aria-hidden":"true",role:"presentation",fill:"#BEDBB0",onClick:function(){f.current&&f.current.setOpen(!0)},style:{marginLeft:"5px",cursor:"pointer"},children:(0,Vn.jsx)("use",{xlinkHref:"".concat(_n.Z,"#icon-chevron-down")})})]}),(0,Vn.jsx)(Ke,{className:"custom-datepicker",ref:f,name:"deadline",selected:j,onChange:function(n){console.log(n),n&&n<new Date?alert("Deadline cannot be before today."):(b.setFieldValue("deadline",n),x(n))},locale:"en",dateFormat:"d MMMM yyyy",customInput:(0,Vn.jsx)("div",{})})]}),(0,Vn.jsxs)(qe,{type:"submit",children:[(0,Vn.jsx)(Ae,{children:(0,Vn.jsx)("svg",{className:"icon",width:"14",height:"14","aria-hidden":"true",role:"presentation",fill:"white",children:(0,Vn.jsx)("use",{xlinkHref:"".concat(_n.Z,"#icon-plus")})})}),"Edit"]})]})]})},Je=["_id","title","description","priority","deadline","boardId","columnId","taskData"],Ge=(0,Kn.forwardRef)((function(n,e){var t=n._id,r=n.title,i=n.description,o=n.priority,a=n.deadline,l=n.boardId,c=n.columnId,d=n.taskData,s=(0,wn.Z)(n,Je),p=(0,Kn.useState)(!1),u=(0,Gn.Z)(p,2),x=u[0],h=u[1],f=(0,In.I0)(),g=function(){h(!1)},m=function(){var n=(0,Jn.Z)(Xn().mark((function n(){return Xn().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f((0,zn._5)({boardId:l,columnId:c,taskId:t}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),b=Te()(a).format("DD/MM/YYYY");return(0,Vn.jsxs)(he,(0,yn.Z)((0,yn.Z)({color:o,ref:e},s),{},{children:[(0,Vn.jsx)(fe,{children:r}),(0,Vn.jsx)(ge,{children:i}),(0,Vn.jsxs)(me,{children:[(0,Vn.jsxs)(be,{children:[(0,Vn.jsxs)("div",{children:[(0,Vn.jsx)(Ze,{children:"Priority"}),(0,Vn.jsx)(je,{color:o,children:o})]}),(0,Vn.jsxs)("div",{children:[(0,Vn.jsx)(Ze,{children:"Deadline"}),(0,Vn.jsx)(ve,{children:b})]})]}),(0,Vn.jsx)(ye,{type:"button",children:(0,Vn.jsx)(Ce.n,{w:16,h:16,use:"".concat(_n.Z,"#icon-bell")})}),(0,Vn.jsxs)(ke,{children:[(0,Vn.jsx)(we,{type:"button",onClick:function(){h(!0)},children:(0,Vn.jsx)(Ce.n,{w:16,h:16,use:"".concat(_n.Z,"#icon-pencil")})}),x&&(0,Vn.jsx)(Dn.u,{onClose:g,children:(0,Vn.jsx)($e,{boardId:l,columnId:c,taskId:t,taskData:d,title:r,description:i,deadline:a,priority:o,closeModal:g})}),(0,Vn.jsx)(we,{type:"button",onClick:m,children:(0,Vn.jsx)(Ce.n,{w:16,h:16,use:"".concat(_n.Z,"#icon-trash")})})]})]})]}))})),Qe=function(n){return n.filters.status},Xe=["style"],nt=["style"],et=function(n){var e=n.boardId,t=n.cards,r=n.columnId,i=(0,In.v9)(Qe),o=i.priority?t.filter((function(n){return n.priority===i.priority})):t;return(0,Vn.jsx)($n.bK,{droppableId:r,type:"CARD",children:function(n){return(0,Vn.jsxs)(pe,(0,yn.Z)((0,yn.Z)({},n.droppableProps),{},{children:[(0,Vn.jsx)(se.$B,{hideTracksWhenNotNeeded:!0,renderTrackVertical:function(n){var e=n.style,t=(0,wn.Z)(n,Xe);return(0,Vn.jsx)("div",(0,yn.Z)((0,yn.Z)({},t),{},{style:(0,yn.Z)((0,yn.Z)({},e),{},{backgroundColor:"rgba(255, 255, 255, 0.10)",right:"0",bottom:"0",top:"2px",borderRadius:"12px",width:"8px"})}))},renderThumbVertical:function(n){var e=n.style,t=(0,wn.Z)(n,nt);return(0,Vn.jsx)("div",(0,yn.Z)((0,yn.Z)({},t),{},{style:(0,yn.Z)((0,yn.Z)({},e),{},{borderRadius:"12px",backgroundColor:"#121212"})}))},children:(0,Vn.jsx)(ue,{ref:n.innerRef,children:o.map((function(n,t){var r=n._id,i=n.title,o=n.description,a=n.priority,l=n.deadline,c=n.owner;return(0,Vn.jsx)($n._l,{draggableId:r,index:t,children:function(n){return(0,Vn.jsx)(Ge,(0,yn.Z)((0,yn.Z)({_id:r,ref:n.innerRef,title:i,description:o,priority:a,deadline:l,boardId:e,columnId:c},n.draggableProps),n.dragHandleProps),r)}},r)}))})}),n.placeholder]}))}})},tt=["#8FA1D0","#E09CB5","#BEDBB0","#808080"],rt=["low","medium","high","without"],it=(0,Hn.Z)(Me())(Q||(Q=(0,Pn.Z)(["\n  &.custom-datepicker {\n    .react-datepicker-wrapper & .react-datepicker__day--keyboard-selected,\n    .react-datepicker-wrapper & .react-datepicker__day--today,\n    .react-datepicker-wrapper & .react-datepicker__day--weekend {\n      background-color: red !important;\n      color: white !important;\n    }\n\n    .react-datepicker-wrapper & .react-datepicker__day--selected {\n      background-color: red;\n      color: white;\n    }\n  }\n"]))),ot={title:"",description:"",priority:""},at=function(n){var e=n.boardId,t=n.columnId,r=n.closeModal,i=n.taskId,o=(0,Kn.useState)(""),a=(0,Gn.Z)(o,2),l=a[0],c=a[1],d=(0,In.I0)(),s=(0,Kn.useRef)(null),p=Bn.Ry().shape({title:Bn.Z_().required("Title is required").min(1,"Title must contain at least 3 characters").max(32,"Title must not exceed 50 characters"),description:Bn.Z_().required("Description is required").min(1,"Description must contain at least 10 characters").max(500,"Description must not exceed 500 characters"),priority:Bn.Z_().required("Please select a color"),deadline:Bn.hT().nullable().required("Please select a deadline date").min(new Date,"Deadline cannot be earlier than today").test("future","Please select a future date",(function(n){var e=new Date;return n&&n>e}))}),u=l?Te()(l).format("D MMMM YYYY"):function(){var n=Te()().format("MMMM D");return(0,Vn.jsxs)("div",{children:["Today, ",n]})}(),x=function(){var n=(0,Jn.Z)(Xn().mark((function n(o,a){var l;return Xn().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=a.resetForm,n.prev=1,c(o.deadline),n.next=5,d((0,zn.gI)((0,yn.Z)((0,yn.Z)({},o),{},{boardId:e,columnId:t,taskId:i})));case 5:l(),c(""),r(),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),console.error("Error:",n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e,t){return n.apply(this,arguments)}}(),h=(0,Tn.TA)({initialValues:ot,onSubmit:x,validationSchema:p});return(0,Vn.jsxs)(ze,{children:[(0,Vn.jsx)(Be,{children:"Add Card"}),(0,Vn.jsx)(_e,{onClick:r,children:(0,Vn.jsx)("svg",{className:"icon",width:"18",height:"18","aria-hidden":"true",role:"presentation",fill:"white",children:(0,Vn.jsx)("use",{xlinkHref:"".concat(_n.Z,"#icon-x-close")})})}),(0,Vn.jsxs)("form",{onSubmit:h.handleSubmit,children:[(0,Vn.jsx)(Pe,{type:"text",name:"title",placeholder:"Title",value:h.values.title,onChange:h.handleChange}),h.touched.title&&h.errors.title?(0,Vn.jsx)(Oe,{children:h.errors.title}):null,(0,Vn.jsx)(He,{type:"text",name:"description",placeholder:"Description",value:h.values.description,onChange:h.handleChange}),h.touched.description&&h.errors.description?(0,Vn.jsx)(Le,{children:h.errors.description}):null,(0,Vn.jsx)(Se,{children:"Label color"}),(0,Vn.jsx)("br",{}),(0,Vn.jsx)(Ee,{children:rt.map((function(n,e){return(0,Vn.jsx)(Ne,{children:(0,Vn.jsx)(Re,{type:"radio",name:"priority",color:tt[e],value:n,checked:h.values.priority===n,onChange:h.handleChange})},e)}))}),h.touched.priority&&h.errors.priority?(0,Vn.jsx)(Ve,{children:h.errors.priority}):null,(0,Vn.jsxs)(Ye,{children:["Deadline",(0,Vn.jsxs)(Fe,{children:[u,(0,Vn.jsx)("svg",{className:"icon",width:"14",height:"14","aria-hidden":"true",role:"presentation",fill:"#BEDBB0",onClick:function(){s.current&&s.current.setOpen(!0)},style:{marginLeft:"5px",cursor:"pointer"},children:(0,Vn.jsx)("use",{xlinkHref:"".concat(_n.Z,"#icon-chevron-down")})})]}),(0,Vn.jsx)(it,{className:"custom-datepicker",ref:s,name:"deadline",selected:h.values.deadline,onChange:function(n){console.log(n),n&&n<new Date?alert("Deadline cannot be before today."):(h.setFieldValue("deadline",n),c(n))},locale:"en",dateFormat:"d MMMM yyyy",showTimeSelect:!1,customInput:(0,Vn.jsx)("div",{})})]}),(0,Vn.jsxs)(qe,{type:"submit",children:[(0,Vn.jsx)(Ae,{children:(0,Vn.jsx)("svg",{className:"icon",width:"14",height:"14","aria-hidden":"true",role:"presentation",fill:"white",children:(0,Vn.jsx)("use",{xlinkHref:"".concat(_n.Z,"#icon-plus")})})}),"Add"]})]})]})},lt=function(n){var e=n._id,t=n.title,r=(n.createdAt,n.cards),i=n.owner,o=n.index,a=(0,Kn.useState)(!1),l=(0,Gn.Z)(a,2),c=l[0],d=l[1],s=(0,Mn.d)(),p=s.isModalOpen,u=s.closeModal,x=s.openModal,h=(0,In.I0)(),f=r&&r.length>0,g=function(){var n=(0,Jn.Z)(Xn().mark((function n(){return Xn().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!f){n.next=3;break}return ne.Notify.warning("It is impossible to remove column when exists one or more cards."),n.abrupt("return");case 3:return n.next=5,h((0,zn.eA)({boardId:i,columnId:e}));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),m=function(){d(!1),x()};return(0,Vn.jsx)($n._l,{draggableId:e,index:o,children:function(n){return(0,Vn.jsxs)(ee,(0,yn.Z)((0,yn.Z)({ref:n.innerRef},n.draggableProps),{},{children:[(0,Vn.jsxs)(te,(0,yn.Z)((0,yn.Z)({},n.dragHandleProps),{},{children:[(0,Vn.jsx)(re,{children:t}),(0,Vn.jsxs)(ie,{children:[(0,Vn.jsx)(ae,{type:"button",onClick:function(){return d(!0),void x()},children:(0,Vn.jsx)(oe,{children:(0,Vn.jsx)("use",{href:"".concat(_n.Z,"#icon-pencil")})})}),(0,Vn.jsx)(ae,{type:"button",onClick:g,children:(0,Vn.jsx)(oe,{children:(0,Vn.jsx)("use",{href:"".concat(_n.Z,"#icon-trash")})})})]})]})),r&&(0,Vn.jsx)(et,{boardId:i,columnId:e,cards:r}),(0,Vn.jsxs)(le,{onClick:m,children:[(0,Vn.jsx)(ce,{children:(0,Vn.jsx)(de,{children:(0,Vn.jsx)("use",{href:"".concat(_n.Z,"#icon-plus")})})}),(0,Vn.jsx)("div",{children:"Add another card"})]}),p&&c&&(0,Vn.jsx)(Dn.u,{onClose:u,children:(0,Vn.jsx)(Un,{id:e,boardId:i,onCloseForm:u,columnTitle:t,isEditMode:!0})}),p&&!c&&(0,Vn.jsx)(Dn.u,{onClose:u,children:(0,Vn.jsx)(at,{boardId:i,columnId:e,closeModal:u})})]}))}})},ct=Hn.Z.ul(X||(X=(0,Pn.Z)(["\n  display: flex;\n  gap: 34px;\n  margin-right: 34px;\n"]))),dt=t(925),st=t(9245),pt=t(5474),ut=function(n){var e=n.boardId,t=(0,In.I0)(),r=(0,In.v9)(dt.eo),i=(0,In.v9)(dt.xU);(0,Kn.useEffect)((function(){e&&t((0,zn.Pu)(e))}),[e,t]);return i?(0,Vn.jsx)(st.a,{fill:"#fff"}):r.length>0?(0,Vn.jsx)($n.Z5,{onDragEnd:function(n){var e=n.source,r=n.destination;!r||e.droppableId===r.droppableId&&e.index===r.index||("COLUMN"!==n.type?t(pt.g.moveCards({source:e,destination:r})):t(pt.g.moveColumns({sourceIndex:e.index,destinationIndex:r.index})))},children:(0,Vn.jsx)($n.bK,{droppableId:e,type:"COLUMN",direction:"horizontal",children:function(n){return(0,Vn.jsxs)(ct,(0,yn.Z)((0,yn.Z)({ref:n.innerRef},n.droppableProps),{},{children:[r.map((function(n,e){var t=n._id,r=n.title,i=n.createdAt,o=n.owner,a=n.cards;return(0,Vn.jsx)(lt,{index:e,owner:o,_id:t,title:r,createdAt:i,cards:a},t)})),n.placeholder]}))}})}):void 0},xt=t(2658),ht=t(2773),ft=Hn.Z.div(nn||(nn=(0,Pn.Z)(["\n  margin: auto;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.5);\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.2;\n  letter-spacing: -0.28px;\n\n  @media (min-width: 768px) {\n    max-width: 486px;\n  }\n"]))),gt=Hn.Z.button(en||(en=(0,Pn.Z)(["\n  color: #bedbb0;\n  font-family: Poppins;\n"]))),mt=function(){var n=(0,Mn.d)(),e=n.isModalOpen,t=n.openModal,r=n.closeModal;return(0,Vn.jsxs)(Vn.Fragment,{children:[(0,Vn.jsxs)(ft,{children:["Before starting your project, it is essential"," ",(0,Vn.jsx)(gt,{type:"button",onClick:t,children:"to create a board"})," ","to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]}),e&&(0,Vn.jsx)(xt.u,{onClose:r,children:(0,Vn.jsx)(ht.Z,{onClick:r})})]})},bt=Hn.Z.section(tn||(tn=(0,Pn.Z)(["\n  position: relative;\n  background-color: "," \n  background-image: ",";\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  @media (min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    background-image: ",";\n  }\n\n  @media (min-width: 768px) {\n    background-image: ",";\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: ",";\n    }\n  }\n\n  @media (min-width: 1440px) {\n    background-image: ",";\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: ",";\n    }\n  }\n"])),(function(n){return n.theme.colors.mainDashboardBackground}),(function(n){return"default"!==n.background?'url("https://res.cloudinary.com/dt8h4kxqx/image/upload/v1691824162/TaskPro/Mobile/'.concat(n.background,'.jpg")'):"none"}),(function(n){return"default"!==n.background?'url("https://res.cloudinary.com/dt8h4kxqx/image/upload/v1691824162/TaskPro/Mobile/'.concat(n.background,'%402x.jpg")'):"none"}),(function(n){return"default"!==n.background?'url("https://res.cloudinary.com/dt8h4kxqx/image/upload/v1691824162/TaskPro/Tablet/'.concat(n.background,'.jpg")'):"none"}),(function(n){return"default"!==n.background?'url("https://res.cloudinary.com/dt8h4kxqx/image/upload/v1691824162/TaskPro/Tablet/'.concat(n.background,'%402x.jpg")'):"none"}),(function(n){return"default"!==n.background?'url("https://res.cloudinary.com/dt8h4kxqx/image/upload/v1691824162/TaskPro/Desktop/'.concat(n.background,'.jpg")'):"none"}),(function(n){return"default"!==n.background?'url("https://res.cloudinary.com/dt8h4kxqx/image/upload/v1691824162/TaskPro/Desktop/'.concat(n.background,'.jpg")'):"none"})),Zt=Hn.Z.div(rn||(rn=(0,Pn.Z)(["\n  /* width: 375px; */\n\n  min-height: calc(100vh - 64px);\n  height: 100%;\n  padding: 74px 20px 24px 20px;\n  /* margin: 0 auto; */\n\n  overflow-x: auto;\n\n  @media (min-width: 768px) {\n    display: flex;\n    gap: 34px;\n    /* width: 768px; */\n    padding: 80px 32px 52px 32px;\n  }\n\n  @media (min-width: 1440px) {\n    padding: 48px 32px 16px 24px;\n    /* width: 1440px; */\n    /* padding: 48px 24px 0 284px; */\n  }\n"]))),jt=Hn.Z.h2(on||(on=(0,Pn.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n"]))),vt=Hn.Z.button(an||(an=(0,Pn.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 335px;\n  height: 56px;\n  padding: 14px 78px;\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.28px;\n  border-radius: 8px;\n  color: ","\n  background-color: ",";\n  transition: background ",";\n  &:hover,\n  &:focus {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.addColumnButtonColor}),(function(n){return n.theme.colors.addColumnButtonBackground}),(function(n){return n.theme.baseTransition}),(function(n){return n.theme.colors.addColumnButtonHoverBackground})),kt=Hn.Z.div(ln||(ln=(0,Pn.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  background-color: ",";\n  border-radius: 6px;\n"])),(function(n){return n.theme.colors.iconContainerBackground})),yt=Hn.Z.svg(cn||(cn=(0,Pn.Z)(["\n  width: 14px;\n  height: 14px;\n  fill: ",";\n"])),(function(n){return n.theme.colors.addColumnIconFill})),wt=Hn.Z.div(dn||(dn=(0,Pn.Z)(["\n  position: absolute;\n  width: 100%;\n"]))),Ct=Hn.Z.div(sn||(sn=(0,Pn.Z)(["\n  width: 100%;\n"]))),It=Hn.Z.div(pn||(pn=(0,Pn.Z)(["\n  width: max-content;\n  height: 100%;\n  display: flex;\n"]))),Mt=t(5642),Dt=t(9644),Tt=Hn.Z.button(un||(un=(0,Pn.Z)(["\n  position: relative;\n  font-family: Poppins;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: -0.24px;\n  padding-left: 22px;\n  color: ",";\n  transition: color ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n    width: 14px;\n    height: 14px;\n    border-radius: 50%;\n    background-color: ",";\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 1px;\n    transform: translateY(-50%);\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    border: ",";\n    opacity: ",";\n  }\n"])),(function(n){return n.selected?n.theme.colors.filterBtnColorSelected:n.theme.colors.filterBtnColor}),xe.H,(function(n){return n.theme.colors.iconHover}),(function(n){return"Without priority"===n.text?n.theme.colors.filterWithoutPriorityColor:n.color}),(function(n){return n.theme.colors.filterDecorativeElement}),(function(n){return n.selected?"1":" 0"})),zt=function(n){var e=n.selected,t=n.color,r=n.children,i=n.onClick;return(0,Vn.jsx)(Tt,{selected:e,type:"button",onClick:i,color:t,text:r,children:r})},_t=Hn.Z.div(xn||(xn=(0,Pn.Z)(["\n  position: relative;\n  width: 300px;\n  height: 234px;\n  border-radius: 8px;\n  background-color: ",";\n  padding: 24px;\n  box-shadow: ",";\n"])),(function(n){return n.theme.colors.filterContainerBackground}),(function(n){return n.theme.colors.filterContainerShadow})),Bt=Hn.Z.p(hn||(hn=(0,Pn.Z)(["\n  color: ",";\n  font-family: Poppins;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.36px;\n  width: 100%;\n  padding-bottom: 14px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  margin-bottom: 14px;\n"])),(function(n){return n.theme.colors.titleColor})),Pt=Hn.Z.div(fn||(fn=(0,Pn.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n"]))),Ht=Hn.Z.p(gn||(gn=(0,Pn.Z)(["\n  color: ",";\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.28px;\n"])),(function(n){return n.theme.colors.titleColor})),St=Hn.Z.button(mn||(mn=(0,Pn.Z)(["\n  cursor: pointer;\n  font-family: Poppins;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: -0.24px;\n  text-decoration-line: underline;\n  color: ",";\n  transition: color ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.selected?n.theme.colors.filterBtnColorSelected:n.theme.colors.filterBtnColor}),xe.H,(function(n){return n.theme.colors.iconHover})),qt=Hn.Z.li(bn||(bn=(0,Pn.Z)(["\n  &:not(:last-of-type) {\n    margin-bottom: 8px;\n  }\n"]))),Ft=Hn.Z.button(Zn||(Zn=(0,Pn.Z)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  top: 14px;\n  right: 14px;\n  cursor: pointer;\n  fill: ",";\n  transition: fill ",";\n\n  &:hover,\n  &:focus {\n    fill: ",";\n  }\n"])),(function(n){return n.theme.colors.closeModalBtn}),xe.H,(function(n){return n.theme.colors.closeModalBtnHover})),Et=[{text:"Without priority",color:"rgba(255, 255, 255, 0.3)"},{text:"Low",color:"rgba(143, 161, 208, 1)"},{text:"Medium",color:"rgba(224, 156, 181, 1)"},{text:"High",color:"rgba(190, 219, 176, 1)"}],Nt=function(n){var e=n.onClose,t=(0,In.I0)(),r=function(n){return t((0,Dt.b)(n))},i=function(n){switch(n){case"Without priority":return r(Mt.H.none);case"Show all":return r(Mt.H.all);case"Low":return r(Mt.H.low);case"Medium":return r(Mt.H.medium);case"High":return r(Mt.H.high);default:return}},o=(0,In.v9)(Qe);return(0,Vn.jsxs)(_t,{children:[(0,Vn.jsx)(Ft,{onClick:function(){return e()},children:(0,Vn.jsx)("svg",{width:18,height:18,children:(0,Vn.jsx)("use",{href:"".concat(_n.Z).concat("#icon-x-close")})})}),(0,Vn.jsx)(Bt,{children:"Filter"}),(0,Vn.jsxs)(Pt,{children:[(0,Vn.jsx)(Ht,{children:"Label color"}),(0,Vn.jsx)(St,{type:"button",selected:!o.priority,onClick:function(){return i("Show all")},children:"Show all"})]}),(0,Vn.jsx)("ul",{children:Et.map((function(n,e){var t=n.text,r=n.color;return(0,Vn.jsx)(qt,{children:(0,Vn.jsx)(zt,{selected:o.statusText===t,onClick:function(){return i(t)},color:r,children:t})},e)}))})]})},Rt=Hn.Z.h2(jn||(jn=(0,Pn.Z)(["\n  position: absolute;\n  top: 14px;\n  left: 20px;\n  color: ",";\n  font-size: 14px;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.28px;\n\n  @media "," {\n    font-size: 18px;\n    letter-spacing: -0.36px;\n    top: 26px;\n    left: 32px;\n  }\n\n  @media "," {\n    top: 10px;\n  }\n"])),(function(n){return n.theme.colors.titleColor}),xe.Hb.tablet,xe.Hb.desktop),At=Hn.Z.button(vn||(vn=(0,Pn.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: ",";\n  transition: color ",";\n\n  @media "," {\n    top: 20px;\n    right: 32px;\n  }\n\n  @media "," {\n    top: 14px;\n    right: 24px;\n  }\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.filterColor}),xe.H,xe.Hb.tablet,xe.Hb.desktop,(function(n){if(!n.disabled)return n.theme.colors.iconHover})),Yt=Hn.Z.p(kn||(kn=(0,Pn.Z)(["\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.28px;\n  margin-left: 8px;\n"]))),Ot=function(n){var e=n.name,t=n.disabled,r=(0,Mn.d)(),i=r.isModalOpen,o=r.closeModal,a=r.openModal;return(0,Vn.jsxs)(Vn.Fragment,{children:[e&&(0,Vn.jsx)(Rt,{children:e}),(0,Vn.jsxs)(At,{type:"button",onClick:a,disabled:t,children:[(0,Vn.jsx)(Ce.n,{w:16,h:16,use:"".concat(_n.Z).concat("#icon-filter")}),(0,Vn.jsx)(Yt,{children:"Filters"})]}),i&&(0,Vn.jsx)(xt.u,{onClose:o,children:(0,Vn.jsx)(Nt,{onClose:o})})]})},Lt=t(6869),Vt=["style"],Wt=["style"],Ut=function(){var n=(0,Cn.UO)().boardName,e=(0,Mn.d)(),t=e.isModalOpen,r=e.closeModal,i=e.openModal,o=(0,In.v9)(Lt.D).boards,a=n?o.find((function(e){return e.title===n.trim()})):null,l=(0,In.v9)(dt.eo).some((function(n){return n.cards.length>0}));return(0,Vn.jsxs)(bt,{background:(null===a||void 0===a?void 0:a.background)||"default",children:[(0,Vn.jsx)(wt,{children:(0,Vn.jsx)(Ot,{name:null===a||void 0===a?void 0:a.title,disabled:!l})}),(0,Vn.jsx)(Zt,{children:n?(0,Vn.jsxs)(Vn.Fragment,{children:[(0,Vn.jsx)(jt,{children:"Columns with tasks"}),(0,Vn.jsx)(Ct,{children:(0,Vn.jsx)(se.$B,{hideTracksWhenNotNeeded:!0,renderTrackHorizontal:function(n){var e=n.style,t=(0,wn.Z)(n,Vt);return(0,Vn.jsx)("div",(0,yn.Z)((0,yn.Z)({},t),{},{style:(0,yn.Z)((0,yn.Z)({},e),{},{width:"100%",height:"12px",borderRadius:"12px",bottom:0,backgroundColor:"#161616"})}))},renderThumbHorizontal:function(n){var e=n.style,t=(0,wn.Z)(n,Wt);return(0,Vn.jsx)("div",(0,yn.Z)((0,yn.Z)({},t),{},{style:(0,yn.Z)((0,yn.Z)({},e),{},{height:"12px",borderRadius:"12px",backgroundColor:"rgba(255, 255, 255, 0.1)"})}))},children:(0,Vn.jsxs)(It,{children:[(0,Vn.jsx)(ut,{boardId:null===a||void 0===a?void 0:a._id}),(0,Vn.jsxs)(vt,{type:"button",onClick:i,children:[(0,Vn.jsx)(kt,{children:(0,Vn.jsx)(yt,{children:(0,Vn.jsx)("use",{href:"".concat(_n.Z,"#icon-plus")})})}),(0,Vn.jsx)("div",{children:"Add another column"})]})]})})}),t&&(0,Vn.jsx)(Dn.u,{onClose:r,children:(0,Vn.jsx)(Un,{onCloseForm:r,boardId:null===a||void 0===a?void 0:a._id})})]}):(0,Vn.jsx)(mt,{})})]})}}}]);
//# sourceMappingURL=597.bd711189.chunk.js.map