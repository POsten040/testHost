(this.webpackJsonpthebubbleroom=this.webpackJsonpthebubbleroom||[]).push([[0],{11:function(e,t,a){e.exports=a(21)},16:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),o=a.n(r);a(16);var u=function(){return l.a.createElement("div",{style:{width:"100%",size:"400",fontFamily:"spaceFont",fontSize:60,color:"yellow"}},l.a.createElement("div",{id:"space"},l.a.createElement("div",{className:"stars"}),l.a.createElement("div",{className:"stars"}),l.a.createElement("div",{className:"stars"}),l.a.createElement("div",{className:"stars"}),l.a.createElement("div",{className:"stars"}," ")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column"}," ",l.a.createElement("span",{className:"header1"}," The International")," ",l.a.createElement("span",{className:"header2"},"Pepsi Station "))))},i=a(6),s=a(7),c=a(10),d=a(9),m=a(8);function p(e){return e.soda?l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:e.formSubmissionHandler},l.a.createElement("input",{type:"text",name:"name",defaultValue:e.soda.names}),l.a.createElement("input",{type:"number",name:"slogan",defaultValue:e.soda.slogan}),l.a.createElement("input",{type:"text",name:"sugarType",defaultValue:e.soda.sugarType}),l.a.createElement("input",{type:"number",name:"price",defaultValue:e.soda.price}),l.a.createElement("input",{type:"number",name:"quantity",defaultValue:e.soda.quantity}),l.a.createElement("button",{type:"submit"},e.buttonText))):l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:e.formSubmissionHandler},l.a.createElement("input",{type:"text",name:"name",placeholder:"Name"}),l.a.createElement("input",{type:"number",name:"slogan",placeholder:"Heat Level"}),l.a.createElement("input",{type:"text",name:"sugarType",placeholder:"sugarType"}),l.a.createElement("input",{type:"number",name:"price",placeholder:"Price"}),l.a.createElement("input",{type:"number",name:"quantity",placeholder:"Quantity"}),l.a.createElement("button",{type:"submit"},e.buttonText)))}function y(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{formSubmissionHandler:function(t){t.preventDefault(),e.onNewSodaCreation({name:t.target.name.value,slogan:parseInt(t.target.slogan.value),sugarType:t.target.sugarType.value,price:parseInt(t.target.price.value),quantity:parseInt(t.target.quantity.value),moneyMade:0,id:Object(m.v4)()})},buttonText:"Add the Soda"}))}var E=a(1),S=a.n(E);function g(e){var t=null;return t="manage"===e.pageVisible?l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("button",{onClick:e.editButtonClick},e.buttonText)),l.a.createElement("p",null,l.a.createElement("button",{onClick:function(){return e.deleteButtonClick(e.soda.id)}},e.buttonText1))):l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.buyButtonClick({name:e.soda.names,slogan:e.soda.slogan,sugarType:e.soda.sugarType,price:e.soda.price,quantity:e.soda.quantity-t.target.quantity.value,moneyMade:e.soda.moneyMade+t.target.quantity.value*e.soda.price,salePrice:"+"+t.target.quantity.value*e.soda.price,id:e.soda.id}),e.buttonStateFunc(t.target.quantity.value*e.soda.price)}},"Quanity you want:",l.a.createElement("input",{type:"number",name:"quantity",placeholder:"Quanity"}),l.a.createElement("button",{type:"submit"},e.buttonText))),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"sodalist"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column"},l.a.createElement("h2",null,e.soda.names),l.a.createElement("p",null,l.a.createElement("em",null,e.soda.slogan),"  "),l.a.createElement("p",null,"Sugar Type: ",e.soda.sugarType),l.a.createElement("p",null,"Price: ",e.soda.price),l.a.createElement("p",null,"Quantity: ",e.soda.quantity),l.a.createElement("p",null,"Money Made: $",e.soda.moneyMade),e.buttonState),l.a.createElement("div",{className:"column"},t))))}g.prototypes={soda:S.a.object,buttonText:S.a.string,editButtonClick:S.a.func,deleteButtonClick:S.a.func,buttonText1:S.a.string,buyButtonClick:S.a.func,pageVisible:S.a.string,buttonStateFunc:S.a.func,buttonState:S.a.string};var b=g;var v=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{onClick:function(){return e.sodaSelected(e.id)}},l.a.createElement("h2",null,e.names),l.a.createElement("p",null,l.a.createElement("em",null,e.slogan)),l.a.createElement("p",null,"Sweetner: ",e.sugarType),l.a.createElement("p",null,"Price: $",e.price),l.a.createElement("p",null,"Quantity Available: ",e.quantity)))};var h=function(e){return l.a.createElement(l.a.Fragment,null,e.mainSodaInventory.map((function(t){return l.a.createElement(v,{sodaSelected:e.SodaSelected,name:t.names,slogan:t.slogan,sugarType:t.sugarType,price:t.price,quantity:t.quantity,id:t.id,key:t.id})})))};var f=function(e){var t=e.soda;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"sodalist"},l.a.createElement("b",null,t.names,"'s Ticket"),l.a.createElement("p",null," ",l.a.createElement("em",null,"sugarType:")," ",t.sugarType," "),l.a.createElement("li",null,"Heat Level: ",t.slogan),l.a.createElement("li",null,"Price: ",t.price),l.a.createElement("li",null,"Quantity: ",t.quantity),l.a.createElement(p,{soda:t,formSubmissionHandler:function(a){a.preventDefault(),e.onEditSoda({names:a.target.name.value,slogan:parseInt(a.target.slogan.value),sugarType:a.target.sugarType.value,price:parseInt(a.target.price.value),quantity:parseInt(a.target.quantity.value),moneyMade:t.moneyMade,id:t.id})},buttonText:"Update Soda"})))},T=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleButtonClick=function(){null!=n.state.selectedSoda?n.setState({formVisibleOnPage:!1,selectedSoda:null,editButtonPressed:!1}):n.setState((function(e){return{formVisibleOnPage:!e.formVisibleOnPage}}))},n.handleManageButtonClick=function(){n.setState({pageVisible:"manage"})},n.handleBuySoda=function(e){var t=n.state.masterSodaInventory.filter((function(e){return e.id!==n.state.selectedSoda.id})).concat(e);n.setState({masterSodaInventory:t,selectedSoda:e})},n.handleSelectedSoda=function(e){var t=n.state.masterSodaInventory.filter((function(t){return t.id===e}))[0];n.setState({selectedSoda:t})},n.handleNewSodaCreation=function(e){var t=n.state.masterSodaInventory.concat(e);n.setState({masterSodaInventory:t,formVisibleOnPage:!1})},n.handlePriceThing=function(e){n.setState({buttonState:l.a.createElement("div",{className:"saleprice"},"+$",e)})},n.handleEditSodaCreation=function(e){var t=n.state.masterSodaInventory.filter((function(e){return e.id!==n.state.selectedSoda.id})).concat(e);n.setState({masterSodaInventory:t,editButtonPressed:!1,selectedSoda:e})},n.handleEditButton=function(){n.setState({editButtonPressed:!0})},n.handleHomeButton=function(){n.setState({pageVisible:"home",selectedSoda:null,editButtonPressed:!1,formVisibleOnPage:!1})},n.handleBuyerButtonClick=function(){n.setState({pageVisible:"customer"})},n.handleDeleteButton=function(e){var t=n.state.masterSodaInventory.filter((function(t){return t.id!==e}));n.setState({formVisibleOnPage:!1,masterSodaInventory:t,selectedSoda:null})},n.state={formVisibleOnPage:!1,masterSodaInventory:[{name:"Pepsi Cola",slogan:"That's What I Like",sugarType:"Corn Syrup",price:100,quantity:100,moneyMade:0,id:1}],selectedSoda:null,editButtonPressed:!1,pageVisible:"home",buttonState:null},n}return Object(s.a)(a,[{key:"render",value:function(){var e=null,t=null;return"manage"===this.state.pageVisible?(this.state.editButtonPressed?(e=l.a.createElement(f,{onEditSoda:this.handleEditSodaCreation,soda:this.state.selectedSoda}),t="Return to Soda Inventory"):this.state.formVisibleOnPage?(e=l.a.createElement(y,{onNewSodaCreation:this.handleNewSodaCreation}),t="Return to Soda Inventory"):null!=this.state.selectedSoda?(e=l.a.createElement(b,{soda:this.state.selectedSoda,pageVisible:this.state.pageVisible,editButtonClick:this.handleEditButton,deleteButtonClick:this.handleDeleteButton,buttonText:"Edit Soda",buttonText1:"Delete Soda"}),t="Return to Soda Inventory"):(e=l.a.createElement(h,{mainSodaInventory:this.state.masterSodaInventory,SodaSelected:this.handleSelectedSoda}),t="Add Soda to Inventory"),l.a.createElement(l.a.Fragment,null,e,l.a.createElement("p",null,l.a.createElement("button",{onClick:this.handleButtonClick},t)),l.a.createElement("p",null,l.a.createElement("button",{onClick:this.handleHomeButton},"Go back Home")))):"customer"===this.state.pageVisible?(null!=this.state.selectedSoda?(e=l.a.createElement(b,{buttonState:this.state.buttonState,buttonStateFunc:this.handlePriceThing,soda:this.state.selectedSoda,buyButtonClick:this.handleBuySoda,pageVisible:this.state.pageVisible,buttonText:"Sell Soda"}),t="Return to Soda Inventory"):(e=l.a.createElement(h,{mainSodaInventory:this.state.masterSodaInventory,SodaSelected:this.handleSelectedSoda}),t="Add Soda to Inventory"),l.a.createElement(l.a.Fragment,null,e,l.a.createElement("p",null," ",l.a.createElement("button",{onClick:this.handleHomeButton},"Go back Home")))):l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Please Select ",l.a.createElement("b",null," Manage "),"Sodas or ",l.a.createElement("b",null," Sell "),"Sodas"),l.a.createElement("button",{onClick:this.handleManageButtonClick},"Manager Page"),l.a.createElement("button",{onClick:this.handleBuyerButtonClick},"Buyer Page"))}}]),a}(l.a.Component);var B=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement("h1",null,l.a.createElement(T,null)))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(B,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.a6adda7f.chunk.js.map