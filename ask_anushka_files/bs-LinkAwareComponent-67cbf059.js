define("@widget/LAYOUT/bs-LinkAwareComponent-67cbf059.js",["exports","@widget/LAYOUT/c/bs-_rollupPluginBabelHelpers","@widget/LAYOUT/c/bs-dataAids","@widget/LAYOUT/c/bs-Toggle","@widget/LAYOUT/c/bs-index2","@widget/LAYOUT/bs-FlyoutMenu-Component"],(function(e,t,i,n,o,s){"use strict";const{PUBLISH:c}=(global.Core||guac["@wsb/guac-widget-core"]).constants.renderModes;var a,d,r,l,u=(a=s.default,r=d=class extends(global.React||guac.react).Component{constructor(){super(...arguments),this.checkActiveLink=this.checkActiveLink.bind(this),this.state={isActive:!1}}componentDidMount(){this.checkActiveLink(),window.addEventListener("NavItemsResized",this.checkActiveLink,{passive:!0})}componentWillUnmount(){window.removeEventListener("NavItemsResized",this.checkActiveLink)}checkActiveLink(){const{renderMode:e,toggleId:t}=this.props;window.requestAnimationFrame((()=>{var i;let n=!1;const o=document.getElementById(t),s=o&&(o.querySelector('[data-ux="NavLinkActive"]')||o.querySelector('[data-ux="NavMoreMenuLinkActive"]')||o.querySelector('[data-ux="NavMoreMenuLinkNestedActive"]')),a=s&&s.closest("li");s&&"visible"===(null==a||null===(i=a.style)||void 0===i?void 0:i.visibility)&&(n=e===c?s.href.includes(window.location.pathname):window.location.pathname.includes(s.dataset.page)),this.setState({isActive:n})}))}render(){return(global.React||guac.react).createElement(a,t._extends({},this.props,this.state))}},t._defineProperty(d,"displayName",`WithActiveLinkDetection(${l=a,l.displayName||l.name||"Component"})`),t._defineProperty(d,"propTypes",{renderMode:(global.PropTypes||guac["prop-types"]).oneOf(Object.values((global.Core||guac["@wsb/guac-widget-core"]).constants.renderModes)),toggleId:(global.PropTypes||guac["prop-types"]).string}),r);e.default=u})),"undefined"!=typeof window&&(window.global=window);
//# sourceMappingURL=bs-LinkAwareComponent-67cbf059.js.map
