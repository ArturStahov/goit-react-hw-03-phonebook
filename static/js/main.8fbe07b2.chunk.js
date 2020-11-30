(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{27:function(t,n,e){},28:function(t,n,e){},34:function(t,n,e){"use strict";e.r(n);var r=e(1),a=e(0),c=e(14),o=e.n(c),i=(e(27),e(28),e(20)),u=e(4),s=e(5),l=e(8),d=e(7),p=e(15),b=e.n(p),f=e(2),h=e(3);function j(){var t=Object(f.a)(["\n  width: 100%;\n  text-align: center;\n  font-size: 1rem;\n  color: green;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-bottom: 20px;\n"]);return j=function(){return t},t}function m(){var t=Object(f.a)(["\n  padding: 20px 0px 20px;\n  max-width: 600px;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return m=function(){return t},t}var x=h.a.section(m()),O=h.a.h2(j());function v(t){var n=t.title,e=t.children;return Object(r.jsxs)(x,{children:[Object(r.jsx)(O,{children:n}),e]})}var g=e(19);function w(){var t=Object(f.a)(["\n  padding: 5px 10px;\n  max-width: 250px;\n  height: 40px;\n  background-color: green;\n  border: none;\n  border-radius: 0.5rem;\n  cursor: pointer;\n"]);return w=function(){return t},t}function y(){var t=Object(f.a)(["\n  width: 85%;\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-around;\n"]);return y=function(){return t},t}function C(){var t=Object(f.a)(["\n  max-width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]);return C=function(){return t},t}var k=h.a.form(C()),S=h.a.label(y()),F=h.a.button(w()),I=function(t){Object(l.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(u.a)(this,e);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=n.call.apply(n,[this].concat(a))).state={nameValue:"",numberValue:""},t.handlerInput=function(n){var e=n.target,r=e.name,a=e.value;t.setState(Object(g.a)({},r,a))},t.handlerFormSubmit=function(n){var e=t.state,r=e.nameValue,a=e.numberValue;n.preventDefault(),t.props.onAddContact(r,a),t.setState({nameValue:"",numberValue:""})},t}return Object(s.a)(e,[{key:"render",value:function(){return Object(r.jsxs)(k,{onSubmit:this.handlerFormSubmit,children:[Object(r.jsxs)(S,{children:["Name:",Object(r.jsx)("input",{type:"text",name:"nameValue",onChange:this.handlerInput,value:this.state.nameValue,required:!0})]}),Object(r.jsxs)(S,{children:["Phone:",Object(r.jsx)("input",{type:"text",name:"numberValue",onChange:this.handlerInput,value:this.state.numberValue,placeholder:"+3(___)___-__-__",minLength:"13",maxLength:"13",required:!0})]}),Object(r.jsx)(F,{type:"submit",children:"Add Contact"})]})}}]),e}(a.Component);function V(){var t=Object(f.a)(["\n  padding: 5px 10px;\n  max-width: 200px;\n  height: 30px;\n  background-color: goldenrod;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.8rem;\n  color: #fff;\n  text-transform: uppercase;\n  cursor: pointer;\n"]);return V=function(){return t},t}function _(){var t=Object(f.a)(["\n  &:not(:last-child) {\n    margin-right: 10px;\n  }\n"]);return _=function(){return t},t}function L(){var t=Object(f.a)(["\n  padding: 10px 10px 10px 10px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  background-color: grey;\n  border: 2px solid black;\n  border-radius: 0.5rem;\n  margin-bottom: 10px;\n  box-shadow: 10px 5px 5px grey;\n"]);return L=function(){return t},t}function D(){var t=Object(f.a)(["\n  max-width: 700px;\n  margin: 0 auto;\n"]);return D=function(){return t},t}var A=h.a.ul(D()),J=h.a.li(L()),q=h.a.p(_()),N=h.a.button(V());function z(t){var n=t.items,e=t.onDeleteContact;return Object(r.jsx)(A,{children:n.map((function(t){return Object(r.jsxs)(J,{children:[Object(r.jsxs)(q,{children:[t.name," :"]}),Object(r.jsx)(q,{children:t.number}),Object(r.jsx)(N,{type:"button",onClick:function(){return e(t.id)},children:"Delete"})]},t.id)}))})}function H(){var t=Object(f.a)(["\n  width: 50%;\n"]);return H=function(){return t},t}function P(){var t=Object(f.a)(["\n  width: 100%;\n  text-align: center;\n  margin-bottom: 5px;\n"]);return P=function(){return t},t}function B(){var t=Object(f.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return B=function(){return t},t}function M(){var t=Object(f.a)(["\n  width: 100%;\n  padding-bottom: 20px;\n"]);return M=function(){return t},t}var T=h.a.div(M()),U=h.a.label(B()),Y=h.a.p(P()),E=h.a.input(H());function G(t){var n=t.value,e=t.OnInputFilter;return Object(r.jsx)(T,{children:Object(r.jsxs)(U,{children:[Object(r.jsx)(Y,{children:"Find Contacts by name"}),Object(r.jsx)(E,{type:"text",value:n,onChange:function(t){return e(t.target.value)}})]})})}var K=e(11),Q=(e(31),e(32),e(33),e(21)),R=function(t){Object(l.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(u.a)(this,e);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=n.call.apply(n,[this].concat(a))).state={contacts:[],nameFilter:""},t.filterContactList=function(){return t.state.contacts.filter((function(n){return n.name.toLowerCase().includes(t.state.nameFilter.toLowerCase())}))},t.addContact=function(n,e){t.state.contacts.some((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))?Object(K.error)({title:"Hi!",text:"This contact is present in phone-book!",delay:3e3}):Object(Q.a)(e)?function(){var r={name:n,number:e,id:b()()};t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[r])}}))}():Object(K.error)({title:"Hi!",text:"BAD value phone-number!!! You must enter phone-number correct format",delay:3e3})},t.deleteContact=function(n){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n}))}}))},t.contactsFilterInput=function(n){t.setState({nameFilter:n})},t}return Object(s.a)(e,[{key:"componentDidMount",value:function(){localStorage.getItem("saveContacts")&&this.setState({contacts:JSON.parse(localStorage.getItem("saveContacts"))})}},{key:"componentDidUpdate",value:function(t){t.contacts!==this.state.contacts&&localStorage.setItem("saveContacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.nameFilter,n=this.filterContactList();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(v,{title:"Phone-book",children:Object(r.jsx)(I,{onAddContact:this.addContact})}),Object(r.jsxs)(v,{title:"Contacts",children:[Object(r.jsx)(G,{value:t,OnInputFilter:this.contactsFilterInput}),Object(r.jsx)(z,{items:n,onDeleteContact:this.deleteContact})]})]})}}]),e}(a.Component);o.a.render(Object(r.jsx)(R,{}),document.querySelector("#root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.8fbe07b2.chunk.js.map