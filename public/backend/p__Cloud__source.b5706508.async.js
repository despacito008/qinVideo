(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"h+Qs":function(e,t,a){"use strict";a.r(t);a("IzEo");var o,n,r,c=a("bx4M"),l=(a("g9YV"),a("wCAj")),i=(a("14J3"),a("BMrR")),s=(a("jCWc"),a("kPKH")),d=(a("+L6B"),a("2/Rp")),u=(a("/zsF"),a("PArb")),m=(a("miYZ"),a("tsqr")),p=(a("2qtc"),a("kLXV")),f=a("p0pE"),y=a.n(f),h=a("2Taf"),g=a.n(h),b=a("vZ4D"),O=a.n(b),M=a("l4Ni"),j=a.n(M),w=a("ujKo"),E=a.n(w),v=a("rlhR"),C=a.n(v),k=a("MhPg"),x=a.n(k),R=(a("5NDa"),a("5rEg")),T=a("q1tI"),S=a.n(T),I=a("MuoO"),q=a("LLXN"),V=(a("7Kak"),a("9yH6")),D=(a("giR+"),a("fyUT")),K=(a("y8nQ"),a("Vl3Y")),A=a("jehZ"),P=a.n(A),z=(a("OaEy"),a("2fM7")),B=z["a"].Option,N=function(e){function t(){var e,a;g()(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return a=j()(this,(e=E()(t)).call.apply(e,[this].concat(n))),a.state={show:!1,data:{}},a.handleSubmit=function(){var e=a.state.data,t=a.props,o=t.form,n=t.submit;o.validateFields(function(t,a){t||n(y()({},e,a))})},a.handleCancel=function(){a.setState({show:!1,data:{}})},a.modalShow=function(e){var t=e.showType,o=e.data;console.log(o),a.setState({show:!0,data:y()({showType:t},o)})},a}return x()(t,e),O()(t,[{key:"render",value:function(){var e=this.state,t=e.show,a=e.data,o=this.props.form.getFieldDecorator,n={labelCol:{span:4},wrapperCol:{span:18}};return S.a.createElement(p["a"],{title:Object(q["formatMessage"])({id:"cloud.source.modal.add"}),visible:t,maskClosable:!1,forceRender:"true",onOk:this.handleSubmit,onCancel:this.handleCancel,destroyOnClose:!0},S.a.createElement(K["a"],null,S.a.createElement(K["a"].Item,P()({},n,{label:Object(q["formatMessage"])({id:"cloud.source.source"})}),o("source",{initialValue:a.source||void 0})(S.a.createElement(R["a"],{placeholder:Object(q["formatMessage"])({id:"common.select"})}))),S.a.createElement(K["a"].Item,P()({},n,{label:Object(q["formatMessage"])({id:"cloud.source.api"})}),o("api",{initialValue:a.api||void 0})(S.a.createElement(R["a"],{placeholder:Object(q["formatMessage"])({id:"common.select"})}))),S.a.createElement(K["a"].Item,P()({},n,{label:Object(q["formatMessage"])({id:"cloud.source.slugPrefix"})}),o("slugPrefix",{initialValue:a.slugPrefix||""})(S.a.createElement(R["a"],{placeholder:Object(q["formatMessage"])({id:"common.select"})}))),S.a.createElement(K["a"].Item,P()({},n,{label:Object(q["formatMessage"])({id:"cloud.source.cat"})}),o("cat",{initialValue:a.cat||("new"===a.showType?4:void 0)})(S.a.createElement(D["a"],null))),S.a.createElement(K["a"].Item,P()({},n,{label:Object(q["formatMessage"])({id:"cloud.source.update"}),extra:Object(q["formatMessage"])({id:"cloud.source.update.extra"})}),o("update",{initialValue:a.update||"new"!==a.showType&&"one"!==a.showType&&void 0})(S.a.createElement(V["a"].Group,null,S.a.createElement(V["a"],{value:!0},Object(q["formatMessage"])({id:"cloud.source.update.true"})),S.a.createElement(V["a"],{value:!1},Object(q["formatMessage"])({id:"cloud.source.update.false"}))))),S.a.createElement(K["a"].Item,P()({},n,{label:Object(q["formatMessage"])({id:"cloud.source.type"})}),o("type",{initialValue:a.type||("new"===a.showType?"Animate":void 0)})(S.a.createElement(z["a"],{placeholder:Object(q["formatMessage"])({id:"animate.tips.fill.status"})},S.a.createElement(B,{value:"Animate"},Object(q["formatMessage"])({id:"cloud.list.type.Animate"})),S.a.createElement(B,{value:"Comic"},Object(q["formatMessage"])({id:"cloud.list.type.Comic"}))))),S.a.createElement(K["a"].Item,P()({},n,{label:Object(q["formatMessage"])({id:"cloud.source.mode"})}),o("mode",{initialValue:a.mode||("new"===a.showType?"maccms":void 0)})(S.a.createElement(z["a"],{placeholder:Object(q["formatMessage"])({id:"animate.tips.fill.status"})},S.a.createElement(B,{value:"maccms"},Object(q["formatMessage"])({id:"cloud.source.mode.maccms"})))))))}}]),t}(T["PureComponent"]),L=K["a"].create()(N),F=a("ZeOv"),Z=R["a"].Search,J=(o=Object(I["connect"])(function(e){var t=e.cloud,a=e.loading;return{cloud:t,loading:a.effects["cloud/querySource"]}}),o((r=function(e){function t(e){var a;g()(this,t),a=j()(this,E()(t).call(this,e)),a.editRef=S.a.createRef(null),a.submit=function(e){var t=a.props.dispatch,o=a.state.selectedRowKeys,n=e.showType;if("many"===n||"all"===n||"one"===n){var r="one"===n?[e.id]:"all"===n?[]:o;t({type:"cloud/putSourceBatch",payload:{data:y()({},e,{ids:r}),remove:"all"===n||"many"===n}}).then(function(e){e&&a.editRef.handleCancel(),a.initData()})}else t({type:"cloud/postSource",payload:{data:y()({},e)}}).then(function(e){e&&a.editRef.handleCancel(),a.initData()})},a.editNew=function(){a.edit({showType:"new",data:{}})},a.editOne=function(e){a.edit({showType:"one",data:e})},a.editMany=function(){a.edit({showType:"many"})},a.editAll=function(){a.edit({showType:"all"})},a.edit=function(e){var t=e.showType,o=e.data;a.editRef.modalShow({showType:t,data:o})},a.deleteMany=function(){var e=a.state.selectedRowKeys;a.destroy(e)},a.deleteAll=function(){a.destroy([])},a.deleteOne=function(e){return function(){a.destroy([e])}},a.destroy=function(e){var t=a.props.dispatch;p["a"].confirm({title:Object(q["formatMessage"])({id:"cloud.source.delete.title"}),content:Object(q["formatMessage"])({id:"common.delete.tips"}),okText:Object(q["formatMessage"])({id:"common.confirm"}),cancelText:Object(q["formatMessage"])({id:"common.cancel"}),onOk:function(){return t({type:"cloud/deleteSourceBatch",payload:{data:{ids:e}}}).then(function(e){e&&(a.initData(),a.setState({selectedRowKeys:[]}))})}})},a.onSearchVideo=function(e){a.query.title=e,a.query.page=1,a.initData()},a.onChangeTable=function(e,t,o){var n,r,c=e.current,l=e.pageSize,i=t.type?t.type[0]:null,s=t.update?t.update[0]:null;o.order&&(n="descend"===o.order?-1:1,r=o.field),a.query=y()({},a.query,{size:l,page:c,sortBy:r,sortOrder:n,type:i,update:s}),a.initData()},a.initData=function(){var e=C()(a),t=e.query,o=a.props.dispatch;o({type:"cloud/querySource",payload:{query:t}});var n=a.props,r=n.location.pathname,c=n.history;c.push({pathname:r,state:a.query})},a.upload=function(e,t){var o=a.props.dispatch;m["a"].info(Object(q["formatMessage"])({id:"cloud.source.import.start"})),o({type:"cloud/sourceImport",payload:{data:{source:e,type:t}}}).then(function(e){e&&(m["a"].destroy(),m["a"].success(Object(q["formatMessage"])({id:"cloud.history.import.start"})))})};var o=e.location.state,n=void 0===o?{}:o;return a.state={selectedRowKeys:[]},a.query={title:n.title,size:n.size?n.size:10,page:n.page?n.page:1,sortBy:n.sortBy,sortOrder:n.sortOrder,type:n.type},a}return x()(t,e),O()(t,[{key:"componentDidMount",value:function(){this.initData()}},{key:"render",value:function(){var e=this,t=this.state.selectedRowKeys,a=this.props,o=a.cloud,n=o.sourceList,r=o.sourceTotal,m=a.loading,p=[{title:Object(q["formatMessage"])({id:"cloud.source.source"}),dataIndex:"source",align:"center",sorter:!0},{title:Object(q["formatMessage"])({id:"cloud.source.api"}),dataIndex:"api",align:"center",sorter:!0},{title:Object(q["formatMessage"])({id:"cloud.source.cat"}),dataIndex:"cat",align:"center",sorter:!0},{title:Object(q["formatMessage"])({id:"cloud.source.slugPrefix"}),dataIndex:"slugPrefix",align:"center",sorter:!0},{title:Object(q["formatMessage"])({id:"cloud.source.update"}),dataIndex:"update",align:"center",filters:Object.values(F["g"]),filterMultiple:!1,render:function(e){return Object(q["formatMessage"])({id:"cloud.source.update.".concat(e)})}},{title:Object(q["formatMessage"])({id:"cloud.source.mode"}),dataIndex:"mode",align:"center",render:function(e){return Object(q["formatMessage"])({id:"cloud.source.mode.".concat(e)})}},{title:Object(q["formatMessage"])({id:"cloud.list.type"}),dataIndex:"type",align:"center",filters:Object.values(F["e"]),filterMultiple:!1,render:function(e){return Object(q["formatMessage"])({id:"cloud.list.type.".concat(e)})}},{title:Object(q["formatMessage"])({id:"cloud.list.option.import"}),key:"action",dataIndex:"_id",align:"center",render:function(t){return S.a.createElement(S.a.Fragment,null,S.a.createElement("a",{style:{marginRight:"15px"},onClick:e.upload.bind(e,t,"day")},Object(q["formatMessage"])({id:"cloud.source.import.today"})),S.a.createElement("a",{style:{marginRight:"15px"},onClick:e.upload.bind(e,t,"week")},Object(q["formatMessage"])({id:"cloud.source.import.week"})),S.a.createElement("a",{style:{marginRight:"15px"},onClick:e.upload.bind(e,t,"all")},Object(q["formatMessage"])({id:"cloud.source.import.all"})))}},{title:Object(q["formatMessage"])({id:"shop.option"}),key:"action",dataIndex:"_id",align:"center",render:function(t,a){return S.a.createElement("span",null,S.a.createElement("a",{onClick:function(){return e.editOne(a)}},Object(q["formatMessage"])({id:"animate.option.full.edit"})),S.a.createElement(u["a"],{type:"vertical"}),S.a.createElement("a",{onClick:e.deleteOne(t)},Object(q["formatMessage"])({id:"animate.option.full.delete"})))}}],f={selectedRowKeys:t,onChange:function(t){e.setState({selectedRowKeys:t})}},y=Object(F["h"])(this.query.page,this.query.size,r);return S.a.createElement(c["a"],{className:"tableList",bordered:!1},S.a.createElement(i["a"],{className:"head"},S.a.createElement(s["a"],{span:16},S.a.createElement(d["a"],{icon:"plus",type:"primary",onClick:this.editNew},Object(q["formatMessage"])({id:"common.add.new"})),t.length>0&&S.a.createElement(F["b"],{edit:this.editMany,delete:this.deleteMany}),S.a.createElement(F["a"],{edit:this.editAll,delete:this.deleteAll})),S.a.createElement(s["a"],{span:8},S.a.createElement(Z,{placeholder:Object(q["formatMessage"])({id:"shop.search"}),onSearch:this.onSearchVideo,enterButton:!0}))),S.a.createElement(i["a"],null,S.a.createElement(l["a"],{loading:m,rowKey:"_id",rowSelection:f,columns:p,onChange:this.onChangeTable,dataSource:n,pagination:y})),S.a.createElement(L,{submit:this.submit,wrappedComponentRef:function(t){return e.editRef=t}}))}}]),t}(T["Component"]),n=r))||n);t["default"]=J}}]);