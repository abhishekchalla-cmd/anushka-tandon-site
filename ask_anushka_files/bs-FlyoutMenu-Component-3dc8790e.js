define("@widget/LAYOUT/bs-FlyoutMenu-Component-3dc8790e.js",["exports","@widget/LAYOUT/c/bs-_rollupPluginBabelHelpers","@widget/LAYOUT/c/bs-dataAids","@widget/LAYOUT/c/bs-Toggle","@widget/LAYOUT/c/bs-index2"],(function(e,t,o,p,a){"use strict";class s extends(global.React||guac.react).Component{constructor(){super(...arguments),this.handleChange=this.handleChange.bind(this),this.state={open:!1}}handleChange(){this.setState({open:!this.state.open})}componentDidUpdate(e,{open:t}){const{enableNoOverlapDropdown:o,customToggleStyles:p}=this.props;if(t!==this.state.open){const{toggleId:t}=e,a=document.getElementById(t);a&&(o&&(a.style.top=this.handleDropdownOffsetChange()+"px"),p?(global._||guac.lodash).merge(a.style,p[this.state.open?"open":"close"]):a.style.display=this.state.open?"block":"none")}}handleDropdownOffsetChange(){const{navBarId:e,parentId:t}=this.props,o=document.getElementById(e).getBoundingClientRect(),p=document.getElementById(t).getElementsByTagName("li")[0].getBoundingClientRect(),s=a.getEditorPageScale();return o&&p?(o.height-(p.top-o.top))/s:0}render(){const{label:e,renderCustomIcon:a,id:n,isActive:l,overrideIconStyle:r,dataAid:g,hasHover:i,renderCustomContent:c}=this.props,{open:d}=this.state,u=(global._||guac.lodash).omit(this.props,Object.keys(s.propTypes).concat(["Component","renderMode"])),y=d?"180":"0",b={position:"relative",color:"inherit",...r},h=e?(global.React||guac.react).createElement("span",{style:{marginRight:"4px"}},e):null;return(global.React||guac.react).createElement(p.Toggle,t._extends({onChange:this.handleChange,isActive:l},u,d&&this.props.activeProps,{"data-edit-interactive":!0,"aria-haspopup":"menu"}),c||(global.React||guac.react).createElement("div",{style:{pointerEvents:i?"auto":"none",display:"flex",alignItems:"center"},"data-aid":g||o.DataAid.NAV_DROPDOWN},h,(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Icon,{id:n,icon:a.name||"chevronDown",size:a.size||"small",minTarget:a.minTarget||!1,rotate:a.name?"":y,style:b})))}}s.propTypes={toggleId:(global.PropTypes||guac["prop-types"]).string.isRequired,activeProps:(global.PropTypes||guac["prop-types"]).object,label:(global.PropTypes||guac["prop-types"]).string.isRequired,renderCustomIcon:(global.PropTypes||guac["prop-types"]).object,renderCustomContent:(global.PropTypes||guac["prop-types"]).oneOfType([(global.PropTypes||guac["prop-types"]).bool,(global.PropTypes||guac["prop-types"]).element,(global.PropTypes||guac["prop-types"]).node]),id:(global.PropTypes||guac["prop-types"]).string,isActive:(global.PropTypes||guac["prop-types"]).bool,enableNoOverlapDropdown:(global.PropTypes||guac["prop-types"]).bool,widgetId:(global.PropTypes||guac["prop-types"]).string,overrideIconStyle:(global.PropTypes||guac["prop-types"]).object,dataAid:(global.PropTypes||guac["prop-types"]).string,hasHover:(global.PropTypes||guac["prop-types"]).bool,navBarId:(global.PropTypes||guac["prop-types"]).string,parentId:(global.PropTypes||guac["prop-types"]).string,customToggleStyles:(global.PropTypes||guac["prop-types"]).object},s.defaultProps={activeProps:{},label:"",renderCustomIcon:{},renderCustomContent:!1,hasHover:!1},e.default=s})),"undefined"!=typeof window&&(window.global=window);
