"use strict";(self.webpackChunkbite_todo_react=self.webpackChunkbite_todo_react||[]).push([[614],{4614:function(n,e,t){t.r(e),t.d(e,{default:function(){return Ht}});var o,r,i,a,l,d,c,s,u,p,h,x,f,m,b,g,Z,k,v,y,j,w,C,I,M,_,H,T,D,z,B,A,E,P,S,N,F,O,Y,R,q,L,V,W,K,$,U,G,J,Q,X,nn,en,tn,on,rn,an,ln,dn,cn,sn,un,pn,hn=t(1413),xn=t(5987),fn=t(7689),mn=t(9434),bn=t(2918),gn=t(8976),Zn=t(5705),kn=t(846),vn=t(6727),yn=t(168),jn=t(225),wn=t(7287),Cn=jn.Z.p(o||(o=(0,yn.Z)(["\n  margin-bottom: 24px;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.36px;\n  color: ",";\n"])),(function(n){return n.theme.colors.formTitleColor})),In=(0,jn.Z)(Zn.gN)(r||(r=(0,yn.Z)(["\n  padding: 14px 18px;\n  width: 100%;\n  height: 49px;\n  font-size: 14px;\n  font-weight: 400;\n  color: ",";\n  line-height: normal;\n  letter-spacing: -0.28px;\n  background-color: ",";\n  border-radius: 8px;\n  border: 1px solid ",";\n  opacity: 0.4;\n  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);\n  &:hover,\n  &:focus,\n  &:active {\n    opacity: 1;\n    outline: none;\n  }\n\n  transition: background ",";\n"])),(function(n){return n.theme.colors.formInputColor}),(function(n){return n.theme.colors.formInputBackground}),(function(n){return n.theme.colors.formInputBorderColor}),wn.H),Mn=jn.Z.p(i||(i=(0,yn.Z)(["\n  margin-top: 6px;\n  color: #ed4337;\n  font-size: 12px;\n"]))),_n=jn.Z.div(a||(a=(0,yn.Z)(["\n  margin-bottom: 24px;\n"]))),Hn=t(925),Tn=t(6217),Dn=t(400),zn=t(2165),Bn=t(3175),An=t(3329),En=vn.Ry().shape({title:vn.Z_().min(2,"Please write more than 2 symbol!").max(32,"Please write less than 32 symbols!")}),Pn=function(n){var e=n.id,t=n.boardId,o=n.isEditMode,r=n.onCloseForm,i=n.columnTitle,a=void 0===i?"":i,l=(0,mn.I0)(),d=(0,mn.v9)(Hn.eo).length,c=o?"Edit column":"Add column",s=o?"Edit":"Add",u=o?"pencil":"plus";return(0,An.jsxs)(zn.h,{children:[(0,An.jsx)(Bn.E,{action:r,style:{position:"absolute",top:"14px",right:"14px"}}),(0,An.jsx)(Cn,{children:c}),(0,An.jsx)(Zn.J9,{initialValues:{title:a},validationSchema:En,onSubmit:function(n,i){return function(n,i){var a=n.title,c=i.resetForm;o?l((0,kn.L9)({boardId:t,id:e,title:a,index:d})):(a=""===a?"Column ".concat(d+1):a,l((0,kn.Wf)({boardId:t,title:a,index:d}))),c(),r()}(n,i)},children:function(n){var e=n.errors,t=n.touched;return(0,An.jsxs)(Zn.l0,{children:[(0,An.jsxs)(_n,{children:[(0,An.jsx)(In,{id:"title",name:"title",placeholder:"Title"}),e.title&&t.title?(0,An.jsx)(Mn,{children:e.title}):null]}),(0,An.jsx)(Tn.K,{title:s,children:(0,An.jsx)(Dn.$,{icon:u})})]})}})]})},Sn=t(3433),Nn=t(2791),Fn=t(2313),On=t(5264),Yn=t(9439),Rn=jn.Z.div(l||(l=(0,yn.Z)(["\n  max-width: 335px;\n"]))),qn=jn.Z.div(d||(d=(0,yn.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n  padding: 18px 20px 17px 20px;\n  height: 56px;\n  border-radius: 8px;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.card})),Ln=jn.Z.h3(c||(c=(0,yn.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.28px;\n  color: ",";\n"])),(function(n){return n.theme.colors.titleColor})),Vn=jn.Z.div(s||(s=(0,yn.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 40px;\n  height: 16px;\n"]))),Wn=(jn.Z.svg(u||(u=(0,yn.Z)(["\n  width: 16px;\n  height: 16px;\n  fill: ",";\n  transition: fill ",";\n  &:hover,\n  &:focus {\n    fill: ",";\n  }\n"])),(function(n){return n.theme.colors.iconFill}),wn.H,(function(n){return n.theme.colors.iconHover})),jn.Z.button(p||(p=(0,yn.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),t(3889)),Kn=jn.Z.div(h||(h=(0,yn.Z)(["\n  max-height: calc(100svh - 336px);\n  height: 100%;\n  min-width: 350px;\n  margin-bottom: 14px;\n\n  @media screen and (",") {\n    max-height: calc(100svh - 356px);\n  }\n\n  @media screen and (",") {\n    max-height: calc(100vh - 293px);\n  }\n"])),wn.Hb.tablet,wn.Hb.desktop),$n=jn.Z.ul(x||(x=(0,yn.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-width: 335px;\n  min-height: 100%;\n"]))),Un=jn.Z.div(f||(f=(0,yn.Z)(["\n  background-color: ",";\n  right: 0;\n  bottom: 0;\n  top: 2px;\n  border-radius: 12px;\n  width: 8px !important;\n"])),(function(n){return n.theme.colors.columnTrackVerticalBackground})),Gn=jn.Z.div(m||(m=(0,yn.Z)(["\n  border-radius: 12px;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.columnThumbVerticalBackground})),Jn=jn.Z.li(b||(b=(0,yn.Z)(["\n  position: relative;\n  height: 154px;\n  width: 100%;\n  padding: 14px 24px;\n  border-radius: 8px;\n  background-color: ",";\n  overflow: hidden;\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 4px;\n    height: 100%;\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.card}),(function(n){return wn.O3[n.color]})),Qn=jn.Z.h3(g||(g=(0,yn.Z)(["\n  margin-bottom: 8px;\n  font-size: 14px;\n  line-height: 1.5;\n  font-weight: 600;\n  color: ",";\n"])),(function(n){return n.theme.colors.cardMajorText})),Xn=jn.Z.p(Z||(Z=(0,yn.Z)(["\n  width: 290px;\n  height: 2rem;\n  margin-bottom: 34px;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.3333;\n  color: ",";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n"])),(function(n){return n.theme.colors.cardMinorText})),ne=jn.Z.div(k||(k=(0,yn.Z)(["\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  &::before {\n    content: '';\n    position: absolute;\n    top: -14px;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    z-index: 1;\n  }\n"])),(function(n){return n.theme.colors.cardDecor})),ee=jn.Z.div(v||(v=(0,yn.Z)(["\n  display: flex;\n  gap: 14px;\n  margin-right: auto;\n"]))),te=jn.Z.p(y||(y=(0,yn.Z)(["\n  margin-bottom: 4px;\n  font-size: 8px;\n  line-height: 1.5;\n  color: ",";\n"])),(function(n){return n.theme.colors.cardMinorText})),oe=jn.Z.p(j||(j=(0,yn.Z)(["\n  position: relative;\n  margin-left: 16px;\n  text-transform: capitalize;\n  font-size: 10px;\n  line-height: 1.5;\n  color: ",";\n  &::before {\n    content: '';\n    position: absolute;\n    top: 1.5px;\n    left: -16px;\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.cardMajorText}),(function(n){return wn.O3[n.color]})),re=jn.Z.p(w||(w=(0,yn.Z)(["\n  font-size: 10px;\n  line-height: 1.5;\n  color: ",";\n"])),(function(n){return n.theme.colors.cardMajorText})),ie=jn.Z.div(C||(C=(0,yn.Z)(["\n  display: flex;\n  gap: 8px;\n"]))),ae=jn.Z.button(I||(I=(0,yn.Z)(["\n  position: relative;\n  width: 16px;\n  height: 16px;\n  margin-right: 12px;\n  color: #888888;\n  fill: #888888;\n  cursor: auto;\n  &::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 30px;\n    height: 30px;\n    transform: translate(-50%, -50%);\n    background-image: ",";\n  }\n"])),(function(n){return n.pastDeadline?"radial-gradient(circle, red 0%, rgba(255, 0, 0, 0) 70%)":"radial-gradient(circle, #bedbb070 0%, #bedbb000 70%)"})),le=t(5861),de=t(4687),ce=t.n(de),se=t(9513),ue=t.n(se),pe=(t(8639),t(2426)),he=t.n(pe),xe=t(5911),fe=(jn.Z.div(M||(M=(0,yn.Z)(["\n  display: flex;\n"]))),jn.Z.p(_||(_=(0,yn.Z)(["\n  display: inline-block;\n  color: ",";\n  font-size: 18px;\n  margin-bottom: 24px;\n"])),(function(n){return n.theme.colors.cardMajorText}))),me=jn.Z.input(H||(H=(0,yn.Z)(["\n  width: 100%;\n  border: 1px solid ",";\n  border-radius: 8px;\n  opacity: 0.4;\n  background: ",";\n  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);\n  margin-bottom: 14px;\n  outline: none;\n  padding: 14px 18px;\n  font-size: 14px;\n  color: ",";\n  :focus-visible {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.colors.btnAddBoard}),(function(n){return n.theme.colors.card}),(function(n){return n.theme.colors.cardMajorText})),be=jn.Z.textarea(T||(T=(0,yn.Z)(["\n  resize: none;\n  width: 100%;\n  height: 154px;\n  font-size: 14px;\n  color: ",";\n  padding: 14px 18px;\n  border-radius: 8px;\n  border: 1px solid ",";\n  opacity: 0.4;\n  background: ",";\n  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);\n  margin-bottom: 24px;\n  outline: none;\n  transition: border-color 0.3s ease-in-out;\n  :focus {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.colors.cardMajorText}),(function(n){return n.theme.colors.btnAddBoard}),(function(n){return n.theme.colors.card})),ge=jn.Z.label(D||(D=(0,yn.Z)(["\n  color: ",";\n  font-size: 12px;\n"])),(function(n){return n.theme.colors.cardMinorText})),Ze=jn.Z.div(z||(z=(0,yn.Z)(["\n  color: ",";\n  font-family: Poppins;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.28px;\n  color: ",";\n  justify-content: left;\n  align-items: center;\n  display: flex;\n  &.disabled {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.btnAddBoard}),(function(n){return n.theme.colors.btnAddBoard}),(function(n){return n.theme.colors.cardMinorText})),ke=jn.Z.div(B||(B=(0,yn.Z)(["\n  display: flex;\n  align-items: center;\n"]))),ve=jn.Z.label(A||(A=(0,yn.Z)(["\n  display: flex;\n  align-items: center;\n  margin-right: 10px;\n  cursor: pointer;\n  margin-top: 10px;\n"]))),ye=jn.Z.input(E||(E=(0,yn.Z)(["\n  position: relative;\n  margin-bottom: 14px;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n    width: 14px;\n    height: 14px;\n    border-radius: 50%;\n    background-color: ",";\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 1px;\n    transform: translateY(-50%);\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    border: ",";\n    background-color: ",";\n    opacity: ",";\n  }\n"])),(function(n){return n.theme.priority[n.priority]}),(function(n){return n.theme.colors.filterDecorativeElement}),(function(n){return n.theme.priority[n.priority]}),(function(n){return n.checked?"1":" 0"})),je=jn.Z.div(P||(P=(0,yn.Z)(["\n  color: ",";\n  font-family: Poppins;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: -0.24px;\n  &.disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n"])),(function(n){return n.theme.colors.cardMinorText})),we=jn.Z.div(S||(S=(0,yn.Z)(["\n  margin-bottom: 5px;\n  color: ",";\n  font-size: 12px;\n"])),(function(n){return n.theme.colors.btnAddColumn})),Ce=jn.Z.div(N||(N=(0,yn.Z)(["\n  margin-top: -15px;\n  color: #ed4337;\n  font-size: 12px;\n"]))),Ie=jn.Z.div(F||(F=(0,yn.Z)(["\n  margin-top: -5px;\n  color: ",";\n  font-size: 12px;\n"])),(function(n){return n.theme.colors.btnAddColumn})),Me=jn.Z.div(O||(O=(0,yn.Z)(["\n  .react-datepicker {\n    border-radius: 8px;\n    border: 1px solid #bedbb0;\n    background: ",";\n  }\n\n  .react-datepicker-popper {\n    margin-left: 130px;\n    margin-top: -25px;\n  }\n\n  .react-datepicker__header {\n    background-color: ",";\n  }\n\n  .react-datepicker__current-month {\n    color: ",";\n  }\n\n  .react-datepicker__day-name {\n    color: ",";\n  }\n\n  .react-datepicker__day {\n    color: ",";\n    cursor: pointer;\n    transition: background-color 0.2s ease;\n    border-radius: 50%;\n\n    &:active,\n    &:hover {\n      background-color: ",";\n    }\n  }\n\n  .react-datepicker__day--keyboard-selected {\n    background-color: ",";\n  }\n\n  .react-datepicker__day--selected,\n  .react-datepicker__day--today.react-datepicker__day--selected {\n    background-color: ",";\n  }\n\n  .react-datepicker__day--today:not(.react-datepicker__day--selected):hover {\n    background-color: ",";\n    color: black;\n  }\n\n  .react-datepicker__day--selected:hover {\n    background-color: ",";\n  }\n\n  .react-datepicker__day--disabled {\n    opacity: 0.3;\n  }\n"])),(function(n){return n.theme.colors.calendarBackGround}),(function(n){return n.theme.colors.calendarBackGround}),(function(n){return n.theme.colors.calendarNumberColor}),(function(n){return n.theme.colors.calendarNumberColor}),(function(n){return n.theme.colors.calendarNumberColor}),(function(n){return n.theme.colors.calendarSelectedColor}),(function(n){return n.theme.colors.btnAddBoard}),(function(n){return n.theme.colors.calendarSelectedColor}),(function(n){return n.theme.colors.calendarSelectedColor}),(function(n){return n.theme.colors.calendarSelectedColor})),_e=jn.Z.button(Y||(Y=(0,yn.Z)(["\n  color: ",";\n  cursor: pointer;\n  &:disabled {\n    cursor: not-allowed;\n  }\n"])),(function(n){return n.theme.colors.btnAddBoard})),He=["#8FA1D0","#E09CB5","#BEDBB0","#808080"],Te=["low","medium","high","without"],De=function(n){var e=n.title,t=void 0===e?"":e,o=n.description,r=void 0===o?"":o,i=n.priority,a=void 0===i?"without":i,l=n.deadline,d=n.onSubmit,c=n.onClose,s=n.isEditing,u=void 0!==s&&s,p=n.cardsNumber,h=new Date;h.setDate(h.getDate()+1);var x={title:t,description:r,priority:a,deadline:l>=h?l:h},f=(0,Nn.useState)(h),m=(0,Yn.Z)(f,2),b=m[0],g=m[1],Z=(0,Nn.useRef)(null),k=vn.Ry().shape({title:vn.Z_().min(1,"Title must contain at least 3 characters").max(32,"Title must not exceed 50 characters"),description:vn.Z_().required("description is Required").min(1,"Description must contain at least 10 characters").max(500,"Description must not exceed 500 characters"),priority:vn.Z_().required("Please select a color"),deadline:vn.hT()}),v=function(){var n=(0,le.Z)(ce().mark((function n(e,t){var o;return ce().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.resetForm,n.prev=1,e.title=""===e.title?"Task ".concat(p+1):e.title,n.next=5,d(e);case 5:o(),c(),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.error("Error:",n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e,t){return n.apply(this,arguments)}}(),y=(0,Zn.TA)({initialValues:x,onSubmit:v,validationSchema:k}),j=y.values.deadline?he()(y.values.deadline).format("D MMMM YYYY"):function(){var n=he()(b).format("D MMMM D");return(0,An.jsxs)("div",{children:[" ",n]})}(),w=b?new Date(b):null;return(0,An.jsxs)(zn.h,{children:[(0,An.jsx)(fe,{children:u?"Edit Card":"Add Card"}),(0,An.jsx)(Bn.E,{action:c,style:{position:"absolute",top:"14px",right:"14px"}}),(0,An.jsxs)("form",{onSubmit:y.handleSubmit,children:[(0,An.jsx)(me,{type:"text",name:"title",placeholder:"Title",value:y.values.title,onChange:y.handleChange}),y.touched.title&&y.errors.title?(0,An.jsx)(we,{children:y.errors.title}):null,(0,An.jsx)(be,{type:"text",name:"description",placeholder:"Description",value:y.values.description,onChange:y.handleChange}),y.touched.description&&y.errors.description?(0,An.jsx)(Ce,{children:y.errors.description}):null,(0,An.jsx)(ge,{children:"Label color"}),(0,An.jsx)("br",{}),(0,An.jsx)(ke,{children:Te.map((function(n,e){return(0,An.jsx)(ve,{children:(0,An.jsx)(ye,{type:"radio",priority:n,name:"priority",color:He[e],value:n,checked:y.values.priority===n,onChange:y.handleChange})},e)}))}),y.touched.priority&&y.errors.priority?(0,An.jsx)(Ie,{children:y.errors.priority}):null,(0,An.jsxs)(je,{className:"without"===y.values.priority?"disabled":"",children:["Deadline",(0,An.jsxs)(Ze,{className:"without"===y.values.priority?"disabled":"",children:[j,(0,An.jsx)(_e,{type:"button",disabled:"without"===y.values.priority,onClick:function(){Z.current&&Z.current.setOpen(!0)},children:(0,An.jsx)("svg",{className:"icon",width:"14",height:"14","aria-hidden":"true",role:"presentation",style:{marginLeft:"5px",fill:"currentColor"},children:(0,An.jsx)("use",{xlinkHref:"".concat(xe.Z,"#icon-chevron-down")})})})]}),y.touched.deadline&&y.errors.deadline?(0,An.jsx)("div",{children:y.errors.deadline}):null,(0,An.jsx)(Me,{children:(0,An.jsx)(ue(),{className:"custom-datepicker",ref:Z,name:"deadline",selected:w,onChange:function(n){y.setFieldValue("deadline",n),g(n)},locale:"en",dateFormat:"d MMMM yyyy",showTimeSelect:!1,customInput:(0,An.jsx)("div",{}),minDate:h})})]}),(0,An.jsx)(Tn.K,{title:u?"Edit":"Add",children:(0,An.jsx)(Dn.$,{icon:u?"pencil":"plus"})})]})]})},ze=function(n){var e=n.boardId,t=n.columnId,o=n.closeModal,r=n.title,i=n.description,a=n.priority,l=n.index,d=n.taskId,c=n.deadline,s=(0,mn.I0)(),u=function(){var n=(0,le.Z)(ce().mark((function n(o){return ce().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"without"===o.priority&&(o.deadline=new Date(0)),n.prev=1,n.next=4,s((0,kn.eT)((0,hn.Z)((0,hn.Z)({},o),{},{index:l,boardId:e,columnId:t,taskId:d})));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.error("Error:",n.t0);case 9:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(e){return n.apply(this,arguments)}}();return(0,An.jsx)(De,{title:r,description:i,priority:a,index:l,taskId:d,deadline:c,onSubmit:u,onClose:o,isEditing:!0})},Be=t(8497),Ae=t(3470),Ee=["_id","title","description","priority","deadline","index","boardId","columnId","taskData"],Pe=(0,Nn.forwardRef)((function(n,e){var t=n._id,o=n.title,r=n.description,i=n.priority,a=n.deadline,l=n.index,d=n.boardId,c=n.columnId,s=n.taskData,u=(0,xn.Z)(n,Ee),p=(0,Nn.useState)(!1),h=(0,Yn.Z)(p,2),x=h[0],f=h[1],m=(0,bn.t)(),b=m.isAskDeleteModalOpen,g=m.openAskDeleteModal,Z=m.closeAskDeleteModal,k=(0,mn.I0)(),v=(0,Nn.useState)(""),y=(0,Yn.Z)(v,2),j=y[0],w=y[1],C=function(){f(!1)},I=he()(a).format("DD/MM/YYYY");return(0,An.jsxs)(Jn,(0,hn.Z)((0,hn.Z)({color:i,ref:e},u),{},{children:[(0,An.jsx)(Qn,{children:o}),(0,An.jsx)(Xn,{children:r}),(0,An.jsxs)(ne,{children:[(0,An.jsxs)(ee,{children:[(0,An.jsxs)("div",{children:[(0,An.jsx)(te,{children:"Priority"}),(0,An.jsx)(oe,{color:i,children:i})]}),"without"!==i&&(0,An.jsxs)("div",{children:[(0,An.jsx)(te,{children:"Deadline"}),(0,An.jsx)(re,{children:I})]})]}),"without"!==i&&(0,An.jsx)(ae,{type:"button",pastDeadline:he()(a).isBefore(he()()),children:(0,An.jsx)(Ae.n,{w:16,h:16,icon:"bell"})}),(0,An.jsxs)(ie,{children:[(0,An.jsx)(Bn.E,{action:function(){f(!0)},w:16,h:16,icon:"pencil"}),x&&(0,An.jsx)(gn.u,{onClose:C,children:(0,An.jsx)(ze,{boardId:d,columnId:c,taskId:t,taskData:s,title:o,description:r,deadline:a,index:l,priority:i,closeModal:C})}),b&&(0,An.jsx)(gn.u,{onClose:Z,children:(0,An.jsx)(Be.i,{onClick:Z,handleDelete:function(){k((0,kn._5)({boardId:d,columnId:c,taskId:t}))},title:j})}),(0,An.jsx)(Bn.E,{action:function(){g(),w('Delete card "'.concat(o,'"?'))},w:16,h:16,icon:"trash"})]})]})]}))})),Se=function(n){return n.filters.status},Ne=["style"],Fe=["style"],Oe=function(n){var e=n.boardId,t=n.cards,o=n.columnId,r=(0,mn.v9)(Se),i=r.priority?t.filter((function(n){return n.priority===r.priority})):t;return(0,An.jsx)(Fn.bK,{droppableId:o,type:"CARD",children:function(n){return(0,An.jsxs)(Kn,(0,hn.Z)((0,hn.Z)({},n.droppableProps),{},{children:[(0,An.jsx)(Wn.$B,{hideTracksWhenNotNeeded:!0,renderTrackVertical:function(n){var e=n.style,t=(0,xn.Z)(n,Ne);return(0,An.jsx)(Un,(0,hn.Z)((0,hn.Z)({},t),{},{style:(0,hn.Z)({},e)}))},renderThumbVertical:function(n){var e=n.style,t=(0,xn.Z)(n,Fe);return(0,An.jsx)(Gn,(0,hn.Z)((0,hn.Z)({},t),{},{style:(0,hn.Z)({},e)}))},children:(0,An.jsx)($n,{ref:n.innerRef,children:i.map((function(n,t){var o=n._id,r=n.title,i=n.description,a=n.priority,l=n.deadline,d=n.owner;return(0,An.jsx)(Fn._l,{draggableId:o,index:t,children:function(n){return(0,An.jsx)(Pe,(0,hn.Z)((0,hn.Z)({_id:o,ref:n.innerRef,title:r,description:i,priority:a,deadline:l,index:t,boardId:e,columnId:d},n.draggableProps),n.dragHandleProps),o)}},o)}))})}),n.placeholder]}))}})},Ye=function(n){var e=n.boardId,t=n.columnId,o=n.closeModal,r=n.taskId,i=n.cardsNumber,a=(0,mn.I0)(),l=(0,mn.v9)(Hn.eo).filter((function(n){return n._id===t}))[0].cards.length,d=function(){var n=(0,le.Z)(ce().mark((function n(o){return ce().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"without"===o.priority&&(o.deadline=new Date(0)),n.prev=1,n.next=4,a((0,kn.gI)((0,hn.Z)((0,hn.Z)({},o),{},{index:l,boardId:e,columnId:t,taskId:r})));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.error("Error:",n.t0);case 9:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(e){return n.apply(this,arguments)}}();return(0,An.jsx)(De,{onSubmit:d,onClose:o,isEditing:!1,cardsNumber:i})},Re=function(n){var e=n._id,t=n.title,o=(n.createdAt,n.cards),r=n.owner,i=n.index,a=(0,Nn.useState)("Delete column?"),l=(0,Yn.Z)(a,2),d=l[0],c=l[1],s=(0,Nn.useState)(!1),u=(0,Yn.Z)(s,2),p=u[0],h=u[1],x=(0,bn.d)(),f=x.isModalOpen,m=x.closeModal,b=x.openModal,g=(0,bn.t)(),Z=g.isAskDeleteModalOpen,k=g.openAskDeleteModal,v=g.closeAskDeleteModal,y=(0,mn.I0)(),j=function(){switch(k(),o.length){case 0:c('Delete column "'.concat(t,'"?'));break;case 1:c('Delete column "'.concat(t,'" with one task?'));break;default:c('Delete column "'.concat(t,'" with ').concat(o.length," tasks?"))}},w=function(){y((0,kn.eA)({boardId:r,columnId:e})),On.Notify.info("The column ".concat(t," was successfully deleted"))},C=function(){h(!1),b()};return(0,An.jsx)(Fn._l,{draggableId:e,index:i,children:function(n){return(0,An.jsxs)(Rn,(0,hn.Z)((0,hn.Z)({ref:n.innerRef},n.draggableProps),{},{children:[(0,An.jsxs)(qn,(0,hn.Z)((0,hn.Z)({},n.dragHandleProps),{},{children:[(0,An.jsx)(Ln,{children:t}),(0,An.jsxs)(Vn,{children:[(0,An.jsx)(Bn.E,{action:function(){return h(!0),void b()},w:16,h:16,icon:"pencil"}),(0,An.jsx)(Bn.E,{action:j,w:16,h:16,icon:"trash"})]})]})),o&&(0,An.jsx)(Oe,{boardId:r,columnId:e,cards:o}),(0,An.jsx)(Tn.K,{type:"button",action:C,title:"Add another card",children:(0,An.jsx)(Dn.$,{})}),f&&p&&(0,An.jsx)(gn.u,{onClose:m,children:(0,An.jsx)(Pn,{id:e,boardId:r,onCloseForm:m,columnTitle:t,isEditMode:!0})}),f&&!p&&(0,An.jsx)(gn.u,{onClose:m,children:(0,An.jsx)(Ye,{boardId:r,columnId:e,closeModal:m,index:i,cardsNumber:o.length})}),Z&&(0,An.jsx)(gn.u,{onClose:v,children:(0,An.jsx)(Be.i,{onClick:v,handleDelete:w,title:d})})]}))}})},qe=jn.Z.ul(R||(R=(0,yn.Z)(["\n  display: flex;\n  gap: 34px;\n  margin-right: 34px;\n"]))),Le=t(9245),Ve=t(3445),We=t(8133),Ke=function(n){var e=n.boardId,t=(0,mn.I0)(),o=(0,mn.v9)(Hn.eo),r=(0,mn.v9)(Hn.xU),i=(0,mn.v9)(Hn.zh);i&&On.Notify.warning(i),(0,Nn.useEffect)((function(){e&&t((0,kn.Pu)(e))}),[e,t]);return r?(0,An.jsx)(Le.a,{fill:"#fff"}):o.length>0?(0,An.jsx)(Fn.Z5,{onDragEnd:function(n){var r=n.source,i=n.destination;if(i&&(r.droppableId!==i.droppableId||r.index!==i.index)){if("COLUMN"===n.type)return t(Ve.g.moveColumns({sourceIndex:r.index,destinationIndex:i.index})),void(0,We.H)(o,r.index,i.index).forEach((function(n,o){t((0,kn.L9)({boardId:e,id:n._id,title:n.title,index:o}))}));var a=o.filter((function(e){return e._id===n.source.droppableId})),l=o.filter((function(e){return e._id===n.destination.droppableId})),d=(0,Sn.Z)(a[0].cards),c=(0,Sn.Z)(l[0].cards),s=d.find((function(e){return e._id===n.draggableId}));d.splice(n.source.index,1),c.splice(n.destination.index,0,s),d.forEach((function(n,e){t((0,kn.eT)({title:n.title,description:n.description,priority:n.priority,deadline:n.deadline,index:e,columnId:n.owner,taskId:n._id}))})),c.forEach((function(e,o){t((0,kn.eT)({title:e.title,description:e.description,priority:e.priority,deadline:e.deadline,index:o,columnId:n.destination.droppableId,taskId:e._id}))})),t(Ve.g.moveCards({source:r,destination:i}))}},children:(0,An.jsx)(Fn.bK,{droppableId:e,type:"COLUMN",direction:"horizontal",children:function(n){return(0,An.jsxs)(qe,(0,hn.Z)((0,hn.Z)({ref:n.innerRef},n.droppableProps),{},{children:[o.map((function(n,e){var t=n._id,o=n.title,r=n.createdAt,i=n.owner,a=n.cards;return(0,An.jsx)(Re,{index:e,owner:i,_id:t,title:o,createdAt:r,cards:a},t)})),n.placeholder]}))}})}):void 0},$e=t(5488),Ue=t(7560),Ge=jn.Z.div(q||(q=(0,yn.Z)(["\n  margin: auto;\n  text-align: center;\n  color: ",";\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.2;\n  letter-spacing: -0.28px;\n\n  @media screen and (",") {\n    max-width: 486px;\n  }\n"])),(function(n){return n.theme.colors.createBoardContainerColor}),wn.Hb.tablet),Je=jn.Z.button(L||(L=(0,yn.Z)(["\n  color: ",";\n  font-family: Poppins;\n  transition: color ",";\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.formAddButtonBackground}),wn.H,(function(n){return n.theme.colors.formAddButtonHover})),Qe=function(){var n=(0,bn.d)(),e=n.isModalOpen,t=n.openModal,o=n.closeModal;return(0,An.jsxs)(An.Fragment,{children:[(0,An.jsxs)(Ge,{children:["Before starting your project, it is essential"," ",(0,An.jsx)(Je,{type:"button",onClick:t,children:"to create a board"}),"to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]}),e&&(0,An.jsx)($e.u,{onClose:o,children:(0,An.jsx)(Ue.Z,{onClick:o})})]})},Xe=jn.Z.section(V||(V=(0,yn.Z)(["\n  position: relative;\n  background-color: ",";\n  background-image: ",";\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  @media screen and (","),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    background-image: ",";\n  }\n\n  @media screen and (",") {\n    background-image: ",";\n    @media screen and (","),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: ",";\n    }\n  }\n\n  @media screen and (",") {\n    background-image: ",";\n    @media screen and (","),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: ",";\n    }\n  }\n"])),(function(n){return n.theme.colors.background}),(function(n){return"default"!==n.background?'url("https://res.cloudinary.com/dt8h4kxqx/image/upload/v1691824162/TaskPro/Mobile/'.concat(n.background,'.jpg")'):"none"}),wn.Hb.retina,(function(n){return"default"!==n.background?'url("https://res.cloudinary.com/dt8h4kxqx/image/upload/v1691824162/TaskPro/Mobile/'.concat(n.background,'%402x.jpg")'):"none"}),wn.Hb.tablet,(function(n){return"default"!==n.background?'url("https://res.cloudinary.com/dt8h4kxqx/image/upload/v1691824162/TaskPro/Tablet/'.concat(n.background,'.jpg")'):"none"}),wn.Hb.retina,(function(n){return"default"!==n.background?'url("https://res.cloudinary.com/dt8h4kxqx/image/upload/v1691824162/TaskPro/Tablet/'.concat(n.background,'%402x.jpg")'):"none"}),wn.Hb.desktop,(function(n){return"default"!==n.background?'url("https://res.cloudinary.com/dt8h4kxqx/image/upload/v1691824162/TaskPro/Desktop/'.concat(n.background,'.jpg")'):"none"}),wn.Hb.retina,(function(n){return"default"!==n.background?'url("https://res.cloudinary.com/dt8h4kxqx/image/upload/v1691824162/TaskPro/Desktop/'.concat(n.background,'.jpg")'):"none"})),nt=jn.Z.div(W||(W=(0,yn.Z)(["\n  min-height: calc(100svh - 60px);\n  height: 100%;\n  padding: 74px 0 24px 0;\n  overflow-x: auto;\n  display: flex;\n\n  @media screen and (",") {\n    min-height: calc(100svh - 68px);\n    gap: 34px;\n    padding: 80px 0 32px 0;\n  }\n\n  @media screen and (",") {\n    min-height: calc(100vh - 68px);\n    padding: 48px 0 8px 0;\n  }\n"])),wn.Hb.tablet,wn.Hb.desktop),et=jn.Z.h2(K||(K=(0,yn.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n"]))),tt=jn.Z.div($||($=(0,yn.Z)(["\n  width: max-content;\n  height: 100%;\n  margin-right: 20px;\n\n  display: flex;\n  margin-left: 20px;\n\n  @media screen and (",") {\n    margin-left: 32px;\n  }\n\n  @media screen and (",") {\n    margin-left: 24px;\n  }\n"])),wn.Hb.tablet,wn.Hb.desktop),ot=jn.Z.button(U||(U=(0,yn.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 335px;\n  height: 56px;\n  padding: 14px 78px;\n  margin-right: 20px;\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.28px;\n  border-radius: 8px;\n  color: ",";\n  background-color: ",";\n  transition: background ",";\n  &:hover,\n  &:focus {\n    background: ",";\n\n    @media screen and (",") {\n      margin-right: 32px;\n    }\n\n    @media screen and (",") {\n      margin-right: 24px;\n    }\n  }\n"])),(function(n){return n.theme.colors.addColumnButtonColor}),(function(n){return n.theme.colors.addColumnButtonBackground}),wn.H,(function(n){return n.theme.colors.addColumnButtonHoverBackground}),wn.Hb.tablet,wn.Hb.desktop),rt=jn.Z.div(G||(G=(0,yn.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  background-color: ",";\n  border-radius: 6px;\n"])),(function(n){return n.theme.colors.iconContainerBackground})),it=jn.Z.svg(J||(J=(0,yn.Z)(["\n  width: 14px;\n  height: 14px;\n  fill: ",";\n"])),(function(n){return n.theme.colors.addColumnIconFill})),at=jn.Z.div(Q||(Q=(0,yn.Z)(["\n  position: absolute;\n  width: 100%;\n"]))),lt=jn.Z.div(X||(X=(0,yn.Z)(["\n  width: 100%;\n"]))),dt=jn.Z.div(nn||(nn=(0,yn.Z)(["\n  min-height: 12px;\n  border-radius: 12px;\n  bottom: 0;\n  left: 20px;\n  right: 20px;\n  @media screen and (",") {\n    left: 32px;\n    right: 32px;\n  }\n\n  @media screen and (",") {\n    left: 24px;\n    right: 24px;\n  }\n  background-color: ",";\n"])),wn.Hb.tablet,wn.Hb.desktop,(function(n){return n.theme.colors.mainTrackHorizontalBackground})),ct=jn.Z.div(en||(en=(0,yn.Z)(["\n  height: 12px;\n  border-radius: 12px;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.mainThumbHorizontalBackground})),st=t(5642),ut=t(9644),pt=jn.Z.button(tn||(tn=(0,yn.Z)(["\n  position: relative;\n  font-family: Poppins;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: -0.24px;\n  padding-left: 22px;\n  color: ",";\n  transition: color ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n    width: 14px;\n    height: 14px;\n    border-radius: 50%;\n    background-color: ",";\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 1px;\n    transform: translateY(-50%);\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    border: ",";\n    opacity: ",";\n  }\n"])),(function(n){return n.selected?n.theme.colors.filterBtnColorSelected:n.theme.colors.filterBtnColor}),wn.H,(function(n){return n.theme.colors.iconHover}),(function(n){return"Without priority"===n.text?n.theme.colors.filterWithoutPriorityColor:n.color}),(function(n){return n.theme.colors.filterDecorativeElement}),(function(n){return n.selected?"1":" 0"})),ht=function(n){var e=n.selected,t=n.color,o=n.children,r=n.onClick;return(0,An.jsx)(pt,{selected:e,type:"button",onClick:r,color:t,text:o,children:o})},xt=(0,jn.Z)(zn.h)(on||(on=(0,yn.Z)(["\n  max-width: 300px;\n"]))),ft=jn.Z.p(rn||(rn=(0,yn.Z)(["\n  color: ",";\n  font-family: Poppins;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.36px;\n  width: 100%;\n  padding-bottom: 14px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  margin-bottom: 14px;\n"])),(function(n){return n.theme.colors.titleColor})),mt=jn.Z.div(an||(an=(0,yn.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n"]))),bt=jn.Z.p(ln||(ln=(0,yn.Z)(["\n  color: ",";\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.28px;\n"])),(function(n){return n.theme.colors.titleColor})),gt=jn.Z.button(dn||(dn=(0,yn.Z)(["\n  cursor: pointer;\n  font-family: Poppins;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: -0.24px;\n  text-decoration-line: underline;\n  color: ",";\n  transition: color ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.selected?n.theme.colors.filterBtnColorSelected:n.theme.colors.filterBtnColor}),wn.H,(function(n){return n.theme.colors.iconHover})),Zt=jn.Z.li(cn||(cn=(0,yn.Z)(["\n  &:not(:last-of-type) {\n    margin-bottom: 8px;\n  }\n"]))),kt=[{text:"Without priority",color:"rgba(255, 255, 255, 0.3)"},{text:"Low",color:"rgba(143, 161, 208, 1)"},{text:"Medium",color:"rgba(224, 156, 181, 1)"},{text:"High",color:"rgba(190, 219, 176, 1)"}],vt=function(n){var e=n.onClose,t=(0,mn.I0)(),o=function(n){return t((0,ut.b)(n))},r=function(n){switch(n){case"Without priority":return o(st.H.none);case"Show all":return o(st.H.all);case"Low":return o(st.H.low);case"Medium":return o(st.H.medium);case"High":return o(st.H.high);default:return}},i=(0,mn.v9)(Se);return(0,An.jsxs)(xt,{children:[(0,An.jsx)(Bn.E,{action:e,style:{position:"absolute",top:"14px",right:"14px"}}),(0,An.jsx)(ft,{children:"Filter"}),(0,An.jsxs)(mt,{children:[(0,An.jsx)(bt,{children:"Label color"}),(0,An.jsx)(gt,{type:"button",selected:!i.priority,onClick:function(){return r("Show all")},children:"Show all"})]}),(0,An.jsx)("ul",{children:kt.map((function(n,e){var t=n.text,o=n.color;return(0,An.jsx)(Zt,{children:(0,An.jsx)(ht,{selected:i.statusText===t,onClick:function(){return r(t)},color:o,children:t})},e)}))})]})},yt=jn.Z.h2(sn||(sn=(0,yn.Z)(["\n  position: absolute;\n  top: 10px;\n  left: 12px;\n  color: ",";\n  font-size: 14px;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.28px;\n  background-color: ",";\n  padding: 4px 8px;\n  border-radius: 10px;\n\n  @media screen and (",") {\n    font-size: 18px;\n    letter-spacing: -0.36px;\n    top: 24px;\n    left: 24px;\n\n    padding: 2px 8px;\n  }\n\n  @media screen and (",") {\n    top: 8px;\n  }\n"])),(function(n){return n.theme.colors.titleColor}),(function(n){return"default"===n.dashboard.background?"none":n.theme.colors.filterBgd}),wn.Hb.tablet,wn.Hb.desktop),jt=jn.Z.button(un||(un=(0,yn.Z)(["\n  position: absolute;\n  top: 10px;\n  right: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: ",";\n  fill: currentColor;\n  transition: color ",", box-shadow ",";\n\n  background-color: ",";\n  padding: 4px 8px;\n  border-radius: 10px;\n\n  @media screen and (",") {\n    top: 16px;\n    right: 24px;\n  }\n\n  @media screen and (",") {\n    top: 10px;\n    right: 16px;\n  }\n\n  &:hover,\n  &:focus {\n    color: ",";\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.colors.filterColor}),wn.H,wn.H,(function(n){return n.dashboard?n.dashboard&&"default"===n.dashboard.background?"none":n.theme.colors.filterBgd:"none"}),wn.Hb.tablet,wn.Hb.desktop,(function(n){if(!n.disabled)return n.theme.colors.iconHover}),(function(n){return null===n.dashboard||n.dashboard&&"default"===n.dashboard.background?"none":n.theme.colors.filterShadow})),wt=jn.Z.p(pn||(pn=(0,yn.Z)(["\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.28px;\n  margin-left: 8px;\n"]))),Ct=function(n){var e=n.name,t=n.disabled,o=n.dashboard,r=(0,bn.d)(),i=r.isModalOpen,a=r.closeModal,l=r.openModal;return(0,An.jsxs)(An.Fragment,{children:[e&&(0,An.jsx)(yt,{dashboard:o,children:e}),(0,An.jsxs)(jt,{dashboard:o,type:"button",onClick:l,disabled:t,children:[(0,An.jsx)(Ae.n,{w:16,h:16,icon:"filter"}),(0,An.jsx)(wt,{children:"Filters"})]}),i&&(0,An.jsx)($e.u,{onClose:a,children:(0,An.jsx)(vt,{onClose:a})})]})},It=t(6869),Mt=["style"],_t=["style"],Ht=function(){var n=(0,fn.UO)().boardName,e=(0,bn.d)(),t=e.isModalOpen,o=e.closeModal,r=e.openModal,i=(0,mn.v9)(It.D).boards,a=n?i.find((function(e){return e.title===n.trim()})):null,l=(0,mn.v9)(Hn.eo).some((function(n){return n.cards.length>0}));return(0,An.jsxs)(Xe,{background:(null===a||void 0===a?void 0:a.background)||"default",children:[(0,An.jsx)(at,{children:(0,An.jsx)(Ct,{name:null===a||void 0===a?void 0:a.title,disabled:!l,dashboard:a})}),(0,An.jsx)(nt,{children:n?(0,An.jsxs)(An.Fragment,{children:[(0,An.jsx)(et,{children:"Columns with tasks"}),(0,An.jsx)(lt,{children:(0,An.jsx)(Wn.$B,{hideTracksWhenNotNeeded:!0,renderTrackHorizontal:function(n){var e=n.style,t=(0,xn.Z)(n,Mt);return(0,An.jsx)(dt,(0,hn.Z)((0,hn.Z)({},t),{},{style:(0,hn.Z)({},e)}))},renderThumbHorizontal:function(n){var e=n.style,t=(0,xn.Z)(n,_t);return(0,An.jsx)(ct,(0,hn.Z)((0,hn.Z)({},t),{},{style:(0,hn.Z)({},e)}))},children:(0,An.jsxs)(tt,{children:[(0,An.jsx)(Ke,{boardId:null===a||void 0===a?void 0:a._id}),(0,An.jsxs)(ot,{type:"button",onClick:r,children:[(0,An.jsx)(rt,{children:(0,An.jsx)(it,{children:(0,An.jsx)("use",{href:"".concat(xe.Z,"#icon-plus")})})}),(0,An.jsx)("div",{children:"Add another column"})]})]})})}),t&&(0,An.jsx)(gn.u,{onClose:o,children:(0,An.jsx)(Pn,{onCloseForm:o,boardId:null===a||void 0===a?void 0:a._id})})]}):(0,An.jsx)(Qe,{})})]})}}}]);
//# sourceMappingURL=614.e3b9d98a.chunk.js.map